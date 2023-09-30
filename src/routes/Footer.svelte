<script>
  const socials = [
    {
      name: "linkedin",
      img: "/socials/linkedin.svg",
      link: "https://www.linkedin.com/in/mbilall",
    },
    {
      name: "github",
      img: "/socials/github.svg",
      link: "https://github.com/bilalanees98",
    },
    {
      name: "twitter",
      img: "/socials/twitter.svg",
      link: "https://twitter.com/_muhammadbilall",
    },
    {
      name: "email",
      img: "/socials/email.svg",
      link: "bilalanees1998@gmail.com",
    },
    {
      name: "instagram",
      img: "/socials/instagram.svg",
      link: "https://instagram.com/jaridah__?igshid=ZDdkNTZiNTM= ",
    },
  ];
</script>

<div
  class="flex flex-col items-center bg-primary-one text-white border-primary-one-highlight border-t-2"
>
  <dive class="flex flex-row mt-6">
    {#each socials as { img, link, name }, index}
      {@const isLastElement = index === socials.length - 1}
      {@const isEmail = name === "email"}
      <div class={!isLastElement ? "mr-7" : ""}>
        <a href={isEmail ? `mailto:${link}` : link} target="_blank">
          <img src={img} alt="" class="h-10" />
        </a>
      </div>
    {/each}
  </dive>
  <div>
    <p class="text-tertiary-one text-3s font-jost pt-[2.38rem] pb-[1.17rem]">
      &copy 2023 Muhammad Bilal
    </p>
  </div>
</div>
