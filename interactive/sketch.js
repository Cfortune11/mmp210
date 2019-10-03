// self portrait
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    rectMode(CENTER);
    
    var x = width/2;
    var y = height/2;
    var mouthSize = 200; // size
    var o = 50; // offset
    var s = map(mouseX, 0, width, 5, 200); // move mouth with mouse x
    s = max(0, s); // prevents negative value
    noStroke();
    fill("black");
    ellipse(x, y, s); // face

    fill("red");
    ellipse(x - o, y, 25); // right eye
    ellipse(x + o, y, 25); // left eye

    fill('yellow');
    stroke("red");
    strokeWeight(4);

   
    rect(x, y + o, mouthSize, mouthSize/2, 10); // mouth 










}





