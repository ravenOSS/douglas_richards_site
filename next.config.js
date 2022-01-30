module.exports = {
	images: {
		// loader: 'cloudinary',
		// path: 'https://res.cloudinary.com/raveniot/image/upload/',
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
