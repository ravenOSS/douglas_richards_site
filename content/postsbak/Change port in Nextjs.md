---
title: Change host port in Nextjs
slug: markdown
date: October 10, 2022
createdAt: October 8, 2022 3:49 PM
author: Douglas Richards
excerpt: Avoid port collisions when running multiple servers.
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
imagealt: 'elevator mineshaft'
---

Change port methods

Package json

"scripts": {
"dev": "next -p 3002",
"build": "next build",
"start": "next start -p 3002",
},
