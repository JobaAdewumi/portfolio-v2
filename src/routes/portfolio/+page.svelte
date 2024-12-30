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
			photo6: ''
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
			photo6: ''
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
			photo6: ''
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
			photo6: ''
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
			photo6: ''
		}
	];
</script>

<Navbar />

<section class="my-10">
	<h2 class="mx-3 my-3 bg-red-500 text-left font-pT text-3xl md:text-5xl xl:text-6xl">PORTFOLIO</h2>
</section>

<section>
	<!-- Would have to do a for each statement to render the multiple data -->
	{#each data as { title, image, alt, description, link, video, podcastEmbed, cta, photo1, photo2, photo3, photo4, photo5, photo6 }}
		<div>
			<h2 class="mx-3 my-3 bg-red-500 text-left font-pT text-xl capitalize md:text-3xl xl:text-4xl">
				{title}
			</h2>
			<div class="mx-7 mb-3 mt-5 md:mx-12">
				<div>
					<img src={image} {alt} />
				</div>
				<!-- Would have an if statement to check if video field is an empty string else show a video embed -->
				{#if video !== ''}
					<video src={video} controls>
						<track kind="captions" srclang="en" label="English" />
					</video>
				{/if}

				{#if podcastEmbed !== ''}
					<!-- For writing -->
					<!-- <iframe title="Life Podcast by Joba Adewumi"
								src='https://jobaadewumi.substack.com/embed'
								width='100%'
								height='232'
								style={{
									marginTop: '20px',
									borderRadius: '12px',
									border: '1px solid #8fb99b',
								}}
								allowFullScreen='no'
								allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe> -->

					<iframe
						title="Life Podcast by Joba Adewumi"
						class="mt-5 rounded-xl"
						src="https://open.spotify.com/embed/show/4fIBS5rikdEvGh6tSJ93zW?utm_source=generator&t=0"
						width="100%"
						height="232"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				{/if}

				{#if description === ''}
					<div>
						<img src={photo1} alt="" />
						<img src={photo2} alt="" />
						<img src={photo3} alt="" />
						<img src={photo4} alt="" />
						<img src={photo5} alt="" />
						<img src={photo6} alt="" />
					</div>
				{:else}
					<p>
						{description}
					</p>
				{/if}
				<div class="flex justify-center">
					<button class="h-12 w-auto rounded-2xl bg-blue-500 px-3 py-3" type="button">
						<a href={link}>{cta}</a>
					</button>
				</div>
			</div>
		</div>
	{/each}
</section>
