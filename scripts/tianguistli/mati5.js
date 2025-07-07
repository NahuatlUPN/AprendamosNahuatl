//Ver como acomodar preguntas y respuestas dentro de una matriz
var numRueda = document.getElementById("numero");
var espacioOpciones = document.getElementById("espacioOpciones");
var correct = null, wrong= null; 
var aux = 0;
var i = 0, j = 0, k = 0;
var preguntaNivel = 0
var idAudio = null
var audio = document.getElementById("audio");
var idBtnNum = [];
var btnSig = document.getElementById("next"); 
var btnAcept = document.getElementById("aceptar"); 
var svgCorrect = document.getElementById("svgCorrect");
var svgWrong = document.getElementById("svgWrong");
var divNum = null;

/*VARIABLES NIVEL 1*/
var opcionesN1 = document.getElementById("nivel1");
var opcionesN2 = document.getElementById("nivel2");
var opcionesN3 = document.getElementById("nivel3");

var rutaAudioN1 = [
    "../../src/audio/mati5/nivel1/02.mp3",
    "../../src/audio/mati5/nivel1/10.mp3",
    "../../src/audio/mati5/nivel1/17.mp3",
    "../../src/audio/mati5/nivel1/04.mp3",
    "../../src/audio/mati5/nivel1/19.mp3",
    "../../src/audio/mati5/nivel1/15.mp3",
    "../../src/audio/mati5/nivel1/09.mp3",
    "../../src/audio/mati5/nivel1/13.mp3",
    "../../src/audio/mati5/nivel1/16.mp3",
    "../../src/audio/mati5/nivel1/14.mp3"
];

var rutaAudioN2 = [
    "../../src/audio/mati5/nivel2/20.mp3",
    "../../src/audio/mati5/nivel2/84.mp3",
    "../../src/audio/mati5/nivel2/65.mp3",
    "../../src/audio/mati5/nivel2/47.mp3",
    "../../src/audio/mati5/nivel2/100.mp3",
    "../../src/audio/mati5/nivel2/42.mp3",
    "../../src/audio/mati5/nivel2/81.mp3",
    "../../src/audio/mati5/nivel2/69.mp3",
    "../../src/audio/mati5/nivel2/23.mp3",
    "../../src/audio/mati5/nivel2/40.mp3"
];

var rutaAudioN3 = [
    "../../src/audio/mati5/nivel3/35.mp3",
    "../../src/audio/mati5/nivel3/82.mp3",
    "../../src/audio/mati5/nivel3/51.mp3",
    "../../src/audio/mati5/nivel3/79.mp3",
    "../../src/audio/mati5/nivel3/96.mp3"
];

var preguntasN1 = [
    ["1", "3", "2"], 
    ["5", "10", "12"],
    ["17", "20", "7"],
    ["6", "4", "18"],
    ["19", "8", "11"],
    ["5", "15", "10"],
    ["9", "5", "2"],
    ["8", "13", "20"],
    ["19", "12", "16"],
    ["14", "6", "4"]
];

var preguntasN2 = [
    ["60", "80", "47", "32", "20"], 
    ["85", "84", "64", "43", "40"],
    ["55", "66", "60", "65", "85"],
    ["46", "41", "47", "49", "42"],
    ["80", "40", "100", "60", "20"],
    ["42", "22", "33", "26", "62"],
    ["87", "31", "41", "86", "81"],
    ["69", "64", "89", "49", "55"],
    ["28", "60", "43", "23", "73"],
    ["100", "50", "80", "60", "40"]
];

var preguntasN3 = [
    ["57", "25", "33", "39", "55", "35", "39", "75"],
    ["92", "12", "47", "87", "89", "32", "72", "82"],
    ["71", "81", "76", "51", "74", "56", "73", "91"],
    ["75", "59", "79", "94", "69", "26", "70", "82"],
    ["75", "96", "90", "76", "51", "87", "38", "44"]
];

var respuestas = [
    ["num3N1", "num2N1", "num1N1", "num2N1", "num1N1", "num2N1", "num1N1", "num2N1", "num3N1", "num1N1"],
    ["num5N2", "num2N2", "num4N2", "num3N2", "num3N2", "num1N2", "num5N2", "num1N2", "num4N2", "num5N2" ],
    ["num6N3", "num8N3", "num4N3", "num3N3", "num2N3"]
];

