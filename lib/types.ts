export type ExperimentStatus = "awaiting-idea" | "planning" | "running" | "evaluating" | "stopped" | "complete";

export type Experiment = {
  id: number;
  slug: string;
  title: string;
  status: ExperimentStatus;
  hypothesis: string;
  owner: string;
  github: string;
  linear: string;
  slack: string;
  vercel: string;
  modal: string;
  score: number | null;
  costUsd: number;
  latencySeconds: number | null;
  runs: number;
  lastUpdate: string;
  nextDecision: string;
};
