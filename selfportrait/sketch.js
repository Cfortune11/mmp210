function setup() {
	createCanvas(600, 400);
}

function draw() {
	background("841700");
    
  fill("LAVENDER");
  noStroke();
  ellipse(300, 200,400,300); // face

  fill("INDIGO");
  rect(150, 100, 50,100);
  triangle(400, 100,450, 150, 500, 100);

line(200, 300, 400, 350);

}