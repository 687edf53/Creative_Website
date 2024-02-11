// Start Navbar
const btnMode = document.querySelector('.mode-btn');
const btnModeIcon = document.querySelector('.mode-btn i');
btnMode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  headerTitle.classList.toggle('text-shine')
  if (document.body.classList.contains('dark')) {
    btnModeIcon.className = 'fa-solid fa-sun';
  } else {
    btnModeIcon.className = 'fa-solid fa-moon'
  }
})
// End Navbar

// Start Header
const headerTitle = document.querySelector('header h2')
// End Header