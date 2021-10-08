module.exports = {
  purge: {
		content: ['./src/**/*.{js,jsx,ts,tsx}'],
		safelist: ['h-6', 'w-6', 'w-60', 'h-80', 'z-10', 'object-cover'],
	},
  darkMode: false, // or 'media' or 'class'
	experimental: {
    applyComplexClasses: true,
	},
  theme: {
    extend: {
			fontFamily: {
				'roboto': ['Roboto', 'sans-serif']
			}
		},
		colors: {
			primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
			white: 'var(--color-white)',
		}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
