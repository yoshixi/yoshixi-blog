---
title: How to Install Ubuntu on GMKTech Mini PC
pubDatetime: 2025-06-29T10:00:00.000Z
draft: false
tags:
  - tech
---

# How to Install Ubuntu on GMKTech Mini PC


## Create Ubuntu Bootable USB Stick on macOS

Follow the doc [Create a bootable USB stick on macOS](https://ubuntu.com/tutorials/create-a-usb-stick-on-mac#1-overview) to create a bootable USB stick for Ubuntu.

In short, you need to:

- Erase and format the USB stick to FAT32. You can use the Disk Utility app on macOS to format the USB stick.
- download the Ubuntu ISO file from [Ubuntu Download](https://ubuntu.com/download/desktop).
- download the [Etcher](https://www.balena.io/etcher/) app to create a bootable USB stick.
- use Etcher to flash the Ubuntu ISO file to the USB stick.

## Boot BIOS on GMKTech Mini PC

1. Power on the GMKTech device.
2. Immediately press the `ESC` key repeatedly until the BIOS menu appears.
3. Use the arrow keys to navigate through the BIOS settings.
4. To change the boot order, look for the "Boot" tab and adjust the settings to prioritize USB booting. In my case, I can change the priority by pushing the `space` key that changes the priority of boot order.
5. Go to the "Security" tab and disable "Secure Boot" to allow booting from the USB stick.
6. Save your changes and exit the BIOS.
7. After restarting, the GMKTech Mini PC shows some options that says 
    - `Try or Install Ubuntu`
    - `OEM Install (for manufacturers)`
    - etc.
8. Select `Try or Install Ubuntu` to boot from the USB stick and start the Ubuntu installation process.

If you want to configure automatic power on after power failure, you can do it in the BIOS settings as well. It seems the way to do it is different depending on devices.
In my case, I went to the `Chipset` tab, then there are `Wake on Power` option, and I set it to `S0 State`  to enable automatic power on after power failure.
In the latest GMKTech Mini PC, it seems the option is called `AC Power Lost Policy` in `Advanced` tab, and you can set it to `Power On` to enable automatic power on after power failure. (Youtube video: [How to Set Auto Power-On for GMKtec K10 Mini PC | BIOS Quick Guide!](https://www.youtube.com/watch?v=0XSId3RIwak))

## Install Ubuntu on GMKTech Mini PC

1. After booting from the USB stick, you will see the Ubuntu welcome screen.
2. In the installation process, you can choose to `install Ubuntu alongside the existing operating system` or `erase the disk and install Ubuntu` as the only operating system. If you want to use the GMKTech Mini PC as a dedicated Ubuntu machine, you can choose to `erase the disk and install Ubuntu`.
