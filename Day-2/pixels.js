let img;

function preload() {
    img = loadImage("Images/monitoring-miku.png");
}

function setup() {
    createCanvas(600, 600);
    pixelDensity(1);
}

function draw() {
    background(0);
    image(img, 100, 100, 400, 400);
    /* img.loadPixels();
    for (let i = 0; i < img.pixels.length; i += 4) {
        let red = img.pixels[i + 0];
        let green = img.pixels[i + 1];
        let blue = img.pixels[i + 2];
        let alpha = img.pixels[i + 3];
        img.pixels[i + 0] = red;
        img.pixels[i + 1] = green;
        img.pixels[i + 2] = blue;
        img.pixels[i + 3] = alpha;
    }
    img.updatePixels(); */
    img.loadPixels();
    for ( let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (x + y * width) * 4;
            img.pixels[index + 0] = mouseX;
            img.pixels[index + 1] = mouseY;
            img.pixels[index + 2] = y;
            img.pixels[index + 3] = 100;
        }
    }
    img.updatePixels();
}