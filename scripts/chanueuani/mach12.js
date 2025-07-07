const audio = document.getElementById('idAudio');
var parrafos = document.querySelectorAll('p[id^="idD"]');
let timeouts = [];
var idControl = null;

function selControl(idControl){
    console.log(idControl);
    switch(idControl){
        case "idControlPlay":
          playAudio();
          break;  
        case "idControlPause":
          time = false;
          pauseAudio();
          break;  
        case "idControlStop":
          stopAudio();
          break;  
        case "idControlPrinter":
          print();
          break; 
        default:
            window.alert("Ha ocurrido un error, intenta otra vez o intentalo más tarde");
    }
}

function playAudio() {
    audio.play();

    timeouts.push(setTimeout(() => {
        parrafos[0].style.color = "#fff";
    }, 300));
    timeouts.push(setTimeout(() => {
        parrafos[1].style.color = "#fff";
    }, 1800));
    timeouts.push(setTimeout(() => {
        parrafos[2].style.color = "#fff";
    }, 3500));
    timeouts.push(setTimeout(() => {
        parrafos[3].style.color = "#fff";
    }, 5500));
    timeouts.push(setTimeout(() => {
        parrafos[4].style.color = "#fff";
    }, 7000));
    timeouts.push(setTimeout(() => {
        parrafos[5].style.color = "#fff";
    }, 9000));
    timeouts.push(setTimeout(() => {
        parrafos[6].style.color = "#fff";
    }, 11000));
    timeouts.push(setTimeout(() => {
        parrafos[7].style.color = "#fff";
    }, 13000));
    timeouts.push(setTimeout(() => {
        parrafos[8].style.color = "#fff";
    }, 14300));
    timeouts.push(setTimeout(() => {
        parrafos[9].style.color = "#fff";
    }, 15000));
    timeouts.push(setTimeout(() => {
        parrafos.forEach(parrafo => parrafo.style.color = "rgba(255, 255, 255, 0.492)");
    }, 17000));
}
  
    
    function stopAudio() {
        audio.pause();
        audio.currentTime = 0;
        timeouts.forEach(timeout => clearTimeout(timeout)); // Limpiar todos los timeouts
        timeouts = []; // Vaciar el array de timeouts
        parrafos.forEach(parrafo => parrafo.style.color = "rgba(255, 255, 255, 0.492)"); // Restaurar colores
    }
    

function print(){
    window.open("../../src/imprimibles/chaneuani/dialogo_mach12.PDF", "_blank");
}

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
}

document.querySelectorAll("svg[id^='idControl'").forEach(svg => {
    svg.addEventListener("click", function(){
        idControl = this.id;
        selControl(idControl);
    })
})