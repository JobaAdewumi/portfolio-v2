<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	const isOpen = writable(false);
	const scrolled = writable(false);

	function toggleMenu() {
		$isOpen = !$isOpen;
	}

	function handleScroll() {
		if (window.scrollY > 20) {
			$scrolled = true;
		} else {
			$scrolled = false;
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<nav
	class="fixed left-0 right-0 top-0 z-50 mx-3 my-3 flex justify-between rounded-2xl px-1 py-1 transition-all duration-300"
	class:bg-customBrown={$scrolled || $isOpen}
	class:bg-transparent={!$scrolled && !$isOpen}
>
	<div class="max-w-12">
		<a href="/">
			<enhanced:img src="/static/images/logo-white.png" alt="Logo" />
		</a>
	</div>

	<div class="flex items-center">
		<button
			class="p-2 text-white transition-transform duration-300 md:hidden"
			class:rotate-90={$isOpen}
			onclick={toggleMenu}
			aria-label="Toggle menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 transition-transform duration-300"
				class:rotate-45={$isOpen}
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
		<div
			class="menu mx-3 hidden flex-wrap items-center justify-around space-x-4 font-productSans transition-all duration-300 md:flex md:space-x-8"
		>
			<a
				href="/blog"
				class="block text-customRed transition-all duration-300 hover:text-customGreen md:inline"
				>Blog</a
			>
			<a
				href="/about"
				class="block text-customRed transition-all duration-300 hover:text-customGreen md:inline"
				>About Me</a
			>
			<a
				href="/portfolio"
				class="block text-customRed transition-all duration-300 hover:text-customGreen md:inline"
				>Portfolio</a
			>
			<!-- <a href="/services" class="hover:text-customGreen text-customRed block md:inline transition-all duration-300">Services</a
			> -->
			<a
				href="/links"
				class="block text-customRed transition-all duration-300 hover:text-customGreen md:inline"
				>Links</a
			>
		</div>

		<div
			class="absolute right-0 top-16 w-full transform rounded-2xl transition-all duration-300 ease-in-out"
			class:bg-customBrown={$isOpen}
			class:translate-x-0={$isOpen}
			class:translate-x-full={!$isOpen}
			class:opacity-100={$isOpen}
			class:opacity-0={!$isOpen}
			class:pointer-events-none={!$isOpen}
		>
			<div
				class="flex flex-col space-y-4 p-4 font-productSans md:flex-row md:space-x-8 md:space-y-0"
			>
				<a href="/blog" class="text-customRed hover:text-customGreen">Blog</a>
				<a href="/about" class="text-customRed hover:text-customGreen">About Me</a>
				<a href="/portfolio" class="text-customRed hover:text-customGreen">Portfolio</a>
				<!-- <a href="/services" class="hover:text-customGreen text-customRed">Services</a> -->
				<a href="/links" class="text-customRed hover:text-customGreen">Links</a>
			</div>
		</div>
	</div>
</nav>
