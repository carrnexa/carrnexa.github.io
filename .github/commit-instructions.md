# Commit message instructions

Commit messages are intentionally lightweight in this repo. PRs are the main source of truth for details, discussion, and rationale. Commits exist mostly to reduce the search space when scanning history.

## Style goals

- Capture the high-level intent of the change.
- Include only the most important detail(s) that help future-you grep/skim.
- Avoid long change logs. If it needs many bullets, it belongs in the PR.

## Format

Use this format:

- Subject: One short sentence, imperative mood (e.g., "Add", "Fix", "Refactor").
- Body (optional): 1-4 short English sentences.

## Rules

- Do not use conventional commit prefixes (no "feat:", "fix:", etc.).
    - Tickets/IDs are handled separately by the author.
- Keep the subject under ~72 characters when practical.
- Prefer plain English over implementation details.
- Do not list files changed or exhaustive bullet points.
- Mention behavior/architecture changes only if they affect future work.
- Use ASCII punctuation only (no smart quotes or em-dashes).

## What to include (good)

- What changed at a feature level (what a user/developer gets now).
- The key reason/constraint, if it is not obvious.
- The main architectural boundary or invariant, if the commit establishes one.

## What to avoid

- A play-by-play of every edit.
- Internal refactors without describing the purpose.
- Large multi-topic commits. Split if you can do so safely.

## Examples

Subject only:

- `Add logging utility for consistent log formatting.`
- `Fix bug in user authentication flow.`

Subject + short body:

```txt
Add logging utility for consistent log formatting.

This utility provides a standardized way to format log messages across the application, improving readability and debugging efficiency.
```
