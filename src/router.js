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
		path: '/states',
		name: 'states',
		component: load('States'),
	},
  {
    path: '/states/:stateId',
    name: 'state',
    component: load('State'),
    props: true,
	},
  {
    path: '/states/:stateId/:county',
    name: 'county',
    component: load('County'),
    props: true,
  },
	{
		path: '/cemetery/:cemeteryId',
		name: 'cemetery',
		component: load('Cemetery'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router
