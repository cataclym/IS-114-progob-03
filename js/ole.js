import {circle, rectangle} from "./figures.js"

// Hode
function drawMikkey(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 200
    ctx.canvas.height = 200

    circle(35, "solid", "#000000", canvasID, 35, 50)
    circle(35, "solid", "#000000", canvasID, 165, 50)
    circle(52, "solid", "#000000", canvasID, 100, 105)
}

// Flag
function drawFlag(canvasID) {

    const canvas = document.getElementById(canvasID);
    const ctx = canvas.getContext("2d");

    ctx.canvas.width = 200
    ctx.canvas.height = 200

    rectangle(220, 160, "solid", "rgba(186, 12, 47, 1)", canvasID, 0, 0)

    rectangle(220, 40, "solid", "white", canvasID, 0, 60)
    rectangle(40, 160, "solid", "white", canvasID, 60, 0)

    rectangle(220, 20, "solid", "rgba(0, 32, 91, 1)", canvasID, 0, 70)
    rectangle(20, 160, "solid", "rgba(0, 32, 91, 1)", canvasID, 70, 0)
}

drawMikkey("mickey")
drawFlag("flag")
