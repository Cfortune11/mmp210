

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("841700");
    
  fill("red");
  noStroke();
  circle(300, 200,400,300); // face

  fill("black"); //eyes
  ellipse(150, 150, 50, 100);
	ellipse(250, 150, 40, 80);

fill("red");
	ellipse(150, 150, 40, 40);
	ellipse(250, 150, 30, 30);

	stroke("black");
	line(150, 250, 250, 280);


}

