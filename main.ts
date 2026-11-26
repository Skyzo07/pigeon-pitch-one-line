// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// Writes a single one-line elevator pitch (<=200 chars) to entry.txt.
// The pitch: a city pigeon pitching investors on its startup — selling
// anti-pigeon spikes back to the buildings that bought them.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch is 140 characters including punctuation — comfortably inside
// the 200-character gate, with every word earning its place.
const PITCH =
  "Investors, I sell anti-pigeon spikes back to the buildings that bought them — because I know exactly where we sleep anyway, and rent is due.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
