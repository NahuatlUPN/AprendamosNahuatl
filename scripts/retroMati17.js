let intento = parseInt(localStorage.getItem('intento'));
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let correct = parseInt(localStorage.getItem('correct'));
let wrong = parseInt(localStorage.getItem('wrong'));
let actmati17b = document.getElementById("reiniciarmati17b");
let continuar = document.getElementById("continuar");
function mostrarRetro(){
    if(intento>3){
        intento=0;
    }
    if(indexPregunta>9){
        indexPregunta=0;
    }

    document.getElementById("aciertos").innerText = correct;
    document.getElementById("errores").innerText = wrong;

    if(intento === 1){
        document.getElementById("tr1").style.display = "block";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "none";
    }else if (intento === 2){
        document.getElementById("tr1").style.display = "none";
        document.getElementById("tr2").style.display = "block";
        document.getElementById("tr3").style.display = "none";
    }else{
        document.getElementById("tr1").style.display = "none";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "block";
    }
}

if(continuar){
    continuar.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati17.html";
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
    });
}

if(actmati17b){
    actmati17b.addEventListener("click", function(){
        if(indexPregunta===5){
            indexPregunta=0;
        }else{
            indexPregunta=6;
        }
        window.location.href = "../../pages/tianguistli/mati17.html";
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
    });
}


/*
document.getElementById("siguiente").addEventListener("click", function() {
    window.location.href = "../../pages/chaneuani/mach6a.html";
    intento = 0;
    localStorage.setItem('intento', intento.toString());
});
*/

mostrarRetro();