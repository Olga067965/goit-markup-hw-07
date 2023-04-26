
(() => {
  //  Шукаємо елементи в html розмітці 
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const body = document.querySelector('body');
// кінець пошуку //
  
  // Функція, яка додає та знімає класи, через toggle
  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenu.classList.toggle('is-hidden');
    body.classList.toggle('Olga')
  };
// кінець функції
  
// Обробник події по кліку миши
  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.add('is-hidden');
    body.classList.remove('Olga');
  });
})();