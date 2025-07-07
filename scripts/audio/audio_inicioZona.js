document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const textoAudio = document.getElementById('textoAudio');
    let isPlaying = false;
    
    audio.addEventListener('play', function() {
        isPlaying = true;
        mostrarTexto();
    });

    audio.addEventListener('pause', function() {
        isPlaying = false;
    });

    audio.addEventListener('ended', function() {
        isPlaying = false;
    });

    function mostrarTexto() {
        if (!isPlaying) return;
        
        // Aquí debes implementar la lógica para obtener el texto correspondiente al audio en reproducción
        // Puedes usar APIs de reconocimiento de voz como Web Speech API o bibliotecas como SpeechRecognition.js
        // Por ejemplo, podrías tener un array de objetos con el tiempo de inicio y el texto correspondiente del audio
        // Y mostrar el texto correspondiente al tiempo actual del audio en reproducción
        
        // Ejemplo básico de cómo mostrar texto sincronizado con el audio
        const texto = "Este es un texto de ejemplo sincronizado con el audio.";
        textoAudio.textContent = texto;

        // Esto te dará el texto en tiempo real mientras se reproduce el audio
        setTimeout(mostrarTexto, 1000); // Llama a la función cada segundo
    }
});
