import {circle, circleSVG, rectangle, rectangleSVG} from "./figures.js"

// Hode
export function drawMikkey(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 200
    ctx.canvas.height = 200

    circle(35, "solid", "#000000", canvasID, 35, 50)
    circle(35, "solid", "#000000", canvasID, 165, 50)
    circle(52, "solid", "#000000", canvasID, 100, 105)
}

// SVG Marathon symbol
export function drawMarathon(scale = 1) {
    const svgElement = document.getElementById("ole");

    const mainCircle = circleSVG(50 * scale, "solid", "#000000", 50 * scale, 50 * scale);
    const outlineCircle = circleSVG(30 * scale, "outline", "white", 50  * scale, 40  * scale, 5  * scale);
    const rectangle = rectangleSVG(10 * scale, 30 * scale, "solid", "white", 45 * scale, 70  * scale);

    svgElement.children.length && svgElement.children[0].tagName === "g"
        ? svgElement.children[0].innerHTML += `${mainCircle} ${outlineCircle} ${rectangle}`
        : svgElement.innerHTML += `${mainCircle} ${outlineCircle} ${rectangle}`;
}

// Flagg
export function drawFlag(canvasID) {

    const canvas = document.getElementById(canvasID);
    const ctx = canvas.getContext("2d");

    ctx.canvas.width = 220
    ctx.canvas.height = 160

    rectangle(220, 160, "solid", "rgba(186, 12, 47, 1)", canvasID, 0, 0)

    rectangle(220, 40, "solid", "white", canvasID, 0, 60)
    rectangle(40, 160, "solid", "white", canvasID, 60, 0)

    rectangle(220, 20, "solid", "rgba(0, 32, 91, 1)", canvasID, 0, 70)
    rectangle(20, 160, "solid", "rgba(0, 32, 91, 1)", canvasID, 70, 0)
}

export function drawMovingBall() {
    const element = document.getElementById("moving");

    element.innerHTML = `<a xlink:href="https://cataclym.github.io/IS-114-progob-03/">${circleSVG(50, undefined, "rgba(186, 12, 47, 1)", 50, 50)}
    ${circleSVG(25, undefined, "#ffffff", 50, 50)}
    ${circleSVG(20, undefined, "rgba(0, 32, 91, 1)", 50, 50)}</a>`
}

if (document.URL.endsWith("ole.html")) {
    drawMovingBall();
    drawFlag("flag");
    drawMarathon(1.5);
}
else {
    drawMarathon(2.4)
}
