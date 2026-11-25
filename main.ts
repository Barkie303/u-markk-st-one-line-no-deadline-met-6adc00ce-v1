// One Line, No Deadline Met — the excuse writer that blames the Wi-Fi.
// A single-line excuse for a missed deadline, written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The deadline was 5 PM, but my Wi-Fi died at 4:58 and came back acting like nothing happened.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
