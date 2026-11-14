# Operations Runbook

## Start an idea

1. Name the idea and assign it to one unused lane.
2. Replace the placeholder metadata in `project.yaml` and `experiment/manifest.json`.
3. Create the Linear milestone: feasibility gate.
4. Open one issue for the first falsifiable baseline.
5. Start the lane's Claude Code session from that issue.
6. Run local validation and push a small initialization commit.
7. Post the start event to the lane Slack channel.

## Execute an iteration

1. State the hypothesis and expected metric movement.
2. Create a branch named with the Linear issue.
3. Implement the smallest testable change.
4. Run unit tests, smoke test and experiment.
5. Save the structured result under `artifacts/runs/`.
6. Compare against the fixed baseline and stop condition.
7. Commit and open a pull request with the result table.
8. Update Linear and broadcast the linked summary to Slack.

## Stop a lane

Stop when its budget, deadline or preregistered stop condition is reached. Preserve negative evidence, mark the Linear project stopped or completed, publish a final session summary and free compute resources without deleting reproducibility artifacts.
