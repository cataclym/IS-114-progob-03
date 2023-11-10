import {circle, circleSVG, rectangle, rectangleSVG} from "./figures.js"

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

function drawMovingBall() {
    const element = document.getElementById("moving");

    element.innerHTML = `${circleSVG(50, undefined, "rgba(186, 12, 47, 1)", 50, 50)}
    ${circleSVG(25, undefined, "#ffffff", 50, 50)}
    ${circleSVG(20, undefined, "rgba(0, 32, 91, 1)", 50, 50)}`
}

function drawSVGRectangle() {
    const element = document.getElementsByClassName("ole")[0];

    element.innerHTML += `<svg class="ole rect">${rectangleSVG(window.screen.availWidth, 20, "solid", "#363636", 0, 0)}</svg>`
}


drawMovingBall();
drawSVGRectangle();
drawMikkey("mickey");
drawFlag("flag");

