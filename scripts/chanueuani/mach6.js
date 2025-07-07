let i = 0,j=0, correct = 0, wrong = 0;
let intervalID;
let anselect = null;
let intento = localStorage.getItem('intento');
var audioElement;
var audio = document.getElementById("audio");
var op1 = document.getElementById("option1");
var op2 = document.getElementById("option2");
var op3 = document.getElementById("option3");
var svgImg = document.getElementById("svgImg");

//alert("Intento: "+ intento);
if(intento === null){
  localStorage.setItem('intento','0')
}else{
  intento = parseInt(intento);
}

var imagesOptions = [
  "../../src/img/MACH6/RETRATO_CUALI.JPG",
  "../../src/img/MACH6/RETRATO_NICUALANI.JPG",
  "../../src/img/MACH6/RETRATO_NIMOCOCHUA.JPG",
  "../../src/img/MACH6/RETRATO_NIPAQUI.JPG",
  "../../src/img/MACH6/RETRATO_NITLAXICOHUA.JPG"
];
var audioOption = [
        "../../src/audio/MACH6/CUALI.MP3",
        "../../src/audio/MACH6/NI_CUALANI.MP3",
        "../../src/audio/MACH6/NI_PAQUI.MP3",
        "../../src/audio/MACH6/NI_MOCOCOHUA.MP3",
        "../../src/audio/MACH6/NI_TLAXICOHUA.MP3",
        "../../src/audio/MACH6/QUENIHQUI_TIITSTOC.MP3"
];
var imgres = ["../../src/icons/correct_update.svg", "../../src/icons/wrong_update.svg"]
const options = ["a", "b", "c"];
const answer = ["a", "c", "b", "c", "b"];

function mostrarPregunta() {
  //Mostrar imagenes
  var imgElemnt = document.getElementById("image");
  imgElemnt.src = imagesOptions[i];
  document.getElementById("option1").innerText = options[0];
  document.getElementById("option2").innerText = options[1];
  document.getElementById("option3").innerText = options[2];
  op1.style.display = "none";
  op2.style.display = "none";
  op3.style.display = "none";

  //mostrar audios
  var playQ = document.getElementById("playQ");
  //Evento al hacer clic
  playQ.addEventListener("click", function(){
    audio.src = audioOption[5];
    audio.load();
    audio.oncanplaythrough = function(){
      audio.play();
    }
    op1.style.display = "none";
    op2.style.display = "none";
    op3.style.display = "none";
    playQ.disabled = true;
    console.log("Intento i: " + i)
    switch(i){
      case 0:
        console.log("case 0");
        intervalID = setInterval(function(){
          playQ.disabled=true;
          if(j===0){
            audio.src = audioOption[0];
            audio.play();
            op1.disabled=true;
            op1.style.display = "block"; 
            j++;
            console.log(j);
          }else if(j===1){
            audio.src = audioOption[2];
            audio.play();
            op2.disabled=true;
            op2.style.display = "block";
            j++;
            console.log(j);
          }else if(j===2){
            audio.src = audioOption[4];
            audio.play();
            op3.disabled=true;
            op3.style.display = "block";
            j++;
            console.log(j);
          }else{
            audio.pause();
            j=0;
            clearInterval(intervalID);
            console.log(j + " " + intervalID);
            playQ.disabled = false;
            op1.disabled=false;
            op2.disabled=false;
            op3.disabled=false;
          }
        },2500)  
      break;
      case 1:
        console.log("case 1");
        clearInterval(intervalID);
        intervalID = setInterval(function(){
          if(j===0){
            audio.src = audioOption[4];
            audio.play();
            op1.disabled=true;
            op1.style.display = "block"; 
            j++;
            console.log(j);
          }else if(j===1){
            audio.src = audioOption[3];
            audio.play();
            op2.disabled=true;
            op2.style.display = "block"; 
            j++;
            console.log(j);
          }else if(j===2){
            audio.src = audioOption[1];
            audio.play();
            op3.disabled=true;
            op3.style.display = "block"; 
            j++;
            console.log(j);
          }else{
            audio.pause();
            j=0;
            console.log(j);
            clearInterval(intervalID);
            op1.disabled=false;
            op2.disabled=false;
            op3.disabled=false;
          }
        },2500)  
        break;
        case 2:
          console.log("case 2");
          setTimeout(()=>{},1000)
          clearInterval(intervalID);
          intervalID = setInterval(function(){
            if(j===0){
              audio.src = audioOption[1];
              audio.play();
              op1.disabled=true;
              op1.style.display = "block"; 
              j++;
              console.log(j);
            }else if(j===1){
              audio.src = audioOption[3];
              audio.play();
              op2.disabled=true;
              op2.style.display = "block"; 
              j++;
              console.log(j);
            }else if(j===2){
              audio.src = audioOption[0];
              audio.play();
              op3.disabled=true;
              op3.style.display = "block"; 
              j++;
              console.log(j);
            }else{
              audio.pause();
              j=0;
              console.log(j);
              clearInterval(intervalID);
              op1.disabled=false;
              op2.disabled=false;
              op3.disabled=false;
            }
          },2500)  
          break;
          case 3:
            console.log("case 3");
            setTimeout(()=>{},1000)
            clearInterval(intervalID);
            intervalID = setInterval(function(){
              if(j===0){
                audio.src = audioOption[1];
                audio.play();
                op1.disabled=true;
                op1.style.display = "block"; 
                j++;
                console.log(j);
              }else if(j===1){
                audio.src = audioOption[0];
                audio.play();
                op2.disabled=true;
                op2.style.display = "block"; 
                j++;
                console.log(j);
              }else if(j===2){
                audio.src = audioOption[2];
                audio.play();
                op3.disabled=true;
                op3.style.display = "block"; 
                j++;
                console.log(j);
              }else{
                audio.pause();
                j=0;
                console.log(j);
                clearInterval(intervalID);
                op1.disabled=false;
                op2.disabled=false;
                op3.disabled=false;
              }
            },2500) 
            op1.disabled = false;
            op2.disabled = false;
            op3.disabled = false;
            break; 
            case 4:
              console.log("case 4");
              setTimeout(()=>{},1000)
              clearInterval(intervalID);
              intervalID = setInterval(function(){
                if(j===0){
                  audio.src = audioOption[2];
                  audio.play();
                  op1.disabled=true;
                  op1.style.display = "block"; 
                  j++;
                  console.log(j);
                }else if(j===1){
                  audio.src = audioOption[4];
                  op2.disabled=true;
                  op2.style.display = "block"; 
                  audio.play();
                  j++;
                  console.log(j);
                }else if(j===2){
                  audio.src = audioOption[1];
                  audio.play();
                  op3.disabled=true;
                  op3.style.display = "block"; 
                  j++;
                  console.log(j);
                }else{
                  audio.pause();
                  j=0;
                  console.log(j);
                  clearInterval(intervalID);
                  op1.disabled=false;
                  op2.disabled=false;
                  op3.disabled=false;
                }
              },2500) 
              break; 
      default:
        alert("Ha ocurrido un error, por favor recarga la pagina");
    } 
  });    
}




