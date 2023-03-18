<script>
	import '../app.css';
	import Nav from './Nav.svelte';
</script>

<div class="app">
	<Nav />
	<main class="mt-16">
		<slot />
	</main>
</div>
