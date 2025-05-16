<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())


</script>

<template>
<template  v-if="posts">
  <div>
    <h1>Events</h1>
    <ul>
       <li v-for="post in posts" :key="post.id">
        {{ console.log(post) }}
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
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