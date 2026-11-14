# Secret and Environment Policy

## Non-negotiable rules

- Secret values never appear in Git, Linear, Slack, Claude prompts/transcripts, dashboards, screenshots or experiment artifacts.
- `.env.example` contains names and descriptions only.
- `.env.local` and all environment-specific local overrides are ignored.
- `NEXT_PUBLIC_*` values are public by definition and cannot contain credentials.
- Production and non-production values are separate.
- Access is least-privilege, repository-scoped and revocable.

## Storage map

| Secret | Primary store | Scope |
|---|---|---|
| Vercel integration secrets | Vercel Secret environment variables | dashboard or one experiment UI |
| Modal tokens and provider keys | Modal Secrets | one experiment app |
| GitHub automation credentials | GitHub Actions environments/secrets | one repository |
| Slack bot/signing credentials | Vercel Secret or GitHub secret | notification service only |
| Local development values | ignored `.env.local` | one developer machine |

## Required names

The baseline anticipates `EXA_API_KEY`, `PAST_API_KEY`, `MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET`, `LINEAR_API_KEY`, `LINEAR_WEBHOOK_SECRET`, `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET`, `SLACK_WEBHOOK_URL`, `GITHUB_TOKEN` and `GITHUB_WEBHOOK_SECRET`. Add only the subset required by the selected idea.

## Rotation and incident response

If a credential is exposed: revoke it at the provider, remove it from active environments, rotate dependent credentials, audit access logs, scrub published artifacts where possible and record a non-sensitive incident note in Linear. Git history rewriting is a last resort and requires explicit coordination.
