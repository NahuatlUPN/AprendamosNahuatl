let intento = parseInt(localStorage.getItem('intento'));
let correct = parseInt(localStorage.getItem('correct'));
let wrong = parseInt(localStorage.getItem('wrong'));
let actmati14b = document.getElementById("reiniciarmati14b");


function mostrarRetro(){
    console.log("intento = " + intento);
    if(intento>3){
        intento=0;
    }

    document.getElementById("aciertos").innerText = correct;
    document.getElementById("errores").innerText = wrong;

    if(intento === 1){
        document.getElementById("tr1").style.display = "block";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "none";
        document.getElementById("tr4").style.display = "none";
    }else if (intento === 2){
        document.getElementById("tr1").style.display = "none";
        document.getElementById("tr2").style.display = "block";
        document.getElementById("tr3").style.display = "none";
        document.getElementById("tr4").style.display = "none";
    }else if(intento === 3){
        document.getElementById("tr1").style.display = "none";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "block";
        document.getElementById("tr4").style.display = "none";
    }else{
        document.getElementById("tr1").style.display = "none";
        document.getElementById("tr2").style.display = "none";
        document.getElementById("tr3").style.display = "none";
        document.getElementById("tr4").style.display = "block";
    }
}

if(actmati14b){
    actmati14b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati14.html";
        localStorage.setItem('intento', intento.toString());
    });
    document.getElementById("reiniciarmati13b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati14.html";
        //intento = 0;
        localStorage.setItem('intento', intento.toString());
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