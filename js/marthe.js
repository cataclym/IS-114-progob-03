import {circle, rectangle, circleSVG, rectangleSVG} from "./figures.js"

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


export function drawNisseSVG(svgID) {
    // Henter en <svg> tag med id svgID
    const svgElement = document.getElementById(svgID);


    //base
    const rektangel1 = rectangleSVG(300, 300, "#B22222", 0, 0),

        //belte
        rektangel2 = rectangleSVG(300, 35, "#000000", 0, 197.5),
        rektangel3 = rectangleSVG(300, 30, "#F5F5F5", 0, 200),

        //beltespenne
        rektangel4 = rectangleSVG(70, 70, "#000000", 115, 180),
        rektangel5 = rectangleSVG(65, 65, "#DAA520", 117.5, 182),
        rektangel6 = rectangleSVG(39, 39, "#0000007", 128.5, 195.5),
        rektangel7 = rectangleSVG(35, 35, "#F5F5F5", 130.5, 197),

        //knapper
        sirkel1 = circleSVG(16, "#000000", 150, 30),
        sirkel2 = circleSVG(15, "#DAA520", 150, 30),
        sirkel3 = circleSVG(16, "#000000", 150, 75),
        sirkel4 = circleSVG(15, "#DAA520", 150, 75),
        sirkel5 = circleSVG(16, "#000000", 150, 120),
        sirkel6 = circleSVG(15, "#DAA520", 150, 120);

    svgElement.style.width = "300px";
    svgElement.style.height = "300px";
    // Her legger man sirklene innenfor <svg id="svgID"> <svg/> elementene
    svgElement.innerHTML += `${rektangel1} ${rektangel2} ${rektangel3}${rektangel4} ${rektangel5} ${rektangel6} ${rektangel7} ${sirkel1} ${sirkel2} ${sirkel3} ${sirkel4} ${sirkel5} ${sirkel6}`;

}

drawNisseSVG("martheSVG")
