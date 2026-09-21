---
language: en
title: Increase Disk Size on Compute Engine
author: "Yoshiki"
pubDatetime: 2022-01-29T15:00:00Z
featured: false
draft: false
tags:
  - tech
description: ""
---

## Background

While setting up Redash on Compute Engine, Docker suddenly stopped starting.

After investigating logs, the root cause was clear: disk space was exhausted (`No space left on device`).

## Error Symptoms

- `docker.service` repeatedly failed to start
- `journalctl` contained multiple `No space left on device` messages

## Solution

I fixed it by resizing the persistent disk and following Google Cloud's troubleshooting guide:

- [Troubleshooting full disks and disk resizing](https://cloud.google.com/compute/docs/troubleshooting/troubleshooting-disk-full-resize)
- [Resize a persistent disk](https://cloud.google.com/compute/docs/disks/resize-persistent-disk)

After resizing and expanding filesystem, Docker started normally again.
