<template>
    <section class="contact-section">
      <!-- Header -->
      <Header />
        
      <section class="contact-info">
    <h2 class="section-title">Kontaktieren Sie uns direkt</h2>
    <p class="contact-description">
      Wir sind für Sie da! Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns, von Ihnen zu hören.
    </p>

    <div class="info-container">
      <!-- Telefonnummer -->
      <div class="info-box">
        <i class="fas fa-phone"></i>
        <h3>Telefon</h3>
        <p><a href="tel:+491234567890">+49 123 456 7890</a></p>
      </div>

      <!-- E-Mail -->
      <div class="info-box">
        <i class="fas fa-envelope"></i>
        <h3>E-Mail</h3>
        <p><a href="mailto:info@rwsoft.de">info@rwsoft.de</a></p>
      </div>
    </div>
  </section>
      <!-- Kontaktformular -->
      <div class="form-container">
        <h1 class="section-title">Kontaktieren Sie uns</h1>
        <p class="contact-description">
          Haben Sie Fragen oder möchten eines unserer Pakete buchen? Füllen Sie das untenstehende Formular aus, und wir melden uns schnellstmöglich bei Ihnen.
        </p>
  
        <!-- Formular -->
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          class="contact-form"
        >
          <!-- Netlify Hidden Field -->
          <input type="hidden" name="form-name" value="contact" />
  
          <!-- Name -->
          <div class="form-group">
            <label for="name">Ihr Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Max Mustermann"
              required
            />
          </div>
  
          <!-- E-Mail -->
          <div class="form-group">
            <label for="email">E-Mail-Adresse</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="max.mustermann@example.com"
              required
            />
          </div>
  
          <!-- Paket Auswahl -->
          <div class="form-group">
            <label for="package">Welches Paket interessiert Sie?</label>
            <select class="select" id="package" name="package" required>
              <option value="" disabled selected>Bitte wählen Sie ein Paket</option>
              <option value="Starter">Starter</option>
              <option value="Professional">Professional</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
  
          <!-- Nachricht -->
          <div class="form-group">
            <label for="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Teilen Sie uns Ihr Anliegen mit..."
              required
            ></textarea>
          </div>
  
          <!-- Datenschutz Hinweis -->
          <p class="privacy-notice">
            <i class="fas fa-shield-alt"></i> Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Weitere Informationen finden Sie in unserer <a href="/datenschutz" class="privacy-link">Datenschutzerklärung</a>.
          </p>
  
          <!-- Absenden-Button -->
          <button type="submit" class="submit-button">Absenden</button>
        </form>
      </div>
  
      <!-- Footer -->
      <Footer />
    </section>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  /* Kontaktseite */
  .contact-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: auto;
    background-color: rgb(var(--v-theme-background));
    color: #e2e8f0;
  }
  
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 100px;
    padding: 40px;
    border-radius: 10px;
    background: rgb(var(--v-theme-cards));
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffffff;
    text-align: center;
  }
  
  .contact-description {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .form-group label {
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    box-shadow: 0 0 10px rgba(50, 255, 126, 0.8);
  }
  
  .submit-button {
    background-color: #62bd22;
    color: #ffffff;
    font-size: 1rem;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .submit-button:hover {
    background-color: #78f1b5;
  }

  .select {
    background-color: rgb(var(--v-theme-cards));
  }
  
  .privacy-notice {
    font-size: 0.9rem;
    color: #aaa;
    text-align: center;
    margin-top: 20px;
  }
  
  .privacy-link {
    color: #78f1b5;
    text-decoration: none;
  }
  
  .privacy-link:hover {
    text-decoration: underline;
  }
  
  /* RESPONSIVE DESIGN */
  @media (max-width: 768px) {
    .form-container {
      padding: 20px;
    }
  
    .section-title {
      font-size: 2rem;
    }
  
    .contact-description {
      font-size: 1rem;
    }
  
    .submit-button {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
  
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.8rem;
    }
  
    .contact-description {
      font-size: 0.9rem;
    }
  
    .form-container {
      width: 80%;
    }
  }

  .contact-info {
  padding: 60px 20px;
  background-color: #1e293b;
  color: #e2e8f0;
  text-align: center;
  border-radius: 10px;
  max-width: 800px;
  margin: 40px auto; /* Zentriere die Section */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #e2e8f0;
}

.info-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap; /* Responsiv: Elemente umbrechen */
}

.info-box {
  background-color: #2d3748;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1 1 300px; /* Responsiv: Mindestbreite 300px */
  max-width: 400px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-box i {
  font-size: 2rem;
  color: #62bd22;
  margin-bottom: 10px;
}

.info-box h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.info-box p {
  font-size: 1.1rem;
  color: #e2e8f0;
  margin: 0;
}

.info-box a {
  color: #78f1b5;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-box a:hover {
  color: #62bd22;
}

/* Responsivität */
@media (max-width: 768px) {
  .info-container {
    flex-direction: column; /* Stapeln auf kleineren Geräten */
    align-items: center;
  }
}
  </style>