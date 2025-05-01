<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="body">
    <Header class="header"/>
    <slot/>
    <div class="main"/>
  </div>
    <Footer class="footer"/>
  </template>

<style lang="scss" scoped>

</style>