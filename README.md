# IS-114-progob-03

Funksjoner 101:
```js
// Argumenter:
// Radius                                       Number
// "solid" eller ""outline"                     String                       
// Farge (f.eks "#ffffff") for hvit.            String
// CanvasID                                     String
// PosisjonX - Horisontalt                      Number
// PosisjonY - Vertikalt                        Number
// OutlineWidth - Tykkelse på "outline" mode.   Number
circle(10, "solid", "green", "min-canvas-id", 100, 100, 5)

circleSVG(radius, mode, color, positionX = 0, positionY = 0, outlineWidth = 5)

rectangle(width, height, mode, color, canvasId = "canvas", positionX = 0, positionY = 0)

rectangleSVG(width, heigth, mode, color, positionX = 0, positionY = 0)
```

## Eks. funksjon som tegner disney symbol.
```js
export function drawMikkey(canvasID) {
    // Denne delen er valgritt -->
    // Henter HTML elementet med id canvasID.
    const canvas = document.getElementById(canvasID);

    // Henter kontekst i 2D.
    const ctx = canvas.getContext("2d");
    
    // Om man trenger å sette canvas sin bredde/høyde
    ctx.canvas.width = 200
    ctx.canvas.height = 200
    // <--
    
    // Tegner tre sirkler innenfor canvas med canvasID.
    //    Radius        Svart farge         Posisjon   
    circle(35, "solid", "#000000", canvasID, 35, 50)
    circle(35, "solid", "#000000", canvasID, 165, 50)
    circle(52, "solid", "#000000", canvasID, 100, 105)
}
```

## Eks. samme tegning med SVG
```js
export function drawMikkeySVG(svgID) {
    // Henter en <svg> tag med id svgID
    const svgElement = document.getElementById(svgID);

    // Konstruerer tre sirkler
    const sirkel1 = circleSVG(35, "solid", "#000000", 35, 50),
        sirkel2 = circleSVG(35, "solid", "#000000", 165, 50),
        sirkel3 = circleSVG(52, "solid", "#000000", 100, 105)

    // Her legger man sirklene innenfor <svg id="svgID"> <svg/> elementene
    svgElement.innerHTML += `${sirkel1} ${sirkel2} ${sirkel3}`;
}
```