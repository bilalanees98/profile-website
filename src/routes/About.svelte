<script>
  import Skills from "./Skills.svelte";
</script>

<div class="flex flex-col items-center h-full">
  <div class="flex flex-col w-full items-center py-10">
    <img src="/pictures/profile-pic.png" alt="" class=" rounded-full w-56" />
    <h2 class="text-2m font-semibold py-2 text-center mobile:max-tablet:w-1/2">
      Full Stack Developer & Software Engineer
    </h2>
  </div>

  <div
    class="flex flex-col items-center w-full mobile:h-[32rem] tablet:h-[25rem] bg-secondary-one"
  >
    <h1 class="text-m font-bold my-7 uppercase">hi, i’m Bilal</h1>
    <div
      class="font-jost font-normal text-3s mobile:w-[80%] tablet:w-[66%] laptop:w-[53%] text-center leading-6"
    >
      <p>
        I am a software engineer, currently working as the Product Engineer
        behind btc.us.
      </p>
      <p>
        I have a passion for building products and learning. To that end I have
        one goal, which is to build stuff I can be proud of.
      </p>
      <p>
        I firmly believe that learning is the only constant in life. So I'm
        always on the lookout for that idea where I can combine my passions for
        learning and building.
      </p>
      <p>
        I enjoy a good laugh and when I'm not programming I'm either reading
        books, listening to music or playing football. Oh and I occasionally
        write as well.
      </p>
    </div>
  </div>
  <div
    class="flex relative w-full justify-center -translate-y-[60%] tablet:-translate-y-[40%]"
  >
    <Skills />
  </div>
</div>
