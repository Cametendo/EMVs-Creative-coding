let x, y = 0;

function setup() {
  createCanvas(800, 800);
  strokeWeight(5); 
  background("gray");
}


function draw() {
  for (let x = 0; x <= width; x += 40) {
    for (let y = 0; y <= height; y += 40) {
        square(x, y, 40);
    }
  }
  line(width, height, -800, -800); // :3
}