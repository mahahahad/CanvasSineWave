"use strict";
const canvasEl = document.querySelector("#canvas");
if (canvasEl.getContext) {
    let ctx = canvasEl.getContext("2d");
    // Take up full screen size
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;
    // Initialize wave starting point and line details
    let xVal = 0;
    ctx.beginPath();
    ctx.moveTo(0, innerHeight / 2);
    ctx.strokeStyle = "white";
    function draw() {
        let xCord = Math.PI * xVal * 16;
        let yCord = innerHeight / 2 + Math.sin(Math.PI * xVal) * 100;
        ctx.lineTo(xCord, yCord);
        xVal += 0.05;
        ctx.stroke();
        requestAnimationFrame(draw);
    }
    draw();
}
