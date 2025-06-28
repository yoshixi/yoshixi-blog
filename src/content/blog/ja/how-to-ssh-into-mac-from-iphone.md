---
title: How to SSH into Mac from iPhone using Tailscale
pubDatetime: 2025-06-28T15:00:00.000Z
draft: false
tags:
  - tech
---

# How to SSH into Mac from iPhone using Tailscale

## Motivation

 I saw some posts about how to SSH into Mac from iPhone to leverage the LLM's CLI capabilities. I wanted to try it out, so I set it up using Tailscale.

## Steps

1. Install Tailscale on your Mac and Set up Tailscale and log in.
2. Install/Login Tailscale on your iPhone
3. Install Termius on your iPhone and connect to your Mac via SSH.

## Install Tailscale on Mac

The tailscale provides three ways to install Tailscale on Mac: Standalone variant, App Store variant, and Open Source variant. In short, you need to install Open Source variant to ssh into your Mac. I need to look into it to understand the reason, but the Mac has a restriction to run the deamon process from the desktop app, so you need to run the Open Source variant to run the deamon process. 

Note: as described in the tailscale documentation, you could not use the GUI app. So you should be comfortable with the command line interface.

You can install the application as described in the [Tailscaled on macOS](https://github.com/tailscale/tailscale/wiki/Tailscaled-on-macOS).

```bash
go install tailscale.com/cmd/tailscale{,d}@main
```

After installing, you can run the following command to install the system daemon:

```bash
sudo $HOME/go/bin/tailscaled install-system-daemon
```   


```bash
tailscale up
tailscale status
```

```bash
tailscale set --ssh
```

## Install Tailscale on iPhone

Install the Tailscale app from the App Store on your iPhone and log in with the same account you used on your Mac. You can see two devices connected to the same Tailscale network, which is called tailnet. 

[Install Tailscale on iOS](https://tailscale.com/kb/1020/install-ios/)

## Install Termius on your iPhone and connect to your Mac via SSH.

As a SSH client, I used [Termius](https://apps.apple.com/us/app/termius-modern-ssh-client/id549039908). You can install it from the App Store on your iPhone.

In Termius, you can add a new host by tapping the "+" button in Vault tab. Enter the following information:

- **Label**: Whatever you want to name to identify the host (e.g., "My Macbook Pro")
- **Hostname**: The Tailscale IP address of your Mac or the hostname that publishes by Tailscale (e.g., "my-macbook-pro.ts.net")
- **Username**: Your Mac username. You can find it by running `whoami` command on your Mac.
- **Password**: Your Mac password.

