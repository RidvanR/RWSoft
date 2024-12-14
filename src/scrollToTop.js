// Warten, bis die Seite geladen ist

export function scrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
  
    // Button nur anzeigen, wenn der Benutzer scrollt
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) { // Zeige Button ab 200px Scrolltiefe
        scrollToTopButton.style.display = 'block';
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.style.opacity = '0';
        setTimeout(() => (scrollToTopButton.style.display = 'none'), 300); // Verstecke nach 300ms
        scrollToTopButton.classList.remove('show');
      }
    });

   
  
    // Scroll nach oben beim Klicken
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

   
      const serviceContainer = document.querySelector(".service-container");
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Klasse für die Animation hinzufügen
            observer.unobserve(entry.target); // Beobachtung beenden
          }
        });
      });
    
      observer.observe(serviceContainer);
    
  
};