<script setup lang="ts">
import EventDetails from '~/components/EventDetails.vue';

    const {id} =useRoute().params

</script>

<template>
    <div>
        <EventDetails/>
    </div>
</template>