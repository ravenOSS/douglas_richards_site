This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Using gray-matter to parse frontmatter and markdown, react-markdown for converting it to HTML and displaying it.

TODO: Describe setup for Cloudinary image hosting.

** Configure next.config.js **

```
images: {
loader: 'cloudinary',
path: 'https://res.cloudinary.com/raveniot',
domains: ['res.cloudinary.com'],
},
```

** Cloudinary file name **

'drumroll_wy6xwb.jpg'

** Usage in Image component **

```
	<Image
		src='drumroll_wy6xwb.jpg'
		width={150}
		height={150}
		alt='Round Building'
	/>
```

** Resulting URL: **
https://res.cloudinary.com/raveniot/f_auto,c_limit,w_384,q_auto/drumroll_wy6xwb.jpg

Using Image component example:

```
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import nextjsBlackLogo from '../public/nextjsBlackLogo.svg'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Built with</p>
			<Image src={nextjsBlackLogo.svg} alt='Next.js' />
		</footer>
	)
}
```

\*\* Revision
In order to use both local and remote images, you need to edit your `next.config.js` file:

```
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
```

Remote images require a full URL, not just a path.
Per the docs, a loader and path are required in nextjs.config.js. However, this results in local image urls being prepended with Cloudinary's CDN.

Can Image be overridden for local images directory? Seems not.


** Markdown parsing
- react-syntax-highlighter
- gray matter
- react-markdown