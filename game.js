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
let alpha = 0;

function drawIntro() {

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    alpha += 0.02;

    ctx.save();

    ctx.globalAlpha = Math.sin(alpha) * 0.5 + 0.5;

    ctx.font = "120px Arial";
    ctx.textAlign = "center";

    ctx.shadowColor = "white";
    ctx.shadowBlur = 40;

    ctx.fillStyle = "white";

    ctx.fillText(
        "UZELVS",
        canvas.width / 2,
        canvas.height / 2
    );

    ctx.restore();

    if(alpha > 8){
        scene = "menu";
    }
}
