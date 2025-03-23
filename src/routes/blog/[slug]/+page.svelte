<script lang="ts">
    import type { PageData } from './$types';
    const { data } = $props<PageData>();
</script>

<article class="max-w-3xl mx-auto px-4 py-8">
    {#await data then loadedData}
        <header class="mb-8">
            <h1 class="text-4xl font-bold">{loadedData.post.title}</h1>
            <div class="text-gray-600 mt-4">
                {new Date(loadedData.post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })} · {loadedData.post.readingTime}
            </div>
        </header>

        <div class="prose prose-lg max-w-none">
           {#if loadedData.post.content}
                {@render loadedData.post.content()}
            {/if}
        </div>
    {:catch error}
        <div class="text-red-600">
            <h2 class="text-2xl font-bold">Error</h2>
            <p>{error.message}</p>
        </div>
    {/await}
</article>