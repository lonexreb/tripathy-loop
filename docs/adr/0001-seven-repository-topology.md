# ADR 0001: Seven-repository topology

- Status: accepted
- Date: 2026-11-14

## Context

Six ideas will be explored simultaneously, and their dependencies, secrets, compute and failure modes are not yet known.

## Decision

Use one control-plane repository plus six independent experiment repositories.

## Consequences

Isolation improves ownership, CI speed, secret scope, deployment rollback and idea replacement. Shared standards live in the control plane and are copied deliberately rather than hidden behind a coupled monorepo abstraction.
