// export type Post = {
// 	title: string;
// 	date: string;
// 	description: string;
// 	published: boolean;
// 	slug: string;
// 	readingTime: string;
// 	content: string;
// };

import type { SvelteComponent } from 'svelte';

export type Post = {
	title: string;
	date: string;
	description: string;
	published: boolean;
	slug: string;
	readingTime: string;
	content: typeof SvelteComponent; // Updated from ComponentType
};