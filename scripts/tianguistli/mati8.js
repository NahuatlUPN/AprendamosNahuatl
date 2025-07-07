//VARIABLES CODIGO JS
var aux = 0;
var contador = 0;
var img_selec = [];
var ids_seleccionados = [];
var imagen_clic = [];
var respuestasCorrectas = [];
var correct = 0;
var wrong = 0;

//VARIABLES HTML
var ids_img = Array.from(document.querySelectorAll(".img img"));
var opcionIMG = document.querySelectorAll("#opciones img");
var barraProgreso = document.querySelectorAll(".inciso");
var btn_bocina = document.getElementById("svg-bocina");
var audio = document.getElementById("audio");
var btnAcept = document.getElementById("aceptar");
var btnSiguiente = document.getElementById("next");
var svgCorrect = document.getElementById("svgCorrect");
var svgWrong = document.getElementById("svgWrong");

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

//RESPUESTAS
var respuestas = [
    ["cebollita"],
    ["platano", "mango"],
    ["frijol"],
    ["tabaco"],
    ["calabaza", "ejote"],
    ["tuna", "mango"],
    ["tomate", "cilantro", "chileverde"],
    ["jitomate", "quelite"],
    ["papaya", "cilantro"],
    ["maiz", "jitomate", "chileverde"],
    ["mamey", "chalahuite", "cafe"],
    ["chipotle", "elote", "aguacatl"],
    ["cal", "chalauhtli", "maiz"],
    ["ajonjoli", "elote", "chile", "chipotle"],
    ["cal", "chipotle", "aguacatl"],
    ["piloncillo", "camote"],
    ["tecnpinchili", "cebollita", "cacahuate"],
    ["ciruale", "tuna"],
    ["ajonjoli", "cacahuate"],
    ["melon", "ciruela", "piloncillo"]
]

//RUTAS
var rutaImg = [
    [
        "../../src/img/mati8/nivel1/calabaza.jpg",
        "../../src/img/mati8/nivel1/cebollita.jpg",
        "../../src/img/mati8/nivel1/ejote.jpg",
        "../../src/img/mati8/nivel1/frijol.jpg",
        "../../src/img/mati8/nivel1/mango.jpg",
        "../../src/img/mati8/nivel1/naranja.jpg",
        "../../src/img/mati8/nivel1/platano.jpg",
        "../../src/img/mati8/nivel1/sal.jpg",
        "../../src/img/mati8/nivel1/tabaco.jpg"
    ],
    [
        "../../src/img/mati8/nivel2/chileverde.jpg",//
        "../../src/img/mati8/nivel2/tuna.jpg",//
        "../../src/img/mati8/nivel2/jitomate.jpg",//
        "../../src/img/mati8/nivel2/mango.jpg",//
        "../../src/img/mati8/nivel2/maiz.jpg",//
        "../../src/img/mati8/nivel2/tomate.jpg",//
        "../../src/img/mati8/nivel2/cilantro.jpg",//
        "../../src/img/mati8/nivel2/quelite.jpg",//
        "../../src/img/mati8/nivel2/papaya.jpg"//
    ],
    [
        "../../src/img/mati8/nivel3/aguacatl.jpg",
        "../../src/img/mati8/nivel3/ajoli.jpg",
        "../../src/img/mati8/nivel3/cafe.jpg",
        "../../src/img/mati8/nivel3/chalahuite.jpg",
        "../../src/img/mati8/nivel3/elote.jpg",
        "../../src/img/mati8/nivel3/maiz.jpg",
        "../../src/img/mati8/nivel3/mamey.jpg",
        "../../src/img/mati8/nivel3/chipotle.jpg",
        "../../src/img/mati8/nive3/cal.jpg"
    ],
    [
        "../../src/img/mati8/nivel4/cacahuatl.jpg",
        "../../src/img/mati8/nivel4/ajoli.jpg",
        "../../src/img/mati8/nivel4/cebollita.jpg",
        "../../src/img/mati8/nivel4/camohtli.jpg",
        "../../src/img/mati8/nivel4/ciruela.jpg",
        "../../src/img/mati8/nivel4/tecnpinchili.jpg",
        "../../src/img/mati8/nivel4/tuna.jpg",
        "../../src/img/mati8/nivel4/piloncillo.jpg",
        "../../src/img/mati8/nivel4/melon.jpg"
    ]
]

