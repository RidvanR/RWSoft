<template>
  <header
    :class="['header', { 'header-scrolled': isScrolled }]"
    ref="header"
  >
    <!-- Logo und Name -->
    <div class="logo-container d-flex align-center">
      <img
        src="../assets/vite.svg"
        height="36"
        width="36"
        alt="Logo"
        class="me-3 logo"
      />
      <a href="/home" class="logo-name">rwsoft™</a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="desktop-nav hidden-sm-and-down">
      <a href="/home" class="nav-link">Home</a>
      <a href="/about" class="nav-link">About</a>
      <a href="/contact" class="nav-link">Contact</a>
    </nav>

    <!-- Hamburger-Menü für Mobile -->
    <div class="hamburger hidden-md-and-up" @click="drawer = !drawer">
      <v-app-bar-nav-icon />
    </div>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list>
        <v-list-item link to="/home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/contact">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
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
  color: #8fe351;
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
  color: #8fe351;
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
