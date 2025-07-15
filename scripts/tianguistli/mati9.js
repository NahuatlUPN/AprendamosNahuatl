//VARIABLES DE LA ACTIVIDAD
var contador=0;
var idPregunta = [];
var ordenPregunta = [
    "preg1", 
    "preg2", 
    "preg3", 
    "preg4", 
    "preg5", 
    "preg6" 
];
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
    [
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
    ],
    [
        ["chilpoctli", "exotl"],
        ["ajoli", "istatl", "tecpinchili"],
        ["sintli"],
        ["xonacatl", "iyatl"],
        ["ayohtli", "cuaxilotl", "tomatl"],
        ["etl", "sintli"]
    ]
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
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let indexNivel = parseInt(localStorage.getItem('indexNivel'));
let intento = localStorage.getItem('intento');
if(intento === null){
    localStorage.setItem('intento','0');
  }else{
    intento = parseInt(intento);
  }

/*FIN ENLACE A RETRO.JS*/

//FUNCIONAMIENTO ELEGIR RESPUESTA
opcionResp.forEach(div => {
    let index = respuestaSel.indexOf(texto);
    div.addEventListener("click", function(){
        texto = div.querySelector("p").textContent;
        //Verifica si hay elementos en el array
        if(respuestaSel.length < 0){
            btnAcept.style.display = "none";
        }else{
        }
        //Verifica si el texto ya esta seleccionado
        if(index === -1){
            contador++;
            respuestaSel.push(texto);
            div.classList.toggle("seleccionado");
        }else{
            contador--;
            respuestaSel.splice(index, 1);
            div.classList.remove("seleccionado");
        }

        switch(indexNivel){
            case 0:
                if((indexPregunta===0 || indexPregunta===1) && contador===3){
                    evaluar();
                }else if((indexPregunta===2) && contador===1){
                    evaluar();
                }else if((indexPregunta===3 || indexPregunta===4 || indexPregunta===5) && contador===2){
                    evaluar();
                }
                break;
            case 1:
                if((indexPregunta===0 || indexPregunta===3 || indexPregunta===5) && contador===2){
                    evaluar();
                }else if((indexPregunta===1 || indexPregunta===4) && contador===3){
                    evaluar();
                }else if((indexPregunta===2) && contador===1){
                    evaluar();
                }
        }
        console.log("Respuesta seleccionada (1): "+respuestaSel);
        console.log("Respuesta seleccionada TAM: "+respuestaSel.length);
    });
});
//FIN FUNCIONAMIENTO ELEGIR RESPUESTA

//FUNCIONES
function seleccionarPregunta(){
    let respuestasAux = respuestas[indexNivel][indexPregunta];
    console.log("Respuestas:  "+respuestasAux);
    /*
    if(indexPregunta >= 6){
        indexNivel =1;
        aux = 0;
    }else if(indexPregunta>11){
        indexNivel =3;
        indexPregunta = 0;
    }*/
    console.log("/////////////////////////////////");
    console.log("indexPregunta: " + indexPregunta);
    console.log("imgRuta.length: " + imgRuta.length);
    console.log("indexNivel: " + indexNivel);
    //Colocar valores de los parrafos
    parrafos.forEach((p,index) => {
        if(opciones[indexNivel] != undefined){
            p.textContent = opciones[indexNivel][index];
        }
    })
    //Iluminar unidades de medida
    if(indexPregunta>0){
        document.getElementById(idPregMed[indexPregunta-1]).style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
    imgPregunta.src = imgRuta[indexPregunta];
    document.getElementById(idPregMed[indexPregunta]).style.backgroundColor = "rgba(103, 111, 18, 0.447)";
    }
    
function evaluar(){
    let respuestasAux = respuestas[indexNivel][indexPregunta];
    opcionResp.forEach(div => {
        div.style.pointerEvents = "none";
        div.classList.remove("seleccionado");
    });
    console.log("Respuestas correctas: " + respuestasAux);
    console.log("Respuestas seleccionadas: " + respuestaSel);
    console.log("pregunta: " + indexPregunta);

    if(respuestaSel.length === respuestasAux.length && respuestaSel.every(elem => respuestasAux.includes(elem))){
        console.log("Respuesta correcta")
        svgCorrect.style.display = "flex";
    }else{
        console.log("Respuesta incorrecta, LA RESPUESTA CORRECTA ES: " + respuestasAux);
        svgWrong.style.display = "flex";
    }
    btnAcept.style.display = "none";
    btnSiguiente.style.display = "flex";
}

function limpiar(){
    index=0;
    respuestaSel = [];
    contador = 0;
    btnSiguiente.style.display = "none";
    svgWrong.style.display = "none";
    svgCorrect.style.display = "none";
    btnAcept.style.display = "none";
    respuestaSel.length = 0;
    opcionResp.forEach(div => {
        div.style.pointerEvents = "auto";
    });
    if(indexPregunta===5){
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati9b.html";
    }else if(indexPregunta===11){
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati9b.html";
    }else{
        indexPregunta++;
        seleccionarPregunta();
    }
}

//FIN FUNCIONES

seleccionarPregunta();
btnAcept.addEventListener("click", evaluar);
btnSiguiente.addEventListener("click", limpiar);