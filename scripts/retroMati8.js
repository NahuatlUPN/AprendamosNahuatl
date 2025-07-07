let intento = parseInt(localStorage.getItem('intento'));
let indexPregunta = parseInt(localStorage.getItem('indexPregunta'));
let indexNivel = parseInt(localStorage.getItem('indexNivel'));
let correct = parseInt(localStorage.getItem('correct'));
let wrong = parseInt(localStorage.getItem('wrong'));
let actmati5b = document.getElementById("reiniciarmati8b");
let continuar = document.getElementById("continuar");
function mostrarRetro(){
    console.log("IndexPregunta: " + indexPregunta)
    console.log("IndexNivel: " + indexNivel)
    if(intento>3){
        intento=0;
    }

    document.getElementById("aciertos").innerText = correct;
    document.getElementById("errores").innerText = wrong;

    if(indexNivel === 1){
        document.getElementById("tr1").style.display = "block";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "none";
    }else if (indexNivel === 2){
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
        if(indexNivel<=2){
            indexNivel++;
        }else{
            indexNivel = 0;
            indexPregunta=0;
        }
        window.location.href = "../../pages/tianguistli/mati8.html";
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
    });
}

if(actmati5b){
    actmati5b.addEventListener("click", function(){
        indexPregunta = Math.max(0, indexPregunta - 5); // evitar negativos
        // NO se cambia indexNivel, solo se mantiene el actual
        localStorage.setItem('intento', intento.toString());
        localStorage.setItem('indexPregunta', indexPregunta.toString());
        localStorage.setItem('indexNivel', indexNivel.toString());
        window.location.href = "../../pages/tianguistli/mati8.html";
    });
}

mostrarRetro();