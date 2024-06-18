document.addEventListener("DOMContentLoaded", function() {
/* Funcionalidad para el color al seleccionar un link de la barra de navegación */
  const links = document.querySelectorAll('.navlink');

  links.forEach(link => {
    link.addEventListener('click', function() {
      links.forEach(lnk => {
        lnk.classList.remove('active');
      });

      link.classList.add('active');
    });
  });
});

/* Funcionalidad para cambiar el contenido con la barra de navegación */
function watchContent(id) {
  // Ocultar todos los contenidos
  var sections = document.querySelectorAll('.sections');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Mostrar solo el contenido con el ID seleccionado
  var watchSection = document.getElementById(id);
  if (watchSection) {
    watchSection.style.display = 'block';
  }
}