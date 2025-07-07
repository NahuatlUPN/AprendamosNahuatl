var audio = document.getElementById("audio");
var index = -1;
var rutaAudio = [
    "../../src/audio/mati11/tlaqui_ini.mp3",
    "../../src/audio/mati11/quesqui_ipati.mp3"
];
var spans = document.querySelectorAll("#texto span");
let palabraSpan = {};
spans.forEach(span => {
    palabraSpan[span.textContent.trim()] = span;
});
let ordenPalabras = [
    "pantsi",
    "chicuase tomi",
    "chancaca",
    "sempoali peso",
    "nochtli",
    "Ipati chicnahui peso",
    "iyatl",
    "matlactli iuan nahui tomi",
    "tamali",
    "macuili tomi"
]; 
let ordenSpans = ordenPalabras.map(palabra => palabraSpan[palabra]);


//FUNCIONAMIENTO
function cambiarColor(){
    if(index >= 0){
        ordenSpans[index].style.color = "";
    }
    index++;
    if(index >= ordenSpans.length){
        index = 0;
    }

    if(index % 2 === 0){
        ordenSpans[index].style.color = "rgb(229, 54, 188)";
        audio.src = rutaAudio[0];
    }else{
        ordenSpans[index].style.color = "rgb(33, 196, 201)";
        audio.src = rutaAudio[1];
    }
    audio.load();
    audio.play();
}

