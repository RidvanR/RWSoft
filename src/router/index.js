import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Stelle sicher, dass der Pfad korrekt ist

const routes = [
  {
    path: '/',
    redirect: '/home', // Umleitung von "/" nach "/home"
  },
  {
    path: '/home',
    component: Home, // Rendert die Home-Komponente
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
