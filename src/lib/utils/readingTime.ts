// export function calculateReadingTime(text: unknown): string {
// 	// Add debug logging
// 	console.log('Input type:', typeof text);
// 	console.log('Input value:', text);

// 	// Handle null/undefined case
// 	if (!text) {
// 		return '1 min read';
// 	}

// 	// Convert to string if not already
// 	const textContent = text.toString();

// 	// Extract actual text content from Svelte component string
// 	const cleanText = textContent
// 		.replace(/\${.*?}/g, '') // Remove template literals
// 		.replace(/\$\{.*?\}/g, '') // Remove expressions
// 		.replace(/\s*\${.*?}\s*/g, ' ') // Clean up spaces around expressions
// 		.replace(/(?:\r\n|\r|\n|\s)+/g, ' ') // Normalize whitespace
// 		.replace(/\$\{.*?\}/g, '') // Remove any remaining expressions
// 		.replace(/\$\{.*?\}/g, '') // Clean up thoroughly
// 		.replace(/(?:__vite_ssr_import_\d+__\.)?(?:push|pop|push_element|pop_element)\([^)]*\);?/g, '') // Remove Svelte SSR functions
// 		.replace(/\$\$payload\.out \+= `([^`]*)`/g, '$1') // Extract content from payload assignments
// 		.trim();

// 	// Add debug logging for cleaned text
// 	// console.log('Cleaned text:', cleanText);

// 	const wordsPerMinute = 200;
// 	const words = cleanText.split(/\s+/).length;
// 	const minutes = Math.ceil(words / wordsPerMinute);
// 	console.log(`${minutes} min read`);

// 	return `${minutes} min read`;
// }

export function calculateReadingTime(text: unknown): string {
	// Debug logging to track when and how the function is called
	console.log('=== Reading Time Calculation ===');
	console.log('Input type:', typeof text);

	// If it's a function (during hydration), we need to handle differently
	if (typeof text === 'function') {
		try {
			const functionString = text.toString();
			// Extract content between backticks in $$payload.out += `content`
			const matches = functionString.match(/\$\$payload\.out \+= `([^`]+)`/g);
			if (matches) {
				const content = matches
					.map((m) => m.replace(/\$\$payload\.out \+= `/, '').replace(/`$/, ''))
					.join(' ')
					.replace(/\${[^}]+}/g, '')
					.trim();

				const words = content.split(/\s+/).length;
				const minutes = Math.ceil(words / 200);
				console.log('Words found (function):', words);
				return `${minutes} min read`;
			}
		} catch (error) {
			console.error('Error processing function content:', error);
		}
	}

	// Handle string content (during server-side rendering)
	if (typeof text === 'string') {
		const words = text.trim().split(/\s+/).filter(Boolean).length;
		const minutes = Math.ceil(words / 200);
		console.log('Words found (string):', words);
		return `${minutes} min read`;
	}

	console.log('Falling back to default reading time');
	return '1 min read';
}