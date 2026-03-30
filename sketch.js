let r, g, b = 0;

function setup() {
  createCanvas(800, 800);
  strokeWeight(5);
  frameRate(5)
  background(100, 100, 100, 1);
  for(i = 0; i < 10; i++) {
    stroke(random(255), random(255), random(255))
    noFill()
    square(random(width), random(height), random(300));
  }
}

function draw() {
  frameRate(5);
}
