<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="home-page">
    <Header class="header"/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden; // Only hide horizontal overflow // Prevents scroll
  position: relative;
}
</style>