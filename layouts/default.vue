<script lang="ts" setup>
const route = useRoute()
</script>

<template>
    <div class="flex flex-col min-h-screen">
      <Header/>
      <slot />
      <div class="fixed inset-0 bg-gradient-to-tr from-white to-green-100 z-[-1] " />
    </div>
    <Footer/>
  </template>