---
title: Override Eslint missing prop types
slug: Learning utility CSS
date: January 30, 2022
createdAt: January 29, 2022 3:49 PM
author: Douglas Richards
excerpt: Overcoming eslint and prettier errors
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
exampleImage: ''
postColor: 'bg-orange-600 dark:bg-blue-600'
cardtextcolor: 'white'
category: 'Linter'
---

Adding "react/prop-types": "ignore" to the .eslintrc.js file will override the missing prop types error.

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "warn",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "ignore"
  }
}
```

```
<h3 class="mt-2 ml-2 text-sm font-bold text-gray-700 bg-green-700 dark:text-gray-200">February 2, 2022</h3>
```
