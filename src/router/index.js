import { createRouter, createWebHistory } from 'vue-router';

// Importiere die Komponenten
import Home from '../components/Home.vue'; // Passe den Pfad an
import Contact from '../components/Kontakt.vue'; // Kontaktseite
import ThankYou from '../components/Thank-You.vue'; // Danke-Seite
import Impressum from '../components/Impressum.vue'; 

const routes = [
  {
    path: '/',
    redirect: '/home', // Umleitung von "/" nach "/home"
  },
  {
    path: '/home',
    component: Home, // Rendert die Home-Komponente
  },
  {
    path: '/contact',
    component: Contact, // Rendert die Kontaktseite
  },
  {
    path: '/thank-you',
    component: ThankYou, // Rendert die Danke-Seite nach erfolgreicher Formularabsendung
  },
  {
    path: '/impressum',
    component: Impressum, // Rendert die Danke-Seite nach erfolgreicher Formularabsendung
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
