---
language: en
title: Notes on Building a Go x GraphQL Project
author: "Yoshiki"
pubDatetime: 2021-07-31T15:00:00Z
featured: false
draft: false
tags:
  - tech
description: ""
---

## Architecture

I adopted a clean-architecture-like structure, inspired by `go-clean-arch`.

The project was new and expected to change significantly, so I prioritized a structure with balanced layers:

- presentation (gqlgen-generated)
- resolver (gqlgen-generated)
- usecase interface/implementation
- repository interface/implementation
- ORM generation via sqlboiler

## Naming Conventions

To reduce naming decision fatigue, I used predictable prefixes:

- List APIs: `List`, `ListByX`
- Single read: `Get`, `GetByX`
- Create: `Create`, `CreateWithX`
- Update: `Update`, `UpdateWithX`

## Pointer vs Value

Rule of thumb:

- use pointer if mutation is needed
- use pointer for larger data
- use value for smaller immutable data

## Database and Modeling

- Check unique constraints, especially join tables
- Check foreign keys (`FOREIGN KEY`, `REFERENCES`)
- Prefer immutable data modeling where possible

## Testing

I tried to avoid overusing mocks.

Main focus:

- GraphQL request-level tests
- repository-layer tests

## Logging and GraphQL Schema

- Used `uber-go/zap` for logging
- Referenced GitHub's GraphQL schema style

## Notes

I collected many references around gqlgen, sqlboiler, dataloaders, and clean architecture to speed up decision making.
