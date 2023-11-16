import {circle, circleOutline, circleOutlineSVG, circleSVG, rectangle, rectangleSVG} from "./figures.js"

// Hode
export function drawMikkey(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 200
    ctx.canvas.height = 200

    circle(35, "#000000", canvasID, 35, 50)
    circle(35, "#000000", canvasID, 165, 50)
    circle(52, "#000000", canvasID, 100, 105)
}

export function drawMikkeySVG(svgID) {
    const svgElement = document.getElementById(svgID);

    const sirkel1 = circleSVG(35, "#000000", 35, 50),
        sirkel2 = circleSVG(35,  "#000000", 165, 50),
        sirkel3 = circleSVG(52,  "#000000", 100, 105)

    svgElement.innerHTML += `${sirkel1} ${sirkel2} ${sirkel3}`;
}

// SVG Marathon symbol
export function drawMarathonSVG(scale = 1, id = "ole") {
    const svgElement = document.getElementById(id);

    const mainCircle = circleSVG(50 * scale, "#000000", 50 * scale, 50 * scale);
    const outlineCircle = circleOutlineSVG(30 * scale, "white", 5 * scale, 50  * scale, 40  * scale);
    const rectangle = rectangleSVG(10 * scale, 30 * scale, "white", 45 * scale, 70  * scale);

    svgElement.children.length && svgElement.children[0].tagName === "g"
        ? svgElement.children[0].innerHTML += `${mainCircle} ${outlineCircle} ${rectangle}`
        : svgElement.innerHTML += `${mainCircle} ${outlineCircle} ${rectangle}`;
}

export function drawMarathonCanvas(scale = 1, id = "ole") {
    circle(50 * scale, "#000000", id, 50 * scale, 50 * scale);
    circleOutline(30 * scale, "white",5 * scale, id, 50  * scale, 40  * scale);
    rectangle(10 * scale, 30 * scale, "white", id, 45 * scale, 70  * scale);
}

// Flagg
export function drawFlag(canvasID) {

    const canvas = document.getElementById(canvasID);
    const ctx = canvas.getContext("2d");

    ctx.canvas.width = 220
    ctx.canvas.height = 160

    rectangle(220, 160, "rgba(186, 12, 47, 1)", canvasID, 0, 0)

    rectangle(220, 40, "white", canvasID, 0, 60)
    rectangle(40, 160, "white", canvasID, 60, 0)

    rectangle(220, 20, "rgba(0, 32, 91, 1)", canvasID, 0, 70)
    rectangle(20, 160, "rgba(0, 32, 91, 1)", canvasID, 70, 0)
}

export function drawMovingBall() {
    const element = document.getElementById("moving");

    element.innerHTML = `<a xlink:href="https://cataclym.github.io/IS-114-progob-03/">${circleSVG(50, "rgba(186, 12, 47, 1)", 50, 50)}
    ${circleSVG(25, "#ffffff", 50, 50)}
    ${circleSVG(20, "rgba(0, 32, 91, 1)", 50, 50)}</a>`
}

if (document.URL.endsWith("ole.html")) {
    drawMovingBall();
    drawFlag("flag");

    drawMarathonSVG(1.5);

    drawMarathonSVG(1.5, "svgFigur")
    drawMarathonCanvas(1.5, "canvasFigur")
}
else {
    drawMarathonSVG(1.9)
}

