<template>
  
    <!-- Header einbinden -->
    <Header></Header>
    

    <!-- Hauptinhalt -->
    <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Digitale Präsenz. <br>Strategisches Marketing. <br> Maximale Reichweite.</h1>
      <p class="hero-subtitle">
        <span class="comp-name">Auf zu rwsoft!</span>
      </p>
      
      <button @click="scrollToServices" class="theme-button" variant="outlined rounded-lg v-ripple flat" color="#8fe351">
        <i class="fa-solid fa-arrow-down"></i> Mehr erfahren
      </button>
      
    </div>
  </section>
  <!-- 
   Services ------------------------------------
  -->
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
    <i class="fas fa-search"></i>
    <h3>SEO-Optimierung</h3>
    <p>Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr Kunden.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-server"></i>
    <h3>Content-Hosting</h3>
    <p>Skalierbare Hosting-Lösungen für Ihre Inhalte mit höchster Verfügbarkeit.</p>
  </div>
  <div class="service-card">
    <i class="fas fa-chart-line"></i>
    <h3>Digitales Marketing</h3>
    <p>Gezielte Online-Marketingstrategien, die Ihre Marke bekannter machen und Ihre Zielgruppe erreichen.</p>
  </div>
</div>
<div class="cta-section">
  <p><b>Bereit, mit uns durchzustarten? Finden Sie heraus, was unsere Dienstleistungen kosten!</b></p>
  <button style="margin-top: 30px;" class="theme-button" @click="scrollToPrices" variant="outlined rounded-lg v-ripple flat">
          Was kostet es?
      </button>
</div>
</section>
<!--Portfolio

-->
<v-container class="portfolio" fluid>
  <v-row class="text-center">
    <v-col cols="12">
      <h2 class="section-title">Unsere Projekte</h2>
    </v-col>
  </v-row>
    <v-row class="project-container" justify="center" align="center" dense>
      
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 1" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 1</v-card-title>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 2" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 2</v-card-title>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card class="portfolio-item" elevation="5">
          <img src="../assets/vue.svg" alt="Projekt 3" class="portfolio-image" />
          <v-card-title class="portfolio-title">Projekt 3</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
<!--
---------------------Über Uns 
 -->
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

<!--
-----------Preise
-->
<section id="prices" class="pricing-section">
  <h2 class="section-title">Unsere Pakete</h2>
  <p class="pricing-description">
    Wählen Sie das passende Paket für Ihr Unternehmen. Egal, ob Sie gerade erst anfangen oder nach einer umfassenden digitalen Transformation suchen – wir haben die Lösung, die zu Ihnen passt.
  </p>
  <div class="highlight-box">
  <p>
    <i class="fas fa-exclamation-circle"></i>
    <strong>Hinweis:</strong> Um unsere hohe Qualität und individuelle Betreuung für jedes Projekt zu gewährleisten, können wir nur eine begrenzte Anzahl an Projekten gleichzeitig umsetzen. Wir empfehlen Ihnen daher, frühzeitig Kontakt aufzunehmen, um sich Ihren Platz zu sichern.
  </p>
</div>

  <div class="pricing-container">
    <!-- Starter Paket -->
    <div class="pricing-card">
      <h3 class="pricing-title">Starter</h3>
      <p class="pricing-price">15€ <span class="small-text">/Monat</span></p>
      <p class="pricing-subtext"> €620/einmalig</p>
      <ul class="pricing-features">
        <li><i class="fas fa-check"></i>Moderne Webentwicklung</li>
        <li><i class="fas fa-check"></i>Grundlegendes UI/UX-Design</li>
        <li><i class="fas fa-check"></i>Basis SEO-Optimierung</li>
      </ul>
      <p class="pricing-extra-info">
        * Monatliche Kosten entstehen durch Webhosting und Domain. 
      </p>
      <button class="pricing-button">Jetzt starten</button>
    </div>

    <!-- Professional Paket -->
    <div class="pricing-card highlighted">
      <h3 class="pricing-title">Professional</h3>
      <p class="pricing-price">€25 <span class="small-text">/Monat</span></p>
      <p class="pricing-subtext">€699€/einmalig</p>
      <ul class="pricing-features">
        <li><i class="fas fa-check"></i>Komplette Webentwicklung</li>
        <li><i class="fas fa-check"></i>Benutzerzentriertes UI/UX-Design</li>
        <li><i class="fas fa-check"></i>Erweiterte SEO-Optimierung</li>
        <li><i class="fas fa-check"></i>E-Commerce-Integration</li>
      </ul>
      <p class="pricing-extra-info">
        * Monatliche Kosten entstehen durch Webhosting, Pflege und Domain.
      </p>
      <button class="pricing-button highlighted">Meistgewählt</button>
    </div>

    <!-- Enterprise Paket -->
    <div class="pricing-card">
      <h3 class="pricing-title">Enterprise</h3>
      <p class="pricing-price">€100 <span class="small-text">/Monat</span></p>
        <p class="pricing-subtext">
        Für nur <b>€1500</b>/einmalig!
      </p>
      <ul class="pricing-features">
        <li><i class="fas fa-check"></i>Individuelle Webentwicklung</li>
        <li><i class="fas fa-check"></i>Premium UI/UX-Design</li>
        <li><i class="fas fa-check"></i>Komplette SEO-Strategie</li>
        <li><i class="fas fa-check"></i>Hosting & Support</li>
        <li><i class="fas fa-check"></i>Social Media Management</li>
        <li><i class="fas fa-check"></i>Google & Facebook Ads</li>
      </ul>
      <p class="pricing-extra-info">
        * Monatliche Kosten decken Webhosting, Content-Aktualisierung, Google o. Facebook Ads und SEO-Optimierung ab.
      </p>
      <button class="pricing-button">Kontakt aufnehmen</button>
    </div>
  </div>
