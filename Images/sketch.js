let img;

function preload() {
    img = loadImage("Images/monitoring-miku.png");
}

function draw() {
	
}

function setup() {
    createCanvas(800, 800)
    image(img, 0, 0, mouseX, mouseY);
	

loadPixels(); // loads pixels from canvas 
img.loadPixels(); // loads pixels from img
img.updatePixels(); // updates the img pixels 
updatePixels(); // updates the canvas pixels
}


