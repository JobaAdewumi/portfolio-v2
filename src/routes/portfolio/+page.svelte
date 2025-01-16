<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	const data = [
		{
			title: 'Video Editing & Videography',
			image: '',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: 'https://www.youtube.com/channel/UCZGvrbbwfQw3YyKvfIt3t4A',
			video: 'https://www.youtube.com/embed/uZ50Kbc2Jpg',
			podcastEmbed: '',
			cta: 'Watch my Videos',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: ''
		},
		{
			title: 'Software Development & Web Development',
			image: '/images/portfolio/Software.png',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: 'https://github.com/JobaAdewumi',
			video: '',
			podcastEmbed: '',
			cta: 'Check my Github',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: ''
		},
		{
			title: 'Writing & Editing',
			image: '/images/portfolio/writing.png',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: 'https://jobaadewumi.substack.com',
			video: '',
			podcastEmbed: '',
			cta: 'Read my Articles',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: ''
		},
		{
			title: 'Podcast Editing & Production',
			image: '/images/portfolio/Podcast.png',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: 'https://creators.spotify.com/pod/show/joba-adewumi4',
			video: '',
			podcastEmbed:
				'https://open.spotify.com/embed/show/4fIBS5rikdEvGh6tSJ93zW?utm_source=generator&t=0',
			cta: 'Listen to my Podcast',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: ''
		},

		{
			title: 'Photography & Photo Editing',
			image: '',
			alt: '',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam accusantium quod non, cumque repellat asperiores facilis porro unde voluptatibus maxime culpa exercitationem quo necessitatibus aut ullam fugiat earum, fuga delectus!',
			link: '',
			video: '',
			podcastEmbed: '',
			cta: 'View my Pictures',
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

<section class="my-10 mt-20">
	<h2 class="mx-3 my-3  text-left font-pT text-3xl md:text-5xl xl:text-6xl text-white">PORTFOLIO</h2>
</section>

<section class="mb-8">
	<!-- Would have to do a for each statement to render the multiple data -->
	{#each data as { title, image, alt, description, link, video, podcastEmbed, cta, photo1, photo2, photo3, photo4, photo5, photo6 }}
		<div class="mt-5">
			<h2 class="mx-3 my-3 mb-5  text-left font-pT text-xl capitalize md:text-3xl xl:text-4xl text-white">
				{title}
			</h2>
			<div class="mx-7 mb-3 mt-5 md:mx-12">
				<div class="mb-5">
					<img class="mx-auto rounded-3xl" src={image} {alt} />
				</div>
				<!-- Would have an if statement to check if video field is an empty string else show a video embed -->
				{#if video !== ''}
					<iframe
						title="Life Podcast by Joba Adewumi"
						class="mt-5 h-96 w-full rounded-xl mb-5"
						src={video}
						width="100%"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
					<!-- <video src={video} controls>
						<track kind="captions" srclang="en" label="English" />
					</video> -->
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
						class="mt-5 rounded-xl mb-5"
						src={podcastEmbed}
						width="100%"
						height="232"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				{/if}
				{#if title === 'Writing & Editing'}
					<!-- For writing -->
					<iframe
						title="Life Podcast by Joba Adewumi"
						src="https://jobaadewumi.substack.com/embed"
						width="100%"
						height="232"
						class="border-1 mt-5 rounded-xl border-teal-500 mb-5"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				{/if}

				{#if description === ''}
					<div class="mb-5">
						<img src={photo1} alt="" />
						<img src={photo2} alt="" />
						<img src={photo3} alt="" />
						<img src={photo4} alt="" />
						<img src={photo5} alt="" />
						<img src={photo6} alt="" />
					</div>
				{:else}
					<p class="mt-3 text-white font-productSans mb-5">
						{description}
					</p>
				{/if}
				<div class="mt-3 flex justify-center mb-5">
					<button
						class="h-auto w-auto rounded-2xl bg-customGrey px-3 py-3 transition-all duration-300 hover:bg-customGreen font-productSans"
						type="button"
					>
						<a target="_blank" rel="noopener noreferrer" href={link}>{cta}</a>
					</button>
				</div>
			</div>
		</div>
	{/each}
</section>

<Footer />
