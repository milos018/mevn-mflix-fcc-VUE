<template>
	<header class="w-full bg-[magenta]" p="2">
		<div
			class="w-full max-w-6xl mx-auto flex justify-between items-end text-white"
		>
			<router-link id="logo" to="/" class="text-lg" font="bold"
				>mFlix</router-link
			>
			<router-link v-if="!userEmail" to="/auth">Login/Signup</router-link>
			<div v-if="userEmail">
				<span>{{ userEmail }} / </span
				><span @click="logout" class="cursor-pointer">Logout</span>
			</div>
		</div>
	</header>
</template>

<script setup>
import { userEmail, updateUser } from '../hooks/useAuth';
const logout = () => updateUser(null);
</script>

<style scoped>
#logo {
	text-decoration: none;
}
</style>
