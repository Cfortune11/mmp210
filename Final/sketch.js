// Board setup — you may need to change the port
// to the port you noted when uploading Firmata
var b = p5.board('/dev/cu.usbmodem1421', 'arduino');
 
// Draw ellipses with a button
 
var w = window.innerWidth,
    h = window.innerHeight - 100,
    button, potent;
 
function setup() {
  // Initialize button, read pin and start read function, 
  // which will change p.val when the read val changes
  button = b.pin(9, 'DIGITAL', 'INPUT');
  button.read();
 
  // Initialize potentiometer here VRES stands for variable
  // resistor, which means you could use this code for all sorts
  // of resistor sensors, like flex or force sensors
  potent = b.pin(0, 'VRES');  
  potent.read();
 
  console.log(button, potent); // check out the console to see what these objects have available
 
  // Create the base canvas
  createCanvas(w, h);
  noStroke(); // this p5 function keeps our circles from being outlined
 
  // Add instructions
  var innerStr = '<p style="font-family:Arial;font-size:12px">'
  innerStr += 'Press the button to draw. Turn the knob for size.</p>';
 
  createDiv(innerStr);
}
 
function draw() {
  // Create ellipse and draw it if button.val = 1;
  var frameW = w,
      frameH = h,
      r      = potent.val/2; // using the potentiometer to set the size
   
  if (button.val) {
    fill(Math.random() * 255, Math.random() * 255, Math.random() * 255); // this is what produces the clown barf effect
    ellipse(Math.random() * frameW, Math.random() * frameH, r, r);
  }
}