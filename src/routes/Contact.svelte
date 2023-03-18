<script>
	const handles = [
		{
			name: 'LinkedIn',
			img: '/social/linkedin.svg',
			link: 'https://www.linkedin.com/in/muhammad-bilal-6a76811a3/'
		},
		{
			name: 'Github',
			img: '/social/github.svg',
			link: 'https://github.com/bilalanees98'
		},
		{
			name: 'Twitter',
			img: '/social/twitter.svg',
			link: 'https://twitter.com/_muhammadbilall'
		},
		{
			name: 'Email',
			img: '/social/email.svg',
			link: 'https://twitter.com/_muhammadbilall'
		}
	];
</script>

<div class="flex flex-col">
	{#each handles as { name, img, link }}
		<div class="flex mt-2 hover:scale-110">
			<img class="w-8" src={img} alt="" />
			<a class=" ml-2" href={link} target="_blank">{name} </a>
		</div>
	{/each}
</div>
