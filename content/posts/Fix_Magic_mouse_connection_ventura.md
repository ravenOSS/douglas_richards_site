---
title: Mouse disconnecting in MacOS Ventura
slug: MagicMouse
date: January 12, 2023
createdAt: January 12, 2023 21:53 PM
author: Douglas Richards
issue: Fixing mouse disconnect
solution: Terminal = sudo pkill bluetoothd
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'cards'
category: 'CSS'
---

With the recent update to MacOS Ventura, there have been numerous communication drops from the Mac's bluetooth. Turning on and off both the bluetooth system setting and the mouse's power, does not reset the connection.

Solution is to open a terminal (command + spacebar) and type in the following:

```
sudo pkill bluetoothd
```

In effect, this kills the bluetooth process which resets so that the mouse is, once again, discoverable.

Pairing is the usual method of clicking the bluetooth icon in the menu bar or going to system settings > bluetooth and selecting the mouse and clicking the connect button.
