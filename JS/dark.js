// ---- Start Variables ----

// Global Rules
const rootStyle = document.documentElement.style;

// Navbar
const btnMode = document.querySelector('.mode-btn');
const btnModeIcon = document.querySelector('.mode-btn i');

// Header
const headerTitle = document.querySelector('header h2');

// ---- End Variables ----

// ---- Start Color Mode ----
btnMode.addEventListener('click', () => {
  if (btnModeIcon.className == 'fa-solid fa-moon') {

    rootStyle.setProperty('--main-color', 'white');
    rootStyle.setProperty('--light-color', 'black');

    btnModeIcon.className = 'fa-solid fa-sun';

    headerTitle.classList.add('text-shine');
  } else {

    rootStyle.setProperty('--main-color', 'black');
    rootStyle.setProperty('--light-color', 'white');

    btnModeIcon.className = 'fa-solid fa-moon';

    headerTitle.classList.remove('text-shine');
  }
});
// ---- End Color Mode ----