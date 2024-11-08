import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import EmailListComponent from '@/components/EmailListComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/home',
    name: 'EmailListComponent',
    component: EmailListComponent,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
