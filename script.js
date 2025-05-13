document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  // Ici, vous pouvez ajouter d'autres comportements :
  // - Chargement dynamique des cartes via fetch()
  // - Filtre / recherche
  // - Carousel, modales, etc.
});
