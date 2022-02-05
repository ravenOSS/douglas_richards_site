---
title: Safely render markdown in react component
slug: markdown
date: September 10, 2021
createdAt: September 3, 2021 3:49 PM
author: Douglas Richards
excerpt: React-markdown is a markdown renderer for react.
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
imagealt: 'elevator mineshaft'
---

Using remark requires use of DangerouslySetInnerHTML which is vulnerable to XSS attacks.

However, if you're using trusted content, you can use dangerouslySetInnerHTML.

React-Markdown provides a safer alternative.

But, the real benefit of using react-markdown is that it easily integrates with other libraries. Most importantly, for developers, integrating with react-syntax-highlighter is a breeze.

Also, it's easy to use the remarkGfm plugin to render Github flavored markdown.
