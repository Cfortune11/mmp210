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
var x= 600, y=500 ;
var speed = 2;

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
    stroke('white');
    strokeWeight(10);
    textFont("Grenze");
    stroke("black");
     text("When your dad gets your report card",x, 500);
    fill("black");
    x +=speed;
    if (x > width) {
        x=100;
    }
    if (mouseIsPressed && mouseX < 320) {
        fill("white");
        text("Wasup Pop", 111, 50);
    } else if (mouseIsPressed && mouseX < 690) {
        fill('white');
        text("Your report card just came in, take a look", 350, 50);
    }
     else if (mouseIsPressed ) {
         fill("white");
        text("You see what had happened was", 700, 50);
     }}