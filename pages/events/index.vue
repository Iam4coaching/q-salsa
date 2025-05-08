<script lang="ts">
import EventCard from '~/components/EventCard.vue';

</script>

<template>
<div v-for="e in events">
    <EventCard v-bind:ref="e"/>

</div>
</template>