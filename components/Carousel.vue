<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <UCarousel
  v-slot="{ item }"
  class="h-lvh"
  :autoplay="{ delay: 2000 }"
  :items="items"
  loop
  fade
  >
  <img 
  :src="item" 
  class="h-lvh w-full">
  </UCarousel>
</template>