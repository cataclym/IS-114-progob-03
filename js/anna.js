import {circle, star} from "./figures.js"

export function drawStar(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 300
    ctx.canvas.height = 300

    circle(150, "#000080", canvasID, 150, 150)
    circle(100, "#00008B", canvasID, 150, 150)
    star(5, "#ffd700", canvasID, 150, 150)
    star(4.5, "#ffd700", canvasID, 150, 150)
    star(2, "#Ffff00", canvasID, 150, 150)

}

drawStar("anna")
