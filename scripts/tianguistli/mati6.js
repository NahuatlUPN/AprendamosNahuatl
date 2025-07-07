/*ELEMENTOS HTML */
var e_mov = document.querySelectorAll('.opcion');//Elementos movibles
var e_fij = document.querySelectorAll('.casilla');//Elementos fijos
var espOpciones = document.getElementById('opciones')
var espacioPregunta = document.getElementById("pregunta");
var idBtnOpcion = [];
var aux = 0, cont = 0;
var casillasN1 = document.getElementById("nivel-uno");
var casillasN2 = document.getElementById("nivel-dos");
//Obtener id de los contenedores
const valor = Array.from(e_fij).map(elem => elem.dataset.value);//valor del div (data-value)
var id_efij = Array.from(e_fij, div => div.id); //id del div
const ev = document.getElementById("next");
const aceptar = document.getElementById("aceptar");
const svgCorrect = document.getElementById("svgCorrect");
const svgWrong = document.getElementById("svgWrong");

var id_casilla = [
    ["r1n1", "r2n1", "r3n1"],
    ["r1n2", "r2n2", "r3n2", "r4n2", "r5n2"]
]

var opcionesN1 = [
    ["iuan", "chicuase", "chicome", "eyi", "macuipoali", "sempoali", "iuan", "matlactli"],
    ["iuan", "iuan", "sempoali", "nahui", "matlactli", "ome", "omepoali", "macuili"],
    ["iuan", "iuan", "omepoali", "chicueyi", "sempoali", "sempoali", "eyi", "chicome"],
    ["iuan", "iuan", "eyipoali", "chicnahui", "omepoali", "sempoali", "chicueyi", "chicome"],
    ["iuan", "iuan", "nahuipoali", "macuili", "eyipoali", "sempoali","chicnahui"],
    ["iuan", "iuan","eyi", "matlactli", "nahui", "chicnahui"],
    ["iuan", "iuan", "sempoali", "chicome", "matlactli", "chicuase", "ome", "macuilli"],
    ["iuan", "iuan","omepoali", "macuili", "sempoali", "ome", "matlactli", "ey"],
    ["iuan", "iuan","eyipoali", "nahui", "sempoali", "omepoali", "chicnahui"],
    ["iuan", "iuan", "nahuipoali", "se", "eyipoali", "ome", "omepoali", "sempoali"]
];

var opcionesN2 = [
    ["iuan", "iuan", "sempoali", "matlactli", "eyi", "matlactli", "chicueyi", "ome"],
    ["iuan", "iuan", "omepoali", "matlactli", "se", "eyipoali", "nahui", "sempoali"],
    ["iuan", "iuan","eyipoali", "matlactli", "ome", "omepoali", "sempoali", "chicome"],
    ["iuan","iuan", "eyipoali", "matlactli", "chicuase", "omepoali", "omepoali", "chicueyi"],
    ["iuan", "iuan", "sempoali", "matlactli", "chicueyi", "matlactli", "ome", "eyi"],
    ["iuan", "iuan", "omepoali", "matlactli", "chicnahui", "nahui", "eyipoali", "chicueyi"],
    ["iuan", "iuan", "eyipoali", "matlactli", "chicuase", "omepoali", "sempoali", "chicueyi"],
    ["iuan", "iuan", "nahuipoali", "matlactli", "ome", "nahui", "sempoali", "omepoali"]
]

var respuestasN1 = [
    ["matlactli", "iuan", "chicome"],
    ["sempoali", "iuan", "nahui"],
    ["omepoali", "iuan", "chicueyi"],
    ["eyipoali", "iuan", "chicnahui"],
    ["nahuipoali", "iuan", "macuili"],
    ["matlactli", "iuan", "eyi"],
    ["sempoali", "iuan", "chicome"],
    ["omepoali", "iuan", "macuili"],
    ["eyipoali", "iuan", "nahui"],
    ["nahuipoali", "iuan","se"]
];

var respuestasN2 = [
    ["sempoali", "iuan", "matlactli", "iuan", "eyi"],
    ["omepoali", "iuan", "matlactli", "iuan", "se"],
    ["eyipoali", "iuan", "matlactli", "iuan", "ome"],
    ["eyipoali", "iuan", "matlactli", "iuan", "chicuase"],
    ["sempoali", "iuan", "matlactli", "iuan", "chicueyi"],
    ["omepoali", "iuan", "matlactli", "iuan", "chicnahui"],
    ["eyipoali", "iuan", "matlactli", "iuan", "chicuase"],
    ["nahuipoali", "iuan", "matlactli", "iuan", "ome"]
];

var pregunta = [
    ["17", "24", "48", "69", "85", "13", "27", "45", "64", "81"],
    ["33", "51", "72", "96", "38", "59", "76", "92"]
];
/*FIN ELEMENTOS HTML*/
let correct = 0, correctAux =0;
let wrong = 0, wrongAux=0; 
var cont=0;
let intento = localStorage.getItem('intento');
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let indexNivel = parseInt(localStorage.getItem('indexNivel'));
/*ENLACE A RETRO.JS*/
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }
if (isNaN(indexPregunta) || indexPregunta === null) {
    indexPregunta = 0;
}
if (isNaN(indexNivel) || indexNivel === null) {
    indexNivel = 0;
}
  /*FIN ENLACE A RETRO.JS*/

//INICIO CODIGO DRAG&DROP
document.addEventListener("DOMContentLoaded", function(){
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
});


