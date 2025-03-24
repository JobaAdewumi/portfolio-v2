// export function calculateReadingTime(text: string): string {
// 	const wordsPerMinute = 200;
// 	const words = text.trim().split(/\s+/).length;
// 	const minutes = Math.ceil(words / wordsPerMinute);

// 	return `${minutes} min read`;
// }

// export function calculateReadingTime(text: string | undefined | null): string {
// 	console.log('reading time')
// 	console.log(text)
// 	if (!text || typeof text !== 'string') {
// 		return '1 min read';
// 	}

// 	const wordsPerMinute = 200;
// 	const words = text.trim().split(/\s+/).length;
// 	const minutes = Math.ceil(words / wordsPerMinute);

// 	return `${minutes} min read`;
// }
export function calculateReadingTime(text: any): string {
	// Add debug logging
	console.log('Input type:', typeof text);
	console.log('Input value:', text);

	// Handle null/undefined case
	if (!text) {
		return '1 min read';
	}

	// Convert to string if not already
	const textContent = text.toString();

	// Extract actual text content from Svelte component string
	const cleanText = textContent
		.replace(/\${.*?}/g, '') // Remove template literals
		.replace(/\$\{.*?\}/g, '') // Remove expressions
		.replace(/\s*\${.*?}\s*/g, ' ') // Clean up spaces around expressions
		.replace(/(?:\r\n|\r|\n|\s)+/g, ' ') // Normalize whitespace
		.replace(/\$\{.*?\}/g, '') // Remove any remaining expressions
		.replace(/\$\{.*?\}/g, '') // Clean up thoroughly
		.replace(/(?:__vite_ssr_import_\d+__\.)?(?:push|pop|push_element|pop_element)\([^)]*\);?/g, '') // Remove Svelte SSR functions
		.replace(/\$\$payload\.out \+= `([^`]*)`/g, '$1') // Extract content from payload assignments
		.trim();

	// Add debug logging for cleaned text
	// console.log('Cleaned text:', cleanText);

	const wordsPerMinute = 200;
	const words = cleanText.split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);

	return `${minutes} min read`;
}