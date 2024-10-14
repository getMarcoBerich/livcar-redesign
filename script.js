const toggleSwitch = document.getElementById('dark-mode-switch');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
document.body.classList.add(currentTheme);
if (currentTheme === 'dark') {
    toggleSwitch.checked = true; // Set the switch to checked if dark mode is enabled
}
}

toggleSwitch.addEventListener('change', () => {
if (toggleSwitch.checked) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark'); // Save the theme in local storage
    document.querySelector('#dark-mode-switch + label').innerHTML = '<i class="fa-solid fa-moon"></i>';
} else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light'); // Save the theme in local storage
    document.querySelector('#dark-mode-switch + label').innerHTML = '<i class="fa-solid fa-sun"></i>';
}
});

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
