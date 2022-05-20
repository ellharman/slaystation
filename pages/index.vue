<template>
  <div class="flex">
    <div class="md:w-1/2 flex-col">
      <!-- <div class="m-auto"><UnderConstruction /></div> -->
      <div class="mx-auto my-10"><SlaystationLogo /></div>
      <div class="px-16 pb-10 text-landingFont">
        <p class="font-mono md:text-justify w-auto">
          SlayStation is the new London night celebrating gaming and the space
          it has provided queers to explore their identities. Now it's time to
          take that space IRL with performances, games, costumes, music, and
          prizes themed after your favourite series and moments.
        </p>
        <br />
        <p class="font-mono text-justify w-auto">
          Since beginning at the end of 2021, we have had successful monthly
          shows covering different gaming genres and series, ranging from Sci-Fi
          to Fantasy, Fighting to Pokémon. We are committed to providing a safe
          space for all people to express themselves and have fun and we do this
          with an experience like no other in the world.
        </p>
        <br />
        <p class="font-mono text-justify w-auto">
          So if you want to see a Solid Snake strip tease, glitchy Elder Scrolls
          parodies, or sexy Waluigi, this is the night for you!
        </p>
      </div>
    </div>
    <div v-if="!isMobile" class="md:w-1/2 flex-col self-center">
      <div class="h-full my-auto lg:px-40 lg:py-6">
        <img
          src="/landing_poster.png"
          alt="Slaystation poster"
          class="object-contain rounded"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'BaseDesktop',
  data() {
    return {
      isMobile: true,
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 768
  },
}
</script>
