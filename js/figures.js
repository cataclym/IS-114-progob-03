function circle(radius, mode, color, canvasId = "canvas") {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillstyle = color;

        switch(mode) {
            case "solid":
                ctx.fillRect(0, 0, )
            case "outline":

        }
    }
}

function circleSVG(radius, mode, color) {
    
}

function rectangle(width, heigth, mode, color, canvasId = "canvas") {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillstyle = color;

        switch(mode) {
            case "solid":
                ctx.fillRect(0, 0, width, heigth)
            case "outline":
                ctx.strokeRect(0, 0, width, heigth)
        }
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function rectangleSVG(width, heigth, mode, color) {

}