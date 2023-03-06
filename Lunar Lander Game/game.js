function setup() {
  createCanvas(800, 600);
  background(0);
}

function ufoShip(x, y) {
  fill(255, 255, 255);
  rect(x, y, 100, 100);
}
let x = 100;
let y = 100;
function draw() {
  clear();
  ufoShip(x, y);
  //y = y + 5;
  //x = x + 5;
}
