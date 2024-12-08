import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				ProductSans: ['ProductSans', 'sans-serif'],
				PT: ['PT', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
