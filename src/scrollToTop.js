// Warten, bis die Seite geladen ist

export function scrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
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
  
};