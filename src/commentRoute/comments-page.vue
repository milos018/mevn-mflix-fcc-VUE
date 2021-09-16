<template>
  <ul class="flex flex-col gap-2">
    <li v-for="c in comments" :key="c._id" class="bg-gray-200">
      <p text="sm">
        Comment by {{ c.name }}, email: {{ c.email }} for
        <router-link :to="'/m/' + c.movie_id">Movie</router-link>
      </p>
      <p>{{ c.text }}</p>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const comments = ref([]);

const getAllComments = async () => {
  let commentsRes;
  try {
    const res = await axios.get(
      import.meta.env.PROD
        ? "https://mevn-mflix-fcc.herokuapp.com/comments"
        : "http://localhost:5500/comments"
    );
    commentsRes = res.data;
    comments.value = commentsRes;
  } catch (error) {
    console.log(error);
  }
};

getAllComments();
</script>
