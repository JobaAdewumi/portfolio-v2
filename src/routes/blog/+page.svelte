<script lang="ts">
	import Footer from '../../lib/components/footer.svelte';
	import Navbar from '../../lib/components/navbar.svelte';
	import Seo from '../../lib/components/seo.svelte';
    import type { PageData } from './$types';
    const { data } = $props<PageData>();
</script>

<Seo
	title="Joba's Thoughts - Joba Adewumi "
	description="My thoughts on life. "
	keywords="software engineer, full-stack developer, web development, React, Node.js, JavaScript, TypeScript, SvelteKit, Python, Data Science, Flutter, Mobile development, Android, IOS, blog, portfolio, Joba Adewumi, frontend development, backend development, photography, design, writing, podcasting, videography"
	image="/images/multiple-logo-scattered.png"
/>

<Navbar />

<div class="mt-10 mx-auto max-w-4xl px-4 py-12">
    <header class="mb-12">
        <h1 class=" my-3 text-left font-pT text-4xl font-bold md:text-5xl xl:text-6xl text-white">
            Blog Posts
        </h1>
        <p class="text-gray-400 text-lg ">
            Thoughts and insights about Life
        </p>
    </header>

    {#await data}
        <div class="flex justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    {:then loadedData}
        <div class="space-y-12 font-productSans">
            {#if loadedData.posts && loadedData.posts.length > 0}
                {#each loadedData.posts as post}
                    <article class="group border-b border-gray-700/50 pb-12 transition-all hover:border-gray-600">
                        <a href="/blog/{post.slug}" class="block space-y-4">
                            <h2 class="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>
                            <div class="text-sm text-gray-400 flex items-center gap-2">
                                <time datetime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <span class="text-gray-500">•</span>
                                <span>{post.readingTime}</span>
                            </div>
                            <p class="text-gray-300 leading-relaxed">
                                {post.description}
                            </p>
                            <div class="pt-2">
                                <span class="text-blue-400 group-hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                                    Read more 
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                {/each}
            {:else}
                <div class="text-center py-12">
                    <p class="text-gray-400 text-lg">No blog posts found.</p>
                </div>
            {/if}
        </div>
    {:catch error}
        <div class="bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-400">
            Error loading posts: {error.message}
        </div>
    {/await}
</div>

<Footer />