/*ELEMENTOS HTML */
var e_mov = document.querySelectorAll('.opcion');//Elementos movibles
var e_fij = document.querySelectorAll('.casilla');//Elementos fijos
var casilla1 = document.getElementById("r1n1");
var casilla2 = document.getElementById("r2n1");
var casilla3 = document.getElementById("r3n1");
var espOpciones = document.getElementById('opciones')
var espacioPregunta1 = document.getElementById("imgPregunta1");
var espacioPregunta2 = document.getElementById("imgPregunta2");
var espacioPregunta3 = document.getElementById("imgPregunta3");
var idBtnOpcion = [];
var aux = 0, cont = 0;
//Obtener id de los contenedores
const valor = Array.from(e_fij).map(elem => elem.dataset.value);//valor del div (data-value)
var id_efij = Array.from(e_fij, div => div.id); //id del div
const ev = document.getElementById("next");
const aceptar = document.getElementById("aceptar");
const svgCorrect = document.getElementById("svgCorrect");
const svgWrong = document.getElementById("svgWrong");

var id_casilla = ["r1n1", "r2n1", "r3n1"];

var opciones = [
    ["ninequi", "amo", "tamali", "ticuas", "cafe", "nicuas", "niquis", "cuatsapotl"],
    ["niquis", "nicuas", "mango", "niquisnequi", "tamali", "quena", "ninequi", "atoli"],
    ["nicuas", "nochtli", "tlascamati", "niquis", "ninequi", "amo", "nicuasnequi", "cacahuatl"],
    ["nicuasnequi", "cafe", "xocotl", "ninequi", "temaxocotl", "nicuas", "amo", "tlascamati"],
    ["atoli", "tlascamati", "amo", "ninequi", "niquisnequi", "cafe", "atoli", "niquis"],
    [""],
    ["niquis", "atl", "nicuasnequi", "atoli", "niquisnequi", "tamali", "tlascamati", "ninequi"],
    ["quena", "tlascamati", "elotl", "nicuasnequi", "nicuas", "atl", "niquis", "atoli"],
    ["cuaxilotl", "niquis", "atoli", "niquis", "nicuasnequi", "pantsi", "ninequi", "quena"],
    ["tlascamati", "niquisnequi", "cafe", "niquis", "atl", "nicuas", "papaya", "quena"],
    ["nicuas", "niquisnequi", "tlascamati", "cafe", "ninequi", "elotl", "atoli", "niquis"], 
    [""]
];


var respuestas1 = [
    ["ninequi", "nicuas", "tamali"],
    ["ninequi", "atoli"],
    ["ninequi", "cacahuatl"],
    ["amo", "ninequi"],
    ["amo", "tlascamati"],
    [""],
    ["niquisnequi", "atl"],
    ["nicuasnequi", "elotl"],
    ["pantsi"],
    ["niquisnequi", "cafe"],
    ["cafe"],
    [""]
];

var respuestas2 = [
    ["ninequi", "nicuas", "cuatsapotl"],
    ["niquisnequi", "atoli"],
    ["nicuasnequi", "cacahuatl"],
    ["amo", "nicuasnequi"],
    ["amo", "niquisnequi"],
    [""],
    ["niquisnequi", "atoli"],
    ["elotl", "tlascamati"],
    ["cuaxilotl"],
    ["niquisnequi", "atl"],
    ["atoli"],
    [""]
];

var respuestas3 = [
    ["null", "null", "null"],
    ["null", "null"],
    ["ninequi", "nochtli"],
    ["amo", "tlascamati"],
    ["amo", "ninequi"],
    [""],
    ["null", "null"],
    ["null", "null"],
    ["null"],
    ["cafe", "tlascamat"],
    ["null"],
    [""]
];

var respuestas4 = [
    ["null", "null", "null"],
    ["null", "null"],
    ["nicuasnequi", "nochtli"],
    ["null", "null"],
    ["null", "null"],
    [""],
    ["null", "null"],
    ["null", "null"],
    ["null"],
    ["atl", "tlascamati"],
    ["null"],
    [""]
];

var rutaPregunta = [
    ["../../src/img/mati17/tamali.jpg", "../../src/img/mati17/cafe.jpg", "../../src/img/mati17/mamey.jpg"],
    ["../../src/img/mati17/mango.jpg", "../../src/img/mati17/atoli.jpg", "../../src/img/mati17/tamali.jpg"],
    ["../../src/img/mati17/cacahuate.jpg", "../../src/img/mati17/tuna.jpg", "../../src/img/mati17/agua.jpg"],
    ["../../src/img/mati17/cafe.jpg", "../../src/img/mati17/naranja_X.jpg", "../../src/img/mati17/ciruela_X.jpg"],
    ["../../src/img/mati17/agua_X.jpg", "../../src/img/mati17/cafe_X.jpg", "../../src/img/mati17/atoli_X.jpg"],
    [""],
    ["../../src/img/mati17/tamali.jpg", "../../src/img/mati17/atoli.jpg", "../../src/img/mati17/atl.jpg"],
    ["../../src/img/mati17/elote.jpg", "../../src/img/mati17/atoli.jpg", "../../src/img/mati17/atl.jpg"],
    ["../../src/img/mati17/pan.jpg", "../../src/img/mati17/atoli.jpg", "../../src/img/mati17/platano.jpg"],
    ["../../src/img/mati17/cafe.jpg", "../../src/img/mati17/papaya.jpg", "../../src/img/mati17/agua.jpg"],
    ["../../src/img/mati17/cafe.jpg", "../../src/img/mati17/elote.jpg", "../../src/img/mati17/atoli.jpg"],
    [""]
];
/*FIN ELEMENTOS HTML*/
let correct = 0;
let wrong = 0; 
var cont=0;
let intento = localStorage.getItem('intento');
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
console.log(indexPregunta);


