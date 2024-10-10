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
          document.querySelector('#dark-mode-switch + label').innerText = '🌑';
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light'); // Save the theme in local storage
          document.querySelector('#dark-mode-switch + label').innerText = '☀️';
        }
    });