/*ELEMENTOS HTML */
const e_mov = document.querySelectorAll('.opcion');//Elementos movibles
var e_fij = document.querySelectorAll('.espacio');//Elementos fijos
//Obtener id de los contenedores
const valor = Array.from(e_fij).map(elem => elem.dataset.value);//valor del div (data-value)
var id_efij = Array.from(e_fij, div => div.id); //id del div
const ev = document.getElementById("next");
/*FIN ELEMENTOS HTML*/
let correct = 0;
let wrong = 0;
var cont=0;
let intento = localStorage.getItem('intento');

/*ENLACE A RETRO.JS*/
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }
  /*FIN ENLACE A RETRO.JS*/

//INICIO CODIGO DRAG&DROP

// Controlador de eventos dragstart
e_mov.forEach(emov => {
    emov.addEventListener('dragstart', dragStart);
});

// Controlador de eventos de destino
e_fij.forEach(efij => {
    efij.addEventListener('dragenter', dragEnter);
    efij.addEventListener('dragover', dragOver);
    efij.addEventListener('dragleave', dragLeave);
    efij.addEventListener('drop', drop);
});

// Manejo del dragStart
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

// Manejo de eventos de destino
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}  

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault(); // Asegura que el evento drop se maneje correctamente
    e.target.classList.remove('drag-over');

    // Verificar si se está soltando en un contenedor válido
    if (!e.target.classList.contains('espacio')) {
        return;
    }

    // Obtener el elemento arrastrable
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // Verificar si el contenedor ya está ocupado
    if (e.target.children.length === 0) {
        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
        cont++;
        // Verificar si todos los elementos han sido colocados
        if (cont === e_fij.length) {
            //ev.style.display = "block";
            evaluar();
        }
    } else {
        console.log("Respuesta no valida");
        draggable.classList.remove('hide'); // Mostrar el elemento de nuevo
    }
}

//FIN CODIGO DRAG&DROP

//INICIO CODIGO DE EVALUACION
function evaluar() {
    e_fij.forEach((efij, i) => {
        // Verificar si hay un elemento dentro del contenedor
        if (efij.children.length > 0) {
            // Obtener el valor del elemento arrastrado (data-value) y el ID del contenedor
            const palabraMovida = efij.children[0].dataset.value; // El valor del elemento arrastrado
            console.log("Valor de la palabra: " + palabraMovida);

            // Comparar el contenedor y el valor arrastrado con las respuestas correctas
            if (id_efij[i] === "r1" && palabraMovida === "nosihuamachcone") {
                correct++;
            } else if (id_efij[i] === "r2" && palabraMovida === "nomachcone") {
                correct++;
            } else if (id_efij[i] === "r3" && palabraMovida === "nosihuacone") {
                correct++;
            } else if (id_efij[i] === "r4" && palabraMovida === "nocone") {
                correct++;
            } else if ((id_efij[i] === "r5" || id_efij[i] === "r6") && palabraMovida === "noicni") {
                correct++;
            } else if (id_efij[i] === "r7" && palabraMovida === "isihua") {
                correct++;
            } else if (id_efij[i] === "r8" && palabraMovida === "notlaca") {
                correct++;
            } else if (id_efij[i] === "r9" && palabraMovida === "notat") {
                correct++;
            } else if (id_efij[i] === "r10" && palabraMovida === "nona") {
                correct++;
            } else {
                wrong++; // Contar como incorrecta si no coincide
            }
        } else {
            wrong++; // Contar como incorrecta si no hay un elemento en el contenedor
        }
    });

    /*Envio de datos a retro.js y mostrar pantalla de retroalimentacion*/
    localStorage.setItem('correct', correct.toString());
    localStorage.setItem('wrong', wrong.toString());
    intento++;
    localStorage.setItem('intento', intento.toString());
    window.location.href = "../../pages/chaneuani/mach16b.html";
}
//FIN DEL CODIGO DE EVALUACION

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 230,
        behavior: 'smooth'
    });
  }

ev.addEventListener("click", evaluar);//