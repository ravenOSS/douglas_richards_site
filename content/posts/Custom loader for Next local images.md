---
title: Custom loader for Next local images
slug: squares
date: February 4, 2022
createdAt: February 2, 2022 21:53 PM
author: Douglas Richards
excerpt: Create custom loader for Next local images
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'squares'
category: 'CSS'
---

When using a service provider such as Cloudinary, the configuration will result in all image URLs being prepended with the cloudinary domain and,of course, they do not display.

To resolve this issue, we can create a custom loader that allows sourcing from a local project directory.

```
export function staticLoader({ src, width, quality }) {
	return `${src}?w=${width}&q=${quality || 75}`
}
```

Example of using the Image component with local files. In this next example for a footer component, the image is stored in the public folder.

```
<Image
loader={({src})=> src}
src="/logo.png"
layout="fill" />
```

Note that layout="fill" means that image size does not need to be specified in the image definition but should be in the containing element that also requires position: relative.

This Stackoverflow answer explains how to use the Nextjs Image component with local files using a per image loader.

https://stackoverflow.com/questions/70429040/getting-public-image-asset-in-next-js-project-folder-when-loader-configuration-p

The documentation for the Nextjs image component is here: [Image Docs](https://nextjs.org/docs/advanced-features/custom-server-side-rendering#image-component)
