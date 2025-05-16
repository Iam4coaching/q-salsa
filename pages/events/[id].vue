<script lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>

<template>
    <div>
        <h1>Hello world</h1>
        
  <span>Name: {{ $route.params.name }}</span>
    </div>
</template>