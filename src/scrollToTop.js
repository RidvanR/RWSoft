
import smoothscroll from 'smoothscroll-polyfill';

export function scrollToTop() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
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