//Obtener los contenedores y parrafos
var contenedores = document.querySelectorAll('.contenedor-img');
var parrafos = document.querySelectorAll('p');
let contador=0;

//Agregar los eventos de arrastrar y soltar a los parrafos
parrafos.forEach(function(parrafo) {
    parrafo.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text', parrafo.id);
    });
  });

//Agregar eventos de arrastrar sobre los contenedores
contenedores.forEach(function(contenedor) {
    contenedor.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    contenedor.addEventListener('drop', function(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData('text');
      var elemento = document.getElementById(data);
      
      // Verificar si el contenedor corresponde al párrafo
      if (contenedor.id === '0' && elemento.id === 'caltlamachtilistli') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      } else if (contenedor.id === '1' && elemento.id === 'mila') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      } else if (contenedor.id === '2' && elemento.id === 'ateno') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      } else if (contenedor.id === '3' && elemento.id === 'nocha') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      } else if (contenedor.id === '4' && elemento.id === 'tianguis') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      } else if (contenedor.id === '5' && elemento.id === 'teopan') {
        contenedor.appendChild(elemento);
        contador++;
        console.log(contador);
      }
      if(contador === 6){
        console.log("si entro al if");
        window.location.href = "../../pages/chaneuani/mach8b.html";
      }
    });
});

