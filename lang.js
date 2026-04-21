// Philipo Safari — Language Manager (EN / FR)
(function () {
  function applyLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute('data-' + lang);
      if (val !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });
    localStorage.setItem('philipo-lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === lang)
    );
    document.documentElement.setAttribute('lang', lang);
  }

  window.setLang = applyLang;

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('philipo-lang') || 'en';
    applyLang(saved);
  });
})();
