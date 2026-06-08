const amountOfFormPoints = 5;
const stepSize = 1;
const initRadius = 150;
const mouseAttraction = 1;
let centerX, centerY;
let x = [];
let y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // inital setup
  centerX = width / 2;
  centerY = height / 2;
  const angle = radians(360 / amountOfFormPoints);
  for (let i = 0; i < amountOfFormPoints; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  // styling
  stroke(0, 75);
  strokeWeight(0.5);
  background(255);
  noFill();
}

function draw() {
  // float towards mouse position
  centerX += (mouseX - centerX) * mouseAttraction;
  centerY += (mouseY - centerY) * mouseAttraction;

  // calculate new points
  for (let i = 0; i < amountOfFormPoints; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
  }

  // first controlPoint
  beginShape();
  curveVertex(x[0] + centerX, y[0] + centerY);

  // only these points are drawn
  for (let i = 0; i < amountOfFormPoints; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }

  // Connect to the first poing again
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlPoint
  curveVertex(
    x[amountOfFormPoints - 1] + centerX,
    y[amountOfFormPoints - 1] + centerY,
  );
  endShape();
}
