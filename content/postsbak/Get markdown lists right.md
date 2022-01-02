---
title: Unordered List from Markdown
slug: Markdown-Unordered-List
date: February 16, 2021
createdAt: February 3, 2021 3:49 PM
author: Douglas Richards
excerpt: Why are list bullets not contained?
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638150/symmetry_afzqhu.jpg'
exampleImage: ''
---

Defining an unordered list in markdown is as simple as prefixing list items with

- '-'
- '\*'
- '+'

However, the bullets are not contained in the list containing element such <div>.

One fix is a css class applied to ul and li elements.

```
ul li {
  list-style-position: inside;
  ## or
  list-style: inside;
}
```

**Caution**
Note that there is variance among browsers regarding behavior when a block element is placed first within a list element declared as list-style-position: inside. Chrome and Safari both place this element on the same line as the marker box, whereas Firefox, Internet Explorer, and Opera place it on the next line. For more information on this, see bug 36854.

But this can mess up the paragraph formatting since wrapped text will not be aligned.

An alternative is to put a left margin on the list items.

Placing a margin-left on the list items will maintain the alignment of the wrapped text. This may have to played with but could have some unexpected results if applied globally.

Side note: space between bullets and text can be adjusted with padding-left.
