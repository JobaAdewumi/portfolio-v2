import { getPosts } from '$lib/index';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// export const load = (async ({ params, parent }) => {
// 	// Wait for parent layout data
// 	await parent();

// 	try {
// 		const posts = await getPosts();
// 		const post = posts.find((p) => p.slug === params.slug);

// 		if (!post) {
// 			throw error(404, {
// 				message: 'Post not found'
// 			});
// 		}

// 		return {
// 			post,
// 			title: `${post.title} | Joba Adewumi`,
// 			description: post.description
// 		};
// 	} catch (error) {
// 		console.error('Error loading posts:', error);
// 		// throw error(500, {
// 		// 	message: `Error loading blog post, ${err.message}`
// 		// });
// 	}
// }) satisfies PageLoad;

export const load: PageLoad = async ({ params, parent }) => {
	// Wait for parent layout data
	await parent();

	try {
		const posts = await getPosts();
		const currentIndex = posts.findIndex((p) => p.slug === params.slug);

		if (currentIndex === -1) {
			throw error(404, 'Post not found');
		}

		const currentPost = posts[currentIndex];
		const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

		console.log(currentPost)
		return {
			post: currentPost,
			nextPost,
			title: `${currentPost.title} | Joba Adewumi`,
			description: currentPost.description
		};
	} catch (error) {
		console.error('Error loading posts:', error);
		// throw error(500, {
		// 	message: `Error loading blog post, ${err.message}`
		// });
	}
};