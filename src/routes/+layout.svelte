<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Seo from '$lib/components/seo.svelte';
	let { children } = $props();
</script>

<!--  -->

{@render children()}
