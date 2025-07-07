//VARIABLES DE LA ACTIVIDAD
var indexPregunta = 0;
var idPregunta = [];
var ordenPregunta = [
    "preg1", 
    "preg2", 
    "preg3", 
    "preg4", 
    "preg5", 
    "preg6" 
];
indexNivel = 0;
var respuestaSel = [];
var texto = null;
var aux = 0;
var correct = 0;
var wrong = 0;

//RUTAS DEL CONTENIDO MULTIMEDIA
var imgRuta = [
    "../../src/img/mati9/litro.jpg",
    "../../src/img/mati9/cuarteroh.jpg",
    "../../src/img/mati9/costali.jpeg",
    "../../src/img/mati9/tlamaitsquili.jpg",
    "../../src/img/mati9/kilo.jpg",
    "../../src/img/mati9/cuartillo.jpg"
];

//Opciones de la actividad
var opciones = [
    ["ahuacatl", "cafe", "sintli", "cacahuatl", "xictomatl", "quilitl", "tecpinchili", "etl", "xoxoc chili", "istatl", "culanto", "ayohtli"],
    ["chilpoctli", "xonacatl", "etl", "istatl", "tecpinchili", "tomatl", "exotl", "iyatl", "ayohtli", "cuaxilotl", "sintli", "ajoli"]
]

//RESPUESTAS DE LA ACTIVIDAD
var respuestas = [
    ["cafe", "tecpinchili", "cacahuatl"],
    ["istatl", "xoxoc chili", "cacahuatl"],
    ["sintli"],
    ["culanto", "quilitl"],
    ["xictomatl", "ahuacatl"],
    ["sintli", "etl"],
    ["chilpoctli", "exotl"],
    ["ajoli", "istatl", "tecpinchili"],
    ["sintli"],
    ["xonacatl", "iyatl"],
    ["ayohtli", "cuaxilotl", "tomatl"],
    ["etl", "sintli"]
]

//VARIABLES ELEMENTOS HTML
var preguntaMedida = Array.from(document.querySelectorAll("#preguntas div"));
var idPregMed = preguntaMedida.map(div => div.id);
var btnSiguiente = document.getElementById("next");
var btnAcept = document.getElementById("aceptar");
var opcionResp = document.querySelectorAll(".grupo-opciones div");
var svgCorrect = document.getElementById("svgCorrect");
var svgWrong = document.getElementById("svgWrong");
var parrafos = document.querySelectorAll("#opciones p");

//FIN DE VARIABLES ELEMENTOS HTML


//ID'S de los elementos HTML
var imgPregunta = document.getElementById("imgPregunta");
var idPreguntaHTML = document.querySelectorAll("p");
idPreguntaHTML.forEach(idPreguntaHTML => {
    idPregunta.push(idPreguntaHTML.id);
});

/*ENLACE A RETRO.JS*/
let intento = localStorage.getItem('intento');
if(intento === null){
    localStorage.setItem('intento','0')
  }else{
    intento = parseInt(intento);
  }
/*FIN ENLACE A RETRO.JS*/

//FUNCIONAMIENTO ELEGIR RESPUESTA
opcionResp.forEach(div => {
    div.addEventListener("click", function(){
        texto = div.querySelector("p").textContent;
        //Verifica si hay elementos en el array
        if(respuestaSel.length < 0){
            btnAcept.style.display = "none";
        }else{
            evaluar();
        }
        //Verifica si el texto ya esta seleccionado
        let index = respuestaSel.indexOf(texto);
        if(index === -1){
            respuestaSel.push(texto);
            div.classList.toggle("seleccionado");
        }else{
            respuestaSel.splice(index, 1);
            div.classList.remove("seleccionado");
        }
        console.log(respuestaSel);
    });
});
//FIN FUNCIONAMIENTO ELEGIR RESPUESTA

//FUNCIONES
function seleccionarPregunta(){
    if(indexPregunta >= 6){
        indexNivel =1;
        aux = 0;
    }else if(indexPregunta>11){
        indexNivel =3;
        indexPregunta = 0;
    }
    console.log("/////////////////////////////////");
    console.log("indexPregunta: " + indexPregunta);
    console.log("aux: " + aux);
    console.log("imgRuta.length: " + imgRuta.length);
    console.log("indexNivel: " + indexNivel);
    //Colocar valores de los parrafos
    parrafos.forEach((p,index) => {
        if(opciones[indexNivel] != undefined){
            p.textContent = opciones[indexNivel][index];
        }
    })
    //Iluminar unidades de medida
    if(indexNivel === 0){
        console.log("primer if donde indexNivel===0");
        console.log("Intentando cargar imagen:", imgRuta[indexPregunta]);

        if(indexPregunta>0){
            document.getElementById(idPregMed[indexPregunta-1]).style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
        imgPregunta.src = imgRuta[indexPregunta];
        document.getElementById(idPregMed[indexPregunta]).style.backgroundColor = "rgba(103, 111, 18, 0.447)";
        
    }else if(indexNivel===1){
        console.log("segunfo if donde indexNivel===1");
        console.log("Intentando cargar imagen:", imgRuta[indexPregunta-6]);

        if(indexPregunta===6){
            document.getElementById(idPregMed[indexPregunta-1]).style.backgroundColor = "rgba(255, 255, 255, 0)";
        }else if(indexPregunta>6){
            console.log("dsdsfsa");
            document.getElementById(idPregMed[indexPregunta-7]).style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
        imgPregunta.src = imgRuta[indexPregunta-6];
        document.getElementById(idPregMed[indexPregunta-6]).style.backgroundColor = "rgba(103, 111, 18, 0.447)";
        aux++;
    }else{
        indexPregunta = 0;
    }
}
    
function evaluar(){
    opcionResp.forEach(div => {
        div.style.pointerEvents = "none";
        div.classList.remove("seleccionado");
    });
    if(indexPregunta >= respuestaSel.length){
        console.log("Actividad finalizada");
    }
    let respuestasAux = respuestas[indexPregunta];
    console.log("Respuestas correctas: " + respuestasAux);
    console.log("Respuestas seleccionadas: " + respuestaSel);
    console.log("pregunta: " + indexPregunta);

    if(respuestaSel.length === respuestasAux.length && respuestaSel.every(elem => respuestasAux.includes(elem))){
        console.log("Respuesta correcta")
        svgCorrect.style.display = "flex";
    }else{
        console.log("Respuesta incorrecta, LA RESPUESTA CORRECTA ES: " + respuestas[indexPregunta]);
        svgWrong.style.display = "flex";
    }
    btnAcept.style.display = "none";
    btnSiguiente.style.display = "flex";
}

function limpiar(){
    btnSiguiente.style.display = "none";
    svgWrong.style.display = "none";
    svgCorrect.style.display = "none";
    btnAcept.style.display = "none";
    respuestaSel.length = 0;
    opcionResp.forEach(div => {
        div.style.pointerEvents = "auto";
    });
    indexPregunta++;
    if(indexPregunta<12){
        seleccionarPregunta();
    }else{
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati9b.html";
    }

}

//FIN FUNCIONES

seleccionarPregunta();
btnAcept.addEventListener("click", evaluar);
btnSiguiente.addEventListener("click", limpiar);