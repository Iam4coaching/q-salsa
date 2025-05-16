<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6',
]
</script>

<template>
 <div class="background-carousel">
    <UCarousel
      v-slot="{ item }"
      :autoplay="{ delay: 2000 }"
      :items="items"
      loop
      fade 
      class="carousel"
    >
      <img :src="item" alt="Slide image" class="carousel-image" />
    </UCarousel>

    <div class="content-overlay animate__animated animate__slideInLeft">
      <img src="/Images/Qsalsa_Logo.png" alt="Qsalsa Logo" class="main-logo animate__animated animate__fadeInLeft">
        <div class="intro-bg"></div>
        <div class="intro-txt">
        <h1>Do you want to swing those hips to salsa music?</h1>
        <p>At Q-salsa rotterdam in collaboration with Ketelbinkie you can dance salsa in a safe environment.
        We are a multicultural team and offer lessons for the LHBTI community and allies.</p>
        <p>We dance gender free, i.e. we focus on the role division "leader and follower" and not on the role division man/woman.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>