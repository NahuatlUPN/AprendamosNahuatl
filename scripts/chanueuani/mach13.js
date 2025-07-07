const palabras = document.getElementById("palabra");
const audio = document.getElementById("idAudio");//idAudio
const items = document.querySelectorAll('.opcion'); // Elementos arrastrables
var boxes = document.querySelectorAll('.espacio'); // Elementos contenedores
var cont=0;
var divId = null
const ev = document.getElementById("next");
//Obtener id de los contenedores
const valor = Array.from(boxes).map(elem => elem.dataset.value);
var idbox = Array.from(boxes, div => div.id);
//var idboxes = document.querySelectorAll("div[id^='r']");
let correct = 0;
let wrong = 0;
var intento = localStorage.getItem('intento');
//alert("Intento: "+ intento);
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }

document.querySelectorAll("svg[id^='idControl'").forEach(svg => {
    svg.addEventListener("click", function(){
        idControl = this.id;
        selControl(idControl);
    })
})

function selControl(idControl){
    switch(idControl){
        case "idControlPlay":
          audio.play();
          palabras.style.display = "flex";
          break;  
        case "idControlPause":
          audio.pause()
          break;  
        case "idControlStop":
          audio.pause();
          audio.currentTime = 0;
          break;  
        case "idControlPrinter":
            //No se cuenta con imprimible para esta sección
            window.location.href = "../../src/imprimibles/chaneuani/dialogo_mach12.PDF";
          break; 
        default:
            window.alert("Ha ocurrido un error, intenta otra vez o intentalo más tarde");
    }
}

/*INICIO DRAG&DROP */

// Controlador de eventos dragstart
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

// Controlador de eventos de destino
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

// Manejo del dragStart
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

// Manejo de eventos de destino
function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}  

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault(); // Asegura que el evento drop se maneje correctamente
    e.target.classList.remove('drag-over');

    // Verificar si se está soltando en un contenedor válido
    if (!e.target.classList.contains('espacio')) {
        return;
    }

    // Obtener el elemento arrastrable
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // Verificar si el contenedor ya está ocupado
    if (e.target.children.length === 0) {
        e.target.appendChild(draggable);
        draggable.classList.remove('hide');
        cont++;
        // Verificar si todos los elementos han sido colocados
        if (cont === items.length) {
            evaluar();
        }
    } else {
        console.log("Respuesta no valida");
        draggable.classList.remove('hide'); // Mostrar el elemento de nuevo
    }
}

/*FIN DRAG&DROP */

function evaluar() {
    correct = 0;
    wrong = 0;
    const respuestas = [];

    for (let i = 0; i < boxes.length; i++) {
        const contenedor = boxes[i];
        let texto = "";

        if (contenedor.children.length > 0) {
            texto = contenedor.children[0].textContent.trim();
        }

        respuestas.push(texto);

        const id = contenedor.id;

        if (id === 'r1' || id === 'r15') {
            if (texto === 'ti') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r2' || id === 'r4') {
            if (texto === 'huala') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (['r3', 'r12', 'r14', 'r17'].includes(id)) {
            if (texto === 'ni') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r5') {
            if (texto === 'mo') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (['r6', 'r8', 'r10'].includes(id)) {
            if (texto === 'toca') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r7' || id === 'r9') {
            if (texto === 'no') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r11') {
            if (texto === 'tlen') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r13') {
            if (texto === 'ta') {
                correct++;
            } else {
                wrong++;
            }
        }
        if (id === 'r16' || id === 'r18') {
            if (texto === 'ya') {
                correct++;
            } else {
                wrong++;
            }
        }
    }

    intento++;
    localStorage.setItem('correct', correct.toString());
    localStorage.setItem('wrong', wrong.toString());
    localStorage.setItem('intento', intento.toString());
    window.location.href = "../../pages/chaneuani/mach13b.html";
}


function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
    });
}

ev.addEventListener("click", evaluar);