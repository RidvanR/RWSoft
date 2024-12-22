<template>
    <footer class="footer">
      <!-- Logo und Name -->
      <div class="footer-logo-container">
        <img
          src="../assets/rwsoft-logo.svg"
          height="36"
          width="36"
          alt="Logo"
          class="footer-logo"
        />
        <span class="footer-name">rwsoft™</span>
      </div>
  
      <!-- Navigation -->
      <nav class="footer-nav">
        <a href="/privacy" class="footer-link">Datenschutz</a>
        <a href="/imprint" class="footer-link">Impressum</a>
        <a href="/contact" class="footer-link">Kontakt</a>
      </nav>
  
      <!-- Copyright -->
      <div class="footer-copyright">
        <p>&copy; 2024 rwsoft™ Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </template>
  
  <script>
export default {};
</script>

<style>
/* Footer Styling */
.footer {
bottom: 0;
background: #111821;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.footer-logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.1);
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-nav {
  display: flex;
  gap: 15px;
}

.footer-link {
  color: #8fe351;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #fff;
}

.footer-copyright {
  font-size: 0.8rem;
  color: #aaa;
}


</style>
