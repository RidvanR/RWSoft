import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'light', // Nutze das dunkle Theme standardmäßig
    themes: {
      light: {
        colors: {
          primary: '#6C63FF',  // Lila bleibt als Primärfarbe
          accent: '#6C63FF',   // Lila-Blau Übergang
          background: '#FFFFFF', // Weißer Hintergrund
          cards: '#F0F4F8',     // Helles Grau für Kartenhintergrund
          text: '#333333',      // Dunkles Grau für Text, für bessere Lesbarkeit
          hover: '#FF85B3',     // Ein etwas intensiverer Rosé-Ton für Hover-Effekte
        },
      },
      dark: {
        colors: {
          primary: '#6C63FF',  // Lila bleibt auch hier
          accent: '#00B8D9',   // Türkis als Akzentfarbe
          background: '#121212', // Dunkles Grau für den Hintergrund
          cards: '#1E293B',     // Dunklerer Kartenhintergrund
          text: '#E0E0E0',       // Helles Grau für den Text auf dunklem Hintergrund
          hover: '#FF85B3',     // Hover-Effekt bleibt der gleiche
        },
    },
  },
    variables: {
      '--font-family': `'Poppins', sans-serif`,
      '--line-height': '1.5',
      '--font-weight': '400',
    },
  },
});