// Manejo del dragStart
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    console.log("Iniciando arrastre:", e.target.id);
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
    console.log("Soltando sobre:", e.target);

    // Verificar si se está soltando en un contenedor válido
    if (!e.target.classList.contains('casilla')) {
        return;
    }
    // Verificar si se está soltando en una casilla válida
    const casilla = e.target.closest('.casilla');
    if (!casilla) {
        console.log("No se soltó en una casilla válida.");
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
        if (indexNivel === 0 && cont === 3) {
            evaluar();
        }else if(indexNivel === 1 && cont === 5){
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
    console.log("Evaluando pregunta:", indexPregunta, "en nivel:", indexNivel);

    // Determinar qué casillas usar en base al nivel
    let casillasNivel, respuestas;
    if (indexNivel === 0) {
        casillasNivel = document.querySelectorAll('#nivel-uno .casilla');
        respuestas = respuestasN1[indexPregunta];
    } else if (indexNivel === 1) {
        casillasNivel = document.querySelectorAll('#nivel-dos .casilla');
        respuestas = respuestasN2[indexPregunta];
    }

    correct = 0;
    wrong = 0;

    casillasNivel.forEach((casilla, i) => {
        if (casilla.children.length > 0) {
            const palabraMovida = casilla.children[0].textContent.trim();
            const idEsperado = id_casilla[indexNivel][i];
            const idActual = casilla.id;
            const respuestaEsperada = respuestas[i];

            console.log(`Casilla #${i}`);
            console.log(`  ID actual: ${idActual}`);
            console.log(`  ID esperado: ${idEsperado}`);
            console.log(`  Palabra movida: ${palabraMovida}`);
            console.log(`  Respuesta esperada: ${respuestaEsperada}`);

            if (idActual === idEsperado && palabraMovida === respuestaEsperada) {
                correct++;
            } else {
                wrong++;
            }
        }
    });

    console.log("Correctas:", correct);
    console.log("Incorrectas:", wrong);
    espOpciones.style.display = "none";
    ev.style.display = "none";
    aceptar.style.display = "flex";

    // Aquí podrías mostrar íconos o avanzar a la siguiente pregunta
    // Ejemplo:
    if (wrong === 0 && correct === respuestas.length) {
        correctAux++;
        svgCorrect.style.display = "block";
        svgWrong.style.display = "none";
    } else {
        wrongAux++;
        svgWrong.style.display = "block";
        svgCorrect.style.display = "none";
    }

    // Restablecer contador de colocaciones
    cont = 0;
    if(indexPregunta <= pregunta[indexNivel].length - 1){
        // Aún quedan preguntas en el nivel actual, incrementamos indexPregunta
        indexPregunta++;
    } else {
        // Se han agotado las preguntas del nivel actual
        indexPregunta = 0;
    }
     // Verificar si ya no quedan niveles (o preguntas)
     if(indexPregunta >= pregunta[indexNivel].length){
        localStorage.setItem('correct', correctAux.toString());
        localStorage.setItem('wrong', wrongAux.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati6b.html";
    }
}





//FIN DEL CODIGO DE EVALUACION

//INICIO CODIGO MOSTRAR PREGUNTA
function seleccionarPregunta(){
    // Ocultar botón aceptar y los elementos de feedback
    aceptar.style.display = "none";
    svgCorrect.style.display = "none";
    svgWrong.style.display = "none";

    // Limpiar contenedores de destino
    vaciarContenedores();

    // Limpiar el contenedor de opciones y mostrarlo
    espOpciones.innerHTML = "";
    espOpciones.style.display = "flex";

    // Asigna la pregunta actual
    espacioPregunta.innerText = pregunta[indexNivel][indexPregunta];

    // Selecciona el arreglo de opciones de acuerdo al nivel actual
    let opcionesActuales;
    if(indexNivel === 0) {
        casillasN1.style.display = "flex";
        casillasN2.style.display = "none";
        opcionesActuales = opcionesN1[indexPregunta];
    } else if(indexNivel === 1) {
        casillasN1.style.display = "none";
        casillasN2.style.display = "flex";
        opcionesActuales = opcionesN2[indexPregunta];
    } else {
        window.alert("Nivel no definido");
        return;
    }

    // Crea y agrega cada opción al contenedor de opciones
    opcionesActuales.forEach((textoOpcion, idx) => {
        // Crea un nuevo elemento (por ejemplo, un párrafo)
        const opcionElemento = document.createElement("p");
        opcionElemento.classList.add("opcion");
        opcionElemento.id = "opcion" + idx; // Genera un id único
        opcionElemento.innerText = textoOpcion;
        opcionElemento.setAttribute("draggable", "true");
        
        // Agrega el listener para el dragstart
        opcionElemento.addEventListener('dragstart', dragStart);

        // Agrega el elemento al contenedor de opciones
        espOpciones.appendChild(opcionElemento);
    });
}
//FIN CODIGO MOSTRAR PREGUNTA

//INICIO CÓDIGO VACIAR CONTENEDOR
function vaciarContenedores() {
    e_fij.forEach(casilla => {
      // Remover todos los elementos hijos del contenedor
      while (casilla.firstChild) {
        casilla.removeChild(casilla.firstChild);
      }
    });
    // Reiniciar el contador de elementos arrastrados
    cont = 0;
  }
//FIN CÓDIGO VACIAR CONTENEDOR

seleccionarPregunta();
ev.addEventListener("click", evaluar);//
aceptar.addEventListener("click", seleccionarPregunta);//

console.log("IndexPregunta = " + indexPregunta);
    console.log("IndexNivel = " + indexNivel);