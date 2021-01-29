let body = document.querySelector("body");
body.style.textAlign = "center";

let canvas = document.querySelector("#game-canvas");
let ctx = canvas.getContext("2d");

let width = 500;
let height = 500;

canvas.width = width;
canvas.height = height;

function rect(x, y, w, h, colour) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath;
}

function mainLoop() {
    rect(0, 0, width, height, "grey");
}

setInterval(mainLoop, 50);
