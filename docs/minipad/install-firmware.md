---
id: install-firmware
title: Installing the firmware
sidebar_position: 4
sidebar_label: Installing the firmware
---

This guide will teach you how to download and flash the firmware for the minipad step by step. Before proceeding, please make sure that the minipad is plugged into your computer. These steps can be used both for the initial setup of your minipad, as well as for updating the firmware.
If you do not use minitility, please manually make sure to check for firmware updates frequently as they are important for fixing bugs and security vulnerabilities.

## 📁 Downloading the firmware

The firmware for the minipad can be downloaded in the releases section of the `minipadkb/minipad-firmware` repository on GitHub, you can find a link below.
There are two firmware files available, the file with the suffix `2k` being for 2 keys and one with the suffix `3k` for 3 keys. Make sure to download the appropriate firmware file for your keypad, otherwise you might encounter unwanted side effects.

[Click here to visit the firmware download page.](https://github.com/minipadKB/minipad-firmware/releases)

![firmwarefiles-light](./img/firmwarefiles-light.png#light)
![firmwarefiles-dark](./img/firmwarefiles-dark.png#dark)

## ⚡ Flashing the Firmware 

To flash the firmware onto your minipad, please follow these steps:

1. Make sure the minipad is plugged into your computer.
2. **If you're updating the firmware** (not performing the initial flash), press the "Set Minipad into Boot Mode" button in minitility. You can find more info [here](../minitility/get-started.md).
3. Wait for a mass storage device to appear in the explorer.

![massstorage-light](./img/massstorage-light.png#light)
![massstorage-dark](./img/massstorage-dark.png#dark)

4. Copy the firmware file to the mass storage device that appears in the explorer.
5. Wait for the firmware file to finish copying.
6. Validate the firmware update by checking the firmware version of your minipad in minitility. This might require a restart of minitility in order to detect the minipad properly.

**That's it! Your minipad should now be running on the latest firmware.** 👍

If you are encountering issues or having questions, please visit our [Discord](https://discord.gg/minipad).