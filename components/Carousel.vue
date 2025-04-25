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
  :autoplay="{ delay: 2000 }"
  :items="items"
  loop
  fade
  >
  <img 
  :src="item" 
  class="h-screen w-full bg-cover bg-no-repeat -mb-112">
  <div class="w-400 h-400 absolute top-25 left-1000 text-xl bg-[#3E7B08] text-[#ffffff] rounded-lg p-10">
    <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex<br>
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</P>
  </div>
  </UCarousel>
</template>