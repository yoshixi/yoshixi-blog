---
language: en
title: Ruby, Go, and TypeScript
author: "Yoshiki"
pubDatetime: 2022-03-10T15:00:00Z
featured: false
draft: false
tags:
  - tech
description: ""
---

I have used Ruby, Go, and TypeScript as backend languages.

This is my personal comparison based on hands-on experience.

## Ruby

### Pros

- Fastest for small teams in early phases
- Strong conventions reduce naming/placement decisions
- ActiveRecord is very productive
- Dynamic typing reduces boilerplate in many cases

### Cons

- No static types: harder for larger teams
- Quality can vary significantly by engineer skill
- Becomes painful at scale
- Rails can feel heavy in a serverless-first world
- Slow startup

## Go

### Pros

- Strong type system
- Moderate learning curve
- Fast startup/runtime behavior
- Small syntax surface helps readability

### Cons

- More code to write
- Missing built-in conveniences (`map`/`filter`) can hurt rapid prototyping
- Fewer strong defaults than Rails for project structure
- No dominant de-facto ORM

## TypeScript

### Pros

- A good middle ground between Ruby and Go
- Expressive with static typing
- Large ecosystem and momentum
- Easy talent allocation when frontend/backend share language

### Cons

- Type safety can feel looser than Go
- Startup is slower than Go in some frameworks

## Summary

Ruby is still great for speed in small teams.  
If team size and long-term maintainability matter, Go is often my default choice.  
TypeScript sits in between and has major practical advantages, especially with shared frontend language.
