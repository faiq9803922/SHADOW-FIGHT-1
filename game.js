const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scene = "intro";

function gameLoop(){

ctx.clearRect(0,0,canvas.width,canvas.height);

if(scene==="intro"){
drawIntro();
}

requestAnimationFrame(gameLoop);
}

gameLoop();
