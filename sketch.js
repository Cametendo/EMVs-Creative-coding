let img;

function preload() {
    img = loadImage("Images/monitoring-miku.png");
}

function setup() {
    createCanvas(800, 800)
    image(img, 0, 0, mouseX, mouseY);
}
