/*
meme version 1
 10.3.2019
 */
function setup() {
    createCanvas(990, 700);
}

var img;
var img2;
var img3;

function preload() {
    img = loadImage("obi-wan.jpg");
    img2 = loadImage("Qui-Gon-Jinn.jpg");
    img3 = loadImage("obi-wan2.jpg");
}

function draw() {
    image(img, 0, 0);
    image(img2, 320, 0);
    image(img3, 690, 0);
    textAlign(LEFT);
    textSize(20);
    fill('white');
    textStyle(NORMAL);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");

    if (mouseIsPressed && mouseX < 320) {
        text("Wasup Pop", 111, 50);
    } else if (mouseIsPressed && mouseX < 690) {
        text("Your report just came in you mind explaining", 320, 50);
    }
     else if (mouseIsPressed ) {
        text("You see what had happened was", 700, 50);
     }



   
}
