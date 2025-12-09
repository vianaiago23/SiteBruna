document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  if (!hamburger || !nav) return; // nada a fazer se algum não existir

  // acessibilidade
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('tabindex', '0');
  hamburger.setAttribute('aria-label', 'Abrir menu');
  hamburger.setAttribute('aria-expanded', 'false');

  function toggleMenu() {
    const isOpen = nav.classList.toggle('mobile-active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  hamburger.addEventListener('click', toggleMenu);

  // permitir abrir com Enter / Space
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // fechar ao clicar fora do menu (útil em mobile)
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('mobile-active')) return;
    const isClickInsideNav = nav.contains(e.target) || hamburger.contains(e.target);
    if (!isClickInsideNav) {
      nav.classList.remove('mobile-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('mobile-active')) {
      nav.classList.remove('mobile-active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});