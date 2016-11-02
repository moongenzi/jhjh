function setup() {
  createCanvas(2000, 1000)
}

function draw() {
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 10, 10);
  noStroke();

}

function keyPressed() {
  var r = random();
  var g = random();
  var b = random();
  
  r = map(r, 0, 1, 0, 255);
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);
  
  background(r, g, b);
  console.log('r' + r);
  console.log('g' + g);
  console.log('b' + b);
  

}