---
id: introduction
title: Introduction - What is the minipad?
sidebar_position: 1
sidebar_label: Introduction
---

The minipad is a keypad with 2 to 3 keys. The special thing about it? **It uses magnetic switches and hall effect sensors making it an analog keypad**. This allows us to add features to the keypad no one could ever dream of, since we can accurately measure how far a key is pressed down, unlike with mechanical keyboards where keys are either pressed down (1) or not (0).

This project originated in minisbett's first keypad prototype. They really wanted to try out Wooting's rapid trigger feature but did not want to spend $200 on it - So they made their own keypad! Originally, it was made with some hall effect sensors, glued to the bottom of Wooting's [lekker switches](https://wooting.io/lekker). The hall effect sensors were connected to an Arduino Pro Micro that runs the [**old** legacy firmware](https://github.com/minipadkb/minipad-firmware-old).

If you're interested in learning more about it, check about the original [Reddit post](https://www.reddit.com/r/osugame/comments/zqojwe/i_made_my_own_wooting_keypad/).

## How do I get it?

Well, no. But yes. As of right now, we do not sell the keypad. Currently we are a purely non-profit open-source project. **But** we have a team of contributors working and providing PCB files, 3D models for cases, firmware and the configuration software. Our main goal is to make the keypad as accessible for everyone as possible, therefore we are also looking into selling the keypad for those, that for whatever reason cannot build it together themselves.

With what we provide, you are able to buy the components yourself and put them together - It's really easy! A guide on how to build the minipad together can be found [here](build-guide.md). If you'd like to know more about the pricing of the components and where to buy them, please checkout [this wiki page](purchase-pricing.md). In short: You put the PCB in the case, put the lid on top, screw / tape it together, put the keys on and flash the firmware. A guide on how to flash the firmware can be found [here](install-firmware.md).

If need help with something or have any questions, we have a big community on our [Discord](https://discord.gg/minipad) that happily help you anytime!

## Analog features

Due to the functionality of our keypad, using hall effect sensors and magnetic switches making the keypad analog, we can work with an important information no mechanical keyboard can keep up with - We can measure how far the key is currently pressed down, with a 0.1mm or even higher precision. This allows us to implement some already known from Wooting, and some truly unique features!

### 🎢 Dynamic actuation point

Since we are able to accurately measure how far a key is pressed down, users are able to define the actuation point dynamically! No need to get used to actuation points of any switches ever again - with this keypad the actuation point is under your control.

This allows you to customize the keypad to your needs. Whether you prefer fast actuation, or a high travel distance until the key is pressed down, you'll be able to be satisfied.

The actuation point can be configured in minitility. For more information, please check out the [minitility guide](../minitility/get-started.md).

### ⭐ Rapid Trigger

Rapid Trigger, Wooting's famous feature that made the osu! community go crazy for almost half a year - now as a keypad! As we have all information about the travel distance of the keys, we can also provide the rapid trigger functionality! 

We are trying our best to provide an optimal experience as close to Wooting as possible, however we cannot guarantee that it'll feel the same for everyone. In these matters, check out other people's experience with the minipad.

Rapid trigger can be enabled and configured in minitility. For more information, please check out the [minitility guide](../minitility/get-started.md).

## Unique features

We are trying our best to give anyone a good experience with osu!. We are always open for suggestions on what kind of features you'd wish to have!

### As of right now, no features are implemented but we already got some ideas!

These ideas include:
- Support for embedding a visualization of the keys' current travel distance in a stream overlay for Twitch streamers

- A mode for the 3-key keypad to have a key only trigger after a certain delay to prevent accidental quick retries or smokes when accidentally tapping the key

If you are encountering issues or having questions, please visit our [Discord](https://discord.gg/minipad).