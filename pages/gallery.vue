<script setup lang="ts">
import { ref } from 'vue'

const photos = ref([
  { url: "https://picsum.photos/640/640?random=1", alt: "photo 1" },
  { url: "https://picsum.photos/640/640?random=2", alt: "photo 2" },
  { url: "https://picsum.photos/640/640?random=3", alt: "photo 3" },
  { url: "https://picsum.photos/640/640?random=4", alt: "photo 4" },
  { url: "https://picsum.photos/640/640?random=5", alt: "photo 5" },
  { url: "https://picsum.photos/640/640?random=6", alt: "photo 6" },
])
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-10 content-normal p-10">
    <div v-for="photo in photos" :key="photo.url" class="m-10">
      <img
        class="h-400 w-400 rounded-lg"
        :src="photo.url"
        :alt="photo.alt"
      />
    </div>
  </div>
</template>
