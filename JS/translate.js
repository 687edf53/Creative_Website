// Start Variables

// Navbar
const navLinks = document.querySelectorAll('.nav-links li a');
const LangBtn = document.querySelector('.special-btn');

// Header
const headerName = document.querySelectorAll('header .my_name .hidden-msg > div');
const headerButtons = document.querySelectorAll('header .half-btns button');
const headerJob = document.querySelectorAll('header .my_job > span')
const headerP = document.querySelector('header p')

// End Variables

// Start Translation
LangBtn.addEventListener('click', () => {
  if (LangBtn.textContent.trim() === 'arabic') {

    // Nav
    LangBtn.textContent = 'انجليزية';
    
    navLinks[0].textContent = 'الرئيسية';
    navLinks[1].textContent = 'عنا';
    navLinks[2].textContent = 'تواصل معنا';

    // Header
    headerTitle.textContent = '!مرحبا بكم';

    headerName[0].textContent = 'محمد حسام';
    headerName[1].textContent = 'محمد حسام';
    headerName[2].textContent = 'كيف حالك؟';

    headerJob[0].textContent = 'مطور'
    headerJob[1].textContent = 'مواقع'

    headerButtons[0].textContent = 'شاهد المشاريع';
    headerButtons[1].textContent = 'شاهد المهام';
    
    headerP.textContent = 'باعتباري مطورًا متمرسًا للواجهة الأمامية، فأنا متخصص في تحويل المفاهيم إلى مواقع ويب مذهلة بصريًا وسهلة الاستخدام. مع الاهتمام بالتفاصيل وذوق الإبداع'

    document.body.classList.add('arabic')

    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'

  } else {

    // Nav
    LangBtn.textContent = 'arabic';
    navLinks[0].textContent = 'Home';
    navLinks[1].textContent = 'About';
    navLinks[2].textContent = 'Contact';

    // Header
    headerTitle.textContent = 'Hello there!';

    headerName[0].textContent = 'mohamed hossam';
    headerName[1].textContent = 'mohamed hossam';
    headerName[2].textContent = 'How are you?';

    headerJob[0].textContent = 'frontend'
    headerJob[1].textContent = 'developer'
    
    headerButtons[0].textContent = 'See My Projects';
    headerButtons[1].textContent = 'See My Tasks';
    
    headerP.textContent = 'As a seasoned frontend developer, I specialize in transforming concepts into visually stunning and user-friendly websites. With an eye for detail and a flair for creativity'

    document.body.classList.remove('arabic')

    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }
});
// End Translation