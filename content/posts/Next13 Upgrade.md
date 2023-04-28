---
title: Next 13 Upgrade Fumbles
slug: Some common errors
date: Nov 30, 2022
createdAt: Nov 30, 2022 3:49 PM
author: Douglas Richards
issue: Errors encountered while upgrading existing project
solution: Next has published solution on website
exampleImage: ''
---

**Issue**

Upgrading existing project to Nextjs 13

**Solution**

Search Nextjs docs using the error message

Invalid <Link> with <a> child
Why This Error Occurred
Starting with Next.js 13, <Link> renders as <a>, so attempting to use <a> as a child is invalid.

Possible Ways to Fix It
Run the new-link codemod to automatically upgrade previous versions of Next.js to the new <Link> usage:

npx @next/codemod new-link .
This will change <Link><a id="link">Home<a></Link> to <Link id="link">Home</Link>.

Alternatively, you can add the legacyBehavior prop <Link legacyBehavior><a id="link">Home<a></Link>.