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

function star(size, color, canvasID, positionX = 0, positionY = 0) {
    const canvas = document.getElementById(canvasID);

    const cx = positionX,
    cy = positionY,
    spikes = 5,
    outerRadius = 30 * size,
    innerRadius = 11 * size;

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        let rot= Math.PI/2*3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)

        for(let i= 0; i < spikes; i++){
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x= cx + Math.cos(rot) * innerRadius;
            y= cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }

        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function starSVG(size = 1, color, positionX = 0, positionY = 0) {
    return `<g transform="translate(${positionX}, ${positionY})"><polygon points="${100 * size}, ${10 * size} ${40 * size},${198* size} ${190 * size},${78 * size} ${10 * size},${78 * size} ${160 * size},${198 * size}" fill="${color}" /></g>`
}

export {
    circle,
    circleSVG,
    circleOutline,
    circleOutlineSVG,
    rectangle,
    rectangleSVG,
    rectangleOutline,
    rectangleOutlineSVG,
    star,
    starSVG
}
