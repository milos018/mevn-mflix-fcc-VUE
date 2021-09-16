<template>
  <li
    w="md:[48%] lg:[24%]"
    bg="white"
    p="3"
    class="flex flex-col items-start gap-3 rounded-md border-1 border-gray-600"
  >
    <router-link :to="'/m/' + movie._id">
      <h3 text="xl" font="bold">{{ movie.title }}</h3>
    </router-link>
    <p>Plot: {{ movie.plot }}</p>
    <div text="sm">
      <p font="bold" display="inline-block">Cast:</p>
      <span v-for="actor in movie.cast" :key="actor" p="1">{{ actor }}</span>
    </div>
    <img v-if="movie.poster" :src="movie.poster" w="56" class="mx-auto" />
  </li>
</template>

<script setup>
const props = defineProps(["movie"]);
</script>
