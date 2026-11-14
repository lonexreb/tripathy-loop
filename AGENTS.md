# Agent Operating Contract

This repository coordinates six independent research lanes. Agents must protect isolation, reproducibility and human readability.

## Required workflow

1. Start from a Linear issue with a testable outcome.
2. Write or update an experiment manifest before implementation.
3. Delegate only bounded subtasks with explicit inputs, outputs and acceptance checks.
4. Keep architectural decisions in `docs/adr/`.
5. Make the smallest coherent change; prefer SOLID boundaries, DRY knowledge, and KISS implementations.
6. Run tests and validation before committing.
7. Record result, cost, latency, failures and evidence paths.
8. Post a concise status payload for GitHub, Linear and Slack.

## Guardrails

- Never commit secrets, raw credentials, private tokens or copied `.env.local` files.
- Never allow one experiment lane to mutate another lane.
- Never claim success without a reproducible command and machine-readable result.
- Do not erase negative results. Mark them superseded and explain why.
- Human reviewers must be able to understand names, boundaries, failure modes and provenance.
