// Use with this Arduino sketch: InClass_Wk7_Lab2_Exercise1a
// https://create.arduino.cc/editor/enickles/236df200-b9f0-44bb-b69b-c7dd81a74a70/preview
// using 3 pots

var serial; // variable to hold an instance of the serialport library
var portName = "COM12"; // fill in your serial port name here
var locH; // location of the circle
var locV; // location of the circle
var circleColor = 225; // color of the circle

function setup() {
    createCanvas(640, 480); // make canvas
    smooth(); // antialias drawing lines
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose);
    serial.open(portName); // open a serial port
}

function draw() {
    var r= 100
    var g= locH
    var b= locV  // console.log(locH, locV);
   // background(0); // black background
    fill(r, g, b); // fill depends on the button
    ellipse(locH, locV, 50, 50); // draw the circle
}

function serialEvent() {
    // read a string from the serial port until you get carriage return and newline:
    // here is also where you change what you want to see, 
    // you can change how you end the line in the Arduino code
    var inString = serial.readStringUntil('\r\n');
    //print(inString);

    //check to see that there's actually a string there:
    if (inString.length > 0) {
        var sensors = split(inString, ','); // split the string on the commas
        if (sensors.length > 2) { // if there are three elements
            locH = map(sensors[0], 0, 1023, 0, width); // element 0 is the locH
            locV = map(sensors[1], 0, 1023, 0, height); // element 1 is the locV
            circleColor = map(sensors[2], 0, 1023, 0, 255); // element 2 is the circleColor
        }
    }
}

function serverConnected() {
    console.log('connected to server.');
}


function portOpen() {
    print('the serial port opened.');
}

function portClose() {
    console.log('The serial port closed.');
}

function serialError(err) {
    print('Something went wrong with the serial port. ' + err);
}
