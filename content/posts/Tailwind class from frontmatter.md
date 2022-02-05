---
title: Use frontmatter field to set Tailwind CSS class
slug: Tailwind Background
date: February 2, 2022
createdAt: February 1,2022 3:40 PM
author: Douglas Richards
excerpt: Colorful?
thumbnail: 'v1619638113/collapse_c1vfyl.jpg'
heroImage: 'v1619638113/collapse_c1vfyl.jpg'
titlebackground: bg-green-700
exampleImage: ''
---

How to use a markdown frontmatter field to set a Tailwind CSS class in a Nextjs project.

The Nextjs project is configured as a static site and uses `gray-matter` to parse the markdown file's frontmatter. For this example, I'm using the `titlebackground` field to set the background color of the box.

The function used to fetch data from a specific file is `getStaticProps`. It returns a `Promise` that resolves to an object with the following properties: `postData.data` and `postData.content`.

```
export async function getStaticProps({ params }) {
  const postData = getPostById(params.id)
  return {
    props: {
      postData,
    },
  }
}
```
