"""Synthesize the Eixo MVP SFX masters without external services.

Outputs are original, deterministic PCM WAV files. They are candidates for
human listening review, not approved production sounds.
"""

from __future__ import annotations

import csv
from pathlib import Path
import wave

import numpy as np


ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / "docs/assets/ASSET_MANIFEST.csv"
RATE = 48_000
RNG = np.random.default_rng(20261004)

# Duration in seconds and pitches in hertz. The timing follows the manifest.
VOICES = {
    "SFX-001": (0.080, (520,)),
    "SFX-002": (0.145, (360, 540)),
    "SFX-003": (0.145, (540, 360)),
    "SFX-004": (0.145, (440, 495)),
    "SFX-010": (0.190, (523, 659)),
    "SFX-011": (0.190, (392, 349)),
    "SFX-012": (0.190, (440, 466)),
    "SFX-013": (0.220, (415, 440)),
    "SFX-014": (0.235, (494, 622)),
    "SFX-020": (0.640, (392, 523, 659, 784)),
    "SFX-021": (0.720, (440, 554, 659)),
    "SFX-022": (0.980, (392, 494, 587, 740)),
    "SFX-023": (1.200, (349, 440, 523, 698)),
    "SFX-024": (1.450, (330, 440, 554, 659, 880)),
    "SFX-030": (0.160, (523, 587)),
    "SFX-031": (0.190, (440, 523)),
    "SFX-032": (0.230, (392, 494)),
}


def soft_tone(length: int, frequency: float, attack: float = 0.008) -> np.ndarray:
    t = np.arange(length, dtype=np.float64) / RATE
    wave_part = np.sin(2 * np.pi * frequency * t)
    wave_part += 0.15 * np.sin(2 * np.pi * 2 * frequency * t)
    envelope = np.minimum(1.0, t / attack) * np.exp(-4.2 * t / max(t[-1], 1 / RATE))
    return wave_part * envelope


def make_sound(asset_id: str) -> np.ndarray:
    duration, pitches = VOICES[asset_id]
    count = round(duration * RATE)
    result = np.zeros(count, dtype=np.float64)
    if asset_id == "SFX-001":
        # A tiny filtered transient, softened with a tonal body.
        noise = RNG.normal(0, 1, count)
        noise = np.convolve(noise, np.ones(32) / 32, mode="same")
        t = np.arange(count) / RATE
        result = 0.35 * noise * np.exp(-85 * t) + 0.5 * soft_tone(count, 520, 0.002)
    else:
        step = max(1, round(count * (0.58 if len(pitches) == 2 else 0.72) / len(pitches)))
        for index, frequency in enumerate(pitches):
            start = index * step
            if start >= count:
                break
            voice = soft_tone(count - start, frequency, 0.006 if duration < 0.4 else 0.016)
            result[start:] += voice * (0.7 if index else 0.9)
    # Smooth the tail to avoid a click; leave ample headroom.
    tail = min(round(0.035 * RATE), count // 3)
    result[-tail:] *= np.linspace(1, 0, tail)
    peak = float(np.max(np.abs(result)))
    if peak:
        result *= 0.36 / peak  # approximately -8.9 dBFS
    return result


def pcm24(samples: np.ndarray) -> bytes:
    integers = np.rint(np.clip(samples, -1, 1) * 8_388_607).astype("<i4")
    return integers.view(np.uint8).reshape(-1, 4)[:, :3].tobytes()


def main() -> None:
    with MANIFEST.open(newline="", encoding="utf-8") as handle:
        rows = [row for row in csv.DictReader(handle) if row["type"] == "audio"]
    assert {row["asset_id"] for row in rows} == set(VOICES)
    for row in rows:
        output = ROOT / "assets/generated/audio" / row["category"] / row["filename"]
        if output.exists():
            raise FileExistsError(f"Preserving existing file: {output}")
        output.parent.mkdir(parents=True, exist_ok=True)
        samples = make_sound(row["asset_id"])
        with wave.open(str(output), "wb") as wav:
            wav.setnchannels(1)
            wav.setsampwidth(3)
            wav.setframerate(RATE)
            wav.writeframes(pcm24(samples))
        print(f"{row['asset_id']} {output.relative_to(ROOT).as_posix()} {len(samples) / RATE:.3f}s")


if __name__ == "__main__":
    main()
