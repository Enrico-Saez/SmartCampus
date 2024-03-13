/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['"Montserrat"', 'sans-serif'],
			},
		}
	},

	plugins: []
};

module.exports = config;
