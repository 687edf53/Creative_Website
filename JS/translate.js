// Start Navbar
const navLinks = document.querySelectorAll('.nav-links li a');
const LangBtn = document.querySelector('.special-btn');

const navLangObj = {
  ar: {
    btn: 'الانجليزية',
    home: 'الرئيسية',
    about: 'عنا',
    contact: 'تواصل معنا'
  }
};

LangBtn.addEventListener('click', () => {
  if (LangBtn.textContent.trim() === 'English') {
    LangBtn.textContent = 'الانجليزية';

    navLinks[0].textContent = navLangObj.ar.home;
    navLinks[1].textContent = navLangObj.ar.about;
    navLinks[2].textContent = navLangObj.ar.contact;
  } else {
    LangBtn.textContent = 'English';
    navLinks[0].textContent = Object.keys(navLangObj.ar)[1];
    navLinks[1].textContent = Object.keys(navLangObj.ar)[2];
    navLinks[2].textContent = Object.keys(navLangObj.ar)[3];
  }
});
// End Navbar

// Start Header
const headerName = document.querySelectorAll('header .my_name .hidden-msg > div');
const headerButtons = document.querySelectorAll('header .half-btns button');

LangBtn.addEventListener('click', () => {
  if (LangBtn.textContent.trim() === 'English') {
    headerTitle.textContent = 'Hello there!';
    headerName[0].textContent = 'mohamed hossam';
    headerName[1].textContent = 'mohamed hossam';
    headerButtons[0].textContent = 'See My Projects';
    headerButtons[1].textContent = 'See My Tasks';
  } else {
    headerTitle.textContent = '!مرحبا بكم';
    headerName[0].textContent = 'محمد حسام';
    headerName[1].textContent = 'محمد حسام';
    headerButtons[0].textContent = 'شاهد المشاريع';
    headerButtons[1].textContent = 'شاهد المهام';
  }
});
// End Header
