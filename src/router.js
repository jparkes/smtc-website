import { createWebHistory, createRouter } from 'vue-router'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const routes = [
	{
		path: '/',
		name: 'home',
		component: load('Home'),
  },
	{
		path: '/state',
		name: 'state',
		component: load('State'),
  },
	{
		path: '/county',
		name: 'county',
		component: load('County'),
  },
	{
		path: '/cemetery',
		name: 'cemetery',
		component: load('Cemetery'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router
