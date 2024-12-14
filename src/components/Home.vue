<template>
  
    <!-- Header einbinden -->
    <Header></Header>
    

    <!-- Hauptinhalt -->
    <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Willkommen bei <span>rwsoft™</span></h1>
      <p class="hero-subtitle">
        Wir entwickeln moderne, kreative und skalierbare Weblösungen, die Ihre Vision in die digitale Realität bringen.
      </p>
      
      <button @click="scrollToServices" class="hero-button" variant="outlined rounded-lg v-ripple flat" color="#8fe351">
          Mehr erfahren
      </button>
      
    </div>
  </section>
  <!-- Services -->
  <section id="services" class="services">
  <h2 class="section-title">Unsere Leistungen</h2>
  <div class="service-container">
  <div class="service-card">
    <i class="fas fa-code"></i>
    <h3>Webentwicklung</h3>
    <p>Erstellen Sie moderne, schnelle und skalierbare Websites mit den neuesten Technologien.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-paint-brush"></i>
    <h3>UI/UX-Design</h3>
    <p>Kreatives und benutzerzentriertes Design, das Ihre Nutzer begeistert.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-shopping-cart"></i>
    <h3>E-Commerce</h3>
    <p>Entwicklung leistungsstarker Onlineshops, die Ihre Umsätze nachhaltig steigern.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-chart-line"></i>
    <h3>SEO-Optimierung</h3>
    <p>Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr Kunden.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-server"></i>
    <h3>Content-Hosting</h3>
    <p>Skalierbare Hosting-Lösungen für Ihre Inhalte mit höchster Verfügbarkeit.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-lightbulb"></i>
    <h3>Strategie-Beratung</h3>
    <p>Individuelle Strategien, um Ihr digitales Wachstum zu maximieren.</p>
  </div>
</div>

</section>
<!-- Über Uns -->
<v-container class="about-section" fluid>
    <!-- Titel -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="section-title">Über uns</h2>
        <p class="about-text">
          Ende 2023 gründete <b>Ridvan Rulani</b> die Rulani Web Solutions als Kleingewerbe mit dem Ziel, kleinen und mittelständischen Unternehmen 
          in der Region dabei zu helfen, sich den heutigen webbasierten Herausforderungen erfolgreich anzupassen und zu wachsen. 
          Unser Fokus liegt darauf, den Einstieg in die digitale Welt <span class="comp-name">einfach</span>, <span class="comp-name">transparent</span> und <span class="comp-name">kosteneffizient</span> zu gestalten.
          <br>
          <br>
          Im Jahr 2024 entschieden sich <b>Kevin Wroblewski</b> und <b>Ridvan Rulani</b>, ihre individuellen Stärken und Visionen zu vereinen, 
          um gemeinsam <span class="comp-name">rwsoft</span> zu gründen. Mit einem klaren Ziel vor Augen: Unternehmen in die digitale Zukunft zu begleiten und dabei Innovation, Qualität und Effizienz in den Mittelpunkt zu stellen.
          <br>
          <br>
          <span class="comp-name">rwsoft</span> steht für <span class="comp-name">modernste Technologien</span>, kreatives Denken und maßgeschneiderte Lösungen. Durch die Kombination aus Kevins Expertise im Bereich strategische Beratung und Vertrieb 
          und Ridvans umfangreichem Wissen in Webentwicklung und Design, schaffen wir digitale Produkte, die nicht nur funktionieren, sondern begeistern.
          <br>
          <br>
          Wir sind mehr als nur eine Software-Agentur – wir sind Ihr Partner für die <span class="comp-name">digitale Transformation</span>. Egal ob es darum geht, Ihre Online-Präsenz zu stärken, Prozesse zu optimieren oder neue Ideen in die Tat umzusetzen – rwsoft bringt Ihre Vision ins digitale Zeitalter.
        </p>
      </v-col>
    </v-row>

    <!-- Bilder -->
    <v-row justify="center" class="about-images">
      <v-col cols="12" sm="6" md="4" class="d-flex flex-column align-center">
        <img
          src="../assets/background.jpg"
          alt="Ridvan Rulani"
          class="about-image"
        ></img>
        <div class="person-info">
          <h3 class="person-name">Ridvan Rulani</h3>
          <p class="person-position">Gründer & Entwickler</p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="d-flex flex-column align-center">
        <img
          src="../assets/background.jpg"
          alt="Kevin Wroblewski"
          class="about-image"
        ></img>
        <div class="person-info">
          <h3 class="person-name">Kevin Wroblewski</h3>
          <p class="person-position">Sales-Consultant</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
<!-- Portfilioo-->
<v-container class="project-container" fluid>
  <v-row class="text-center">
    <v-col cols="12">
      <h2 class="section-title">Unsere Projekte</h2>
    </v-col>
  </v-row>
    <v-row class="project-container" justify="center" align="center" dense>
      <!-- Karte 1 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 1" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 1</v-card-title>
        </v-card>
      </v-col>
      <!-- Karte 2 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 2" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 2</v-card-title>
        </v-card>
      </v-col>
      <!-- Karte 3 -->
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 3" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 3</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

