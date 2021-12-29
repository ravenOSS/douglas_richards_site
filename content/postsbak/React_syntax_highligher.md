---
title: Using React-Syntax-Highlighter
slug: squares
date: December 19, 2021
createdAt: December 17, 2021 11:15 PM
author: Douglas Richards
excerpt: Basic syntax highlighting component
thumbnail: v1619638137/squares_pwjy6f.jpg
heroImage: v1619638137/squares_pwjy6f.jpg
exampleImage: ''
---

This component is used to highlight code snippets in markdown files. Used with react-markdown.

```
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Codeblock = {
	code({ children }) {
		return (
			<SyntaxHighlighter
				style={vscDarkPlus}
				language='javascript'
				PreTag='div'
				showLineNumbers={true}
				wrapLines={true}
			>
				{String(children).replace(/\n$/, '').replace(/\t/g, '  ')}
			</SyntaxHighlighter>
		)
	},
}

export default Codeblock

// regex replace(/\n$/, '') removes the last newline character
// regex replace(/\t/g, ' ') /g replaces all tabs with spaces
```

Since code blocks are not rendered in markdown, the code block component is used to render the code.

The code used in the blogs is typically copied from VSCode. The code is formatted with tabs and a newline character at the end. But, apparently there's no setting to override the highlighter tab width. Regex is used to replace the tabs with a couple of spaces. This is a workaround for the issue and results in narrower code blocks.
