<script>
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>

<Nav />
<div
  class="h-[77vh] flex flex-col grow font-montserrat text-primary-two bg-primary-one"
>
  <slot />
</div>
<Footer />
