//Inicio variables
var imageID = null;
var select;
var audio = document.getElementById("audio")
var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2")
var dialog1 = document.getElementById("dialogo1");
var dialog2 = document.getElementById("dialogo2");
//frases
var dial1 = [
    "notoca Isabel",
    "notoca Miguel",
    "notoca Juan",
    "notoca Indalesio",
    "notoca Guadalupe"
]

var dial2 = [
    "nichiquichihchihquetl",
    "nitlanamacaquetl",
    "nimiltequitih",
    "nitlatsotsonquetl",
    "nimomachtia"
];

//Rutas de imagenes
var imgdial1 = ["../../src/img/mach11/NOTOCAAURELIA.JPG",
                "../../src/img/mach11/NOTOCAPEDRO.JPG",
                "../../src/img/mach11/NOTOCARAFAEL.JPG",
                "../../src/img/mach11/NOTOCAINDALECIO.JPG",
                "../../src/img/mach11/NOTOCAGUADALUPE.JPG"

];
var imgdial2 = ["../../src/img/mach11/HAGOCANASTAS_NICHIQUI.JPG",
                "../../src/img/mach11/SOYVENDEDOR_NITLANAMA.JPG",
                "../../src/img/mach11/TRABAJOLAMILPA_NIMELTI.JPG",
                "../../src/img/mach11/SOYMUSICO_NITLATSO.JPG",
                "../../src/img/mach11/SOYESTUDIANTE_NIMOMACHTIA.JPG"
];

//Fin variables

function animacion(select){

    setTimeout(() =>  {
        image1.src = imgdial1[select];     
        image1.style.display = "block";
        dialog1.textContent = dial1[select];
    },2050);
    
    setTimeout(() => {
        image2.src = imgdial2[select];
        image2.style.display = "block";
        dialog2.textContent = dial2[select];
    },5550)

    setTimeout(() => {
        dialog1.textContent = "";
        dialog2.textContent = "";
        image1.style.display = "none";
        image2.style.display = "none";
        icon1.style.display = "block";
        icon2.style.display = "block";
    }, 8000);
}

function selectImage(imageID){
    
    audio.src = "../../src/audio/mach11/audio_pregunta.mp3";
    audio.load();
    audio.oncanplaythrough = function(){
        audio.play();
    } 

    setTimeout(() =>  {
        icon1.style.display = "none";
    },2000);
    setTimeout(() =>  {
        icon2.style.display = "none";
    },5500);

    
    switch(imageID){
        case "notocaAurelia":
            animacion(0);
            break;
        
        case "notocaPedro":
            animacion(1);
            break;
        
        case "notocaRafael":
            animacion(2);
            break;

        case "notocaIndalecio":
            animacion(3);
            break;

        case "notocaGuadalupe":
            animacion(4);
            break;
        
        default:
            window.alert("Ha ocurrido un error, intenta otra vez o vuelve más tarde");
    }

    //Fin setInterval

    
    /*
    audioElement.addEventListener('ended', function(){
        image1.style.display = "none";
        image2.style.display = "none";
        icon1.style.display = "block";
        icon2.style.display = "block";
    });*/

}

document.querySelectorAll("img[id^='notoca']").forEach(img => {
    img.addEventListener("click", function(){
        imageID = this.id;
        selectImage(imageID);
    })
})

function scrollScreen(){
    const posicion = document.body.scrollHeight;
    window.scrollTo({
        top: 230,
        behavior: 'smooth'
    });
}