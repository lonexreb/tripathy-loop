# Tripathy Loop

Tripathy Loop is the control plane for six parallel, auditable AI research experiments.

```text
Claude Code -> GitHub -> Linear -> Slack -> Claude Code
      |                                        ^
      +---- evidence, metrics and decisions ---+
```

The repository owns the portfolio dashboard, reusable experiment contract, engineering rules, integration runbooks and verification tooling. It deliberately contains no idea-specific implementation and no credentials.

## Repositories

- `tripathy-loop`: control plane and reusable contract.
- `tripathy-experiment-01` through `tripathy-experiment-06`: isolated experiment lanes awaiting idea assignment.

Each experiment has its own GitHub repository, Linear project, Slack channel, Claude session, CI history, evidence bundle and deployment boundary.

## Local setup

```bash
npm install
npm run test
npm run dev
```

Open `http://localhost:3000`. Do not run the application with production credentials locally. Copy `.env.example` to `.env.local` only when an integration is actually activated.

## Deployment

The visibility dashboard is designed for Vercel. Experiment compute belongs on Modal; an experiment may additionally deploy a user-facing web surface to its own Vercel project. Follow `docs/DEPLOYMENT.md` and `docs/SECRETS.md` before linking a provider.

## Operating rule

Every claim must be traceable to a commit, Linear issue, experiment run and source or artifact. Failed experiments are first-class evidence and must not be hidden.
