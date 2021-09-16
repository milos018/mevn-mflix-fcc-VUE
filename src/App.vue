<template>
	<the-header></the-header>
	<the-search-filter v-if="shouldShowHeader"></the-search-filter>
	<main bg="light-blue-100" p="2" class="max-w-6xl mx-auto">
		<router-view></router-view>
	</main>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

import TheHeader from './_nav/the-header.vue';
import TheSearchFilter from './_nav/the-search-filter.vue';

import { updateUser } from './hooks/useAuth';

if (JSON.parse(localStorage.getItem('user'))) {
	updateUser(JSON.parse(localStorage.getItem('user')));
}

const route = useRoute();
const shouldShowHeader = computed(() => route.fullPath !== '/auth');
</script>

<style>
#logo-text {
	text-decoration: none;
}

a.router-link-exact-active {
	text-decoration: underline;
}
</style>
