const LangBtn = document.querySelector('.special-btn');

const translations = {
  ar : {
    "home" : "الرئيسية",
    "about" : "عني",
    "contact" : "اتصل بنا",
    "arabic" : "الإنجليزية",
    "hello-msg" : "!مرحبا بك",
    "hidden-msg" : "كيف حالك؟",
    "name" : "محمد حسام",
    "developer" : "مواقع",
    "frontend" : "مطور",
    "projects" : "تصفح مشاريعي",
    "tasks" : "تصفح مهامي",
    "my-info" : "باعتباري مطورًا متمرسًا للواجهة الأمامية، فأنا متخصص في تحويل المفاهيم إلى مواقع ويب مذهلة بصريًا وسهلة الاستخدام. مع الاهتمام بالتفاصيل وذوق الإبداع",
  },
  en: {
    "home" : "Home",
    "about" : "About",
    "contact" : "Contact",
    "arabic" : "arabic",
    "hello-msg" : "Hello There!",
    "name" : "Mohamed Hossam",
    "hidden-msg" : "How are you?",
    "frontend" : "Frontend",
    "developer" : "Developer",
    "projects" : "See My Projects",
    "tasks" : "See My Tasks",
    "my-info" : "As a seasoned frontend developer, I specialize in transforming concepts into visually stunning and user-friendly websites. With an eye for detail and a flair for creativity",
    
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; 
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

localStorage.setItem('bodyclass', 'arabic')
const language = localStorage.getItem("lang") || "en"; 
LangBtn.onclick = () => {
  if (language === "en") {
    setLanguage("ar");
    localStorage.setItem("lang", "ar");
    document.body.classList.add('arabic')
  } else {
    setLanguage("en");
    localStorage.setItem("lang", "en");
    document.body.classList.remove('arabic')
  }
}
if (language === "en") {
  document.body.classList.remove(localStorage.getItem('bodyclass'))
} else {
  document.body.classList.add(localStorage.getItem('bodyclass'))
}