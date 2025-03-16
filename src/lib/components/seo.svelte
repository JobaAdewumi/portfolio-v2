<script lang="ts">
	const {
		title = "Joba Adewumi's Portfolio",
		description = 'Full-stack software engineer specializing in Web and mobile development and Data Science, with expertise in React, Svelte, Node.js, Python and modern JavaScript. Podcaster, Writer, Designer and Photographer. Explore my projects and professional experience.',
		keywords = 'software engineer, full-stack developer, web development, React, Node.js, JavaScript, TypeScript, SvelteKit, Python, Data Science, Flutter, Mobile development, Android, IOS, blog, portfolio, Joba Adewumi, frontend development, backend development, photography, design, writing, podcasting, videography',
		image = '/images/multiple-logo-scattered.png',
		url = 'https://jobaadewumi.vercel.app'
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
