import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import SchoolDetails from '@/views/SchoolDetails/SchoolDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/schooldetails/:id',
    name: 'SchoolDetails',
    component: SchoolDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;