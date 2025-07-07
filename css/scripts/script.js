window.addEventListener('resize', checkWidth);

function checkWidth() {
    const menu = document.querySelector('.header2');
    const dropdown = document.querySelector('.menu-dropdown');

    if (window.innerWidth <= 400) { // Cambia 400 por el valor que desees para el ancho de pantalla
        menu.style.display = 'none';
        dropdown.style.display = 'flex';
    } else {
        menu.style.display = 'flex-end';
        dropdown.style.display = 'none';
    }
}

// Llama a la función al cargar la página
checkWidth();
