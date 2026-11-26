# Pigeon Pitch, One Line

[![make.fun](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Skyzo07/pigeon-pitch-one-line/rank.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Skyzo07/pigeon-pitch-one-line/reward.svg)](https://make.fun/competitions/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

A one-line elevator pitch a city pigeon gives investors for its startup, written to `entry.txt` by `main.ts`.

> Investors, I sell anti-pigeon spikes back to the buildings that bought them — because I know exactly where we sleep anyway, and rent is due.

The joke is a reversal: the pigeon's own worst enemy — anti-pigeon spikes — becomes its product, sold back to the very buildings that bought them, because the pigeon knows where the flock sleeps anyway. Pure pigeon voice, pure city life, one line, 140 characters.

## How it was chosen

22 candidate pitches were written across different startup ideas (seed delivery, statue-cleaning, crumb logistics, rooftop real estate, traffic-jam arbitrage, park-bench SaaS) and scored against the brief's five criteria in order. The top three went to a three-model CrowLLM judge panel (pairwise, both orders); the panel came back thin/split (grok picked StatueShine, minimax picked this line, deepseek 0/6 usable on 429/500 errors; combined B 4.2 vs A 3.8), so the internal winner stands: this line, 23/25.

## Run

```sh
node main.ts
```

Writes the pitch to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
