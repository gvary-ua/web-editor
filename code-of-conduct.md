# Code Conventions

> The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
> NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and
> "OPTIONAL" in this document are to be interpreted as described in
> [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

## Repository rules

A repository MUST NOT allow `merge commits`.

A repository MUST NOT allow `squash merging`.

A repository MUST only allow `rebase merging`.

## Branch rules

A main branch name MUST be `main`.

A main branch name MUST be protected.

A main branch name MUST NOT be force pushed.

A new branch MUST be created for each issue.

A new branch name MUST follow the next pattern `<type>/PR-NUMBER/optional-info`, where `<type>` is from [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) standard.

> e.g. 
> 
> `fix/#1`
> or
> `feat/#42/meaning-of-life`
> or
> `docs/#3/about-project-management`

## Commit rules

A commit message MUST follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) standard.

A commit message MUST contain pull request number (e.g. #54) in a scope. 

> e.g. `fix(#53): change button color to red`

A commit SHOULD be signed off.

## Pull request rules

A PR title MUST follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) standard.

A PR body MUST NOT be blank.

A PR body MUST have the next line `Closes #PR-NUMBER` for automatic issue linkage.

> e.g. `Closes #53`

## Code formatting rules

A repository MUST have a formatting style defined in a file.

A repository MUST have a GitHub action which will run code linter based on a style defined in the file.

A repository MUST have a readme which describes how to setup linter and formatter locally using a style defined in the file.