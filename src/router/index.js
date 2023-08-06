import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
		name: 'main',
		component: () => import('@/views/LoginPage'),
    },
    {
        path: '/game',
		name: 'game',
		component: () => import('@/views/GamePage'),
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;