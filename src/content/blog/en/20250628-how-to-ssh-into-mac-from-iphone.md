---
language: en
title: How to SSH into Mac from iPhone using Tailscale
author: "Yoshiki"
pubDatetime: 2025-06-28T15:00:00.000Z
featured: false
draft: false
tags:
  - tech
description: ""
---

# How to SSH into Mac from iPhone using Tailscale

## Motivation

I saw some posts about SSHing into a Mac from iPhone to use LLM CLI tools remotely, so I tried it with Tailscale.

## Steps

1. Install Tailscale on Mac and log in.
2. Install Tailscale on iPhone and log in to the same account.
3. Install Termius on iPhone and connect to your Mac via SSH.

## Install Tailscale on Mac

Use the open-source variant that can run `tailscaled` daemon.

```bash
go install tailscale.com/cmd/tailscale{,d}@main
```

Then install daemon and bring up Tailscale:

```bash
sudo $HOME/go/bin/tailscaled install-system-daemon
tailscale up
tailscale status
tailscale set --ssh
```

## Install Tailscale on iPhone

Install from App Store and log in with the same account.

## Install Termius and connect

In Termius, add a host with:

- Label: any name (e.g. My MacBook Pro)
- Hostname: Tailscale IP or `*.ts.net` hostname
- Username: macOS username (`whoami`)
- Password: macOS password