<button id="scrollToTopButton" class="scroll-to-top" @click="scrollToTop"><i class="fa-solid fa-arrow-up"></i></button>

<Footer></Footer>
</template>

<script>
import Header from "../components/Header.vue"; // Passe den Pfad an, falls nötig
import Footer from "../components/Footer.vue"; // Passe den Pfad an, falls nötig

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {showScrollButton: false, };
  },
  methods: {
    scrollToServices() {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>

.comp-name {
  color: rgb(var(--v-theme-primary));
}
/* Hero Section */
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--v-theme-primary));
  color: white;
  border: none;
  border-radius: 20%;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.scroll-to-top:hover {
  background-color: rgb(var(--v-theme-hover));
  box-shadow: 0 0 10px #78f1b5, 0 0 20px #78f1b5, 0 0 30px #78f1b5;
}
.scroll-to-top.show {
  visibility: visible;
  opacity: 1;
}


.hero {
  height: 100vh; /* Vollbild */
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  z-index: 1;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.671); /* Halbtransparenter Overlay */
  z-index: 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px #1E293B;
}



.hero-subtitle {
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px #1E293B;
}

.hero-button {
  margin-top: 30px;
  background: transparent; /* Dynamischer Farbverlauf */
  color: white;
  border: 1px solid white;
  padding: 15px 30px;
  font-size: 1.0rem;
  font-weight: bold;
  border-radius: 30px; /* Abgerundete Ecken */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Leichter Schatten */
  cursor: pointer;
  transition: all 0.3s ease; /* Sanfter Übergang */
}

.hero-button:hover {
  background: #62bd22;; /* Umkehrung des Farbverlaufs */
  transform: scale(1.05); /* Leichte Vergrößerung */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* Tieferer Schatten */
}

.hero-button:active {
  transform: scale(0.98); /* Leichter Klick-Effekt */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

/* Services */
.services {
  text-align: center;
  padding: 60px 20px;
  background-color: var(--v-background);
  color: var(--text);
  max-width: 1200px;
  margin: 0 auto; /* Zentriere die Sektion */
}

.service-container {
  display: grid; /* Wechsle zu CSS Grid */
  grid-template-columns: repeat(3, 1fr); /* Genau 3 Karten pro Reihe */
  gap: 20px; /* Abstand zwischen den Karten */
  padding: 40px; /* Abstand innerhalb des Containers */
  justify-content: center; /* Zentriere den Inhalt */
  gap: 40px; /* Erhöhe den Abstand zwischen den Karten */
}

.service-card {
  background: #1E293B; /* Hintergrund der Karte */
  border-radius: 15px; /* Abgerundete Ecken */
  padding: 20px;
  text-align: center;
  max-width: 100%; /* Karten passen sich der Spaltenbreite an */
  min-height: 250px; /* Einheitliche Mindesthöhe */
  display: flex; /* Flex für vertikale Zentrierung */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card h3 {
  color: #FFFFFF;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.service-card p {
  font-size: 1rem;
  color: #E2E8F0;
  line-height: 1.6;
  max-width: 260px;
  margin: 0 auto;
}

.service-card i {
  font-size: 40px;
  color: #32ff7e;
  margin-bottom: 15px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.service-card:hover i {
  color: #78f1b5;
  transform: scale(1.1);
  text-shadow: 0 0 10px #78f1b5, 0 0 20px #78f1b5, 0 0 30px #78f1b5;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
  
}

@media (max-width: 1024px) { /* Tablet-Ansicht */
  .service-container {
    grid-template-columns: repeat(2, 1fr); /* 2 Karten pro Reihe */
  }
}

@media (max-width: 768px) { /* Mobile Ansicht */
  .service-container {
    grid-template-columns: 1fr; /* 1 Karte pro Reihe */
  }
}




/* Über Uns */

.about-section {
  background-color: var(--background);
  color: var(--text);
  padding: 80px 20px;
}

.section-title {
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 20px;
}

.about-text {
  font-size: 1.1rem;
  color: #E2E8F0;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
}

.about-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.about-image {
  width: calc(100% - 20px);
  height: auto;
  max-width: 80%;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}

.person-info {
  text-align: center;
  margin-top: 15px;
}

.person-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
  margin: 5px 0;
}

.person-position {
  font-size: 1rem;
  color: #E2E8F0;
  margin: 0;
}

@media (max-width: 1000px) {
  .about-images {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .about-image {
    max-width: 80%;
  }

  .about-text {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 20px;
  }
}


/* Portfolio */
.portfolio {
  max-width: 1200px; /* Begrenze die Breite des Containers */
  margin: 0 auto;
}

.project-container {
  gap: 24px;
}

.portfolio-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgb(var(--v-theme-cards));
}

.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.portfolio-image {
  width: 80%;
  max-width: 250px;
  height: auto;
  margin-bottom: 15px;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr; /* Nur 1 Spalte */
  }

  .portfolio-item {
    max-width: 90%;
    margin: 0 auto;
  }

  .portfolio-image {
    max-width: 80%;
    margin: 0 auto 15px;
  }
}





/* Farbvariablen */

  
</style>
