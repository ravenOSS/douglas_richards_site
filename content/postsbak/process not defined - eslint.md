---
title: ESLint: process is not defined!
slug: eslint
date: February 4, 2022
createdAt: February 3, 2022 3:40 PM
author: Douglas Richards
excerpt: ESLint - process is not defined!

# thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
# thumbnail: 'symmetry_afzqhu.jpg'
thumbnail: 'v1619638150/symmetry_afzqhu.jpg'
heroImage: 'v1619638113/collapse_c1vfyl.jpg'
exampleImage: ''
---

An error surfaced in the getStaticProps function because eslint was not configured to include node in the env variable in .eslintrc.json

Use the following snippet to fix the error:

```
	"env": {
		// "browser": true,
		"es2021": true,
		"node": true
	},

```

Also, take a look at installing the eslint-plugin-react-hooks package as well as the Prettier ESLint plugin.
Read the instructions to get the latest version using a vsix file.