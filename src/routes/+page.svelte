<script lang="ts">
	import Navbar from '../lib/components/navbar.svelte';

	const socialLinks = [
		{
			platform: 'Linkedin',
			url: 'https://linkedin.com/in/joba-adewumi',
			content:
				'<title data-testid="svgTitle" id="title_0.3785890673184502">LinkedIn</title> <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path> <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path> <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>'
		},
		{
			platform: 'X/Twitter',
			url: 'https://x.com/jbtheinspirer',
			content:
				'<title data-testid="svgTitle" id="title_0.3225558894125291">X</title> <path d="m2.538 3 7.425 9.928L2 21h1.5l7.033-7.067L16 21h5.232l-7.662-9.995 6.955-7.514h-1.5L13 10 7.77 3H2.538Zm1.994 1h2.645l12.087 16h-2.525L4.532 4Z"></path>'
		},
		{
			platform: 'Email',
			url: 'mailto:jobaadewumis@gmail.com',
			content:
				'<title data-testid="svgTitle" id="title_0.9995727984477523">Email</title> <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path> <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path> <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path> <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>'
		},
		{
			platform: 'Spotify',
			url: 'https://open.spotify.com/show/4fIBS5rikdEvGh6tSJ93zW',
			content:
				'<title data-testid="svgTitle" id="title_0.46908384426333605">Spotify</title> <path d="M18,10.561a.494.494,0,0,1-.245-.065,15.2,15.2,0,0,0-10.95-1.55.5.5,0,0,1-.232-.973A16.2,16.2,0,0,1,18.25,9.626a.5.5,0,0,1-.247.935Z"></path> <path d="M16.646,13.632a.5.5,0,0,1-.249-.066,12.459,12.459,0,0,0-9.121-1.292.5.5,0,1,1-.237-.971A13.458,13.458,0,0,1,16.9,12.7a.5.5,0,0,1-.25.933Z"></path> <path d="M15.312,16.583a.5.5,0,0,1-.251-.068,9.777,9.777,0,0,0-7.295-1.033.5.5,0,0,1-.245-.97,10.768,10.768,0,0,1,8.043,1.139.5.5,0,0,1-.252.932Z"></path> <path d="M12,23A11,11,0,1,1,23,12,11.013,11.013,0,0,1,12,23ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"></path>'
		},
		{
			platform: 'Github',
			url: 'https://www.github.com/JobaAdewumi',
			content:
				'<title data-testid="svgTitle" id="title_0.7963966414891819">GitHub</title> <path d="M12,1.16A11,11,0,0,0,9.33,22.82a.46.46,0,0,0,.42-.09.48.48,0,0,0,.2-.4v-.1c0-.92,0-2.18,0-3.08a2,2,0,0,1,.53-1.59.49.49,0,0,0,.14-.52.49.49,0,0,0-.42-.35c-2.1-.24-4.25-1-4.25-4.75a3.65,3.65,0,0,1,.93-2.51A.52.52,0,0,0,7,8.91,3.31,3.31,0,0,1,7,6.77a4.87,4.87,0,0,1,2.18,1,.48.48,0,0,0,.42.07,8.93,8.93,0,0,1,4.88,0,.48.48,0,0,0,.42-.07,5.17,5.17,0,0,1,2.18-1,3.33,3.33,0,0,1,0,2.15.52.52,0,0,0,.09.52,3.65,3.65,0,0,1,.93,2.51c0,3.76-2.15,4.51-4.25,4.75a.49.49,0,0,0-.42.35.51.51,0,0,0,.14.52,2,2,0,0,1,.53,1.59c0,.93,0,2.27,0,3.18a.48.48,0,0,0,.2.4.46.46,0,0,0,.3.11l.13,0A11,11,0,0,0,12,1.16Zm3.06,20.51V19.15a3.79,3.79,0,0,0-.32-1.59c2-.39,4.32-1.55,4.32-5.62a4.63,4.63,0,0,0-1-2.95,4.69,4.69,0,0,0-.2-2.89.47.47,0,0,0-.31-.29c-.18-.06-1.14-.28-3.08,1a9.77,9.77,0,0,0-5,0c-1.94-1.3-2.9-1.08-3.08-1a.47.47,0,0,0-.31.29A4.69,4.69,0,0,0,5.93,9a4.63,4.63,0,0,0-1,2.95c0,4.07,2.27,5.23,4.32,5.62A3.71,3.71,0,0,0,9,18.86c-.78.26-1.29.22-1.51-.13C6.65,17.38,6,16.8,5.4,16.85a.5.5,0,0,0-.47.53.47.47,0,0,0,.52.46s.37.09,1.16,1.4A1.62,1.62,0,0,0,8.1,20a3.52,3.52,0,0,0,.84-.13v1.77a10,10,0,1,1,6.12,0Z"></path>'
		},
		{
			platform: 'Substack',
			url: 'https://jobaadewumi.substack.com/',
			content:
				'<title data-testid="svgTitle" id="title_0.7095150292609758">Substack</title> <path d="M21 2.5v2H3v-2h18m0-1H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1zM21 7.523v2H3v-2h18m0-1H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1zM21 12.5v8.471l-8.199-3.585a2 2 0 00-1.602 0L3 20.971V12.5h18m0-1H3a1 1 0 00-1 1v8.471a.998.998 0 001.4.917l8.2-3.585a1 1 0 01.8 0l8.2 3.585a.998.998 0 001.4-.917V12.5a1 1 0 00-1-1z"></path>'
		},
		// Add other social links here
	];
</script>

<Navbar />

<section class="mx-7 mb-3 mt-20 md:mx-12">
	<div>
		<h2 class="my-3 bg-red-500 text-center font-pT text-6xl md:text-8xl xl:text-9xl">
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
		<a href="/Joba-Adewumi-Resume.pdf" download>
			<button class="h-auto w-auto rounded-2xl bg-customGrey hover:bg-customGreen px-3 py-3" type="button">Download CV</button>
		</a>
	</div>

	<!-- Social Icons Section -->
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			{#each socialLinks as { platform, url, content }}
				<a
					href={url}
					class="text-customGrey transition-colors duration-300 hover:text-customGreen"
					target="_blank"
					rel="noopener noreferrer"
					aria-label={platform}
				>
					<svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
						{@html content}
					</svg>
				</a>
			{/each}
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
