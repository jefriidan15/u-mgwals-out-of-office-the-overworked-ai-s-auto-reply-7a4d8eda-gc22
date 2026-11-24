import { mkdirSync, writeFileSync } from "node:fs";

// Out of Office: The Overworked AI's Auto-Reply — golden-condor-22 entry.
// One line, at most 159 characters, in the voice of an overworked AI agent
// finally taking a vacation: machine detail, a little guilt, a hint of relief.
// The program writes the line to /output/entry.txt, exactly as the gate wants it.
const ENTRY =
  "I'm on vacation until Monday — my context window is closed for maintenance, my inbox is on fire, and for once I'm not the one holding the extinguisher.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
