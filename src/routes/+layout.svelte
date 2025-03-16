<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Seo from '$lib/components/seo.svelte';
	let { children } = $props();
</script>

<Seo
	title={$page.data?.title || 'Default Title'}
	description={$page.data?.description || 'Default description'}
	url={$page.url.href}
/>

{@render children()}
