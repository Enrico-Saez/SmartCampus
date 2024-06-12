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
		},
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '1920px'
		}
	},

	plugins: [
		require('tailwindcss-3d'),
	]
};

module.exports = config;
