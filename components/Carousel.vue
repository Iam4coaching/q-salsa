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

    <div class="content-overlay">
      <img src="/Images/Qsalsa_Logo.png" alt="Qsalsa Logo" class="main-logo">
      <h1>Welcome to My Site</h1>
      <p>Responsive, fullscreen background carousel</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>