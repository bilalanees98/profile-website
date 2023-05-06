<script>
  const skills = ["JS", "TS", "AWS", "Node", "Svelte"];
</script>

<div class="flex flex-col items-center bg-primary-one h-36 w-[49rem]">
  <h1 class="text-m font-bold uppercase mt-8">Tools & Frameworks</h1>
  <div class="mt-7">
    {#each skills as skill}
      <span class="font-jost text-2s font-normal leading-4 px-7">{skill}</span>
    {/each}
  </div>
</div>
