let intento = parseInt(localStorage.getItem('intento'));
let correct = parseInt(localStorage.getItem('correct'));
let wrong = parseInt(localStorage.getItem('wrong'));
let act5b = document.getElementById("reiniciar5b");
let act6b = document.getElementById("reiniciar6b");
let act8b = document.getElementById("reiniciar8b");
let act9b = document.getElementById("reiniciar9b");
let act13b = document.getElementById("reiniciar13b");
let act16b = document.getElementById("reiniciar16b");
let act17b = document.getElementById("reiniciar17b");
let actmati5b = document.getElementById("reiniciarmati5b");
let actmati6b = document.getElementById("reiniciarmati6b");
let actmati8b = document.getElementById("reiniciarmati8b");
let actmati9b = document.getElementById("reiniciarmati9b");
let actmati13b = document.getElementById("reiniciarmati13b");
let actmati14b = document.getElementById("reiniciarmati14b");


function mostrarRetro(){
    console.log("intento = " + intento);
    if(intento>2){
        intento=0;
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

if(act5b){
    act5b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach5a.html";
        localStorage.setItem('intento', intento.toString());
    });
    document.getElementById("reiniciar5b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach5a.html";
        //intento = 0;
        localStorage.setItem('intento', intento.toString());
    });

}else if(act6b){
    act6b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach6a.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar6b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach6a.html";
        //intento = 0;
        localStorage.setItem('intento', intento.toString());
    });
}
else if(act8b){
    act8b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach8a.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar8b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach8a.html";
        //intento = 0;
        localStorage.setItem('intento', intento.toString());
    });
}
else if(act9b){
    act9b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach9b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar9b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach9a.html";
        localStorage.setItem('intento', intento.toString());
    });

}
else if(act13b){
    act13b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach13b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar13b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach13a.html";
        localStorage.setItem('intento', intento.toString());
    });

}
else if(act16b){
    act16b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach16b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar16b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach16.html";
        localStorage.setItem('intento', intento.toString());
    });
}
else if(act17b){
    act17b.addEventListener("click", function(){
        window.location.href = "../../pages/chaneuani/mach17b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciar17b").addEventListener("click", function() {
        window.location.href = "../../pages/chaneuani/mach17.html";
        localStorage.setItem('intento', intento.toString());
    });
}
else if(actmati5b){
    actmati5b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati5b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati5b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati5.html";
        localStorage.setItem('intento', intento.toString());
    });
}else if(actmati6b){
    actmati6b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati6b.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati6b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati6.html";
        localStorage.setItem('intento', intento.toString());
    });
}else if(actmati8b){
    actmati8b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati8.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati8b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati8b.html";
        localStorage.setItem('intento', intento.toString());
    });
}else if(actmati9b){
    actmati9b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati9.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati9b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati9b.html";
        localStorage.setItem('intento', intento.toString());
    });
}else if(actmati13b){
    actmati13b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati13.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati13b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati13b.html";
        localStorage.setItem('intento', intento.toString());
    });
}else if(actmati14b){
    actmati13b.addEventListener("click", function(){
        window.location.href = "../../pages/tianguistli/mati14.html";
        localStorage.setItem('intento', intento.toString());
    });

    document.getElementById("reiniciarmati14b").addEventListener("click", function() {
        window.location.href = "../../pages/tianguistli/mati13b.html";
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