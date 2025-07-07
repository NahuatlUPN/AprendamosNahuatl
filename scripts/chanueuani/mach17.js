var espacio = document.getElementById("arbol");
var i=0;
var indexPregunta = 0;
var correct = 0;
var wrong = 0;
var idarbol=[];
var anselect = null;
const btn_quena = document.getElementById("opcion1");
const btn_amo = document.getElementById("opcion2");
var ev = document.getElementById("accept");
var next = document.getElementById("next");
var encabezado = document.getElementById("encabezado");
var svgCorrect = document.getElementById("svgCorrect");
var svgWrong = document.getElementById("svgWrong");
/*ENCABEZADO*/
var palabra_encabezado = [];
/*RESPUESTAS*/
var respuestas = [];
/*ENLACE A RETRO.JS*/
let intento = localStorage.getItem('intento');
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }
/*FIN ENLACE A RETRO.JS*/


/*INICIO DE BLOQUE PARA IDENTIFICAR Y MOSTRAR EL ARBOL */
function identificarArbol(){
    if(intento >= 3){
        intento = 0;
    }
    console.log(intento);
    if(intento===0){
        respuestas.push("amo", "quena", "amo", "amo", "quena");
        palabra_encabezado.push("isihua", "imachcone", "itlaca","itlaca","itat");

        document.querySelectorAll("img[id^='arbol1']").forEach(img => {
            idarbol.push(img); // Agrega el id de cada imagen al array
        });
        mostrarArbol();
    }

    else if(intento===1){
        respuestas.push("quena", "amo", "amo", "amo","quena");
        palabra_encabezado.push("itat", "itat", "isihuacone", "imachcone", "isihuamachcone");

        document.querySelectorAll("img[id^='arbol2']").forEach(img => {
            idarbol.push(img); // Agrega el id de cada imagen al array    
        });
        mostrarArbol();
    }
    else if(intento===2){
        respuestas.push("amo", "amo", "quena", "amo", "quena");
        palabra_encabezado.push("isihuamachcone", "iicni", "itlaca", "isihua","isihuamachcone");

        document.querySelectorAll("img[id^='arbol3']").forEach(img => {
            idarbol.push(img); // Agrega el id de cada imagen al array    
        });
        mostrarArbol();
    }

}

function mostrarArbol(){
    console.log("Pregunta numero: " + indexPregunta);
    if(indexPregunta<=4){
        console.log("indexPregunta " + indexPregunta);
        next.style.display="none";
        encabezado.innerText = palabra_encabezado[indexPregunta];
        console.log(idarbol[indexPregunta]);
        btn_amo.style.display = "block";
        btn_quena.style.display = "block";
        idarbol[indexPregunta].style.display = "block";
    }
}

/*FIN DE BLOQUE PARA IDENTIFICAR EL ARBOL */

/*INICIO DE BLOQUE PARA EVALUAR RESPUESTAS */
function evRespuesta(){
    console.log(anselect);
    if(anselect === respuestas[indexPregunta]){
        correct++;
        svgCorrect.style.display = "block";
    }else{
        wrong++;
        svgWrong.style.display = "block"; 
    }
    btn_amo.style.display = "none";
    btn_quena.style.display = "none";
    ev.style.display = "none";
    next.style.display = "block";

}
/*FIN DE BLOQUE PARA EVALUAR RESPUESTAS */

/*INICIO PARA MOSTRAR LA SIGUIENTE PREGUNTA */
function sigPregunta(){
    idarbol[indexPregunta].style.display = "none";
    indexPregunta++;
    if(indexPregunta <= 4){
        svgCorrect.style.display = "none";
        svgWrong.style.display = "none";
        mostrarArbol();
    }else{
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/chaneuani/mach17b.html";
    }
    
}
/*FIN PARA MOSTRAR LA SIGUIENTE PREGUNTA */


/*Acción del boton quena y amo */
document.querySelectorAll("svg[id^='btn_']").forEach(svg => {
    svg.addEventListener("click", function() {
      anselect = this.getAttribute("data-value");
      console.log(anselect);
      evRespuesta();
    });
  });

  identificarArbol();
  ev.addEventListener("click", evRespuesta);
  next.addEventListener("click", sigPregunta);