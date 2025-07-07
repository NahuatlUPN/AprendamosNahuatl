//VARIABLES JS
var imageID = null;
var texto = [
    ["Nicuasnequi tamali", "Ninequi nicuas elot", "Amo nicuasnequi pantsi"],
    ["Niquisnequi cafe", "Ninequi niquis atoli", "Amo niquisnequi atl"]
]
//VARIABLES HTML
var textoID = [
    document.getElementById("texto1"),
    document.getElementById("texto2"),
    document.getElementById("texto3"),
    document.getElementById("texto4"),
    document.getElementById("texto5"),
    document.getElementById("texto6"),
]
var rutaAudio = [
    "../../src/audio/mati16/tlen_ticuasnequi.wav",
    "../../src/audio/mati16/tlen_tiquisnequi.wav"
]
var audio = document.getElementById("audio");
var svgaudio1 = document.getElementById("Capa_2Audiobtn");
var svgaudio2 = document.getElementById("Capa_2Audiobtn2");

//FUNCIONAMIENTO

document.querySelectorAll("img[id^='img']").forEach(img => {
    img.addEventListener("click", function(){
        imageID = this.id;
        console.log(imageID)
        seleccionarImagen(imageID);
    })
});

function seleccionarImagen(imageID){
    for(i=0;i<6;i++){
        textoID[i].innerText = "";
    }
    switch(imageID){
        case "img1":
            textoID[0].innerText = texto[0][0];
            break;
        case "img2":
            textoID[1].innerText = texto[0][1];
            break;
        case "img3":
            textoID[2].innerText = texto[0][2];
            break;
        case "img4":
            textoID[3].innerText = texto[1][0];
            break;
        case "img5":
            textoID[4].innerText = texto[1][1];
            break;
        case "img6":
            textoID[5].innerText = texto[1][2];
            break;
    }   
}


function reproducirAudio(index){
    if (index === 1 || index === 2) {
        audio.src = rutaAudio[index - 1];
        audio.load();
        audio.play();
    }
}


svgaudio1.addEventListener("click", () => reproducirAudio(1));
svgaudio2.addEventListener("click", () => reproducirAudio(2));
