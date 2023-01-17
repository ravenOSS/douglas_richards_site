---
title: Duh! Manage overflow
slug: Prevent text overflow
date: May 21, 2021
createdAt: April 5, 2021 3:49 PM
author: Douglas Richards
issue: Why does a right margin appear on a small screen?
solution: Set text overflow behavior.
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
---

**Issue**

Link to long url causes an unwanted margin on the right side of the link.

**Solution**

A long url does not automatically break the line so the window is widened to fit the link. This causes a right margin on the right side of the link.

Tailwind classes

class="overflow-hidden"

Use overflow-x-auto

Use overflow-x-break-word
