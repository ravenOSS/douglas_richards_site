---
title: Static Nextjs on Netlify
slug: collapse
date: November 8, 2020
createdAt: October 4, 2020 3:40 PM
author: Douglas Richards
issue: Nextjs deploy to Netlify
solution: Setting up the Netlify CMS to deploy to Netlify
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638113/collapse_c1vfyl.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'collapse'
category: 'CSS'
---

Deploying a Next static site to Netlify triggers the automatic installation of the Next build plugin. However, this plugin requires that the built assets be placed in .next. This is not the case for static sites.

Static sites use the export command and the build directory is 'out'.
