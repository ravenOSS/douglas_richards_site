const { fuchsia } = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./content/**/*.{md,mdx}',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
			},
			container: {
				center: true,
				padding: '1rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
