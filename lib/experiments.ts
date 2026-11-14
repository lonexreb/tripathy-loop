import type { Experiment } from "./types";

export const experiments: Experiment[] = Array.from({ length: 6 }, (_, index) => {
  const id = index + 1;
  const padded = String(id).padStart(2, "0");

  return {
    id,
    slug: `experiment-${padded}`,
    title: `Experiment ${padded}`,
    status: "awaiting-idea",
    hypothesis: "Idea assignment pending",
    owner: `Claude session ${padded}`,
    github: `https://github.com/lonexreb/tripathy-experiment-${padded}`,
    linear: "pending",
    slack: `#tripathy-exp-${padded}`,
    vercel: "not-linked",
    modal: "not-linked",
    score: null,
    costUsd: 0,
    latencySeconds: null,
    runs: 0,
    lastUpdate: "Baseline provisioned",
    nextDecision: "Assign idea and define success metric",
  };
});
