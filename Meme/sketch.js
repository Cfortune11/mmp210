/*
meme version 1
 10.3.2019
 */
function setup () {
    createCanvas(640, 430);
}

var img;

function preload(){
    img = loadImage("Qui-Gon-Jinn.jpg")
}



function draw(){
    image(img, 0, 0);
    textAlign(LEFT);
    textSize(20);
    fill('white');
    textStyle(NORMAL);
    stroke('black');
    strokeWeight(10);
    textFont("Grenze");
    text("When your best friend steals the last Pizza", 10, 100);
    
    
}