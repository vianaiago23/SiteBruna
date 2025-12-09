// Ano automático no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.querySelector('header nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('mobile-active');
  });
});
