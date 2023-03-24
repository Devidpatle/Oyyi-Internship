/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui:{
		themes: [
			{
				oyyi_theme: {
					primary: "#1f7a8c",
					secondary: "#222E50",
					accent: "#B80C09",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	}
}
