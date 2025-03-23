// export function calculateReadingTime(text: string): string {
// 	const wordsPerMinute = 200;
// 	const words = text.trim().split(/\s+/).length;
// 	const minutes = Math.ceil(words / wordsPerMinute);

// 	return `${minutes} min read`;
// }

export function calculateReadingTime(text: string | undefined | null): string {
	if (!text || typeof text !== 'string') {
		return '1 min read';
	}

	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);

	return `${minutes} min read`;
}