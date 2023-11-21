import {circle, star} from "./figures.js"

export function drawStar(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 200
    ctx.canvas.height = 200

    star(40, "#Ffff00", canvasID, 100, 100)
    star(90, "#ffd700", canvasID, 100, 100)
    circle(150, "#00008B", canvasID, 100, 100)
    circle(200, "#000080", canvasID, 100, 100)

}

drawStar("anna")
