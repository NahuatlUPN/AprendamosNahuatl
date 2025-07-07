 function reproducirAudio(rutaAudio) {
  var audio = document.getElementById("audio");
  audio.src = rutaAudio;
  audio.play();
}

function ocultarEjemplo(){
  document.getElementById("ven_ejem").style.display = "none";
}

function mostrarEjemplo(){
  document.getElementById("ven_ejem").style.display = "block";
}


