function toggleSeccion(id) {
    // Cierra todos los contenidos primero
    const contenidos = document.querySelectorAll('.contenido');
    contenidos.forEach(c => {
      if (c.id === id) {
        // Alterna solo el que fue clicado
        c.style.display = (c.style.display === 'block') ? 'none' : 'block';
      } else {
        c.style.display = 'none';
      }
    });
  }