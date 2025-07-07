var numRueda = document.getElementById("numero");
var num = null;
var idAudio = null
var audio = document.getElementById("audio");
var rutaAudio = [
    "../../src/audio/mati4/1.mp3",
    "../../src/audio/mati4/2.mp3",
    "../../src/audio/mati4/3.mp3",
    "../../src/audio/mati4/4.mp3",
    "../../src/audio/mati4/5.mp3",
    "../../src/audio/mati4/6.mp3",
    "../../src/audio/mati4/7.mp3",
    "../../src/audio/mati4/8.mp3",
    "../../src/audio/mati4/9.mp3",
    "../../src/audio/mati4/10.mp3",
    "../../src/audio/mati4/11.mp3",
    "../../src/audio/mati4/12.mp3",
    "../../src/audio/mati4/15.mp3",
    "../../src/audio/mati4/20.mp3",
    "../../src/audio/mati4/24.mp3",
    "../../src/audio/mati4/30.mp3",
    "../../src/audio/mati4/38.mp3",
    "../../src/audio/mati4/40.mp3",
    "../../src/audio/mati4/43.mp3",
    "../../src/audio/mati4/50.mp3",
    "../../src/audio/mati4/55.mp3",
    "../../src/audio/mati4/60.mp3",
    "../../src/audio/mati4/69.mp3",
    "../../src/audio/mati4/70.mp3",
    "../../src/audio/mati4/76.mp3",
    "../../src/audio/mati4/80.mp3",
    "../../src/audio/mati4/87.mp3",
    "../../src/audio/mati4/90.mp3",
    "../../src/audio/mati4/91.mp3",
    "../../src/audio/mati4/100.mp3"
];
document.querySelectorAll("div[id='num']").forEach(div => {
    idAudio.push(div);
})



function selectNum(num){
    switch(num){
        case "num1":
            //Reproducir audio
            audio.src = rutaAudio[0];
            audio.load();
            audio.play();
            numRueda.innerText = "1";
            break; 
        case "num2":
            //Reproducir audio
            audio.src = rutaAudio[1];
            audio.load();
            audio.play();
            numRueda.innerText = "2";
            break; 

        case "num3":
            //Reproducir audio
            audio.src = rutaAudio[2];
            audio.load();
            audio.play();
            numRueda.innerText = "3";
            break;

        case "num4":
            //Reproducir audio
            audio.src = rutaAudio[3];
            audio.load();
            audio.play();
            numRueda.innerText = "4";
            break;
        case "num5":
            //Reproducir audio
            audio.src = rutaAudio[4];
            audio.load();
            audio.play();
            numRueda.innerText = "5";
            break;
        case "num6":
            //Reproducir audio
            audio.src = rutaAudio[5];
            audio.load();
            audio.play();
            numRueda.innerText = "6";
            break;   
        case "num7":
            //Reproducir audio
            audio.src = rutaAudio[6];
            audio.load();
            audio.play();
            numRueda.innerText = "7";
            break; 
        case "num8":
            //Reproducir audio
            audio.src = rutaAudio[7];
            audio.load();
            audio.play();
            numRueda.innerText = "8";
            break; 

        case "num9":
            //Reproducir audio
            audio.src = rutaAudio[8];
            audio.load();
            audio.play();
            numRueda.innerText = "9";
            break;

        case "num10":
            //Reproducir audio
            audio.src = rutaAudio[9];
            audio.load();
            audio.play();
            numRueda.innerText = "10";
            break;
        case "num11":
            //Reproducir audio
            audio.src = rutaAudio[10];
            audio.load();
            audio.play();
            numRueda.innerText = "11";
            break;
        case "num12":
            //Reproducir audio
            audio.src = rutaAudio[11];
            audio.load();
            audio.play();
            numRueda.innerText = "12";
            break;
        case "num15":
            //Reproducir audio
            audio.src = rutaAudio[12];
            audio.load();
            audio.play();
            numRueda.innerText = "15";
            break; 
        case "num20":
            //Reproducir audio
            audio.src = rutaAudio[13];
            audio.load();
            audio.play();
            numRueda.innerText = "20";
            break; 

        case "num24":
            //Reproducir audio
            audio.src = rutaAudio[14];
            audio.load();
            audio.play();
            numRueda.innerText = "24";
            break;

        case "num30":
            //Reproducir audio
            audio.src = rutaAudio[15];
            audio.load();
            audio.play();
            numRueda.innerText = "30";
            break;
        case "num38":
            //Reproducir audio
            audio.src = rutaAudio[16];
            audio.load();
            audio.play();
            numRueda.innerText = "38";
            break;
        case "num40":
            //Reproducir audio
            audio.src = rutaAudio[17];
            audio.load();
            audio.play();
            numRueda.innerText = "40";
            break;
        case "num43":
            //Reproducir audio
            audio.src = rutaAudio[18];
            audio.load();
            audio.play();
            numRueda.innerText = "43";
            break; 
        case "num50":
            //Reproducir audio
            audio.src = rutaAudio[19];
            audio.load();
            audio.play();
            numRueda.innerText = "50";
            break; 

        case "num55":
            //Reproducir audio
            audio.src = rutaAudio[20];
            audio.load();
            audio.play();
            numRueda.innerText = "55";
            break;

        case "num60":
            //Reproducir audio
            audio.src = rutaAudio[21];
            audio.load();
            audio.play();
            numRueda.innerText = "60";
            break;
        case "num69":
            //Reproducir audio
            audio.src = rutaAudio[22];
            audio.load();
            audio.play();
            numRueda.innerText = "69";
            break;
        case "num70":
            //Reproducir audio
            audio.src = rutaAudio[23];
            audio.load();
            audio.play();
            numRueda.innerText = "70";
            break;
        case "num76":
            //Reproducir audio
            audio.src = rutaAudio[24];
            audio.load();
            audio.play();
            numRueda.innerText = "76";
            break; 
        case "num80":
            //Reproducir audio
            audio.src = rutaAudio[25];
            audio.load();
            audio.play();
            numRueda.innerText = "80";
            break; 

        case "num87":
            //Reproducir audio
            audio.src = rutaAudio[26];
            audio.load();
            audio.play();
            numRueda.innerText = "87";
            break;

        case "num90":
            //Reproducir audio
            audio.src = rutaAudio[27];
            audio.load();
            audio.play();
            numRueda.innerText = "90";
            break;
        case "num91":
            //Reproducir audio
            audio.src = rutaAudio[28];
            audio.load();
            audio.play();
            numRueda.innerText = "91";
            break;
        case "num100":
            //Reproducir audio
            audio.src = rutaAudio[29];
            audio.load();
            audio.play();
            numRueda.innerText = "100";
            break;
        default:
            window.alert("Ha ocurrido un error, por favor intentalo más tarde");
    }
}

document.querySelectorAll("div[id^='num']").forEach(div => {
    div.addEventListener("click", function() {
      num = this.id;
      selectNum(num);
    });
  });