module.exports = {
	images: {
		loader: 'cloudinary',
		path: 'https://res.cloudinary.com/raveniot',
		domains: ['res.cloudinary.com', 'localhost'],
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
