// BuildBot entrypoint: copies LAUNCH.json from the repo root to /output.
// Node standard library only; no network, no wall clock, no files outside
// the repository. Prints nothing on success.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "LAUNCH.json"), join(outDir, "LAUNCH.json"));
