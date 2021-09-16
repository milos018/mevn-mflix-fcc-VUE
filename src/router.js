import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('./homeRoute/home-index.vue'),
	},
	{
		path: '/m/:mid',
		component: () => import('./movieRoute/movie-details.vue'),
	},
	{
		path: '/auth',
		component: () => import('./authRoute/auth-page.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
