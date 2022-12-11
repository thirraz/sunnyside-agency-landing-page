/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			colors: {
				hoverYellow: "#FFFBF8",
				hoverPink: "#FFFAF7",
			},
			fontFamily: {
				Barlow: '"Barlow", sans-serif',
				Fraunces: '"Fraunces", serif',
			},
		},
	},

	plugins: [],
};
