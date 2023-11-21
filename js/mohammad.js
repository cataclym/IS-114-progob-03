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

export function drawMikkeySVG(svgID) {
    const svgElement = document.getElementById(svgID);

    const sirkel1 = circleSVG(55, "solid", "#000000", 35, 50),
        sirkel2 = circleSVG(35, "solid", "#110000", 165, 50),
        sirkel3 = circleSVG(52, "solid", "#000000", 100, 105)

    svgElement.innerHTML += `${sirkel1} ${sirkel2} ${sirkel3}`;
}

// SVG Marathon symbol


export function drawSantaSVG(scale = 1, id = "mohammad") {
    const svgElement = document.getElementById(id);

    // Santa's head
    const body = circleSVG(120, "solid", "red");

    // Santa's face
    const face = circleSVG(80, "solid", "white", 60 * scale, 60 * scale);

    // Santa's eyes
    const leftEye = circleSVG(10 * scale, "solid", "black", 45 * scale, 55 * scale);
    const rightEye = circleSVG(10 * scale, "solid", "black", 75 * scale, 55 * scale);

    // Santa's nose
    const nose = circleSVG(15 * scale, "solid", "red", 60 * scale, 70 * scale);

    // Santa's beard
    const beard = rectangleSVG(200, 100 * scale, "solid", "white", 45 * scale, 60 * scale);

    // Santa's hat
    const hat = rectangleSVG(120 * scale, 90 * scale, "solid", "white", 0, -60 * scale);

    const svgString = `<g transform="translate(35, 0)">${body} ${face} ${leftEye} ${rightEye} ${nose} ${beard} ${hat}</g>`;

    svgElement.children.length && svgElement.children[0].tagName === "g"
        ? svgElement.children[0].innerHTML += `${svgString}`
        : svgElement.innerHTML += `${svgString}`;
}


export function drawSantaCanvas(scale = 1, id = "mohammad") {
    // Santa's head
    circle(120 * scale, "solid", "red", id, 60 * scale, 60 * scale);

    // Santa's face
    circle(40 * scale, "solid", "white", id, 60 * scale, 60 * scale);

    // Santa's eyes
    circle(10 * scale, "solid", "black", id, 45 * scale, 55 * scale);
    circle(10 * scale, "solid", "black", id, 75 * scale, 55 * scale);

    // Santa's nose
    circle(15 * scale, "solid", "red", id, 60 * scale, 70 * scale);

    // Santa's beard
    rectangle(30 * scale, 100 * scale, "solid", "white", id, 45 * scale, 60 * scale);

    // Santa's body
    rectangle(120 * scale, 90 * scale, "solid", "white", id, 0, 120 * scale);
}


export function drawMovingBall() {
    const element = document.getElementById("moving");

    element.innerHTML = `<a xlink:href="https://cataclym.github.io/IS-114-progob-03/">${circleSVG(50, undefined, "rgba(186, 12, 47, 1)", 50, 50)}
    ${circleSVG(25, undefined, "#ffffff", 50, 50)}
    ${circleSVG(20, undefined, "rgba(0, 32, 91, 1)", 50, 50)}</a>`
}

if (document.URL.endsWith("mohammad.html")) {
    drawMovingBall();
   

    drawSantaSVG(1.5);

    drawSantaSVG(1.5, "svgFigur")
    drawSantaCanvas(1.5, "canvasFigur")
}
else {
    drawSantaSVG(1.5, 'mohammad');

}

