
function reiniciarContadorIntento(){
    let intento = parseInt(localStorage.getItem('intento'));
    intento = 0;
    localStorage.setItem('intento', intento.toString());
}