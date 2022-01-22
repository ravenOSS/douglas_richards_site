---
title: Nextjs Image component with local and remote files
slug: squares
date: October 22, 2021
createdAt: October 12, 2021 3:53 PM
author: Douglas Richards
excerpt: Using Nextjs Image component with local and remote files
thumbnail: 'https://res.cloudinary.com/raveniot/image/upload/v1619638137/squares_pwjy6f.jpg'
heroImage: 'https://res.cloudinary.com/raveniot/image/upload/v1619638137/squares_pwjy6f.jpg'
exampleImage: ''
imagealt: 'squares'
introduction: |2
  Nextjs has really solid image handling capabilities.  However, the documentation details how to separately handle local and remote images but not when using both within a project.

  This article describes how to use local and Cloudinary hosted images together with the   Netlify-CMS. simple example of how to use it with local and remote files. Nextjs has really   solid image handling capabilities.  This is a simple example of how to use it with local and   remote files. Nextjs has really solid image handling capabilities.  This is a simple example of   how to use it with local and remote files.
---

Nextjs has really solid image handling capabilities. However, the documentation details how to separately handle local and remote images but not when using both within a project.

This article describes how to use local and Cloudinary hosted images together with the Netlify-CMS. simple example of how to use it with local and remote files. Nextjs has really solid image handling capabilities. This is a simple example of how to use it with local and remote files. Nextjs has really solid image handling capabilities. This is a simple example of how to use it with local and remote files.

The docs for the Next Image component treat local and remote image separately. This is how to deal with the issue.

- Define image path in the `src` attribute.
- Define image url
- Define image loader

**_This does not work when deployed._**
Setting the parameters in the next.config.js file means that all images are still prepended with the url. The pages will render with the local image but there will be a placeholder for the remote image that does not exist.

```
// next.config.js

module.exports = {
	images: {
		domains: ['res.cloudinary.com'],
	},
	webpack: (cfg) => {
		cfg.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
			options: { mode: ['react-component'] },
		})
		return cfg
	},
	reactStrictMode: true,
}

// loader: 'cloudinary',
// path: 'https://res.cloudinary.com/raveniot/image/upload/',
```

Note that the 'loader: 'cloudinary' is not required. Just the cloudinary domain is sufficient.

Example of using the Image component with local files. In this next example for a footer component, the image is stored in the public folder.

```
import Image from 'next/image'
import nextLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<div className='flex items-center content-end min-w-full px-12 py-4 '>
			{/* <div className='flex items-center content-end min-w-full px-12 py-4 bg-gray-300 border-t-2 border-orange-400'> */}
			<div className='mr-auto text-sm font-semibold text-gray-600'>
				© 2018 - {new Date().getFullYear()} Douglas Richards
			</div>
			<div className='text-sm font-semibold text-gray-600 mr-3.5'>
				Built with
			</div>

			<Image
				// className='pr-6'
				src={nextLogo}
				width={75}
				height={45}
				alt='Next.js'
			/>
		</div>
	)
}
```

The documentation for the Nextjs image component is here: [Image Docs](https://nextjs.org/docs/advanced-features/custom-server-side-rendering#image-component)
