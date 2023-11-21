
import {circle, rectangle} from "./figures.js"

export function drawNisse(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 300
    ctx.canvas.height = 300

//base
    rectangle(300, 300, "#B22222", canvasID, 0, 0)

//belte
    rectangle(300, 34, "#000000", canvasID, 0, 198)
    rectangle(300, 30, "#F5F5F5", canvasID, 0, 200)

//beltespenne
rectangle(78, 78, "#000000", canvasID, 113.5, 178.5)
    rectangle(75, 75, "#DAA520", canvasID, 115, 180)
rectangle(38, 38, "#000000", canvasID, 133.5, 198.5)
rectangle(35, 35, "#F5F5F5", canvasID, 135, 200)

//knapper
    circle(16, "#000000", canvasID, 150, 30)
    circle(15, "#DAA520", canvasID, 150, 30)
    circle(16, "#000000", canvasID, 150, 75)
    circle(15, "#DAA520", canvasID, 150, 75)
    circle(16, "#000000", canvasID, 150, 120)
    circle(15, "#DAA520", canvasID, 150, 120)
}
 
drawNisse("marthe")