---
title: Stable Diffusion setup on M1 Mac
slug: cards
date: Sept 26, 2022
createdAt: September 24, 2022 21:53 PM
author: Douglas Richards
issue: Running Stable Diffusion on Apple Silicon
solution: Use Automatic1111 Instructions
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'cards'
category: 'CSS'
---

https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon

fix for pytorch M1


Problem pip cache
pip uninstall torch
pip cache purge
pip install torch -f https://download.pytorch.org/whl/torch_stable.html