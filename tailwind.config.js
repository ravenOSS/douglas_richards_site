const { fuchsia } = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./content/**/*.{md,mdx}',
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						pre: null,
						maxWidth: '60ch',
					},
				},
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
	],
}
