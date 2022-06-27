---
title: Rendering syntax highlighted code from Markdown
slug: ReactMarkdown & React Syntax Highlighter
date: January 21, 2022
createdAt: January 1, 2022 11:49 PM
author: Douglas Richards
excerpt: A combination of packages provides an easy way to render syntax highlighted code from Markdown.
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
category: 'Syntax Highlighter'
---

For any developer blogger writing markdown, its obvious that a method is needed to render code examples.

ReactMarkdown combined with React Syntax Highlighter yields a simple solution.

Here is some markdown with some code examples:

Here is a component that renders a markdown file:

Here is a component that breaks out the processing of the code examples:

Note that the codeblock.js component is imported into the xxxx.js file and used as an argument to the ReactMarkdown block.

Embedding code snippets in markdown paragraphs will result in a React error because the <pre> tag cannot be nested in a <p> tag.

In the example codeBlock.js, the padding between the line number and code is reduced. Further, the font size is reduced. Both style changes are intended to squeeze a little more room on small screens and hold-off line wrapping.
