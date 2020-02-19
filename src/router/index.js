import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '@/views/List.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
  },
  {
    path: '/about/:attractionID',
    name: 'About',
    props: true,
    component: About,
  },
  {
    path: '*',
    component: List,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
