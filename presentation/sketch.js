/*
    final project presentation
    11.19.2019
    
    sensor
    interaction
    theme
*/

var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 550;
var nextBtnSize = 50;

var prevBtnX = 50;
var prevBtnY = 550;
var prevBtnW = 100;
var prevBtnH = 50;

var cat;

function preload() {
    Galaxy = loadImage("Galaxy.jpg");
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0,0,150);
 
    if (slideNumber == 0) {
        // content for slide number 0
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width/2, height/2);
        
        textSize(30);
        text("by Corey Fortune", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(255);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("For my Project will be using three potentiometers to Analog Pins 0, 1, and 2 on my Arduino (sketch) and printed their values as ASCII strings separated by commas and capped off with a carriage return and newline (a la println()) to my P5 sketch.", 150, 150, 250, 250);
       
        
        textSize(20);
        text("You will be able to draw anything using the potentiometers as well as change the colors.", width/2, height - 100);
    
    } else if (slideNumber == 2) {
        
        // theme
        image(Galaxy, 0, 0, width, height);
        text("The Setup", width/2, height/2);
    }
    
    
    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY,);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        rect(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}



    
    
    
    
    
    