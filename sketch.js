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
    const rectWidth = random(300);
    const rectHeight = random(300);
    const rectMidX = (width/2) - (rectWidth/2);
    const rectMidY = (height/2) - (rectHeight/2);
    const offsetX = random(-40, 40);
    const offsetY = random(-40, 40);
    rect(rectMidX + offsetX, rectMidY + offsetY, rectWidth, rectHeight);
    rect(mouseX + offsetX, mouseY + offsetY, rectWidth, rectHeight);
  }
}