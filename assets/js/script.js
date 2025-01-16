document.addEventListener("DOMContentLoaded", function () {
	/* Funcionalidad para el color al seleccionar un link de la barra de navegación */
	const links = document.querySelectorAll(".navlink");

	links.forEach((link) => {
		link.addEventListener("click", function () {
			links.forEach((lnk) => {
				lnk.classList.remove("active");
			});

			link.classList.add("active");
		});
	});
});

/* Funcionalidad para cambiar el contenido con la barra de navegación */
// function watchContent(id) {
// 	// Ocultar todos los contenidos
// 	var sections = document.querySelectorAll(".sections");
// 	sections.forEach(function (section) {
// 		section.style.display = "none";
// 	});

// 	// Mostrar solo el contenido con el ID seleccionado
// 	var watchSection = document.getElementById(id);
// 	if (watchSection) {
// 		watchSection.style.display = "block";
// 	}
// }

function watchContent(id) {
	// Ocultar todos los contenidos
	const sections = document.querySelectorAll(".sections");
	sections.forEach((section) => {
		// Asegúrate de que solo se ocultan los elementos activos
		if (section.classList.contains("active")) {
			section.classList.remove("active");
			setTimeout(() => {
				section.style.display = "none"; // Oculta después de la transición
			}, 300); // Duración de la transición
		}
	});

	// Mostrar solo el contenido con el ID seleccionado
	const watchSection = document.getElementById(id);
	if (watchSection) {
		// Asegúrate de que esté visible antes de añadir la clase activa
		setTimeout(() => {
			watchSection.style.display = "block";
			setTimeout(() => {
				watchSection.classList.add("active");
			}, 300);
		}, 300); // Retraso para permitir que la transición comience
	} else {
		console.error(`No se encontró una sección con el ID: ${id}`);
	}
}
