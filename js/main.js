// Navegación móvil y utilidades mínimas.
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    var label = toggle.querySelector('.visually-hidden');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Cerrar al elegir una opción, con Escape o al volver a pantalla grande
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 821px)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  // Abrir el sitio con ?revisar resalta los textos provisionales pendientes de reemplazar.
  if (/[?&]revisar\b/.test(window.location.search)) {
    document.body.classList.add('show-provisional');
  }
})();
