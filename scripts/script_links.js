var pag = null;
function toPage(){
	document.addEventListener("DOMContentLoaded", function(){
		var pag = document.getElementById("pagInicio").dataset.pag;
	})
	
	//Redirecciona a una de las paginas
	if(pag=="Inicio"){
		window.location.href = "index.html"
	}else
		window.location.href = "../index.html"

}


function toCaracMat(){
    if(idPag=="Inicio"){
        window.location.href = "pages/caracteristicas_material.html"
    }else{
        window.location.href = "../pages/caracteristicas_material.html"
    }
}
