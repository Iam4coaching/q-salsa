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
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.url" class="gallery-div">
      <img
        class="gallery-image"
        :src="photo.url"
        :alt="photo.alt"
      />
    </div>
  </div>
</template>
