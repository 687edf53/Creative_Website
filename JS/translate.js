// Start Navbar
const navLinks = document.querySelectorAll('.nav-links li a');
const LangBtn = document.querySelector('.special-btn');

LangBtn.addEventListener('click', () => {
  if (LangBtn.textContent.trim() === 'arabic') {
    LangBtn.textContent = 'انجليزية';

    navLinks[0].textContent = 'الرئيسية';
    navLinks[1].textContent = 'عنا';
    navLinks[2].textContent = 'تواصل معنا';

    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  } else {
    LangBtn.textContent = 'arabic';
    navLinks[0].textContent = 'Home';
    navLinks[1].textContent = 'About';
    navLinks[2].textContent = 'Contact';

    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }
});
// End Navbarlang

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
    headerName[0].parentElement.classList.remove('arabic')
    headerName[2].textContent = 'How are you?';

    headerJob[0].textContent = 'frontend'
    headerJob[1].textContent = 'developer'
    headerJob[0].parentElement.classList.remove('arabic')

    headerButtons[0].textContent = 'See My Projects';
    headerButtons[1].textContent = 'See My Tasks';

    headerP.textContent = 'As a seasoned frontend developer, I specialize in transforming concepts into visually stunning and user-friendly websites. With an eye for detail and a flair for creativity'
  } else {
    headerTitle.textContent = '!مرحبا بكم';

    headerName[0].textContent = 'محمد حسام';
    headerName[1].textContent = 'محمد حسام';
    headerName[2].textContent = 'كيف حالك؟';
    headerName[0].parentElement.classList.add('arabic')

    headerJob[0].textContent = 'مطور'
    headerJob[1].textContent = 'مواقع'
    headerJob[0].parentElement.classList.add('arabic')

    headerButtons[0].textContent = 'شاهد المشاريع';
    headerButtons[1].textContent = 'شاهد المهام';

    headerP.textContent = 'باعتباري مطورًا متمرسًا للواجهة الأمامية، فأنا متخصص في تحويل المفاهيم إلى مواقع ويب مذهلة بصريًا وسهلة الاستخدام. مع الاهتمام بالتفاصيل وذوق الإبداع'
  }
});
// End Header
