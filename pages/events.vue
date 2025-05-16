<script setup lang="ts">

const { data } = await useAsyncData('events', () =>
  queryCollection('events').all()
)

</script>


<template>
<template  v-if="data">
  <div>
    <h1>Events</h1>
    <ul class="list">
       <li class="event-card" v-for="event in data" :key="event.id">
        <NuxtLink :key="event._path" :to="event.path">
          <div class="thumbnail-replacement"></div>
          <div class="event-card-text">
             <h2>{{ event.title }}</h2>
             <span>{{ event.date }}</span>
             <span>{{ event.starttime }} - {{ event.endtime }}</span>
             <span>{{ event.adress }}</span>
          </div>
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