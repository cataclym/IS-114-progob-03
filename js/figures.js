function circle(radius, color, canvasId = "canvas", positionX = 0, positionY = 0) {
    const canvas = document.getElementById(canvasId);

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, false);
        ctx.fill();
        return ctx.closePath()
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function circleSVG(radius, color, positionX = 0, positionY = 0) {
    return `<circle cx="${positionX}" cy="${positionY}" r="${radius}" fill="${color}" />`
}

function rectangle(width, height, color, canvasId = "canvas", positionX = 0, positionY = 0) {
    const canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.fillRect(positionX, positionY, width, height);
        return ctx.closePath();
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function rectangleSVG(width, height, color, positionX = 0, positionY = 0) {
    return `<rect width="${width}" height="${height}" x="${positionX}" y="${positionY}" fill="${color}" />`
}

function circleOutline(radius, color, outlineWidth, canvasId, positionX, positionY) {
    const canvas = document.getElementById(canvasId);

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = outlineWidth;
        ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, false);
        ctx.stroke();
        return ctx.closePath();
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function circleOutlineSVG(radius, color, outlineWidth, positionX = 0, positionY = 0) {
    return `<circle cx="${positionX}" cy="${positionY}" r="${radius}" stroke="${color}" fill="rgba(0, 0, 0, 0)" stroke-width="${outlineWidth}" />`
}

function rectangleOutline(width, height, color, outlineWidth, canvasId, positionX = 0, positionY = 0) {
    const canvas = document.getElementById(canvasId);

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = outlineWidth;
        ctx.strokeRect(positionX, positionY, width, height)
        ctx.stroke();

        return ctx.closePath();
    }
    else {
        throw new Error("Canvas doesn't match given ID")
    }
}

function rectangleOutlineSVG(width, height, color, outlineWidth, positionX = 0, positionY = 0) {
    return `<rect width="${width}" height="${height}" x="${positionX}" y="${positionY}" stroke="${color}" stroke-width="${outlineWidth}" fill="rgba(0, 0, 0, 0)" />`
}

export {
    circle,
    circleSVG,
    circleOutline,
    circleOutlineSVG,
    rectangle,
    rectangleSVG,
    rectangleOutline,
    rectangleOutlineSVG
}
