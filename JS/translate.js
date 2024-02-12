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
  if (LangBtn.textContent.trim() === 'arabic') {
    LangBtn.textContent = 'انجليزية';

    navLinks[0].textContent = navLangObj.ar.home;
    navLinks[1].textContent = navLangObj.ar.about;
    navLinks[2].textContent = navLangObj.ar.contact;
  } else {
    LangBtn.textContent = 'arabic';
    navLinks[0].textContent = Object.keys(navLangObj.ar)[1];
    navLinks[1].textContent = Object.keys(navLangObj.ar)[2];
    navLinks[2].textContent = Object.keys(navLangObj.ar)[3];
  }
});
// End Navbar

// Start Header
const headerName = document.querySelectorAll('header .my_name .hidden-msg > div');
const headerButtons = document.querySelectorAll('header .half-btns button');
const headerJob = document.querySelectorAll('header .my_job > span')
const headerP = document.querySelector('header p')

LangBtn.addEventListener('click', () => {
  if (LangBtn.textContent.trim() === 'arabic') {
    headerTitle.textContent = 'Hello there!';
    headerName[0].textContent = 'mohamed hossam';
    headerName[1].textContent = 'mohamed hossam';
    headerJob[0].textContent = 'frontend'
    headerJob[1].textContent = 'developer'
    headerButtons[0].textContent = 'See My Projects';
    headerButtons[1].textContent = 'See My Tasks';
    headerP.textContent = 'As a seasoned frontend developer, I specialize in transforming concepts into visually stunning and user-friendly websites. With an eye for detail and a flair for creativity'
  } else {
    headerTitle.textContent = '!مرحبا بكم';
    headerName[0].textContent = 'محمد حسام';
    headerName[1].textContent = 'محمد حسام';
    headerJob[0].textContent = 'مطور'
    headerJob[1].textContent = 'مواقع'
    headerButtons[0].textContent = 'شاهد المشاريع';
    headerButtons[1].textContent = 'شاهد المهام';
    headerP.textContent = 'باعتباري مطورًا متمرسًا للواجهة الأمامية، فأنا متخصص في تحويل المفاهيم إلى مواقع ويب مذهلة بصريًا وسهلة الاستخدام. مع الاهتمام بالتفاصيل وذوق الإبداع'
  }
});
// End Header