function evRespuesta() {
  if (anselect === null) {
    alert("Por favor selecciona una respuesta.");
    return;
  }
  if (anselect === answer[i]) {
    var imgans = document.getElementById("result");
    imgans.src = imgres[0];
    document.getElementById("result").style.display = "flex";
    correct++;
    //alert("Correcto: " + correct);
  } else {
    var imgans = document.getElementById("result");
    imgans.src = imgres[1];
    document.getElementById("result").style.display = "flex";
    wrong++;
    //alert("Incorrecto: " + wrong);
  }

  op1.style.display="none";
  op2.style.display="none";
  op3.style.display="none";
  document.getElementById("next").style.display = "block";
  document.getElementById("accept").style.display = "none";
}

function sigPregunta() {
  document.getElementById("result").style.display = "none";
  document.getElementById("next").style.display = "none";
  anselect = null;
  i++;
  //alert("Funcion reset: "+ correct +" "+ wrong + "Iteracion " + i);

  if (i < 5) {
    mostrarPregunta();
  } else {
    localStorage.setItem('correct', correct.toString());
    localStorage.setItem('wrong', wrong.toString());
    intento++;
    localStorage.setItem('intento', intento.toString());
    window.location.href = "../../pages/chaneuani/mach6b.html";
  }
}

function scrollScreen(){
  const posicion = document.body.scrollHeight;
  window.scrollTo({
      top: 230,
      behavior: 'smooth'
  });
}

mostrarPregunta();

document.querySelectorAll("svg[id^='option']").forEach(svg => {
  svg.addEventListener("click", function() {
    anselect = this.getAttribute("data-value");
    evRespuesta();
  });
});

document.getElementById("accept").addEventListener("click", evRespuesta);

document.getElementById("next").addEventListener("click", sigPregunta);
