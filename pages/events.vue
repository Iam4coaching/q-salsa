<script setup lang="ts">
import { queryCollection } from '@nuxt/content'
import { useRoute } from 'vue-router'

const route = useRoute()

interface Event {
  _path: string
  title: string
  date: string
  adress: string
  description: string
  img: string
}

const { data: events } = await useAsyncData<Event[]>('events', () =>
  queryCollection('events').path(route.path).find()
)

</script>

<template>
<template  v-if="events && events.length">
  <div>
    <h1>Events</h1>
    <ul>
      <li v-for="event in events" :key="event._path">
        <NuxtLink :to="event._path">
          {{ event.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
    <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </template>
</template>