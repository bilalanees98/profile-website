<script>
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>

<div class="flex flex-col grow h-screen scroll-auto">
  <Nav />
  <div
    class="flex flex-col grow font-montserrat text-primary-two bg-primary-one"
  >
    <slot />
  </div>
  <Footer />
</div>
