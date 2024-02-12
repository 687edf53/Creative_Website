// Start Global Rules
const rootStyle = document.documentElement.style;
// End Global Rules

// Start Navbar
const btnMode = document.querySelector('.mode-btn');
const btnModeIcon = document.querySelector('.mode-btn i');

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
// End Navbar

// Start Header
const headerTitle = document.querySelector('header h2');
// End Header
