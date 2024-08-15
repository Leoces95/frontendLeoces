// Función para mostrar la sección de perfil y ocultar otras secciones
function perfil() {
    toggleVisibility('mostrarPerfil');
}

// Función para mostrar la sección de habilidades y ocultar otras secciones
function habilidades() {
    toggleVisibility('mostrarHabilidades');
}

// Función para mostrar la sección de idiomas y ocultar otras secciones
function idiomas() {
    toggleVisibility('mostrarIdiomas');
}

// Función para mostrar la sección de contacto y ocultar otras secciones
function contacto() {
    toggleVisibility('mostrarContacto');
}

// Función para manejar la visibilidad de las secciones
function toggleVisibility(idToShow) {
    // Obtener todos los elementos de las secciones
    const sections = ['mostrarPerfil', 'mostrarHabilidades', 'mostrarIdiomas', 'mostrarContacto'];
    
    // Ocultar todas las secciones
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.hidden = (id !== idToShow);
        }
    });
    
    // Mostrar la sección clickeada
    const elementToShow = document.getElementById(idToShow);
    if (elementToShow) {
        elementToShow.hidden = false;
    }
}