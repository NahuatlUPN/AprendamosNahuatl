/*VARIABLES JS */
var index = 0, aux = 0;
var cont = 0;
var texto = [];
var correct = 0, correctAux = 0;
var wrong = 0, wrongAux = 0;

//Variables respuestas
var respuestas = [
    ["ninequi", "etl"],
    ["quesqui", "ipati"],
    ["ninequi", "ome", "litro", "etl"],
    ["tlascamati"]
];

var respuestasAlternas = [
    ["ninequi", "tecpinchili"],
    ["quesqui", "ipati"],
    ["ninequi", "ome", "litro", "tecpinchili"],
    ["tlascamati"]
]

/*VARIABLES HTML */
var listaPregunta = [
    "¿Tlen tihuicas?",
    "se litro ipati matlactli peso iuan se cuarteroh ipati nahui tomi ",
    "¿Quesqui tinequi?",
    "tlascamati"
];
var idPregunta = document.getElementById("idPregunta");
var idEspacio1 = document.getElementById("espacio1");
var idEspacio2 = document.getElementById("espacio2");
var idEspacio3 = document.getElementById("espacio3");
var idEspacio4 = document.getElementById("espacio4");
const bloqueOp = document.getElementById("bloqueOp");
const bloqueRes = document.getElementById("bloqueRes");
const espacios = document.querySelectorAll('.espacio');
const items = document.querySelectorAll('.opcion'); // Elementos arrastrables
var cajas = document.querySelectorAll('.espacio');// Elementos contenedores
var next = document.getElementById("next");
var aceptar = document.getElementById("aceptar");
var imgRespuesta = document.getElementById("result")
var imgResruta = ["../../src/icons/correct_update.svg", "../../src/icons/wrong_update.svg"];
//Guardar el contenedor orignal de los atributos <p> como atributo personalizado 
document.querySelectorAll('p[draggable="true"]').forEach(item => {
    item.dataset.originalParent = item.parentElement.id;
});

/*ENLACE A RETRO.JS*/
let intento = localStorage.getItem('intento');
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }
  /*FIN ENLACE A RETRO.JS*/

/*FUNCIONAMIENTO*/

/*DRAG&DROP*/
//controlador de eventos dragstar
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
})

//Controlador de eventos de destino
cajas.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

// Manejo del dragStart
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragEnter(e){
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e){
    e.target.classList.remove('drag-over');
}

function drop(e){
    e.preventDefault();
    e.target.classList.remove('drag-over');

    //Verifica si se suelta en un contenedor vacio
    if(!e.target.classList.contains('espacio')){
        return;
    }

    //Obtener el elemento arrastrable
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    //Verificar si el contenedor ya está ocupado
    if(e.target.children.length === 0){
        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
        cont++;
        //Verificar si todos los elementos han sido colocados
        switch(index){
            case 0:
                (cont === 2) && (next.style.display = "flex");
                break;
            case 1:
                (cont === 2) && (next.style.display = "flex");
                break;
            case 2:
                (cont === 4) && (next.style.display = "flex");
                break;
            case 3:
                (cont === 1) && (next.style.display = "flex");
                break;
            default:
                window.alert("Ha ocurrido un error");
        }
    } else {
        console.log("Respuesta no valida");
        draggable.classList.remove("hide");//Mostrar el elemento de nuevo
    }
}

//FUNCIONES

function mostrarPregunta(){
    switch (index){
        case 0: 
            idPregunta.innerText = listaPregunta[index]; 
            idEspacio1.style.display = "flex";
            idEspacio1.style.top = "25%";
            idEspacio1.style.left = "67%";
            idEspacio2.style.top = "35%";
            idEspacio2.style.left = "67%";
            idEspacio2.style.display = "flex";
            break;
        case 1:
            idPregunta.innerText = ""; 
            idEspacio1.style.display = "flex";
            idEspacio2.style.display = "flex";
            idEspacio1.style.top = "25%";
            idEspacio1.style.left = "67%";
            idEspacio2.style.top = "35%";
            idEspacio2.style.left = "67%";
            break;
        case 2:
            idPregunta.innerText = listaPregunta[index]; 
            idEspacio1.style.display = "flex";
            idEspacio1.style.top = "26%";
            idEspacio1.style.left = "59%";
            idEspacio2.style.display = "flex";
            idEspacio2.style.top = "26%";
            idEspacio2.style.left = "75%";
            idEspacio3.style.display = "flex";
            idEspacio3.style.top = "33%";
            idEspacio3.style.left = "59%";
            idEspacio4.style.display = "flex";
            idEspacio4.style.top = "33%";
            idEspacio4.style.left = "75%";
            break;
        case 3:
            idPregunta.innerText = listaPregunta[index]; 
            idEspacio1.style.display = "flex";
            idEspacio1.style.top = "30%";
            idEspacio1.style.left = "67%";
            idEspacio2.style.display = "none"
            idEspacio3.style.display = "none"
            idEspacio4.style.display = "none"
            break;
        default:
            window.alert("Ha ocurrido un error");
    }
}

