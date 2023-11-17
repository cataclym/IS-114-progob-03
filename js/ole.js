import {
    circle,
    circleOutline,
    circleOutlineSVG,
    circleSVG,
    rectangle,
    rectangleSVG,
    triangleSVG,
    star,
    starSVG
} from "./figures.js"

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

export function drawMikkeySVG(scale = 1, svgID) {
    const svgElement = document.getElementById(svgID);

    const sirkel1 = circleSVG(35 * scale, "#000000", 35 * scale, 50  * scale),
        sirkel2 = circleSVG(35 * scale,  "#000000", 165 * scale, 50  * scale),
        sirkel3 = circleSVG(52 * scale,  "#000000", 100 * scale, 105  * scale)

    svgElement.innerHTML += `${sirkel1} ${sirkel2} ${sirkel3}`;
}

// SVG Marathon symbol
export function drawMarathonSVG(scale = 1, id) {
    const svgElement = document.getElementById(id);

    const mainCircle = circleSVG(50 * scale, "rgb(214, 0, 28)", 50 * scale, 50 * scale);
    const outlineCircle = circleOutlineSVG(30 * scale, "snow", 5 * scale, 50  * scale, 40  * scale);
    const goldenOutlineCircle = circleOutlineSVG(33 * scale, "gold", 2 * scale, 50  * scale, 40  * scale);
    const rectangle = rectangleSVG(10 * scale, 30 * scale, "snow", 45 * scale, 69.5  * scale);
    const goldenRectangle = rectangleSVG(12 * scale, 30 * scale, "gold", 44 * scale, 69.5  * scale);
    const whiteStar = starSVG(0.20 * scale, "snow", 30 * scale, 17.5 * scale);
    const whiteTriangle = `<g transform="scale(1, 4)">${triangleSVG(0.13 * scale, "snow", 50 * scale, 11 * scale)}</g>`;

    const innherHTML = `${mainCircle} ${goldenOutlineCircle} ${whiteTriangle} ${goldenRectangle} ${outlineCircle} ${rectangle} ${whiteStar}`;

    svgElement.children.length && svgElement.children[0].tagName === "g"
        ? svgElement.children[0].innerHTML += innherHTML
        : svgElement.innerHTML += innherHTML;
}

export function drawMarathonCanvas(scale = 1, id = "ole") {
    circle(50 * scale, "rgb(214, 0, 28)", id, 50 * scale, 50 * scale);

    circleOutline(31 * scale, "gold",5 * scale, id, 50  * scale, 40  * scale);

    rectangle(12 * scale, 30 * scale, "gold", id, 44 * scale, 69.5  * scale);
    rectangle(10 * scale, 30 * scale, "white", id, 45 * scale, 69.5  * scale);

    circleOutline(30 * scale, "snow",5 * scale, id, 50  * scale, 40  * scale);

    star(0.7 * scale, "snow", id, 50 * scale, 40 * scale);

    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d")

    ctx.beginPath();
    ctx.moveTo(50 * scale, 45 * scale);
    ctx.lineTo(43 * scale, 68 * scale);
    ctx.lineTo(57 * scale, 68 * scale);
    ctx.closePath();
    ctx.fillStyle = "snow";
    ctx.fill();
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

export function drawMovingBall(scale = 1, id) {
    const element = document.getElementById(id);

    element.innerHTML = `${circleSVG(50 * scale, "rgba(186, 12, 47, 1)", 50 * scale, 50 * scale)}
        ${circleSVG(25 * scale, "#ffffff", 50 * scale, 50 * scale)}
        ${circleSVG(20 * scale, "rgba(0, 32, 91, 1)", 50 * scale, 50 * scale)}`
}

if (document.URL.endsWith("ole.html")) {
    drawFlag("flag");
    drawMarathonSVG(1, "moving")
    drawMarathonSVG(1.5, "ole");
    drawMarathonSVG(1.5, "svgFigur")
    drawMarathonCanvas(1.5, "canvasFigur")
    drawMovingBall(1.5,"ball")
    drawMikkeySVG(0.9, "mickey")
}
else {
    drawMarathonSVG(1.9, "ole")
}

