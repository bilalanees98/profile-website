<script>
  import projects from "./projectDetails";
</script>

<div
  class="flex flex-col mobile:max-tablet:items-center tablet:pl-[6.25rem] pt-[3.27rem]"
>
  <h1 class="text-xl font-bold uppercase pb-[3.25rem]">Projects</h1>

  {#each projects as { name, summary, link }}
    <div
      class="flex flex-row mobile:max-tablet:flex-col items-center mobile:max-tablet:text-center content-between tablet:h-48 mobile:max-tablet:p-2"
    >
      <div class="w-96 flex-shrink-0">
        <img src="/graphics/projects/btc.us-splash.png" alt="" />
      </div>
      <div class="flex flex-col tablet:pl-8 h-full justify-between">
        <div class="flex flex-col">
          <h2 class="text-l font-bold pb-6 uppercase">{name}</h2>
          <p class="font-jost text-3s">
            {summary}
          </p>
        </div>
        <a
          class="mobile:max-tablet:m-6 h-11 p-2 self-center tablet:self-start border-white border-2 rounded-md hover:scale-110 hover:cursor-pointer"
          href={link}
          target="_blank"
        >
          Visit
        </a>
      </div>
    </div>
  {/each}
</div>
