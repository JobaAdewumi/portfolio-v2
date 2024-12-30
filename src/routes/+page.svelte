<script lang="ts">
	import Navbar from '../lib/components/navbar.svelte';
</script>

<Navbar />

<section class="mx-7 mb-3 mt-5 md:mx-12">
	<div>
		<h2 class="font-pT my-3 bg-red-500 text-center text-6xl md:text-8xl xl:text-9xl">
			This is the intro
		</h2>
	</div>
	<div class="flex items-center justify-center">
		<div class="w-2/4">
			<enhanced:img
				class="mx-auto rounded-3xl"
				src="$lib/assets/images/headshot.jpg"
				alt="An alt text"
			/>
		</div>
	</div>
	<div class="mb-5 mt-7 flex items-center justify-center">
		<button class="h-12 w-28 rounded-2xl bg-blue-500 px-3 py-3" type="button">Portfolio</button>
	</div>
</section>

<!-- <section>
	<div class="mx-3 flex justify-around">
		<span> About Me </span>
		<span> Portfolio </span>
		<span> Services </span>
		<span> Links </span>
	</div>

	<div>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum esse autem maiores. Eum
			deserunt quaerat, quas nulla facere laborum, quasi iusto amet labore vero error repellendus
			asperiores magnam voluptatem iure.
		</p>
	</div>
</section> -->
