---
title: Next deploy errors on Netlify
slug: markdown
date: January 28, 2022
createdAt: January 28, 2022 11:57PM
author: Douglas Richards
excerpt: Deploying a Nextjs app to Netlify errors
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
---

OSX will automatically resolve the naming issue whereas Netlify's linux servers will not. Component file names should be PascalCase.

'''
$ git config core.ignorecase false
```
Ensure that file path names match for capitalization.

Check that the Github file references are properly capitalized. Seems that local repo changes are not always being reflected in the Github repo. Push to Github and check.

11:52:53 PM: Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
  Possible solutions:
11:52:53 PM:     - Use `next start` to run a server, which includes the Image Optimization API.
11:52:53 PM:     - Use any provider which supports Image Optimization (like Vercel).
11:52:53 PM:     - Configure a third-party loader in `next.config.js`.
11:52:53 PM:     - Use the `loader` prop for `next/image`.
11:52:53 PM:   Read more: https://nextjs.org/docs/messages/export-image-api
