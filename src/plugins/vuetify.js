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
    defaultTheme: 'dark', // Nutze das dunkle Theme standardmäßig
    themes: {
      dark: {
        colors: {
        primary: '#32ff7e', 
        accent:'#6C63FF',
        background: '#111821', /* BlauMarine */
        cards: '#1E293B', /* Kartenhintergrund */
        text: '#FFFFFF',
        hover: '#8D85FF',
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
