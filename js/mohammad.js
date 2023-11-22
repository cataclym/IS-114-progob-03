import {circle, circleSVG, rectangle, rectangleSVG, triangle, triangleSVG} from "./figures.js"

export function drawSantaSVG(scale = 1, id = "mohammad") {
    const svgElement = document.getElementById(id);

    // Santa's head
    const body = circleSVG(120, "red", 150, 175);

    // Santa's face
    const face = circleSVG(80, "white", 80 * scale, 60 * scale);

    // Santa's eyes
    const leftEye = circleSVG(14 * scale, "black", 50 * scale, 50 * scale);
    const rightEye = circleSVG(14 * scale, "black", 110 * scale, 40  * scale);

    // Santa's nose
    const nose = circleSVG(20 * scale, "red", 95 * scale, 85 * scale);

    // Santa's beard
    const beard = triangleSVG(1.4 * scale, "white", 20 * scale, 80 * scale);

    // Santa's hat
    const hat = triangleSVG(1.4 * scale, "white", 20 * scale, -15 * scale);

    const svgString = `${body} ${face} ${beard} ${hat} ${nose} ${leftEye} ${rightEye}`;

    svgElement.style.width = "300px";
    svgElement.style.height = "325px";
    svgElement.innerHTML += `${svgString}`;
}

export function drawSantaCanvas(scale = 1, id = "mohammad") {
    const context = document.getElementById(id).getContext("2d");
    context.canvas.width = 300
    context.canvas.height = 325

    // Santa's head
    circle(80 * scale, "red", id, 100 * scale, 110 * scale);

    // Santa's beard
    triangle(2.7 * scale, "white", id, 5 * scale, -5 * scale);

    // Santa's body
    triangle(2.7 * scale, "white", id, 5 * scale, 20 * scale);

    // Santa's face
    circle(50 * scale, "white", id, 70 * scale, 55 * scale);

    // Santa's eyes
    circle(14 * scale, "black", id, 45 * scale, 40 * scale);
    circle(14 * scale, "black", id, 90 * scale, 30 * scale);

    // Santa's nose
    circle(20 * scale, "red", id, 85 * scale, 70 * scale);


}

export function drawMovingBall() {
    const element = document.getElementById("moving");

    element.innerHTML = `<a xlink:href="https://cataclym.github.io/IS-114-progob-03/">${circleSVG(50, "rgba(186, 12, 47, 1)", 50, 50)}
    ${circleSVG(25, "#ffffff", 50, 50)}
    ${circleSVG(20, "rgba(0, 32, 91, 1)", 50, 50)}</a>`
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

