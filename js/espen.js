import { circleSVG, rectangleSVG, circle, rectangle } from "./figures.js"

const bigsirkel = circleSVG(50, "snow", 100, 200),
bigsirkel2 = circleSVG(75, "snow", 100, 100),

smallsirkel = circleSVG(7,"black", 85, 210),
smallsirkel2 = circleSVG(5, "black", 110, 210),

hatt1 = rectangleSVG(25, 30, "black", 87, 260),
hatt2 = rectangleSVG(50, 25, "black", 75, 248),

gulrot = circleSVG(6, "orange", 92, 190),

knapp1 = circleSVG(4, "black", 97, 90),
knapp2 = circleSVG(4, "black", 97, 75);

const svgElement = document.getElementById("espen");

svgElement.style.width = 150;
svgElement.style.height = 285;

svgElement.innerHTML += "<g transform='translate(175, 300) rotate(180)'>" + bigsirkel2 + bigsirkel + hatt2 + hatt1 + knapp2 + knapp1 + gulrot + smallsirkel + smallsirkel2 + "</g>";


const espen1 = "espen1"

const ctx = document.getElementById(espen1).getContext("2d");
ctx.canvas.width = 200
ctx.canvas.height = 300

circle(10, "snow", espen1, 100, 100)

//NedersteSirkel
circle(75, "snow", espen1, 100, 100) 
//NestNedersteSirkel
circle(50, "snow", espen1, 100, 200)
//øyne1
circle(7, "black", espen1, 85, 210)
//øyne2
circle(5, "black", espen1, 110, 210)

//gulrot
circle(6, "orange", espen1, 97, 190)

//knapp1
circle(4, "black", espen1, 97, 90)
//knapp2
circle(4, "black", espen1, 97, 75)

//liteRectangel
rectangle(25,30, "black", espen1, 87,260)
//storRectangel
rectangle(50,25, "black", espen1, 75, 250)

