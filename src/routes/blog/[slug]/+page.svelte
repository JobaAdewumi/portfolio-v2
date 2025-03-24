<script lang="ts">
	import Footer from '../../../lib/components/footer.svelte';
	import Navbar from '../../../lib/components/navbar.svelte';
	import Seo from '../../../lib/components/seo.svelte';
	import type { PageData } from './$types';
	const { data } = $props<PageData>();
</script>

<Navbar />

<article class="mx-auto mt-10 max-w-3xl px-4 py-12">
	{#await data then loadedData}
		<Seo
			title="{loadedData.post.title} - Joba's Thoughts"
			description={loadedData.post.description}
			keywords="software engineer, full-stack developer, web development, React, Node.js, JavaScript, TypeScript, SvelteKit, Python, Data Science, Flutter, Mobile development, Android, IOS, blog, portfolio, Joba Adewumi, frontend development, backend development, photography, design, writing, podcasting, videography"
			image="/images/thoughts.png"
		/>
		<header class="mb-12">
			<h1 class="font-pT text-4xl font-bold text-white md:text-5xl lg:text-6xl">
				{loadedData.post.title}
			</h1>
			<div class="mt-6 flex items-center gap-3 text-gray-400">
				<time datetime={loadedData.post.date} class="text-sm">
					{new Date(loadedData.post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
				<span class="text-gray-600">•</span>
				<span class="text-sm">{loadedData.post.readingTime}</span>
			</div>
		</header>

		<div class="prose prose-lg prose-invert max-w-none font-productSans">
			{#if loadedData.post.content}
				{@render loadedData.post.content()}
			{/if}
		</div>

		<footer class="mt-16 border-t border-gray-800 pt-8">
			<div class="flex items-center justify-between">
				<a
					href="/blog"
					class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Back to blog
				</a>

				{#if loadedData.nextPost}
					<a
						href="/blog/{loadedData.nextPost.slug}"
						class="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400"
					>
						<span class="text-right">
							<span class="block text-sm text-gray-500">Next post</span>
							<span class="block group-hover:text-blue-400">{loadedData.nextPost.title}</span>
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				{/if}
			</div>
		</footer>
	{:catch error}
		<div class="rounded-lg border border-red-500/50 bg-red-900/20 p-6 text-red-400">
			<h2 class="mb-2 text-2xl font-bold">Error Loading Post</h2>
			<p>{error.message}</p>
			<a
				href="/blog"
				class="mt-4 inline-flex items-center gap-2 text-red-400 transition-colors hover:text-red-300"
			>
				Return to blog
			</a>
		</div>
	{/await}
</article>

<!-- ...existing code... -->

<Footer />
