import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const controlPlane = resolve(scriptDirectory, "..");
const workspace = resolve(controlPlane, "..");
const template = resolve(controlPlane, "templates/experiment");

for (let id = 1; id <= 6; id += 1) {
  const lane = String(id).padStart(2, "0");
  const repo = `tripathy-experiment-${lane}`;
  const title = `Tripathy Experiment ${lane}`;
  const slack = `tripathy-exp-${lane}`;
  const packageName = repo.replaceAll("-", "_");
  const destination = resolve(workspace, repo);

  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(template, destination, { recursive: true });

  const replacements = new Map([
    ["__LANE__", lane],
    ["__REPO__", repo],
    ["__TITLE__", title],
    ["__SLACK__", slack],
    ["__PACKAGE__", packageName],
  ]);

  const files = [
    "README.md",
    "CLAUDE.md",
    "project.yaml",
    "pyproject.toml",
    "modal_app.py",
    "experiment/manifest.json",
    "artifacts/session-summary.json",
  ];

  for (const relativePath of files) {
    const path = resolve(destination, relativePath);
    let contents = await readFile(path, "utf8");
    for (const [placeholder, value] of replacements) {
      contents = contents.replaceAll(placeholder, value);
    }
    await writeFile(path, contents);
  }
}

console.log("Instantiated six isolated Tripathy Loop experiment repositories.");
