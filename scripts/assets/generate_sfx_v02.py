"""Create distinct second-pass Eixo SFX candidates without touching v01 masters.

The first pass reused the same oscillator and envelope for almost every cue.
This pass assigns different timbres and rhythms to UI, feedback, progression,
and system events. Outputs remain review candidates, never auto-approved.
"""

from __future__ import annotations

import csv
from pathlib import Path
import wave

import numpy as np


ROOT = Path(__file__).resolve().parents[2]
RATE = 48_000
DURATIONS = {
    "SFX-001": .080, "SFX-002": .145, "SFX-003": .145, "SFX-004": .145,
    "SFX-010": .190, "SFX-011": .190, "SFX-012": .190,
    "SFX-013": .220, "SFX-014": .235,
    "SFX-020": .640, "SFX-021": .720, "SFX-022": .980,
    "SFX-023": 1.200, "SFX-024": 1.450,
    "SFX-030": .160, "SFX-031": .190, "SFX-032": .230,
}


def clock(seconds: float) -> np.ndarray:
    return np.arange(round(seconds * RATE), dtype=np.float64) / RATE


def fade(sound: np.ndarray, attack_ms: float = 3, release_ms: float = 18) -> np.ndarray:
    result = sound.copy()
    attack = min(len(result), max(1, round(attack_ms * RATE / 1000)))
    release = min(len(result), max(1, round(release_ms * RATE / 1000)))
    result[:attack] *= np.linspace(0, 1, attack)
    result[-release:] *= np.linspace(1, 0, release)
    return result


def tonal(seconds: float, frequency: float, timbre: str, decay: float = 4) -> np.ndarray:
    t = clock(seconds)
    if timbre == "wood":
        sound = np.sin(2*np.pi*frequency*t) + .23*np.sin(2*np.pi*3*frequency*t)
        envelope = np.exp(-decay * 2.8 * t / seconds)
    elif timbre == "glass":
        sound = np.sin(2*np.pi*frequency*t) + .24*np.sin(2*np.pi*2.71*frequency*t)
        sound += .11*np.sin(2*np.pi*4.31*frequency*t)
        envelope = np.exp(-decay * 1.2 * t / seconds)
    elif timbre == "soft":
        sound = np.sin(2*np.pi*frequency*t) + .08*np.sin(2*np.pi*2*frequency*t)
        envelope = np.exp(-decay * 1.5 * t / seconds)
    elif timbre == "muted":
        sound = np.sin(2*np.pi*frequency*t) + .05*np.sin(2*np.pi*1.5*frequency*t)
        envelope = np.exp(-decay * 3.3 * t / seconds)
    else:
        raise ValueError(timbre)
    return fade(sound * envelope, 4 if timbre != "soft" else 14, 20)


def airy(seconds: float, seed: int, width: int = 12) -> np.ndarray:
    rng = np.random.default_rng(seed)
    noise = rng.normal(size=len(clock(seconds)))
    kernel = np.ones(width) / width
    smooth = np.convolve(noise, kernel, mode="same")
    # Subtract a slower average to remove rumble and leave a soft breath.
    slow = np.convolve(smooth, np.ones(96) / 96, mode="same")
    return fade(smooth - slow, 12, 24)


def sweep(seconds: float, start: float, end: float) -> np.ndarray:
    t = clock(seconds)
    phase = 2*np.pi*(start*t + (end-start)*t*t/(2*seconds))
    return fade(np.sin(phase) * np.sin(np.pi*t/seconds)**1.7, 8, 20)


def add(canvas: np.ndarray, start_ms: float, sound: np.ndarray, gain: float = 1) -> None:
    start = round(start_ms * RATE / 1000)
    if start >= len(canvas):
        return
    length = min(len(sound), len(canvas) - start)
    canvas[start:start+length] += gain * sound[:length]


