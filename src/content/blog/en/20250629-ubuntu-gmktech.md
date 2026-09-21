---
language: en
title: How to Install Ubuntu on GMKTech Mini PC
author: "Yoshiki"
pubDatetime: 2025-06-29T10:00:00.000Z
featured: false
draft: false
tags:
  - tech
description: ""
---

# How to Install Ubuntu on GMKTech Mini PC

## Create Ubuntu Bootable USB on macOS

Follow Ubuntu official docs to create a bootable USB stick:

- Format USB to FAT32
- Download Ubuntu ISO
- Use Etcher to flash the ISO to USB

## Enter BIOS on GMKTech Mini PC

1. Power on device.
2. Press `ESC` repeatedly to open BIOS.
3. Set USB as highest boot priority.
4. Disable Secure Boot in Security tab.
5. Save and reboot.
6. Choose `Try or Install Ubuntu`.

Optional: set automatic power-on after power failure:

- Some devices: `Chipset` -> `Wake on Power` -> `S0 State`
- Newer devices: `Advanced` -> `AC Power Lost Policy` -> `Power On`

## Install Ubuntu

After booting from USB:

1. Start installer from welcome screen.
2. Choose either:
   - install alongside existing OS, or
   - erase disk and install Ubuntu (for dedicated Ubuntu machine).
