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
				gray: '#878787',
				'dark-gray': '#545454',
				dark: '#141414',
			},
			fontSize: {
				h1: [
					'50px',
					{
						lineHeight: '70.45px',
						fontWeight: 'bold',
					},
				],
				h2: [
					'35px',
					{
						lineHeight: '49.32px',
						fontWeight: 'bold',
					},
				],
				h3: [
					'25px',
					{
						lineHeight: '35.23px',
						fontWeight: 'bold',
					},
				],
				h4: [
					'24px',
					{
						lineHeight: '33.82px',
						fontWeight: 'bold',
					},
				],
				h5: [
					'22px',
					{
						lineHeight: '31px',
						fontWeight: 'bold',
					},
				],
				h6: [
					'16px',
					{
						lineHeight: '22.55px',
						fontWeight: 'bold',
					},
				],
				body: [
					'18px',
					{
						lineHeight: '36px',
						fontWeight: '500',
					},
				],
				mini: [
					'14px',
					{
						lineHeight: '28px',
						fontWeight: '400',
					},
				],
			},
		},
		plugins: [],
	},
}
