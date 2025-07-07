var audio = document.getElementById("audio");
var opciones = document.querySelectorAll('.img_config');
var idsAlmacenado = [];
var contador = 0;
var anscont = 0;
var isPaused = false;
var audioPosition = 0;
var taux = 0, timeAc = 0;
var put = true;
var evVal = false; //Valida si ya se evaluó la respuesta
var timeRef = Date.now();
var oneRep = false; 
var imgres = ["../../src/icons/correct_update.svg", "../../src/icons/wrong_update.svg"];
var imgans = document.getElementById("result");
//Variables para comunicarse con script de retroalimentación
var correct = 0, wrong = 0, currentI = 0, qstCont = 0;
var intento = localStorage.getItem('intento');

//Recursos multimedia
var audios = [
    "../../src/audio/mach9/mach9_audio1.mp3",
    "../../src/audio/mach9/mach9_audio2.mp3",
    "../../src/audio/mach9/mach9_audio3.mp3",
    "../../src/audio/mach9/mach9_audio4.mp3",
    "../../src/audio/mach9/mach9_audio5.mp3"
];
// Obtener id de los circulos y span
var circulos = {
    "teopan": document.getElementById("teopanC"),
    "ateno": document.getElementById("atenoC"),
    "nocha": document.getElementById("nochaC"),
    "mili": document.getElementById("miliC"),
    "caltla": document.getElementById("caltlaC"),
    "tianguis": document.getElementById("tianguisC")
};

var spans = {
    "teopan": document.getElementById("teopanS"),
    "ateno": document.getElementById("atenoS"),
    "nocha": document.getElementById("nochaS"),
    "mili": document.getElementById("miliS"),
    "caltla": document.getElementById("caltlaS"),
    "tianguis": document.getElementById("tianguisS")
};

// Respuestas
const answer = [
  ["ateno", "mili", "nocha"],
  ["caltla", "ateno", "teopan"],
  ["tianguis", "teopan", "nocha"],
  ["mili", "teopan", "tianguis"],
  ["nocha", "caltla", "mili"]
];

//alert("Intento: "+ intento);
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }

// Función para mostrar la pregunta y añadir eventos
function mostrarPregunta() {
    if(oneRep === true){
        console.log("oneRep funcion mostrar pregunta (true) " + oneRep);
        opciones.forEach(opcion => {
            // Limpiar listeners previos
            opcion.removeEventListener('click', handleClickWrapper);
            // Agregar nuevo listener
            opcion.addEventListener('click', handleClickWrapper);
        });
    }
    else{
        window.alert("Primero reproduce el audio para poder respoder")
    }
}

function handleClickWrapper(event) {
    let opcion = event.target;
    let id = opcion.id.toString();
    let index = idsAlmacenado.indexOf(id);

    if (idsAlmacenado.length <= 2) {
        if (index == -1) {
            idsAlmacenado.push(id); // Agregar el ID actual a la lista
            contador++;
            put = true;
            handleClick(id, put);
            if (contador === 3 && evVal === false) {
                //document.getElementById("enviar").style.display = "block";
                evaluar();
            } else {
                document.getElementById("enviar").style.display = "none";
            }
        } else if (id === idsAlmacenado[contador - 1]) {
            idsAlmacenado.pop(); // Quitar el ID actual de la lista
            contador--;
            put = false;
            handleClick(id, put);
        }
    } else if (id === idsAlmacenado[contador - 1]) {
        idsAlmacenado.pop(); // Quitar el ID actual de la lista
        contador--;
        put = false;
        handleClick(id, put);
    }
}

// Obtener y evaluar respuestas del usuario
function evaluar() {
    evVal = true; 
    anscont = 0;
    for (let i = 0; i < idsAlmacenado.length; i++) {
        let aux = idsAlmacenado[i];
        if (aux == answer[qstCont][i]) {
            anscont++;
        }
    }
    if (anscont == 3) {
        correct++;
        imgans.src = imgres[0];
    } else {
        wrong++;
        imgans.src = imgres[1];
    }
    console.log("Correctas: "+correct);
    console.log("Incorrectas: "+wrong);
    document.getElementById("result").style.display = "block";
    document.getElementById("enviar").style.display = "none";
    document.getElementById("next").style.display = "block";
}

// Función para colocar el marcador de imagen
function handleClick(id, put) {
    if (put == true) {
        circulos[id].style.display = "flex";
        spans[id].innerText = contador;
        spans[id].classList.add('number');
    } else {
        circulos[id].style.display = "none";
        spans[id].innerText = '';
        spans[id].classList.remove('number');
    }
}

// Función para resetear estados
function reset() {
    audio.pause();
    audio.currentTime = 0;
    oneRep = false;
    isPaused = false;
    document.getElementById("enviar").style.display = "none";
    idsAlmacenado = [];
    contador = 0;
    opciones.forEach(opcion => {
        let id = opcion.id;
        circulos[id].style.display = "none";
        spans[id].innerText = '';
        spans[id].classList.remove('number');
    });
}

// Función para control de preguntas
function sigPregunta() {
    if(qstCont < 4){
        document.getElementById("next").style.display = "none";
        document.getElementById("result").style.display = "none";
        oneRep = false;
        evVal = false; 
        qstCont++;
        console.log("oneRep sigPregunta" + oneRep);
        reset();
    }else{
        reset();
        intento++;
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/chaneuani/mach9b.html";
    }
}

function playAudio() {
        console.log("oneRep funcion play audio" + oneRep);
        audio.src = audios[qstCont];
        oneRep = true;
        console.log("oneRep funcien play audio oneRep activado " + oneRep);
        audio.play();
        mostrarPregunta();
        oneRep=false;//prueba, eliminar si es necesario
}

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 230,
        behavior: 'smooth'
    });
}

document.getElementById("enviar").addEventListener("click", evaluar);
document.getElementById("next").addEventListener("click", sigPregunta);
