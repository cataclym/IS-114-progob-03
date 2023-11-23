import {circle, circleOutline, circleOutlineSVG, circleSVG, rectangle, rectangleSVG} from "./figures.js"

function gingerbreadman() {
    const id = "meriton";

    const element = document.getElementById(id)
    const ctx = element.getContext("2d")

    ctx.canvas.width = 300
    ctx.canvas.height = 500


    circle(
        70, "chocolate", id, 145, 85
    )
    circle(
        10, "snow", id, 165, 65
    )
    circle(
        10, "snow", id, 127, 65
    )
    circle(
        15, "red", id, 135, 270
    )
    circle(
        15, "red", id, 135, 220
    )
    circle(
        15, "red", id, 135, 170
    )


    rectangle(
        300, 70, "chocolate", id, 1, 150
    )
    rectangle(
        140, 200, "chocolate", id, 75, 150
    )
    rectangle(
        65, 170, "chocolate", id, 150, 340
    )
    rectangle(
        65, 170, "chocolate", id, 75, 340
    )
    rectangle(
        7, 70, "snow", id, 30, 150
    )
    rectangle(
        140, 7, "snow", id, 76, 307
    )
    rectangle(
        7, 70, "snow", id, 255, 150
    )
    circle(
        15, "red", id, 145, 280
    )
    circle(
        15, "red", id, 145, 230
    )
    circle(
        15, "red", id, 145, 180
    )
    circleOutline(
        20, "snow", 5, id, 145, 110
    )
    rectangle(
        70, 25, "chocolate", id, 110, 85
    )
}

gingerbreadman()


circleSVG(
    70, "chocolate", 145, 85
)
circleSVG(
    10, "snow", 165, 65
)
circleSVG(
    10, "snow", 127, 65
)
circleSVG(
    15, "red", 135, 270
)
circleSVG(
    15, "red", 135, 220
)
circleSVG(
    15, "red", 135, 170
)


rectangleSVG(
    300, 70, "chocolate", 1, 150
)
rectangleSVG(
    140, 200, "chocolate", 75, 150
)
rectangleSVG(
    65, 170, "chocolate", 150, 340
)
rectangleSVG(
    65, 170, "chocolate", 75, 340
)
rectangleSVG(
    7, 70, "snow", 30, 150
)
rectangleSVG(
    140, 7, "snow", 76, 307
)
rectangleSVG(
    7, 70, "snow", 255, 150
)
circleSVG(
    15, "red", 145, 280
)
circleSVG(
    15, "red", 145, 230
)
circleSVG(
    15, "red", 145, 180
)
circleOutlineSVG(
    20, "snow", 5, 145, 110
)
rectangleSVG(
    70, 25, "chocolate", 110, 85
)

const sirkel0 = circleSVG(
        70, "chocolate", 145, 85
    ),
    sirkel1 = circleSVG(
        10, "snow", 165, 65
    ),
    sirkel2 = circleSVG(
        10, "snow", 127, 65
    ),
    sirkel3 = circleSVG(
        15, "red", 135, 270
    ),
    sirkel4 = circleSVG(
        15, "red", 135, 220
    ),
    sirkel5 = circleSVG(
        15, "red", 135, 170
    ),


    rektangel1 = rectangleSVG(
        300, 70, "chocolate", 1, 150
    ),
    rektangel2 = rectangleSVG(
        140, 200, "chocolate", 75, 150
    ),
    rektangel3 = rectangleSVG(
        65, 170, "chocolate", 150, 340
    ),
    rektangel4 = rectangleSVG(
        65, 170, "chocolate", 75, 340
    ),
    rektangel5 = rectangleSVG(
        7, 70, "snow", 30, 150
    ),
    rektangel6 = rectangleSVG(
        140, 7, "snow", 76, 307
    ),
    rektangel7 = rectangleSVG(
        7, 70, "snow", 255, 150
    ),
    rektangel8 = circleSVG(
        15, "red", 145, 280
    ),
    sirkel6 = circleSVG(
        15, "red", 145, 230
    ),
    sirkel7 = circleSVG(
        15, "red", 145, 180
    ),
    sirkel8 = circleOutlineSVG(
        20, "snow", 5, 145, 110
    ),
    rektangel9 = rectangleSVG(
        70, 25, "chocolate", 110, 85
    );

const svgelement = document.getElementById("meriton2")
svgelement.style.width = "300px";
svgelement.style.height = "500px";
svgelement.innerHTML = `${sirkel0} ${sirkel1} ${sirkel2}${sirkel3}${sirkel4}${sirkel5}${sirkel8}${rektangel1}${rektangel2}${rektangel3}${rektangel4}${rektangel5}${rektangel6}${rektangel7}${rektangel8}${rektangel9} ${sirkel6}${sirkel7}`
