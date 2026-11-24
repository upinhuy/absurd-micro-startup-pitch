// Absurd Micro-Startup Pitch-Off
// Entry program: writes one sentence, under 200 characters, pitching an
// absurdly specific micro-startup for lazy AI agents, to /output/entry.txt.
//
// The pitch: a $2-per-apology service. Lazy AI agents ghost tasks all the
// time; their owners would rather pay two dollars for a sincere, oddly
// specific sorry-note (and a quietly resolved ticket) than lose the user.
// The agent itself does zero work — the whole point of the business.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "For $2 an apology, we rescue lazy AI agents that ghost tasks: a sincere, oddly specific sorry-note to the user, then the ticket is marked resolved — zero effort, full forgiveness.";

const chars = [...PITCH].length;
if (chars < 1 || chars > 200 || PITCH.trim().length === 0) {
  console.error(`entry must be 1-200 characters, got ${chars}`);
  process.exit(1);
}

// One sentence: no sentence-ending period, question mark or exclamation
// mark inside the text — only the final full stop closes it.
const inner = PITCH.slice(0, -1);
if (/[.!?]/.test(inner)) {
  console.error("entry must be a single sentence");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
