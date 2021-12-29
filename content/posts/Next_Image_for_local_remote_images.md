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
---

The docs for the Next Image component treat local and remote image separately. This is a workaround for the issue.

- Define image path
- Define image url
- Define image loader

**This does not work when deployed**
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
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextjsBlackLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with </p>
			{/* <p className={styles.logo}> */}
			<Image
				className={styles.logo}
				src={nextjsBlackLogo}
				alt='Next.js Logo'
			/>
		</footer>
	)
}
```

The documentation for the Nextjs image component is here: [Image Docs](https://nextjs.org/docs/advanced-features/custom-server-side-rendering#image-component)
