<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import softwarePic from '$lib/assets/images/portfolio/Software.png?enhanced';
	import writingPic from '$lib/assets/images/portfolio/writing.png?enhanced';
	import podcastPic from '$lib/assets/images/portfolio/Podcast.png?enhanced';
	import Seo from '../../lib/components/seo.svelte';

	const data = [
		{
			id: 1,
			title: 'Video Editing & Videography',
			image: '',
			alt: '',
			description:
				"Join Joba Adewumi ('jbtheinspirer') as he delves into self-improvement, philosophy, and the human experience through engaging discussions, insightful podcasts, and thought-provoking photography.",
			link: 'https://www.youtube.com/channel/UCZGvrbbwfQw3YyKvfIt3t4A',
			video: 'https://www.youtube.com/embed/kGNvDlydQ-o',
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
			id: 2,
			title: 'Software Development & Web Development',
			image: '/images/portfolio/Software.png',
			// image: softwarePic,
			alt: '',
			description:
				"Joba Adewumi, known on GitHub as 'JobaAdewumi', is a versatile software engineer based in Lagos, Nigeria. He specializes in full-stack web development, native Android development, and cross-platform mobile app development using Flutter. As the founder of the WickedDevelopers Organization, Joba has demonstrated leadership and a commitment to fostering a community of developers. Technical Proficiencies- Frontend Development: Proficient in HTML, CSS, JavaScript, and TypeScript, with experience in frameworks and libraries such as React, Angular, Vue.js, Next.js, TailwindCSS, Sass, and Bootstrap.Backend Development: Skilled in Node.js, Express, NestJS, Django, and Go, enabling the creation of robust and scalable server-side applications.Mobile Development: Expertise in Flutter and Dart for building cross-platform mobile applications, alongside native Android development capabilities. Database Management: Experienced with PostgreSQL, ensuring efficient and reliable data storage solutions. Design Tools: Proficient in Adobe Photoshop and Figma, facilitating the creation of visually appealing and user-friendly interfaces.",
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
			id: 3,
			title: 'Writing & Editing',
			image: '/images/portfolio/writing.png',
			// image: writingPic,
			alt: '',
			description:
				"Joba's Thoughts is a Substack blog authored by Joba Adewumi, offering readers a collection of insightful essays and reflections. The blog delves into topics such as personal development, philosophy, and the human experience, providing thoughtful perspectives and fostering meaningful discussions. Joba's unique voice and depth of thought make this blog a valuable resource for those seeking to explore life's complexities.",
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
			id: 4,
			title: 'Podcast Editing & Production',
			image: '/images/portfolio/Podcast.png',
			// image: podcastPic,
			alt: '',
			description:
				"'Life' is a podcast by Joba Adewumi that explores frameworks for living a fulfilling life through the lenses of philosophy, observation, and critical thinking. With 47 episodes released over the past three years, the podcast covers topics such as self-improvement, emotional intelligence, and personal growth. Episodes like 'Pure Focus: The Price of Dreams' and 'Are You a Good Person?' invite listeners to reflect deeply on their aspirations and moral compass. Joba's engaging and thoughtful approach provides valuable insights for anyone seeking to navigate life's complexities. ",
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
			id: 5,
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

<Seo
	title="Joba Adewumi's Portfolio"
	description="Explore my Work from Software engineering, Podcasting, Writing, Designing and Photography."
	keywords="software engineer, full-stack developer, web development, React, Node.js, JavaScript, TypeScript, SvelteKit, Python, Data Science, Flutter, Mobile development, Android, IOS, blog, portfolio, Joba Adewumi, frontend development, backend development, photography, design, writing, podcasting, videography"
	image="/images/portfolio/Software.png"
/>

<Navbar />

<section class="my-10 mt-20">
	<h2 class="mx-3 my-3 text-left font-pT text-3xl text-white md:text-5xl xl:text-6xl">PORTFOLIO</h2>
</section>

<section class="mb-8">
	<!-- Would have to do a for each statement to render the multiple data -->
	{#each data as { id, title, image, alt, description, link, video, podcastEmbed, cta, photo1, photo2, photo3, photo4, photo5, photo6 }}
		<div class="mt-5">
			<h2
				class="mx-3 my-3 mb-5 text-left font-pT text-xl capitalize text-white md:text-3xl xl:text-4xl"
			>
				{title}
			</h2>
			<div class="mx-7 mb-3 mt-5 md:mx-12">
				<div class="mb-5">
					{#if id == 2}
						<enhanced:img class="mx-auto rounded-3xl" src={softwarePic} {alt} />
					{:else if id == 3}
						<enhanced:img class="mx-auto rounded-3xl" src={writingPic} {alt} />
					{:else if id == 4}
						<enhanced:img class="mx-auto rounded-3xl" src={podcastPic} {alt} />
					{:else}
						<img class="mx-auto rounded-3xl" src={image} {alt} />
					{/if}
				</div>

				<!-- Would have an if statement to check if video field is an empty string else show a video embed -->
				{#if video !== ''}
					<iframe
						title="Joba Adewumi Youtube"
						class="mb-5 mt-5 h-96 w-full rounded-xl"
						src={video}
						width="100%"
						frameBorder="0"
						allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
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
						class="mb-5 mt-5 rounded-xl"
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
						class="border-1 mb-5 mt-5 rounded-xl border-teal-500"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				{/if}

				{#if id == 5}
					<div class="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo8.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>

						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo1.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo2.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo3.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo4.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo5.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo6.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
							<enhanced:img
								src="/static/images/photogrid/photo7.jpg"
								alt=""
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
					<!-- <div class="mb-5">
						<img src={photo1} alt="" />
						<img src={photo2} alt="" />
						<img src={photo3} alt="" />
						<img src={photo4} alt="" />
						<img src={photo5} alt="" />
						<img src={photo6} alt="" />
					</div> -->
				{:else}
					<p class="mb-5 mt-3 font-productSans text-white">
						{description}
					</p>
				{/if}
				<div class="mb-5 mt-3 flex justify-center">
					<button
						class="h-auto w-auto rounded-2xl bg-customGrey px-3 py-3 font-productSans text-white transition-all duration-300 hover:bg-customGreen"
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
