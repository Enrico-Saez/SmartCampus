/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['"Montserrat"', 'sans-serif'],
				'outfit': ['Outfit', 'sans-serif']
			},
			colors: {
				'primary': '#77DD42',
				'secondary': '#48C477',
				'tertiary': '#011627'
			}
		}
	},

	plugins: []
};

module.exports = config;
