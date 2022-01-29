## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

- TODO

* [ ] collapsible navigation for mobile
* [ ] fix max width breakpoints in browser
* [ ] Header meta data
* [ ] Social links
* [ ] Implement MDX for Next Image sizing within markdown
* [ ] Revisit ReactMarkdown and SyntaxHighlighter to address code wrapping within code examples
* [ ] Get Syntax Highlighter to play nice with Tailwind
* [ ] There's always something to do

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

\*\* Markdown parsing

- react-syntax-highlighter
- gray matter
- react-markdown

\*\* Using syntax highlighting with component
https://thetombomb.com/posts/adding-code-snippets-to-static-markdown-in-Next%20js
