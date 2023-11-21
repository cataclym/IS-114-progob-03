import {circle, circleSVG, star, starSVG} from "./figures.js"

export function drawStar(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 300
    ctx.canvas.height = 300

    circle(150, "#000080", canvasID, 150, 150)
    circle(100, "#00008B", canvasID, 150, 150)
    star(4.5, "#ffd700", canvasID, 150, 150)
    star(2, "#Ffff00", canvasID, 150, 150)

}

drawStar("anna")

export function drawStarSVG(svgID) {
    const svgElement = document.getElementById(svgID);

    const sirkel1 = circleSVG(150, "#000080", canvasID, 150, 150),
    sirkel2 = circleSVG(100, "#00008B", canvasID, 150, 150),
    sirkel3 = starSVG(4.5, "#ffd700", canvasID, 150, 150),
    sirkel4 = starSVG(2, "#Ffff00", canvasID, 150, 150)

    svgElement.innerHTML += `${sirkel1} ${sirkel2} ${sirkel3} ${sirkel4}`;

    
}

drawStarSVG("annaSVG")