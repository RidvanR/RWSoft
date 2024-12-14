import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Router importieren
import vuetify from './plugins/vuetify'; // Vuetify-Setup importieren
import './style.css'; // Optional: Globale Styles
import { scrollToTop } from './scrollToTop.js';
import '@fortawesome/fontawesome-free/css/all.css';
import 'intersection-observer';


createApp(App).use(router).use(vuetify).mount('#app');

document.addEventListener('DOMContentLoaded', () => {
    scrollToTop();
  });
