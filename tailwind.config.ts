import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				productSans: ['"ProductSans"', 'sans-serif'],
				pT: ['"PT"', 'sans-serif']
			},
			colors: {
				customGrey: '#7e7e7e',
				customGreen: '#5f9a8a',
				customRed: '#d04f62',
				customBrown: '#272020'
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
