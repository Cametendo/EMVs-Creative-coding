let img;

function preload() {
    img = loadImage("Images/monitoring-miku.png");
}

function setup() {
    createCanvas(720, 400);
    image(img, 0, 0, 300, 300);
}