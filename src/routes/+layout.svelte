<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
</script>

<div class="app">
	<Nav />
	<main class="mt-16">
		<slot />
	</main>
	<Footer />
</div>
