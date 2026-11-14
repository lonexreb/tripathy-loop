# Integration Map

## GitHub to Linear

Connect each experiment repository to its matching Linear project. Branch and pull-request titles include the Linear issue ID. Merge activity should update the issue but must not auto-close research work until its result artifact passes review.

## Linear to Slack

Create:

- `#tripathy-loop` for portfolio decisions, blockers and daily summaries;
- `#tripathy-exp-01` through `#tripathy-exp-06` for detailed lane updates.

Configure each Linear project to post new issues, comments, status changes, project updates and completion events to only its corresponding experiment channel. The umbrella project routes to `#tripathy-loop`.

## GitHub to Slack

Post CI failures, pull-request readiness, deployments and benchmark summaries to the lane channel. Avoid duplicate commit spam. Every Slack message links back to GitHub and Linear.

## Claude session visibility

Each session writes `artifacts/session-summary.json` using the shared schema. The control dashboard displays the latest sanitized summary: objective, active issue, agents, runs, results, costs, blockers and next decision. Raw chain-of-thought and secrets are never published.

## Event identity

Use the tuple `experiment_id`, `git_sha`, `linear_issue`, `run_id` as the cross-system correlation key.
