<template>
	<p v-if="loading">Loading</p>
	<p v-if="error">{{ error }}</p>
	<section v-if="!loading && !error" p="b-48">
		<div
			:style="{ backgroundImage: `url(${movie.poster})` }"
			class="h-80 bg-no-repeat relative"
		>
			<h1 text="lg" font="bold" class="bg-white bg-opacity-80" p="4">
				{{ movie.title }}
			</h1>
		</div>
		<div p="6">
			<p><span font="bold">Year</span>: {{ movie.year }}</p>
			<p><span font="bold">Plot</span>: {{ movie.plot }}</p>
			<ul class="flex gap-3">
				<li font="bold">Genres:</li>
				<li v-for="g in movie.genres" :key="g">{{ g }}</li>
			</ul>
			<ul class="flex gap-3">
				<li font="bold">
					{{ movie.countries.length > 1 ? 'Contries' : 'Country' }}:
				</li>
				<li v-for="g in movie.countries" :key="g">{{ g }}</li>
			</ul>
			<p><span font="bold">Length</span>: {{ movie.runtime }}</p>
			<p><span font="bold">Rated</span>: {{ movie.rated }}</p>
			<ul class="flex gap-3">
				<li font="bold">Cast:</li>
				<li v-for="c in movie.cast" :key="c">{{ c }}</li>
			</ul>
			<p><span font="bold">Comments</span>: {{ movie.num_mflix_comments }}</p>
			<p><span font="bold">Full Plot</span>: {{ movie.fullplot }}</p>
			<ul class="flex gap-3">
				<li font="bold">Languages:</li>
				<li v-for="c in movie.languages" :key="c">{{ c }}</li>
			</ul>
			<p><span font="bold">Released</span>: {{ movie.released }}</p>
			<ul class="flex gap-3">
				<li font="bold">Directors:</li>
				<li v-for="d in movie.directors" :key="d">{{ d }}</li>
			</ul>
			<ul class="flex gap-3">
				<li font="bold">Writers:</li>
				<li v-for="w in movie.writers" :key="w">{{ w }}</li>
			</ul>
			<ul class="flex gap-3">
				<li font="bold">Awards:</li>
				<li v-for="a in movie.awards" :key="a">{{ a }}</li>
			</ul>
			<p><span font="bold">Last updated</span>: {{ movie.lastupdated }}</p>
			<p><span font="bold">IMDB</span>: {{ movie.imdb }}</p>
			<p><span font="bold">Type</span>: {{ movie.type }}</p>
			<p><span font="bold">Tomatoes</span>: {{ movie.tomatoes }}</p>
			<!-- add comment -->
			<div m="y-12" font="bold" class="flex flex-col gap-6">
				<h3 tex="lg">Add Comment</h3>
				<div class="flex flex-col gap-1">
					<label for="username">Your name</label>
					<input
						type="text"
						name="username"
						id="username"
						v-model="username"
						p="x-3 y-2"
						class="border-gray-700 border-1 rounded-lg"
					/>
				</div>
				<div class="flex flex-col gap-1">
					<label for="newComment">Comment</label>
					<textarea
						name="newComment"
						id="newComment"
						w="full"
						h="24"
						p="3"
						class="border-gray-700 border-1 rounded-lg"
						resize="none"
						v-model="commentText"
					></textarea>
				</div>
				<button @click="addComment">Send comment</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { userToken } from '../hooks/useAuth';

const route = useRoute();

const loading = ref(false);
const error = ref('');

const movie = ref({});

const getMovieDetails = async () => {
	loading.value = true;
	let movieResponse;
	try {
		const res = await axios.get(
			'http://localhost:5500/movies/m/' + route.params.mid,
		);
		movieResponse = res.data;
		loading.value = false;
		movie.value = movieResponse;
	} catch (err) {
		loading.value = false;
		error.value = err;
	}
};

getMovieDetails();

const username = ref('');
const commentText = ref('');
const addComment = async () => {
	try {
		const res = await axios.post(
			'http://localhost:5500/movies/m/' + route.params.mid + '/comment',
			{
				name: username.value,
				text: newComment.value,
			},
			{
				headers: {
					'Content-type': 'application/json',
					Authorization: 'Bearer ' + userToken.value,
				},
			},
		);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
</script>
