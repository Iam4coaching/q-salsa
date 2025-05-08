<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6',
]

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
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
      <ContentRenderer v-if="home" :value="home" />
      <div v-else>Home not found</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>