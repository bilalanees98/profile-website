<script>
	import Header from './Header.svelte';
	import Intro from './Intro.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col">
	<Header />
	<Intro />
</div>
