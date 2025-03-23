import { getPosts } from '$lib/index';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	// Wait for parent layout data if any
	await parent();

	try {
		const posts = await getPosts();
		console.log('Loading posts:', posts); // Debug log

		if (!posts || !Array.isArray(posts)) {
			console.error('Posts is not an array:', posts);
			return {
				posts: [],
				title: 'Blog | Joba Adewumi',
				description: 'Read my latest thoughts on software development'
			};
		}

		return {
			posts,
			title: 'Blog | Joba Adewumi',
			description: 'Read my latest thoughts on software development'
		};
	} catch (error) {
		console.error('Error loading posts:', error);
		return {
			posts: [],
			title: 'Blog | Joba Adewumi',
			description: 'Read my latest thoughts on software development'
		};
	}
}) satisfies PageLoad;
