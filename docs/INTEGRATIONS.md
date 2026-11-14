# Integration Map

## GitHub to Linear

Connect each experiment repository to its matching Linear project. Branch and pull-request titles include the Linear issue ID. Merge activity should update the issue but must not auto-close research work until its result artifact passes review.

## Linear to Slack

Provisioned:

- `#tripathy-loop` for portfolio decisions, blockers and daily summaries;
- `#tripathy-exp-01` for the assigned E01 lane, with `#tl-e01-t02-kalshi` as its target display name;
- `#tripathy-exp-02` through `#tripathy-exp-06` for the unassigned lanes.

Each Linear project contains its matching Slack channel as a resource. Enable the incoming webhook for each project so that new issues, comments, status changes, project updates and completion events post only to the corresponding experiment channel. The umbrella project routes to `#tripathy-loop`.

The webhook grant is channel-scoped and must be approved in Slack. Treat that grant as production access: confirm the target channel before approving and never route one lane into another lane's channel.

## GitHub to Slack

Post CI failures, pull-request readiness, deployments and benchmark summaries to the lane channel. Avoid duplicate commit spam. Every Slack message links back to GitHub and Linear.

## Claude session visibility

Each session writes `artifacts/session-summary.json` using the shared schema. The control dashboard displays the latest sanitized summary: objective, active issue, agents, runs, results, costs, blockers and next decision. Raw chain-of-thought and secrets are never published.

## Event identity

Use the tuple `experiment_id`, `git_sha`, `linear_issue`, `run_id` as the cross-system correlation key.
