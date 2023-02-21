---
id: introduction
title: Introduction - What is the minipad?
sidebar_position: 1
sidebar_label: Introduction - What is the minipad?
---

The minipad is a keypad with 2 to 3 keys. The special thing about it? **It uses magnetic switches and hall effect sensors making it an analog keypad**. This allows us to add features to the keypad no one could ever dream of, since we can accurately measure how far a key is pressed down, unlike with mechanical keyboards where keys are either pressed down (1) or not (0).

This project originated in minisbett's first keypad prototype. They really wanted to try out Wooting's rapid trigger feature but did not want to spend $200 on it - So they made their own keypad! Originally, it was made with some hall effect sensors, glued to the bottom of Wooting's [lekker switches](https://wooting.io/lekker). The hall effect sensors were connected to an Arduino Pro Micro that runs the [**old** legacy firmware](https://github.com/minipadkb/minipad-firmware-old).

If you're interested in learning more about it, check about the original [Reddit post](https://www.reddit.com/r/osugame/comments/zqojwe/i_made_my_own_wooting_keypad/).

## Dynamic actuation point

Since we are able to accurately measure how far a key is pressed down, users are able to define the actuation point dynamically! No need to get used to any actuation points of 

If you are encountering issues or having questions, please visit our [Discord](https://discord.gg/minipad).