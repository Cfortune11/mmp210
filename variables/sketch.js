 

function setup() {
	createCanvas(640, 360);
}

var faceSize = 500;

function draw() {
	background("841700");
    
  fill("red");
  noStroke();
  ellipse(x,y, faceSize, faceSize/2); // face

  fill("black");
  rect(150, 100, 50,100);
  triangle(400, 100,450, 150, 500, 100);

line(200, 300, 400, 350);


fill("black")

}



