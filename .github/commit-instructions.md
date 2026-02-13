# Commit Message Instructions

Commit messages should be concise and focused on the high-level intent of the change. They are not meant to be exhaustive change logs; instead, they should capture the most important details that will help future developers understand the purpose of the change when scanning history. For more detailed discussions and rationale, refer to the associated PRs.

## Format

Every commit message should include a subject line, and optionally a body:

- **Subject**: A single short sentence summarizing the change.
- **Body**: A more detailed explanation of the change.

## Guidelines

- Keep the subject line under ~80 characters when practical.
- Use the body to explain the "why" and "what" of the change, not the "how".
- Prefer plain English over implementation details.
- Use ASCII punctuation only (no smart quotes or em-dashes).
- Prioritize new information over refactors or formatting changes.

## What Not To Do

- Do not use conventional commit prefixes (no "feat:", "fix:", etc.).
- Do not list files changed or exhaustive bullet points.
- Do not include implementation details or code snippets in the commit message.
- Do not use emojis or non-standard characters.

## Important Note

Check if added code is actually new and not just moved. If text has been removed in one area and appears in another area, this is a refactor or rename, not a new addition. The commit message should reflect the intent of the change rather than the mechanics.
