function circle(radius, mode, color, canvasId = "canvas", positionX = 0, positionY = 0, outlineWidth = 5) {
    const canvas = document.getElementById(canvasId);

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = outlineWidth;
        ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, false);

        switch(mode) {
            default:
            case "solid":
                ctx.fill();
                break;
            case "outline":
                ctx.stroke();
                break;
        }
        return ctx.closePath()
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function circleSVG(radius, mode, color, positionX = 0, positionY = 0, outlineWidth = 5) {
    switch (mode) {
        case "outline":
            return `<circle cx="${positionX}" cy="${positionY}" r="${radius}" stroke="${color}" fill="rgba(0, 0, 0, 0)" stroke-width="${outlineWidth}" />`
        default:
        case "solid":
            return `<circle cx="${positionX}" cy="${positionY}" r="${radius}" fill="${color}" />`
    }
}

function rectangle(width, height, mode, color, canvasId = "canvas", positionX = 0, positionY = 0) {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        switch(mode) {
            case "solid":
                ctx.fillRect(positionX, positionY, width, height)
                return;
            case "outline":
                ctx.strokeRect(positionX, positionY, width, height)
                return;
            default:
                ctx.clearRect(positionX, positionY, width, height);
        }
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function rectangleSVG(width, heigth, mode, color, positionX = 0, positionY = 0) {
    switch (mode) {
        case "outline":
            return `<rect width="${width}" height="${heigth}" x="${positionX}" y="${positionY}" stroke="${color}" fill="rgba(0, 0, 0, 0)" />`
        default:
        case "solid":
            return `<rect width="${width}" height="${heigth}" x="${positionX}" y="${positionY}" fill="${color}" />`
    }
}

export { circle, circleSVG, rectangle, rectangleSVG }
