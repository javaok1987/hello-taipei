import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/views/List.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: List,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/:attractionID',
    name: 'About',
    props: true,
    component: About,
  },
  { path: '*', redirect: '/list' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/hello-taipei',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