/*ENLACE A RETRO.JS*/
if(intento === null){
    localStorage.setItem('intento','0');
  }else{
    intento = parseInt(intento);
  }
  if (isNaN(indexPregunta) || indexPregunta === null) {
    indexPregunta = 0;
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
        console.log("contador: " + cont)
        // Verificar si todos los elementos han sido colocados
        if(indexPregunta===0  && cont===3){
            console.log("if1");
            console.log("indexPregunata " + indexPregunta);
            console.log("contador: " + cont);
            evaluar();
        }else if(((indexPregunta>=1 && indexPregunta<=7) || indexPregunta===9) && cont===2){
            console.log("if2");
            evaluar();
        }else if((indexPregunta===8 || indexPregunta===10) && cont===1){
            console.log("if3");
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
    let correctAux=0;
    let wrongAux=0;
    e_fij.forEach((efij, i) => {
        if (efij.children.length > 0) {
            const palabraMovida = efij.children[0].textContent;
            if(id_efij[i] === id_casilla[i] && palabraMovida === respuestas1[indexPregunta][i]){
                correctAux++;
            }else if(id_efij[i] === id_casilla[i] && palabraMovida === respuestas2[indexPregunta][i]){
                correctAux++;
            }else if(id_efij[i] === id_casilla[i] && palabraMovida === respuestas3[indexPregunta][i]){
                correctAux++;
            }else if(id_efij[i] === id_casilla[i] && palabraMovida === respuestas4[indexPregunta][i]){
                correct++;
            }else{
                wrongAux++;
            }  
        } 
    });

    // Mostrar retroalimentación
    espOpciones.style.display = "none";
    ev.style.display = "none";
    aceptar.style.display = "flex";
    
    if(indexPregunta === 0){
        if(correctAux === 3){
            svgCorrect.style.display = "flex";
            correct++;
        } else {
            svgWrong.style.display = "flex";
            wrong++;
        }
    }else if(indexPregunta===1 || indexPregunta===2 || indexPregunta===3 || indexPregunta===4 || indexPregunta===5 || indexPregunta===6 || indexPregunta===8){
        if(correctAux === 2){
            svgCorrect.style.display = "flex";
            correct++;
        } else {
            svgWrong.style.display = "flex";
            wrong++;
        }
    }else if(indexPregunta ===7 || indexPregunta===9){
        if(correctAux === 1){
            svgCorrect.style.display = "flex";
            correct++;
        } else {
            svgWrong.style.display = "flex";
            wrong++;
        }
    }
    indexPregunta++;
    }

//FIN DEL CODIGO DE EVALUACION

//INICIO CODIGO MOSTRAR PREGUNTA
function seleccionarPregunta(){   
    console.log("indezPregunta: "+indexPregunta)
    // Verificar si ya no quedan niveles (o preguntas)
    if(indexPregunta === 5 || indexPregunta === 11){
        intento++;
        indexPregunta++;
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati17b.html";
    }

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
    espacioPregunta1.src =rutaPregunta[indexPregunta][0];
    espacioPregunta2.src =rutaPregunta[indexPregunta][1];
    espacioPregunta3.src =rutaPregunta[indexPregunta][2];

    // Selecciona el arreglo de opciones de acuerdo al nivel actual
    let opcionesActuales;
    opcionesActuales = opciones[indexPregunta];
    mostrarContenedores();


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
//INICIO CODIGO mostrarContenedores
function mostrarContenedores(){
    if(indexPregunta === 0){
        casilla1.style.display="flex";
        casilla2.style.display="flex";
        casilla3.style.display="flex";
    }else if(indexPregunta===1 || indexPregunta===2 || indexPregunta===3 || indexPregunta===4 || indexPregunta===6 || indexPregunta===7 || indexPregunta===9){
        casilla1.style.display="flex";
        casilla2.style.display="flex";
    }else if(indexPregunta ===8 || indexPregunta===10){
        casilla1.style.display="flex";
    }
    
}
//FIN CODIGO mostrarContenedores

//INICIO CÓDIGO VACIAR CONTENEDOR
function vaciarContenedores() {
    casilla1.style.display="none";
    casilla2.style.display="none";
    casilla3.style.display="none";
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
//indexPregunta=0;
seleccionarPregunta();
ev.addEventListener("click", evaluar);//
aceptar.addEventListener("click", seleccionarPregunta);//