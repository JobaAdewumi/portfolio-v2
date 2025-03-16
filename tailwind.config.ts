import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				productSans: ['ProductSans', 'system-ui', 'sans-serif'],
				pT: ['PT', 'system-ui', 'sans-serif']
			},
			colors: {
				customGrey: '#7e7e7e',
				customGreen: '#5f9a8a',
				customRed: '#d04f62',
				customBrown: '#272020',
				customYellow: 'color(display-p3 1 0.83 0.2)',
				customLightPink: 'color(display-p3 1 0.69 0.718)',
				customLightGreen: 'color(display-p3 0.693 0.865 0.666)',
				customLightBlue: 'color(display-p3 0.6 0.8 0.8)',
				customSunsetPink: 'color(display-p3 1 0.495 0.54)',
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
