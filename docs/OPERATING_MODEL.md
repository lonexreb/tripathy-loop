# Tripathy Loop Operating Model

## Purpose

Tripathy Loop lets six Claude Code sessions explore six ideas concurrently without losing engineering discipline, research rigour or human visibility.

## The loop

1. **Claude Code** receives a Linear issue and a falsifiable experiment contract.
2. **GitHub** records code, reviews, tests, artifacts and immutable commit identity.
3. **Linear** records ownership, priority, decisions, blockers and the next action.
4. **Slack** broadcasts detailed, linked updates to the lane channel and summary signals to the roll-up channel.
5. **Claude Code** reads verified results and begins the next bounded iteration.

GitHub and Linear are systems of record. Slack is never the only location for a decision or result.

## Topology

| Layer | Portfolio | Per experiment |
|---|---|---|
| GitHub | `tripathy-loop` | `tripathy-loop-e01-t02-kalshi`, `tripathy-experiment-02..06` |
| Linear | SF AI Research Hackathon plan | One project with milestones and issues |
| Slack | `#tripathy-loop` | E01: `#tripathy-exp-01` (target `#tl-e01-t02-kalshi`), then `#tripathy-exp-02..06` |
| Claude | Portfolio coordinator | One isolated session with bounded subagents |
| Vercel | Dashboard | Optional idea-specific web surface |
| Modal | Shared provider account | Separate app, secrets and run namespace |

## Experiment lifecycle

`awaiting-idea -> planning -> running -> evaluating -> complete | stopped`

An experiment may enter `running` only after its manifest defines:

- question and hypothesis;
- primary metric and baseline;
- dataset and cutoff policy;
- compute and dollar budget;
- stop condition;
- evidence and reproducibility paths.

## Update contract

Every iteration publishes:

- experiment ID and Git commit;
- Linear issue and current state;
- hypothesis or change tested;
- command and environment identity;
- primary result versus baseline;
- latency, token/compute use and estimated cost;
- evidence links and known failures;
- decision: keep, reject, revise or stop;
- next action and owner.

## Subagent policy

The lane owner may delegate independent research, implementation, evaluation or review tasks. Every subagent receives explicit scope, files, constraints, expected artifact and acceptance check. The owner reviews, integrates and remains accountable for the final claim.

## Engineering policy

- **SOLID:** stable boundaries around retrieval, domain logic, evaluation, persistence and presentation.
- **DRY:** one authoritative representation of schemas, metrics and provider contracts.
- **KISS:** prefer the smallest testable mechanism; avoid frameworks without measured benefit.
- **Readable:** names reveal intent; public boundaries are typed and documented.
- **Explainable:** decisions link to evidence and alternatives.
- **Traceable:** each claim maps to a commit, run ID and Linear issue.
