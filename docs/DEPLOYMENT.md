# Deployment Architecture

## Control plane on Vercel

Deploy `tripathy-loop` as a standalone Vercel project. Production is sourced only from `main`; pull requests receive Preview deployments. The dashboard begins as a static view and can later ingest signed GitHub, Linear and Slack events through server-only routes.

Current project: [Vercel dashboard](https://vercel.com/shubhankars-projects-4a7ed13d/tripathy-loop). Current public deployment: [rushing-redwood-boh9t81.tmp.now](https://rushing-redwood-boh9t81.tmp.now/).

Bootstrap order:

1. Install and authenticate the official Vercel CLI or use the Vercel dashboard.
2. Create/link the `tripathy-loop` project.
3. Add only required variables from `.env.example`, separating Production, Preview and Development.
4. Pull Development variables to ignored `.env.local` only when local integration testing begins.
5. Verify the key-name diff, then run tests and build.
6. Deploy Preview, verify `/api/health`, then promote through `main`.

No database is required for the baseline. Add a managed integration only if live event history needs durable storage.

## Experiment compute on Modal

Each experiment uses its own Modal app name. E01 is `tripathy-loop-e01-t02-kalshi`; the unassigned lanes remain `tripathy-experiment-02` through `tripathy-experiment-06`. Keep functions small and explicit:

- `smoke`: validates image, secrets and imports;
- `run_experiment`: executes one manifest-defined run;
- `evaluate`: computes metrics against the fixed baseline;
- `batch`: fans out bounded candidates with explicit concurrency and timeout.

Provider keys are Modal Secrets referenced by name at runtime. They must not be passed as CLI arguments, baked into images or returned in logs.

## Optional experiment UI

If an idea needs a public demo, create a separate Vercel project for that experiment repository. Do not put all six ideas into the control-plane deployment. Isolation keeps environment variables, rollbacks and failure domains understandable.

## GitHub Actions

CI validates tests, types, manifest schema and secret patterns. Deployment credentials should use provider-supported short-lived/OIDC authentication where available. Repository secrets are a fallback, scoped to one repository and one environment.

## Rollback

- Vercel: promote the last verified deployment.
- Modal: redeploy the last verified commit and retain the failed run artifact.
- GitHub: revert through a new commit; never rewrite shared history.
- Linear: mark the decision superseded and link the rollback evidence.
