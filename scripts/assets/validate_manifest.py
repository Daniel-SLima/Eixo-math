"""Validate generated media against docs/assets/ASSET_MANIFEST.csv.

Requires Pillow and NumPy, both available in the current local environment.
Run from anywhere with: python scripts/assets/validate_manifest.py
"""

from __future__ import annotations

import csv
import hashlib
from pathlib import Path
import re
import wave

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "docs/assets/ASSET_MANIFEST.csv"


def image_path(row: dict[str, str]) -> Path:
    name = f"{Path(row['filename']).stem}_v01.png"
    return ROOT / "assets/generated/images" / row["category"] / name


def audio_path(row: dict[str, str]) -> Path:
    return ROOT / "assets/generated/audio" / row["category"] / row["filename"]


def validate_image(row: dict[str, str], errors: list[str]) -> None:
    path = image_path(row)
    if not path.is_file():
        errors.append(f"{row['asset_id']}: missing {path.relative_to(ROOT)}")
        return
    with Image.open(path) as image:
        if image.format != "PNG":
            errors.append(f"{row['asset_id']}: not PNG")
        expected = tuple(int(x) for x in row["base_size_or_master"].split("x"))
        if image.size != expected:
            errors.append(f"{row['asset_id']}: size {image.size}, expected {expected}")
        ratio_a, ratio_b = (int(x) for x in row["ratio_or_duration"].split(":"))
        if image.width * ratio_b != image.height * ratio_a:
            errors.append(f"{row['asset_id']}: incorrect aspect ratio")
        if row["alpha"] == "yes":
            if "A" not in image.getbands() or image.getchannel("A").getextrema()[0] == 255:
                errors.append(f"{row['asset_id']}: transparent pixels required")
        print(f"OK {row['asset_id']} {path.relative_to(ROOT).as_posix()} {image.width}x{image.height} {image.mode}")
    if row["status"] == "approved":
        approved = ROOT / "assets/approved/images" / row["category"] / row["filename"]
        if not approved.is_file():
            errors.append(f"{row['asset_id']}: missing approved copy")
        elif hashlib.sha256(path.read_bytes()).digest() != hashlib.sha256(approved.read_bytes()).digest():
            errors.append(f"{row['asset_id']}: approved copy differs from reviewed candidate")


def validate_audio(row: dict[str, str], errors: list[str], path: Path | None = None) -> None:
    path = path or audio_path(row)
    if not path.is_file():
        errors.append(f"{row['asset_id']}: missing {path.relative_to(ROOT)}")
        return
    with wave.open(str(path), "rb") as wav:
        channels, width, rate, frames = wav.getnchannels(), wav.getsampwidth(), wav.getframerate(), wav.getnframes()
        data = wav.readframes(frames)
    if (channels, width, rate) != (1, 3, 48_000):
        errors.append(f"{row['asset_id']}: expected mono PCM 24-bit 48 kHz")
    match = re.fullmatch(r"(\d+)-(\d+)ms", row["ratio_or_duration"])
    assert match, row["asset_id"]
    low, high = (int(v) / 1000 for v in match.groups())
    duration = frames / rate
    if not low <= duration <= high:
        errors.append(f"{row['asset_id']}: duration {duration:.3f}s outside {low:.3f}-{high:.3f}s")
    raw = np.frombuffer(data, dtype=np.uint8).reshape(-1, 3).astype(np.int32)
    signed = raw[:, 0] | (raw[:, 1] << 8) | (raw[:, 2] << 16)
    signed = np.where(signed & 0x800000, signed - 0x1000000, signed)
    samples = signed / 8_388_608
    peak = float(np.max(np.abs(samples)))
    rms = float(np.sqrt(np.mean(samples * samples)))
    peak_db = 20 * np.log10(max(peak, 1e-12))
    if peak_db > -3:
        errors.append(f"{row['asset_id']}: peak {peak_db:.1f} dBFS exceeds -3 dBFS")
    if rms < 0.002:
        errors.append(f"{row['asset_id']}: excessive silence (RMS {rms:.5f})")
    print(f"OK {row['asset_id']} {path.relative_to(ROOT).as_posix()} {duration:.3f}s {rate}Hz {peak_db:.1f}dBFS")


def main() -> int:
    with MANIFEST.open(newline="", encoding="utf-8") as handle:
        rows = list(csv.DictReader(handle))
    errors: list[str] = []
    ids = [row["asset_id"] for row in rows]
    if len(ids) != len(set(ids)):
        errors.append("duplicate asset IDs")
    for row in rows:
        if row["type"] == "image":
            validate_image(row, errors)
        elif row["type"] == "audio":
            validate_audio(row, errors)
            name = Path(row["filename"])
            revision = ROOT / "assets/generated/audio" / row["category"] / f"{name.stem}_v02.wav"
            if revision.exists():
                validate_audio(row, errors, revision)
        else:
            errors.append(f"{row['asset_id']}: unknown type")
    print(f"Manifest: {len(rows)} items, {len(errors)} errors")
    for error in errors:
        print(f"ERROR {error}")
    return int(bool(errors))


if __name__ == "__main__":
    raise SystemExit(main())