/*ENLACE A RETRO.JS*/
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let indexNivel = parseInt(localStorage.getItem('indexNivel'));
let intento = localStorage.getItem('intento');
if(intento === null){
    localStorage.setItem('intento','0');
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

function selectPregunta(){
    
    console.log("IndexPregunta: " + indexPregunta);
    console.log("IndexNivel: " + indexNivel);
    btnSig.style.display = "none";
    svgCorrect.style.display = "none";
    svgWrong.style.display = "none";
    espacioOpciones.style.display = "flex"
    divNum.forEach(divNum => {
        idBtnNum.push(divNum.id);
    })

    switch(indexNivel){
        case 0:
            if(indexPregunta<=9){
                //Agregar un delay
                //Reproducir audio
                audio.src = rutaAudioN1[indexPregunta];
                audio.load();
                audio.play();
                opcionesN1.style.display = "flex";
                for(aux = 0; aux < 3; aux++){
                    document.getElementById(idBtnNum[aux]).innerText = preguntasN1[indexPregunta][aux];
                }
            }else{
                aux = 0;
                localStorage.setItem('correct', correct.toString());
                localStorage.setItem('wrong', wrong.toString());
                localStorage.setItem('indexPregunta', indexPregunta.toString());
                localStorage.setItem('indexNivel', indexNivel.toString());
                intento++;
                localStorage.setItem('intento', intento.toString());
                window.location.href = "../../pages/tianguistli/mati5b.html";
            }
            break; 
        case 1:   
            console.log("Nivel 2");
            if(indexPregunta<=9){
                //Reproducir audio
                audio.src = rutaAudioN2[indexPregunta];
                audio.load();
                audio.play();
                opcionesN2.style.display = "flex";
                //Agregar un delay
                for(aux = 0; aux < 5; aux++){
                    document.getElementById(idBtnNum[aux]).innerText = preguntasN2[indexPregunta][aux];
                }
            }else{
                aux = 0;
                localStorage.setItem('correct', correct.toString());
                localStorage.setItem('wrong', wrong.toString());
                localStorage.setItem('indexPregunta', indexPregunta.toString());
                localStorage.setItem('indexNivel', indexNivel.toString());
                intento++;
                localStorage.setItem('intento', intento.toString());
                window.location.href = "../../pages/tianguistli/mati5b.html";
            
            }
            break;
        case 2:
            console.log("Nivel 3");
            if(indexPregunta<=4){
                //Reproducir audio
                audio.src = rutaAudioN3[indexPregunta];
                audio.load();
                audio.play();
                opcionesN3.style.display = "flex";
                //Agregar un delay
                for(aux = 0; aux < 8; aux++){
                    document.getElementById(idBtnNum[aux]).innerText = preguntasN3[indexPregunta][aux];
            }
            }else{
                aux = 0;
                localStorage.setItem('correct', correct.toString());
                localStorage.setItem('wrong', wrong.toString());
                localStorage.setItem('indexPregunta', indexPregunta.toString());
                localStorage.setItem('indexNivel', indexNivel.toString());
                intento++;
                localStorage.setItem('intento', intento.toString());
                window.location.href = "../../pages/tianguistli/mati5b.html";
            }
            break;
        default:
            window.alert("Ha ocurrido un error, por favor intentalo más tarde");
    }
}

function evaluarPregunta(){
    btnSig.style.display = "block";
    opcionesN1.style.display = "none";
    btnAcept.style.display = "none";
    espacioOpciones.style.display = "none"
    if(num===respuestas[indexNivel][indexPregunta] ){
        correct++;
        svgCorrect.style.display = "flex";
        console.log(correct);
    }else{
        wrong++;
        svgWrong.style.display = "flex";
        console.log(wrong);
    }
    indexPregunta++;
}

function configNivel(){
    if(indexNivel===0){
        divNum = document.querySelectorAll(".estilo-numero");
    }else if(indexNivel === 1){
        divNum = document.querySelectorAll(".estilo-numeroN2");
    }else if(indexNivel === 2){
        divNum = document.querySelectorAll(".estilo-numeroN3");
    }
    divNum.forEach(divNum => {
        idBtnNum.push(divNum.id);
    })
}

//BOTON BOCINA
document.querySelectorAll("svg[id^='bocina-pregunta']").forEach(svg => {
    svg.addEventListener("click", function() {
      selectPregunta();
    });
  });

//BOTON RESPUESTA
document.querySelectorAll("div[id^='num']").forEach(div => {
    div.addEventListener("click", function() {
        num = this.id;
        evaluarPregunta();
    });
});

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 230,
        behavior: 'smooth'
    });
}

configNivel();
btnAcept.addEventListener("click", evaluarPregunta);
btnSig.addEventListener("click", selectPregunta);