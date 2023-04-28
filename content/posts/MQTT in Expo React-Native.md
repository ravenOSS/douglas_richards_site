---
title: Implement MQTT in React-Native
slug: mqtt
date: January 22, 2023
createdAt: January 22, 2023 21:53 PM
author: Douglas Richards
issue: How to make connection on port 1883
solution: Is there one?
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'cards'
category: 'CSS'
---

React-Native does not access the standard Node.js modules. Therefore, it's necessary to shim modules and make them compatible with React-Native.

This demonstration project is scaffolded with Expo so modules have to be made compatible.

To start we'll try

https://github.com/annie-elequin/node-libs-expo

This library, which was forked from https://github.com/parshap/node-libs-react-native but modified for Expo.

- STEPS

From the Expo docs:

\*\* Expo Setupi

- install necessary tools
- https://docs.expo.dev/get-started/installation/

\*\* Create new app

- https://docs.expo.dev/get-started/create-a-new-app/
