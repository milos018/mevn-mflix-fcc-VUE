<template>
	<ul v-if="!loading" class="flex justify-center flex-wrap gap-3">
		<movie-item
			v-for="movie in movies"
			:key="movie._id"
			:movie="movie"
		></movie-item>
	</ul>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import MovieItem from './components/movie-item.vue';

const loading = ref(false);
const movies = ref([]);

const getAllMovies = async () => {
	loading.value = true;
	let movieList;
	try {
		const res = await axios.get('http://localhost:5500/movies');
		movieList = res.data;
		loading.value = false;
		movies.value = movieList;
	} catch (error) {
		loading.value = false;
		console.log(error);
	}
};

getAllMovies();
</script>
