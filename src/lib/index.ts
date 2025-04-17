// place files you want to import through the `$lib` alias in this folder.

// import readingTime from 'reading-time';
// import type { Post } from '$lib/types/post';
// import { dev } from '$app/environment';

// export async function getPosts(): Promise<Post[]> {
// 	try {
// 		const posts = await Promise.all(
// 			Object.entries(
// 				import.meta.glob<{ metadata: Post; default: string }>('/src/lib/posts/*.md')
// 			).map(async ([path, resolver]) => {
// 				const { default: content, metadata } = await resolver();
// 				const slug = path.split('/').pop()?.slice(0, -3) ?? '';
// 				const stats = readingTime(content);

// 				if (!metadata || !metadata.title) {
// 					console.error(`Invalid post metadata in ${path}`);
// 					return null;
// 				}

// 				return {
// 					...metadata,
// 					slug,
// 					readingTime: stats.text,
// 					content
// 				} as Post;
// 			})
// 		);

// 		return posts
// 			.filter((post): post is Post => post !== null && (dev || post.published))
// 			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 	} catch (error) {
// 		console.error('Error in getPosts:', error);
// 		return [];
// 	}
// }

// import { calculateReadingTime } from './utils/readingTime';
// import type { Post } from '$lib/types/post';
// import { dev } from '$app/environment';

// export async function getPosts(): Promise<Post[]> {
// 	try {
// 		const posts = await Promise.all(
// 			Object.entries(
// 				import.meta.glob<{ metadata: Post; default: string }>('/src/lib/posts/*.md')
// 			).map(async ([path, resolver]) => {
// 				const { default: content, metadata } = await resolver();
// 				const slug = path.split('/').pop()?.slice(0, -3) ?? '';
// 				const readingTime = calculateReadingTime(content);

// 				if (!metadata || !metadata.title) {
// 					console.error(`Invalid post metadata in ${path}`);
// 					return null;
// 				}

// 				return {
// 					...metadata,
// 					slug,
// 					readingTime,
// 					content
// 				} as Post;
// 			})
// 		);

// 		return posts
// 			.filter((post): post is Post => post !== null && (dev || post.published))
// 			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 	} catch (error) {
// 		console.error('Error in getPosts:', error);
// 		return [];
// 	}
// }

import { dev } from '$app/environment';
import type { Post } from '$lib/types/post';
import { calculateReadingTime } from './utils/readingTime';

type MdsvexModule = {
	metadata: Partial<Post>;
	default: string;
};

export async function getPosts(): Promise<Post[]> {
	try {
		const paths = import.meta.glob<MdsvexModule>('/src/lib/posts/*.md', {
			eager: true,
			// query: '?raw',  
            // import: 'default'  
        
		});

		const posts = Object.entries(paths).map(([path, module]) => {
			// Add debug logging
			// console.log('Processing file:', path);
			// console.log('Module metadata:', module?.metadata);
			// console.log('Module content:', module?.default);

			if (!module?.metadata?.title || !module?.metadata?.date) {
				console.error(`Invalid post metadata in ${path}. Required fields: title, date`);
				return null;
			}

			const slug = path.split('/').pop()?.slice(0, -3) ?? '';
			// const content = module.default;
			// // Calculate and store reading time in metadata
			// module.metadata.readingTime = calculateReadingTime(content);
			// console.log(`Reading time for ${slug}:`, module.metadata.readingTime);

			return {
				...module.metadata,
				slug,
				content: module.default,
				readingTime: calculateReadingTime(module.default)
			} as unknown as Post;

			// const readingTime = calculateReadingTime(content);

			// return {
			// 	...module.metadata,
			// 	slug,
			// 	readingTime,
			// 	content
			// } as unknown as Post;
		});

		return posts
			.filter((post): post is Post => post !== null && (dev || post.published))
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	} catch (error) {
		console.error('Error in getPosts:', error);
		return [];
	}
}