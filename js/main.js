// Blog Técnico - Script principal con mejoras interactivas

document.addEventListener('DOMContentLoaded', function() {
  // Marcar link activo en navegación
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Efecto de scroll suave (complementario a CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Log de página cargada (para verificación)
  console.log('Blog Técnico cargado correctamente');
});

// Función para mejorar accesibilidad en enlaces de posts
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Cerrar cualquier modal si se implementa en el futuro
    console.log('Escape key pressed');
  }
});
