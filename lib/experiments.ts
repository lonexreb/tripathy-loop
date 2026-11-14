import type { Experiment } from "./types";

const linearProjects = [
  "https://linear.app/tripathy/project/tripathy-loop-e01-track-02-kalshi-gpu-forecaster-4a9aac262fa8/overview",
  "https://linear.app/tripathy/project/tripathy-experiment-02-awaiting-idea-0b6a8f9d9d84/overview",
  "https://linear.app/tripathy/project/tripathy-experiment-03-awaiting-idea-5dbfdacd8c3f/overview",
  "https://linear.app/tripathy/project/tripathy-experiment-04-awaiting-idea-44e64cd15456/overview",
  "https://linear.app/tripathy/project/tripathy-experiment-05-awaiting-idea-357162309851/overview",
  "https://linear.app/tripathy/project/tripathy-experiment-06-awaiting-idea-92f37b4e577a/overview",
] as const;

const slackChannels = [
  "https://app.slack.com/client/T0CHM33JRDH/C0CHNFW0DB7",
  "https://app.slack.com/client/T0CHM33JRDH/C0CJN646HME",
  "https://app.slack.com/client/T0CHM33JRDH/C0CHTK23BDY",
  "https://app.slack.com/client/T0CHM33JRDH/C0CHCDF4KFH",
  "https://app.slack.com/client/T0CHM33JRDH/C0CJN655VUG",
  "https://app.slack.com/client/T0CHM33JRDH/C0CHCDFT371",
] as const;

export const experiments: Experiment[] = Array.from({ length: 6 }, (_, index) => {
  const id = index + 1;
  const padded = String(id).padStart(2, "0");
  const isKalshiTrack = id === 1;

  return {
    id,
    slug: `experiment-${padded}`,
    title: isKalshiTrack ? "E01 · Track 02: Kalshi GPU Forecaster" : `Experiment ${padded}`,
    status: isKalshiTrack ? "planning" : "awaiting-idea",
    hypothesis: isKalshiTrack
      ? "Provisional: can a time-causal self-improvement loop beat matched Kalshi probabilities?"
      : "Idea assignment pending",
    owner: `Claude session ${padded}`,
    github: isKalshiTrack
      ? "https://github.com/lonexreb/tripathy-loop-e01-t02-kalshi"
      : `https://github.com/lonexreb/tripathy-experiment-${padded}`,
    linear: linearProjects[index],
    slack: slackChannels[index],
    vercel: "not-linked",
    modal: "not-linked",
    score: null,
    costUsd: 0,
    latencySeconds: null,
    runs: 0,
    lastUpdate: isKalshiTrack
      ? "Track assigned; independent design reviews pending"
      : "GitHub, Linear, and Slack lane provisioned",
    nextDecision: isKalshiTrack
      ? "Resolve data feasibility and approve or kill the provisional start gate"
      : "Assign idea and define success metric",
  };
});
