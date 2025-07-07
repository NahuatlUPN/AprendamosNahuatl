let foto;
let rutaAudio = [
  "../../src/audio/mach15/NOCOLTAT_ABUELO.MP3",
  "../../src/audio/mach15/NOSISNA_ABUELA.MP3",
  "../../src/audio/mach15/NOTAT_PADRE.MP3",
  "../../src/audio/mach15/NONA_MIMADRE.MP3",
  "../../src/audio/mach15/NOTOCA_ANTONIO.MP3",
  "../../src/audio/mach15/NOSIUA_MIESPOSA.MP3",
  "../../src/audio/mach15/NOHUELTI_MIHERMANA.MP3",
  "../../src/audio/mach15/itlaca.MP3", //Revisar archivo
  "../../src/audio/mach15/NOICNI_MIHERMANO.MP3",
  "../../src/audio/mach15/NOSIHUACONE_MIHIJA.MP3",
  "../../src/audio/mach15/NOCONE_MIHIJO.MP3",
  "../../src/audio/mach15/nosihuamachcone.MP3",//Revisar archivo
  "../../src/audio/mach15/nomachcone.MP3"//Revisar archivo
]
var audio = document.getElementById("audio");

function reproducirAudio(rutaAudio) {
  audio.src = rutaAudio;
  audio.play();
}

function selectAudio(foto) {
  switch (foto) {
    case "fam01":
      reproducirAudio(rutaAudio[0]);
      break;
    case "fam02":
      reproducirAudio(rutaAudio[1]);
      break;
    case "fam03":
      reproducirAudio(rutaAudio[2]);
      break;
    case "fam04":
      reproducirAudio(rutaAudio[3]);
      break;
    case "fam05":
      reproducirAudio(rutaAudio[4]);
      break;
    case "fam06":
      reproducirAudio(rutaAudio[5]);
      break;
    case "fam07":
      reproducirAudio(rutaAudio[6]);
      break;
    case "fam08":
      reproducirAudio(rutaAudio[7]);
      break;
    case "fam09":
      reproducirAudio(rutaAudio[8]);
      break;
    case "fam10":
      reproducirAudio(rutaAudio[9]);
      break;
    case "fam11":
      reproducirAudio(rutaAudio[10]);
      break;
    case "fam12":
      reproducirAudio(rutaAudio[11]);
      break;
    case "fam13":
      reproducirAudio(rutaAudio[12]);
      break;
    default:
      window.alert("Ha ocurrido un error, intenta de nuevo");
  }
}

function scrollScreen(){
  const posicion = document.body.scrollHeight;
  window.scrollTo({
      top: 270,
      behavior: 'smooth'
  });
}

document.querySelectorAll("img[id^='fam']").forEach(img => {
  img.addEventListener("click", function() {
    foto = this.id;
    selectAudio(foto);
  });
});
