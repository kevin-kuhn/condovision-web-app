module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
