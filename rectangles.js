let r, g, b = 0;

function setup() {
  createCanvas(800, 800);
  strokeWeight(5); 
}

function draw() {
  frameRate()
  background(100, 100, 100, 100);
  for(i = 0; i < 1; i++) {
    stroke(random(255), random(255), random(255))
    noFill()
    const rectWidthStatic = random(600);
    const rectHeightStatic = random(600);
    const rectWidthMouse = random(300);
    const rectHeightMouse = random(300);
    const rectMidX = (width/2) - (rectWidthStatic/2);
    const rectMidY = (height/2) - (rectHeightStatic/2);
    const offsetX = random(-40, 40);
    const offsetY = random(-40, 40);
    rect(rectMidX + offsetX, rectMidY + offsetY, rectWidthStatic, rectHeightStatic);
    rect(mouseX + offsetX, mouseY + offsetY, rectWidthMouse, rectHeightMouse);
  }
}