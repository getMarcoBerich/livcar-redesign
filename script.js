document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById('how-it-works');
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.style.opacity = '1'; // Make section visible
          section.style.transform = 'translateY(0)'; // Move to original position
          
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('show'); // Add class to each step for animation
            }, index * 1000); // Delay for staggered effect
          });

          observer.unobserve(section); // Stop observing after the animation
        }
      });
    });

    observer.observe(section); // Start observing the section
  });

const searchButton = document.getElementsByClassName('search-button')[0];
searchButton.addEventListener('click', e => {
  window.location.href = 'https://livcar.hr/search/pickup/1729696140000/return/1730372400000/category/0'
}); 

const mobileMenu = document.getElementsByClassName('mobile')[0];
const ulMenu = document.querySelector('header .nav ul');

mobileMenu.addEventListener('click', e => {
  ulMenu.classList.toggle('active');
})