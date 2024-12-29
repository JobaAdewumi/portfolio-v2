<script>
	import Navbar from '$lib/components/navbar.svelte';

	const data = [
		{
			title: 'Video Editing & Videography',
			image: 'src/lib/assets/images/project1.jpg',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'CTA',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
		},
		{
			title: 'Writing & Editing',
			image: 'src/lib/assets/images/project1.jpg',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'CTA',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
		},
		{
			title: 'Podcast Editing & Production',
			image: 'src/lib/assets/images/project1.jpg',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'CTA',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
		},
		{
			title: 'Software Development & Web Development',
			image: 'src/lib/assets/images/project1.jpg',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'CTA',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
		},
		{
			title: 'Photography & Photo Editing',
			image: 'src/lib/assets/images/project1.jpg',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'CTA',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
		},
	];


</script>

<Navbar />

<section class="my-10">
	<h2 class="font-pT my-3 mx-3 bg-red-500 text-left text-3xl md:text-5xl xl:text-6xl">
		PORTFOLIO
	</h2>
</section>

<section>
	<!-- Would have to do a for each statement to render the multiple data -->
	 {#each data as { title, image, alt, description, link, video, podcastEmbed, cta, photo1, photo2, photo3, photo4, photo5, photo6 }}
	<div>
		<h2>{title}</h2>
		<div><img src="{image}" alt="{alt}" /></div>
		<div>
			<p>
				{description}
			</p>
			<div><button type="button">CTA</button></div>
		</div>
	</div>
	{/each}
</section>
