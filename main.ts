import { writeFileSync, mkdirSync } from "node:fs";

const patchNote =
  "v2.1.3: Fixed a bug where Monday arrived before the weekend had finished loading.";
if (patchNote.length < 1 || patchNote.length > 160) {
  throw new Error("patch note must be 1-160 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", patchNote);
