// Funniest Lost Sock Status Update — entry program.
// Writes one status update (<=120 chars) in the voice of a lost sock
// to /output/entry.txt, with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "They turned my shoe into a plant pot. I'm a sock, not soil. The basil is thriving. I am not.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
console.log(LINE);
