const audio = document.getElementById('audio');
var imageDd1 = document.getElementById('dial1');
var imageDd2 = document.getElementById('dial2');
let taux=0, timeAc = 0;
let timeRef = Date.now(); //Almacena el valor del tiempo
let crono = false;

var imageDialog = [
  "../../src/img/MA_CH_3/D_CH_Z1_T1.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T2.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T3.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T4.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T5.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T6.png",
  "../../src/img/MA_CH_3/D_CH_Z1_T7.png",
]
var parrafos = document.querySelectorAll('p[id^="p"]');


function playAudio() {  
  audio.play();
  crono=true;
  setInterval(()=>{
    txtChaneuani(crono);
  },200);  
}

function pauseAudio() {
  document.getElementById("p1").style.color = 'white'
  audio.pause();
  crono = false;
  txtChaneuani(crono);
}

function stopAudio() {
  audio.pause();
  crono = false;
  audio.currentTime=0;
  timeAc = 0;
  taux = 0;
  clearTimeout(timeoutId);
  imageDd1.style.display="none";
  imageDd2.style.display="none";
  for (var i=0; i<parrafos.length;i++){
    parrafos[i].style.color = 'rgb(135, 134, 134)';
  }
}


function txtChaneuani(crono) {
  console.log("Entra a la funcion");
  const timeoutId = setTimeout(function(){

    //setInterval(()=>{
      if (crono){
        timeAc +=Date.now() - timeRef;
        taux= timeAc;
        console.log("tiempo: "+ taux);
          if(taux>=1000 && taux<4000){
            imageDd2.src = imageDialog[0];
            imageDd1.style.display="none";
            imageDd2.style.display="none";
            parrafos[0].style.color = 'white'
            imageDd2.style.display="block"
          }else if(taux>=4000 && taux<6000){
            imageDd1.src = imageDialog[1];
            imageDd2.style.display="none";
            parrafos[1].style.color = 'white'
            imageDd1.style.display="block";
          }else if(taux>=6000 && taux<8000){
            imageDd2.src = imageDialog[2];
            imageDd1.style.display="none";
            parrafos[2].style.color = 'white'
            imageDd2.style.display="block";
          }
          else if(taux>=8000 && taux<10000){
            imageDd1.src = imageDialog[3];
            imageDd2.style.display="none";
            parrafos[3].style.color = 'white'
            imageDd1.style.display="block";
          }
          else if(taux>=10000 && taux<12000){
            imageDd2.src = imageDialog[4];
            imageDd1.style.display="none";
            parrafos[4].style.color = 'white'
            imageDd2.style.display="block";
          }else if(taux>=12000 && taux<14000){
            imageDd1.src = imageDialog[5];
            imageDd2.style.display="none";
            parrafos[5].style.color = 'white'
            imageDd1.style.display="block";
          }else if(taux>=14000 && taux<=16000){
            imageDd2.src = imageDialog[6];
            imageDd1.style.display="none";
            parrafos[6].style.color = 'white'
            imageDd2.style.display="block";
          }else{
            clearTimeout(timeoutId);
            crono=false;
            timeAc = 0;
            imageDd1.style.display="none";
            imageDd2.style.display="none";
            for (var i=0; i<parrafos.length;i++){
              parrafos[i].style.color = 'rgb(135, 134, 134)';
            }
          }
        }
        timeRef = Date.now();
},300);
}
