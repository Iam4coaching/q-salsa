<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="default-grid-container">
    <Header class="header"/>
    <slot/>
    <div class="body"/>
  </div>
</template>

<style lang="scss" scoped>
</style>