function setup() {
    createCanvas(100, 150);
    background(0, 150, 0);

    ellipse(0, 50, 33, 33);

    push();
    translate(50, 0);
    strokeWeight(10);
    fill(204, 153, 0);
    ellipse(0, 50, 33, 33);
    pop();

    ellipse(100, 50, 33, 33);
    translate(0, 50);

    ellipse(0, 50, 33, 33);

    push();
    strokeWeight(10);
    fill(204, 153, 0);
    ellipse(33, 50, 33, 33);
    
    push();
    stroke(0, 102, 153);
    ellipse(66, 50, 33, 33);
    pop();

    pop();
    
    ellipse(100, 50, 33, 33);
}