/*Evaluar respuestas*/
function obtenerRespuestas(){
    texto.length = 0; // limpiar texto anterior

    let espaciosUsados = [];
    switch(index){
        case 0:
        case 1:
            espaciosUsados = [idEspacio1, idEspacio2];
            break;
        case 2:
            espaciosUsados = [idEspacio1, idEspacio2, idEspacio3, idEspacio4];
            break;
        case 3:
            espaciosUsados = [idEspacio1];
            break;
    }

    espaciosUsados.forEach((espacio, i) => {
        if (espacio.children.length > 0) {
            texto[i] = espacio.children[0].innerText || espacio.children[0].textContent;
            console.log(texto[i]);
        } else {
            console.log(`Espacio ${i + 1} está vacío.`);
        }
    });

    evaluar();
}


function evaluar(){
    switch(index){
        case 0:
            for(aux = 0; aux<2; aux++){
                console.log("index "+index+ " aux "+ aux)
                console.log("Respuesta del usuario: "+ texto[aux]);
                if(texto[aux]===respuestas[index][aux] || texto[aux]===respuestasAlternas[index][aux]){
                    correctAux++;
                }else{
                    wrongAux++;
                }
            }
            if(correctAux===2){
                correct++;
                imgRespuesta.src = imgResruta[0];
            }else{
                wrong++;
                imgRespuesta.src = imgResruta[1];
            }
            break;
        case 1:
            for(aux = 0; aux<2; aux++){
                if(texto[aux]===respuestas[index][aux] || texto[aux]===respuestasAlternas[index][aux]){
                    correctAux++;
                }else{
                    wrongAux++;                }
            }
            if(correctAux===2){
                correct++;

                imgRespuesta.src = imgResruta[0];
            }else{
                wrong++;
                imgRespuesta.src = imgResruta[1];
            }
            break;
            case 2:
                for(aux = 0; aux<4; aux++){
                    if(texto[aux]===respuestas[index][aux] || texto[aux]===respuestasAlternas[index][aux]){
                        console.log("Respuesta "+ texto[aux]);
                        console.log("Correcta "+ respuestas[index][aux]);
                        console.log("Alterna "+ respuestasAlternas[index][aux]);
                        correctAux++;
                    }else{
                        wrongAux++;
                    }
                }
                if(correctAux===4){
                    correct++;

                    imgRespuesta.src = imgResruta[0];
                }else{
                    wrong++;
                    imgRespuesta.src = imgResruta[1];
                }
                break;
            case 3:
                for(aux = 0; aux<1; aux++){
                    if(texto[aux]===respuestas[index][aux] || texto[aux]===respuestasAlternas[index][aux]){
                        correctAux++;
                    }else{
                        wrongAux++;
                    }
                }
                if(correctAux===1){
                    correct++;
                    imgRespuesta.src = imgResruta[0];
                }else{
                    wrong++;
                    imgRespuesta.src = imgResruta[1];
                }
                break;
    }
    bloqueOp.style.display = "none";
    bloqueRes.style.display = "flex";
    next.style.display = "none";
    aceptar.style.display = "flex";
    console.log("Aciertos " + correct);
    console.log("Errores " + wrong);
}

function limpiarRespuestas(){
    switch(index){
        case 1:
            idPregunta.innerText = listaPregunta[index]; 
    }
    aceptar.style.display = "none";
    bloqueRes.style.display = "none";
    bloqueOp.style.display = "flex";

    espacios.forEach(espacio => {
        if (espacio.children.length > 0) {
            const item = espacio.children[0];

            // Obtener el ID del contenedor original
            const originalId = item.dataset.originalParent;
            const originalContainer = document.getElementById(originalId);

            // Devolver al contenedor original
            originalContainer.appendChild(item);

            item.classList.remove("hide");
            item.classList.add("opcion");
            item.addEventListener('dragstart', dragStart);
        }
    });

    texto.length = 0;
    cont = 0;
    correctAux = 0;
    wrongAux = 0;

    index++;
    if (index < listaPregunta.length) {
        mostrarPregunta();
    } else {
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati13b.html";
    }
}

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 180,
        behavior: 'smooth'
    });
}

next.addEventListener("click", obtenerRespuestas);
aceptar.addEventListener("click", limpiarRespuestas);
mostrarPregunta();