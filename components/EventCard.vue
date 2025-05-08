<script setup lang="ts">
    const { event } = defineProps(['event']);
</script>

<template>    

<div class="event-card">
    <NuxtLink :to="`/events/${event.id}`">
    <img :src="event.image" alt="event thumb" class="thumb">
    <h3>{{ event.title }}</h3>
    <p>{{ event.date }}</p>
    <p>{{ event.time }}</p>
    <p>{{ event.location }}</p>
    <p>{{ event.description }}</p>
    </NuxtLink>
</div>
</template>

<style lang="scss" scoped>
</style>