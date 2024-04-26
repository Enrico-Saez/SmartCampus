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
			},
			boxShadow: {
				'inner-light': 'inset 0 0 5px rgba(0,0,0,.2)',
				'inner-dark': 'inset 0 0 5px rgba(0,0,0,.8)',
			}
		}
	},

	plugins: []
};

module.exports = config;
