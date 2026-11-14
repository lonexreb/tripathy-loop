import type { Experiment } from "./types";

const linearProjects = [
  "https://linear.app/tripathy/project/tripathy-experiment-01-awaiting-idea-4a9aac262fa8/overview",
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

  return {
    id,
    slug: `experiment-${padded}`,
    title: `Experiment ${padded}`,
    status: "awaiting-idea",
    hypothesis: "Idea assignment pending",
    owner: `Claude session ${padded}`,
    github: `https://github.com/lonexreb/tripathy-experiment-${padded}`,
    linear: linearProjects[index],
    slack: slackChannels[index],
    vercel: "not-linked",
    modal: "not-linked",
    score: null,
    costUsd: 0,
    latencySeconds: null,
    runs: 0,
    lastUpdate: "GitHub, Linear, and Slack lane provisioned",
    nextDecision: "Assign idea and define success metric",
  };
});
