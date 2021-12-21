---
title: Safely render markdown in react component
slug: markdown
date: September 10, 2021
createdAt: September 3, 2021 3:49 PM
author: Douglas Richards
excerpt: React-markdown is a markdown renderer for react.
thumbnail: https://res.cloudinary.com/raveniot/image/upload/c_scale,w_500/v1619638150/symmetry_afzqhu.jpg
heroImage: https://res.cloudinary.com/raveniot/image/upload/c_scale,w_1000/v1619638150/symmetry_afzqhu.jpg
exampleImage: ''
---

Using remark requires use of DangerouslySetInnerHTML which is vulnerable to XSS attacks.

React-Markdown provides a safer alternative.

