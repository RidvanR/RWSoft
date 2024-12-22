
import smoothscroll from 'smoothscroll-polyfill';



  export function scrollToTop() {
    // Polyfill aktivieren
    smoothscroll.polyfill();
  
    const scrollToTopButton = document.getElementById('scrollToTopButton');
  
    if (!scrollToTopButton) {
      console.error('Scroll-to-Top-Button nicht gefunden!');
      return;
    }
  
    // Scroll-Event
    window.addEventListener('scroll', () => {
  
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
  
    // Button-Klick
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
