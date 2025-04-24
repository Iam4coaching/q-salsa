<script lang="ts">
import { defineProps } from 'vue';

    const props = defineProps({
        id: Number,
        alt: String,
    })
</script>
<template>
    <div id="{{ id }}">
        <p>{{ props.id }}</p>
        <p>{{ props.alt }}</p>
    </div>
</template>