var rutaAudio= [
    "../../src/audio/mati8/A1.mp3",
    "../../src/audio/mati8/A2.mp3",
    "../../src/audio/mati8/A3.mp3",
    "../../src/audio/mati8/A4.mp3",
    "../../src/audio/mati8/A5.mp3",
    "../../src/audio/mati8/A6.mp3",
    "../../src/audio/mati8/A7.mp3",
    "../../src/audio/mati8/A8.mp3",
    "../../src/audio/mati8/A9.mp3",
    "../../src/audio/mati8/A10.mp3",
    "../../src/audio/mati8/A11.mp3",
    "../../src/audio/mati8/A12.mp3",
    "../../src/audio/mati8/A13.mp3",
    "../../src/audio/mati8/A14.mp3",
    "../../src/audio/mati8/A15.mp3",
    "../../src/audio/mati8/A16.mp3",
    "../../src/audio/mati8/A17.mp3",
    "../../src/audio/mati8/A18.mp3",
    "../../src/audio/mati8/A19.mp3",
    "../../src/audio/mati8/A20.mp3"
]

//FUNCIONAMIENTO SELECCIONAR IMAGEN
opcionIMG.forEach(img => {
    img.addEventListener("click", function(){
        //si la imagen ya está seleccionada
        if(img_selec.includes(img)){
            img.style.opacity = "1";
            img_selec = img_selec.filter(elemnto => elemnto !== img); //Eliminar imagen
        }else{
            img_selec.push(img);
            img.style.opacity = "0.3";
        }
        //btnAcept.style.display = img_selec.length > 0 ? "flex" : "none";
        if(indexPregunta==0 || indexPregunta==2 || indexPregunta==3){
            if(img_selec.length==1){
                evaluar();
            }
        }else if(indexPregunta==1 || indexPregunta==4 || indexPregunta==5 || indexPregunta==7 || indexPregunta==8 || indexPregunta==15 || indexPregunta==17 || indexPregunta==18){
            if(img_selec.length==2){
                evaluar();
            }
        }else if(indexPregunta==6 || indexPregunta==9 || indexPregunta==10 || indexPregunta==11 || indexPregunta==12 || indexPregunta==14 || indexPregunta==16 || indexPregunta==19){
            if(img_selec.length==3){
                evaluar();
            }
        }else if(indexPregunta==13){
            if(img_selec.length==4){
                evaluar();
            }
        }
        
        console.log("Imágenes seleccionadas:", img_selec.map(i => i.id)); // Para depuración
    });
});

//FUNCIONES
function selectPregunta(){
    console.log("indexPregunta: " + indexPregunta);
    console.log("indexNivel: " +indexNivel);
    console.log("Contador img: " + img_selec.length);
    //mostrar imagenes (opciones)
    for(aux = 0; aux<=8; aux++){
        ids_img[aux].src = rutaImg[indexNivel][aux]; 
        /*console.log("indexNivel: " + indexNivel);
        console.log("indexPregunta: " + indexPregunta);
        console.log("aux: " + aux);*/
    }
}

function reproducirAudio(){
    audio.src = rutaAudio[indexPregunta];
    audio.load();
    audio.play();
}

function evaluar(){
    opcionIMG.forEach(img => {
        img.style.opacity = "0.3";
        img.style.pointerEvents = "none";
        //Extraer los nombres de las imagenes clickeadas
        imagen_clic = img_selec.map(i => i.src.split('/').pop().split('.')[0]);
    });

    console.log("Nombres de imágenes seleccionadas:", imagen_clic);
    respuestasCorrectas = Array.isArray(respuestas[indexPregunta]) ? respuestas[indexPregunta] : [respuestas[indexPregunta]];
    //Comparar respuestas
    if(imagen_clic.length === respuestasCorrectas.length && imagen_clic.every(img => respuestasCorrectas.includes(img))){
        cambiarProgreso("green");
        svgCorrect.style.display = "flex";
        correct++;
    }else{
        cambiarProgreso("red");
        wrong++;
        svgWrong.style.display = "flex"
    }

    btnAcept.style.display = "none";
    btnSiguiente.style.display = "flex";
}

function limpiar(){
    respuestasCorrectas.length = 0;
    imagen_clic.length = 0;
    img_selec.length = 0;
    opcionIMG.forEach(img => {
        img.style.opacity = "1";
        img.style.pointerEvents = "auto";
    });
    btnSiguiente.style.display = "none";
    svgCorrect.style.display = "none";
    svgWrong.style.display = "none";
    indexPregunta++;
    if(indexPregunta===5 || indexPregunta===10 || indexPregunta===15 || indexPregunta===20){
        //window.open("../../pages/tianguistli/mati8b.html", "_blank", "width=800,height=600");
        localStorage.setItem('correct', correct.toString());
        localStorage.setItem('wrong', wrong.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
        intento++;
        localStorage.setItem('intento', intento.toString());
        window.location.href = "../../pages/tianguistli/mati8b.html";
        indexNivel=0;
    }else{
        selectPregunta();
    }
}

function cambiarProgreso(color){
    if(contador < barraProgreso.length){
        barraProgreso[contador].style.backgroundColor = color;
        contador++;
    }
}

//FIN DE FUNCIONES

btn_bocina.addEventListener("click", reproducirAudio);
btnAcept.addEventListener("click", evaluar);
btnSiguiente.addEventListener("click", limpiar);
selectPregunta();