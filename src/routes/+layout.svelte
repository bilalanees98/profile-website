<script>
  import "../app.css";
  import Nav from "./Nav.svelte";
</script>

<Nav />
<div
  class="h-screen flex flex-col grow font-montserrat text-primary-two bg-primary-one"
>
  <slot />
</div>
