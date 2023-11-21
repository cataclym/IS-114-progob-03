
import {rectangle} from "./figures.js"

export function drawNisse(canvasID) {
    const canvas = document.getElementById(canvasID);

    const ctx = canvas.getContext("2d");
    ctx.canvas.width = 300
    ctx.canvas.height = 300

//base
    rectangle(300, 300, "#B22222", canvasID, 300, 300)

//belte
    rectangle(300, 32, "#000000", canvasID, 150, 200)
    rectangle(300, 30, "#F5F5F5", canvasID, 150, 200)

//beltespenne
rectangle(57, 57, "#000000", canvasID, 150, 200)
rectangle(55, 55, "#DAA520", canvasID, 150, 200)
rectangle(37, 37, "#000000", canvasID, 150, 200)
rectangle(35, 35, "#F5F5F5", canvasID, 150, 200)

//knapper
    circle(16, "#000000", canvasID, 150, 30)
    circle(15, "#DAA520", canvasID, 150, 30)
    circle(16, "#000000", canvasID, 150, 75)
    circle(15, "#DAA520", canvasID, 150, 75)
    circle(16, "#000000", canvasID, 150, 120)
    circle(15, "#DAA520", canvasID, 150, 120)
 
}
 
drawNisse("marthe")