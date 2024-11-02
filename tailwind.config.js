export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: '#ff5722',
				'orange-light': '#fff6f2',
				'orange-dark': '#ffa589',
				navbar: '#f8f8f8',
				headings: '#000',
				body: '#333333',
				white: '#fff',
			},
			fontSize: {
				h1: [
					'56px',
					{
						lineHeight: '56px',
						fontWeight: 'bold',
					},
				],
				h2: [
					'40px',
					{
						lineHeight: '44px',
						fontWeight: 'bold',
					},
				],
			},
		},
		plugins: [],
	},
}