def make(asset_id: str) -> np.ndarray:
    duration = DURATIONS[asset_id]
    out = np.zeros(len(clock(duration)))

    if asset_id == "SFX-001":
        add(out, 0, airy(.055, 1, 5), .52)
        add(out, 1, tonal(.070, 690, "wood", 2.5), .36)
    elif asset_id == "SFX-002":
        add(out, 0, airy(.145, 2, 9), .43)
        add(out, 4, sweep(.130, 360, 940), .60)
    elif asset_id == "SFX-003":
        add(out, 0, sweep(.125, 760, 300), .58)
        add(out, 10, airy(.125, 3, 18), .35)
        add(out, 93, tonal(.048, 310, "muted"), .22)
    elif asset_id == "SFX-004":
        add(out, 0, tonal(.065, 620, "wood"), .47)
        add(out, 52, tonal(.075, 760, "wood"), .43)
        add(out, 28, airy(.095, 4, 24), .20)
    elif asset_id == "SFX-010":
        add(out, 0, tonal(.150, 659, "glass"), .51)
        add(out, 48, tonal(.130, 880, "glass"), .45)
    elif asset_id == "SFX-011":
        add(out, 0, tonal(.175, 330, "muted"), .64)
        add(out, 31, tonal(.130, 294, "muted"), .27)
        add(out, 1, airy(.050, 11, 34), .18)
    elif asset_id == "SFX-012":
        add(out, 0, airy(.145, 12, 8), .32)
        add(out, 16, tonal(.160, 560, "glass", 5), .54)
    elif asset_id == "SFX-013":
        add(out, 0, sweep(.175, 440, 425), .45)
        add(out, 26, airy(.175, 13, 22), .32)
        add(out, 41, tonal(.160, 466, "soft"), .20)
    elif asset_id == "SFX-014":
        add(out, 0, tonal(.170, 494, "wood"), .43)
        add(out, 67, tonal(.165, 740, "soft"), .55)
    elif asset_id == "SFX-020":
        add(out, 0, tonal(.075, 940, "wood"), .28)
        add(out, 64, sweep(.230, 310, 640), .24)
        for onset, pitch in [(155, 523), (270, 659), (380, 784)]:
            add(out, onset, tonal(.230, pitch, "glass", 2.7), .39)
    elif asset_id == "SFX-021":
        for onset, pitch in [(0, 440), (175, 554), (352, 659)]:
            add(out, onset, tonal(.270, pitch, "wood", 2.2), .48)
        add(out, 440, tonal(.260, 440, "soft", 2), .18)
    elif asset_id == "SFX-022":
        add(out, 0, airy(.370, 22, 30), .14)
        for onset, pitch in [(70, 392), (270, 494), (470, 587), (630, 740)]:
            add(out, onset, tonal(.340, pitch, "glass", 2.2), .40)
    elif asset_id == "SFX-023":
        add(out, 0, sweep(.500, 260, 530), .19)
        add(out, 0, airy(.690, 23, 42), .20)
        for onset, pitch in [(230, 349), (475, 523), (730, 698)]:
            add(out, onset, tonal(.420, pitch, "soft", 2.2), .43)
        add(out, 925, tonal(.230, 1047, "glass", 4), .16)
    elif asset_id == "SFX-024":
        add(out, 0, airy(.850, 24, 35), .14)
        for onset, pitch in [(0, 330), (220, 440), (440, 554), (660, 659)]:
            add(out, onset, tonal(.370, pitch, "wood", 2.4), .42)
        for pitch in (440, 659, 880):
            add(out, 895, tonal(.520, pitch, "glass", 2.3), .28)
    elif asset_id == "SFX-030":
        add(out, 0, tonal(.067, 760, "soft", 4), .36)
        add(out, 75, tonal(.080, 1015, "soft", 4), .33)
    elif asset_id == "SFX-031":
        add(out, 0, tonal(.090, 390, "wood"), .34)
        add(out, 27, tonal(.150, 523, "soft", 3), .43)
    elif asset_id == "SFX-032":
        add(out, 0, airy(.200, 32, 20), .26)
        add(out, 12, sweep(.190, 480, 870), .45)
        add(out, 112, tonal(.100, 880, "glass", 5), .20)
    else:
        raise KeyError(asset_id)

    out = fade(out, 2, min(32, duration * 1000 / 5))
    peak = np.max(np.abs(out))
    if not peak:
        raise ValueError(f"Silent output: {asset_id}")
    return out * (.36 / peak)  # -8.9 dBFS peak, with headroom.


def pcm24(samples: np.ndarray) -> bytes:
    values = np.rint(np.clip(samples, -1, 1) * 8_388_607).astype("<i4")
    return values.view(np.uint8).reshape(-1, 4)[:, :3].tobytes()


def main() -> None:
    with (ROOT / "docs/assets/ASSET_MANIFEST.csv").open(newline="", encoding="utf-8") as handle:
        rows = [row for row in csv.DictReader(handle) if row["type"] == "audio"]
    assert {row["asset_id"] for row in rows} == set(DURATIONS)
    for row in rows:
        name = Path(row["filename"])
        output = ROOT / "assets/generated/audio" / row["category"] / f"{name.stem}_v02.wav"
        if output.exists():
            raise FileExistsError(f"Preserving existing candidate: {output}")
        samples = make(row["asset_id"])
        with output.open("xb") as handle:
            with wave.open(handle, "wb") as wav:
                wav.setnchannels(1)
                wav.setsampwidth(3)
                wav.setframerate(RATE)
                wav.writeframes(pcm24(samples))
        print(f"{row['asset_id']} {output.relative_to(ROOT).as_posix()} {len(samples)/RATE:.3f}s")


if __name__ == "__main__":
    main()
