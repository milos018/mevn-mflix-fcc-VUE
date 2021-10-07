<template>
	<the-header />
	<the-search-filter v-if="shouldShowHeader" />
	<main bg="light-blue-100" p="2" class="max-w-6xl mx-auto">
		<router-view />
	</main>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

import TheHeader from './_nav/the-header.vue';
import TheSearchFilter from './_nav/the-search-filter.vue';

import { updateUser, userToken } from './hooks/useAuth';

if (JSON.parse(localStorage.getItem('user'))) {
	updateUser(JSON.parse(localStorage.getItem('user')));
}

const route = useRoute();
const shouldShowHeader = computed(() => route.path !== '/auth');
</script>

<style>
#logo-text {
	text-decoration: none;
}

a.router-link-exact-active {
	text-decoration: underline;
}
</style>
