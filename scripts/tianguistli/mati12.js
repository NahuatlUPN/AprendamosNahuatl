var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var rutaAudioPreg = [
    "../../src/audio/mati12/preguntas/A1.mp3",
    "../../src/audio/mati12/preguntas/A2.mp3",
    "../../src/audio/mati12/preguntas/A3.mp3"
];
var rutaAudioRes = [
    "../../src/audio/mati12/A11.mp3",
    "../../src/audio/mati12/A21.mp3",
    "../../src/audio/mati12/A31.mp3",
    "../../src/audio/mati12/A41.mp3",
    "../../src/audio/mati12/A51.mp3",
    "../../src/audio/mati12/A61.mp3",
    "../../src/audio/mati12/A71.mp3",
    "../../src/audio/mati12/A81.mp3",
    "../../src/audio/mati12/A91.mp3",
    "../../src/audio/mati12/A101.mp3",
    "../../src/audio/mati12/A111.mp3",
    "../../src/audio/mati12/A121.mp3",
];

function reproducirAudio(index1, index2){
    audio1.src = rutaAudioPreg[index1];
    audio2.src = rutaAudioRes[index2];
    audio1.load();
    audio1.play();

    audio1.onended = () => {
        audio2.load();
        audio2.play();
    }
}
