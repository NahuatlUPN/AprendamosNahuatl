let intento = parseInt(localStorage.getItem('intento'));
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let indexNivel = parseInt(localStorage.getItem('indexNivel'));
let correct = parseInt(localStorage.getItem('correct'));
let wrong = parseInt(localStorage.getItem('wrong'));
let act6b = document.getElementById("reiniciarmati6b");
let continuar = document.getElementById("continuar");


function mostrarRetro(){
    console.log("intento = " + intento);
    console.log("IndexPregunta = " + indexPregunta);
    console.log("IndexNivel = " + indexNivel);
    if(intento>3){
        intento=0;
    }


    document.getElementById("aciertos").innerText = correct;
    document.getElementById("errores").innerText = wrong;

    document.getElementById("tr1").style.display = "block";
    //document.getElementById("tr2").style.display = "none";
    //document.getElementById("tr3").style.display = "none";
}

if(continuar){
    continuar.addEventListener("click", function(){
        indexPregunta=0;
        if(indexNivel<1){
            indexNivel++;
        }else{
            indexNivel = 0;
        }
        window.location.href = "../../pages/tianguistli/mati6.html";
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
    });
}

if(act6b){
    act6b.addEventListener("click", function(){
        indexPregunta=0;
        window.location.href = "../../pages/tianguistli/mati6.html";
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
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