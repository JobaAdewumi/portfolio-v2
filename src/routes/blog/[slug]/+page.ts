import { getPosts } from '$lib/index';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
	// Wait for parent layout data
	await parent();

	try {
		const posts = await getPosts();
		const post = posts.find((p) => p.slug === params.slug);

		if (!post) {
			throw error(404, {
				message: 'Post not found'
			});
		}

		return {
			post,
			title: `${post.title} | Joba Adewumi`,
			description: post.description
		};
	} catch (error) {
		console.error('Error loading posts:', error);
		// throw error(500, {
		// 	message: `Error loading blog post, ${err.message}`
		// });
	}
}) satisfies PageLoad;
