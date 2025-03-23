<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<PageData>();
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<h1 class="mx-3 my-3 text-left font-pT text-3xl md:text-5xl xl:text-6xl text-white">Blog Posts</h1>

	{#await data then loadedData}
		<div class="space-y-8">
			{#if loadedData.posts && loadedData.posts.length > 0}
				{#each loadedData.posts as post}
					<article class="border-b pb-8">
						<h2 class="text-2xl font-semibold hover:text-blue-600">
							<a href="/blog/{post.slug}">{post.title}</a>
						</h2>
						<div class="mt-2 text-sm text-gray-600">
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})} · {post.readingTime}
						</div>
						<p class="mt-4 text-gray-700">{post.description}</p>
					</article>
				{/each}
			{:else}
				<p class="text-gray-600">No blog posts found.</p>
			{/if}
		</div>
	{:catch error}
		<p class="text-red-600">Error loading posts: {error.message}</p>
	{/await}
</div>
