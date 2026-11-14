import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const requiredFiles = [
  "README.md",
  "AGENTS.md",
  "CLAUDE.md",
  ".env.example",
  "docs/OPERATING_MODEL.md",
  "docs/DEPLOYMENT.md",
  "docs/SECRETS.md",
  "templates/experiment/project.yaml",
  "templates/experiment/experiment/manifest.json",
];

const secretPatterns = [
  /sk-[A-Za-z0-9_-]{20,}/,
  /gh[opsu]_[A-Za-z0-9]{20,}/,
  /xox[baprs]-[A-Za-z0-9-]{20,}/,
];

for (const file of requiredFiles) {
  const contents = await readFile(resolve(file), "utf8");
  for (const pattern of secretPatterns) {
    if (pattern.test(contents)) throw new Error(`Possible credential in ${file}`);
  }
}

console.log(`Validated ${requiredFiles.length} control-plane contracts.`);
