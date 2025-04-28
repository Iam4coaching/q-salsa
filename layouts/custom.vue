<script lang="ts" setup>
const route = useRoute()
</script>

<template>
    <div class="global-container grid h-screen">
      <Header/>
      <slot />
      <div class="h-full w-full fixed inset-0 bg-gradient-to-tr from-white to-green-100 z-[-1] " />
    </div>
  </template>