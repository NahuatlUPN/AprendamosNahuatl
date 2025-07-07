/*Pagina de inicio */
const canvas = document.getElementById("disenio");
const ctx = canvas.getContext("2d");


ctx.beginPath();
//Startpoint
ctx.moveTo(0,0);
//endpoint
ctx.beginPath(200,100);

ctx.stroke();