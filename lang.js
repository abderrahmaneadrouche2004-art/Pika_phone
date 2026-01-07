/* =====================================
   ملف اللغات والتحكم – Pika Phone
===================================== */

/* ===== قاموس اللغات ===== */
const L = {

  ar: {
    dir: "rtl",

    /* الترحيب */
    t1: "مرحبًا بك في Pika Phone 👋",
    t2: "منصة تساعدك على التحقق من أرقام IMEI أو التبليغ عن الهواتف المسروقة.",

    /* الأزرار */
    b1: "📢 تبليغ عن هاتف مسروق",
    b2: "🔍 تحقق من رقم IMEI",

    /* إخلاء المسؤولية */
    disclaimer:
    "⚠️ إخلاء مسؤولية: هذا الموقع يقدم خدمة معلوماتية فقط، ولا يتحمل أي مسؤولية قانونية عن القرارات التي يتخذها المستخدم. التحقق لا يغني عن الإجراءات الرسمية لدى الجهات المختصة.\n\nمعًا لمحاربة سرقة الهواتف 📵"
  },

  fr: {
    dir: "ltr",

    t1: "Bienvenue sur Pika Phone 👋",
    t2: "Plateforme pour vérifier les IMEI ou signaler les téléphones volés.",

    b1: "📢 Signaler un téléphone volé",
    b2: "🔍 Vérifier un IMEI",

    disclaimer:
    "⚠️ Avertissement : ce site fournit uniquement des informations et n’assume aucune responsabilité légale. La vérification ne remplace pas les procédures officielles.\n\nEnsemble contre le vol de téléphones."
  },

  en: {
    dir: "ltr",

    t1: "Welcome to Pika Phone 👋",
    t2: "A platform to check IMEI numbers or report stolen phones.",

    b1: "📢 Report a stolen phone",
    b2: "🔍 Check IMEI",

    disclaimer:
    "⚠️ Disclaimer: this site provides informational services only and bears no legal responsibility for user decisions. Verification does not replace official procedures.\n\nTogether against phone theft."
  }
};

/* =====================================
   تغيير اللغة
===================================== */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  loadLang();
}

/* تحميل اللغة */
function loadLang() {
  const lang = localStorage.getItem("lang") || "ar";

  document.documentElement.lang = lang;
  document.documentElement.dir = L[lang].dir;

  for (let key in L[lang]) {
    const el = document.getElementById(key);
    if (el) el.innerText = L[lang][key];
  }

  /* تحديث نص إخلاء المسؤولية */
  const d = document.getElementById("disclaimerText");
  if (d) d.innerText = L[lang].disclaimer;
}

/* =====================================
   إخلاء المسؤولية – التحكم
===================================== */

/* عند الضغط على زر "أوافق على الشروط" */
function acceptTerms() {
  localStorage.setItem("termsAccepted", "yes");
  const overlay = document.getElementById("termsOverlay");
  if (overlay) overlay.style.display = "none";
}

/* عند فتح الصفحة */
window.addEventListener("load", function () {

  /* تحميل اللغة */
  loadLang();

  /* التحقق من الموافقة */
  if (localStorage.getItem("termsAccepted") === "yes") {
    const overlay = document.getElementById("termsOverlay");
    if (overlay) overlay.style.display = "none";
  }
});