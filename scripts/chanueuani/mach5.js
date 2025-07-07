let i = 0, correct = 0, wrong = 0;
let intento = localStorage.getItem('intento');
var ansBtn1 = document.getElementById("option1");
var ansBtn2 = document.getElementById("option2");

/*ENLACE A RETRO.JS*/
if(intento === null){
  localStorage.setItem('intento','0')
}else{
  intento = parseInt(intento);
}
/*FIN ENLACE A RETRO.JS*/

var imagesOptions = [
  "../../src/img/MA_CH_5/RETRATO_CUALI.JPG",
  "../../src/img/MA_CH_5/RETRATO_NICUALANI.JPG",
  "../../src/img/MA_CH_5/RETRATO_NIPAQUI.JPG",
  "../../src/img/MA_CH_5/RETRATO_NIMOCOCHUA.JPG",
  "../../src/img/MA_CH_5/RETRATO_NITLAXICOHUA.JPG"
];
var audio = document.getElementById("audioT");
var rutaAudio = "../../src/audio/mach5/QUENIHQUI_TIITSTOC.MP3";
var imgres = ["../../src/icons/correct_update.svg", "../../src/icons/wrong_update.svg"]
const options = ["Verdadero", "Falso"];
const answer = ["Verdadero", "Verdadero", "Falso", "Falso", "Verdadero"];
const questionOP = ["cuali", "nicualani", "nimococohua", "nipaqui", "nitlaxicohua"];
var anselect = null;

//Funciones
//Reproducir titulo
function reproducirAudio() {
  audio.src = rutaAudio;
  audio.play();
}

function mostrarPregunta() {
  console.log("Intento = " + intento);
  var imgElemnt = document.getElementById("image");
  imgElemnt.src = imagesOptions[i];
  ansBtn1.innerText = options[0];
  ansBtn2.innerText = options[1];
  document.getElementById("question").innerText = questionOP[i];
}

function evRespuesta() {
  if (anselect === null) {
    alert("Por favor selecciona una respuesta.");
    return;
  }
  if (anselect === answer[i]) {
    var imgans = document.getElementById("result");
    console.log("Correcto");
    imgans.src = imgres[0];
    document.getElementById("result").style.display = "flex";
    correct++;
  } else {
    var imgans = document.getElementById("result");
    console.log("Incorrecto");
    imgans.src = imgres[1];
    document.getElementById("result").style.display = "flex";
    wrong++;
  }

  ansBtn1.disabled = true; 
  ansBtn2.disabled = true;
  ansBtn1.style.display = "none"; 
  ansBtn2.style.display = "none"; 
  document.getElementById("next").style.display = "flex";
  document.getElementById("accept").style.display = "none";
}

function sigPregunta() {
  document.getElementById("result").style.display = "none";
  document.getElementById("next").style.display = "none";
  ansBtn1.disabled = false; 
  ansBtn2.disabled = false; 
  ansBtn1.style.display = "flex"; 
  ansBtn2.style.display = "flex"; 
  anselect = null;
  i++;

  if (i < 5) {
    mostrarPregunta();
  } else {
    localStorage.setItem('correct', correct.toString());
    localStorage.setItem('wrong', wrong.toString());
    intento++;
    localStorage.setItem('intento', intento.toString());
    window.location.href = "../../pages/chaneuani/mach5b.html";
  }
}

mostrarPregunta();


/*MODIFICAR PARA QUE OBTENGA EL DATASET-VALUE DEL SVG*/
document.querySelectorAll("svg[id^='option']").forEach(svg => {
  svg.addEventListener("click", function() {
    anselect = this.getAttribute("data-value");
    evRespuesta();
    //document.getElementById("accept").style.display = "flex";
  });
});


document.getElementById("accept").addEventListener("click", evRespuesta);
document.getElementById("next").addEventListener("click", sigPregunta);
document.getElementById("Capa_2Audiobtn").addEventListener("click", reproducirAudio);
