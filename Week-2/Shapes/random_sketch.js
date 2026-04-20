const amountOfFormPoints = 5;
const stepSize = 1;
const initRadius = 150;
// const mouseAttraction = 1; let centerX, centerY;
let x = [];
let y = [];
posX = 1;
posY = 1;
let movement_angle;

let xDirection = -1;
let yDirection = -1;

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
  movement_angle = random(360);

  // styling
  stroke(0.75);
  strokeWeight(5);
  noFill();
}

function draw() {
  background(255, 255, 255, 10);
  // float towards random position

  if (centerX > windowWidth) {
    xDirection = -1;
  }
  if (centerX < 0) {
    xDirection = 1;
  }
  if (centerY > windowHeight) {
    yDirection = -1;
  }
  if (centerY < 0) {
    yDirection = 1;
  }
  posX = posX + 2 * xDirection;
  posY = posY + 2 * yDirection;

  centerX = windowWidth / 2 + posX;
  centerY = windowHeight / 2 + posY;
  console.log(xDirection);

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
  // or use endShape(CLOSE); but result is different
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlPoint
  curveVertex(
    x[amountOfFormPoints - 1] + centerX,
    y[amountOfFormPoints - 1] + centerY,
  );
  endShape();
}
