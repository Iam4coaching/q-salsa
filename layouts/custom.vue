<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="custom-home-page">
    <Header class="header"/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.custom-home-page{
    width: 100vw;
    height: 100vh;
    overflow: hidden; 
    position: relative;
    @media (max-width: 768px) {
      overflow: scroll;
      overflow-x: hidden;
    }
  }
</style>