</section>




  

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
    scrollToPrices() {
      const priceSection = document.getElementById("prices");
      if (priceSection) {
        priceSection.scrollIntoView({behavior: "smooth"})
      }
    }
  },
};
</script>

<style scoped>
/* Themes */
.comp-name {
  color: #fff;
  background:rgb(var(--v-theme-primary));
  font-weight: bold;
}
/* Hero Section */
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: rgb(var(--v-theme-accent));
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.scroll-to-top:hover {
  background-color: rgb(var(--v-theme-hover));
  box-shadow: 0 0 10px #78f1b5, 0 0 20px #78f1b5, 0 0 30px #78f1b5;
}
.scroll-to-top.show {
  visibility: visible;
  opacity: 1;
}

.theme-button {
  background-color: rgb(var(--v-theme-accent));
  color: #fff;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theme-button:hover {
  background: rgb(var(--v-theme-hover)); /* Umkehrung des Farbverlaufs */
  transform: scale(1.05); /* Leichte Vergrößerung */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* Tieferer Schatten */
}

.theme-button:active {
  transform: scale(0.98); /* Leichter Klick-Effekt */
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

/* Hero Section */
.hero {
  height: 100vh; /* Vollbild */
  /*background-image: url('../assets/background.jpg');*/
  background-color: #1E293B;
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

@media (max-width: 512px) { /* Tablet-Ansicht */
  .hero-title {
  font-size: 2.5rem;
}
.hero-subtitle {
  font-size: 2rem;
}

}



.hero-subtitle {
  font-size: 3rem;
  margin-top: 20px;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px #1E293B;
}



/* Services */
.services {
  text-align: center;
  padding: 60px 20px;
  background-color: var(--v-background);
  color: var(--text);
  max-width: 1200px;
  margin: 0 auto; /* Zentriere die Sektion */
  display: flex;
  flex-direction: column;
  align-items: center;
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

/* --------------------- Preise -------------------------*/
/* Allgemeine Sektion */
.pricing-section {
  text-align: center;
  padding: 20px 20px;
  background-color: var(--v-background);
  color: var(--text);
}

.highlight-box i {
  color: #62bd22; /* Helles Grün für das Icon */
  font-size: 1.2rem;
  margin-right: 5px;
}

.highlight-box {
  border-left: 5px solid rgb(var(--v-theme-accent));/* Dunkle Blaue Linie */
  padding: 15px;
  color: #ffffff;
  font-size: 0.8rem;
  max-width: 700px;
  text-align: center;
  margin: 0 auto 40px;
}



/* Titel */
.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #fff;
}

/* Beschreibung für die Preissektion */
.pricing-description {
  font-size: 1.2rem;
  color: #E2E8F0; /* Helles Grau für Lesbarkeit */
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.6;
}
.pricing-note {
  font-size: 0.9rem;
  color: #aaa; /* Dezentes Grau */
  margin-top: 30px;
  text-align: center;
}

/* Kleine Schrift neben dem Preis */
.small-text {
  font-size: 0.9rem;
  color: #aaa; /* Dezentes Grau */
  font-weight: normal;
  margin-left: 5px;
}

/* Subtext unter dem Preis */
.pricing-subtext {
  font-size: 1rem; /* Größer als der Standardtext */
  color: #fff; /* Helles Grün für Auffälligkeit */
  font-weight: 500;
  margin-bottom: 20px; /* Abstand zur Liste */
  text-align:center; /* Zentriert, da es eine wichtige Info ist */
  list-style: none;
}




/* Container */
.pricing-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

/* Karten */
.pricing-card {
  background-color: rgb(var(--v-theme-cards));
  padding: 30px;
  border-radius: 10px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.pricing-title {
  font-size: 1.8rem;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 20px;
}

.pricing-price {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.pricing-features {
  list-style: none; /* Entferne Standardpunkte */
  padding: 0;
  margin: 0;
  text-align: left; /* Links ausrichten */
  margin-bottom: 30px;
}

.pricing-features li {
  display: flex; /* Flexbox für Icon und Text */
  align-items: flex-start; /* Text bleibt oben, wenn er umbricht */
  font-size: 1rem; /* Normale Schriftgröße */
  color: #E2E8F0; /* Helles Grau für Liste */
  margin-bottom: 10px; /* Gleichmäßiger Abstand zwischen Punkten */
}

.pricing-features i {
  color: #62bd22; /* Helles Grün für Checkmark */
  margin-right: 10px; /* Abstand zwischen Icon und Text */
  font-size: 1.2rem; /* Größe des Icons */
  flex-shrink: 0;
}

/* Button */
.pricing-button {
  background-color: rgb(var(--v-theme-accent));
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 30px
}

.pricing-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* Hervorgehobene Karte */
.highlighted {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgb(var(--v-theme-accent));
}

.highlighted-text {
  text-shadow: 0 8px 16px rgb(var(--v-theme-accent));;
}

.highlighted .pricing-price {
  color: #fff;
}

.pricing-extra-info {
  font-size: 0.9rem;
  color: #E2E8F0;
  margin-top: 15px;
  font-style: italic;
}

.highlighted .pricing-button {
  background-color: rgb(var(--v-theme-accent));
  color: #fff
}





/* Über Uns */

.about-section {
  background-color: var(--background);
  color: var(--text);
  padding: 60px 20px;
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
  padding: 40px 0px;
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
