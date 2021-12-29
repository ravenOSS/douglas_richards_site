---
title: Netlify Nextjs build failure - capitalize module
slug: Build failure
date: December 21, 2020
createdAt: December 20, 2021 3:57 PM
author: Douglas Richards
excerpt: Netlify Nextjs build failure - capitalize module
thumbnail: 'v1619638134/drumroll_wy6xwb.jpg'
heroImage: 'v1619638134/drumroll_wy6xwb.jpg'
exampleImage: ''
---

Local build and dev passing.
Netlify build failing with error: module not found.

Cause Netlify build failing due to a capitalization error in imported module.css.

Although local git repo had correct capitalization, the build failed on Netlify due to a capitalization error in the module. This appears to be a problem with OSX being case-insensitive whereas Github/Netlify is case-sensitive.
