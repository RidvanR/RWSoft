<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <!-- Logo und Name -->
    <div class="logo-container d-flex align-center">
      <img
        src="../assets/rwsoft-logo.svg"
        height="44"
        width="44"
        alt="Logo"
        class="me-3 logo"
      />
      <router-link to="/home" class="logo-name">rwsoft™</router-link>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav hidden-sm-and-down">
      <router-link
        to="/home"
        class="nav-link"
        :class="{ active: currentRoute === '/home' }"
      >
        Home
      </router-link>
      <router-link
        to="/contact"
        class="nav-link"
        :class="{ active: currentRoute === '/contact' }"
      >
        Kontakt
      </router-link>
      <router-link
        to="/impressum"
        class="nav-link"
        :class="{ active: currentRoute === '/impressum' }"
      >
        Impressum
      </router-link>
    </nav>

    <!-- Mobile Navigation Drawer -->
    <div class="hamburger hidden-md-and-up" @click="drawer = !drawer">
      <v-app-bar-nav-icon />
    </div>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list>
        <v-list-item>
          <router-link
            to="/home"
            class="nav-link"
            :class="{ active: currentRoute === '/home' }"
          >
            Home
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link
            to="/contact"
            class="nav-link"
            :class="{ active: currentRoute === '/contact' }"
          >
            Kontakt
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link
            to="/impressum"
            class="nav-link"
            :class="{ active: currentRoute === '/impressum' }"
          >
            Impressum
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>


<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      drawer: false,
      isScrolled: false,
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path; // Aktuelle Route aus Vue Router
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      this.isScrolled = scrollTop > 50;
    },
  },
};

</script>

<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background: rgba(0, 0, 0, 0); /* Transparenz am Anfang */
  color: white;
  transition: background-color 0.7s ease, box-shadow 0.7s ease; /* Smooth Übergang */
  z-index: 10;
  box-shadow: none;
}

.header-scrolled {
  background: #111821; /* Smooth Blau mit Transparenz */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Logo Container */
.logo-container {
  display: flex;
  align-items: center;

}

.logo:hover {
  animation: shake 0.3s;
  animation-iteration-count: 0.5s;
  cursor: pointer;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  20% { transform: translate(-1px, -2px) rotate(-1deg); }
  40% { transform: translate(-3px, 0px) rotate(1deg); }
  60% { transform: translate(3px, 2px) rotate(0deg); }
  80% { transform: translate(1px, -1px) rotate(1deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.logo-name {
  font-size: 1.5rem;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.logo-name:hover {
  background: -webkit-linear-gradient(90deg, rgba(83,189,255,1) 0%, rgba(185,57,254,1) 87%, rgba(148,119,253,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: color 0.9s ease;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

.nav-link.active {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  font-weight: bold;
}

.v-list-item-title.active {
  font-weight: bold;
  color: rgb(var(--v-theme-primary))
}

/* Hamburger-Menü Styling */
.hamburger {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.hidden-sm-and-down {
  display: none;
}
@media (min-width: 960px) {
  .hidden-sm-and-down {
    display: flex;
  }
}
.hidden-md-and-up {
  display: flex;
}
@media (min-width: 960px) {
  .hidden-md-and-up {
    display: none;
  }
}
</style>
