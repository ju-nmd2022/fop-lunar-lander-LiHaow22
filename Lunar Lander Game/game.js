function setup() {
  createCanvas(800, 600);
  background(0);
}

function ufoShip(x, y) {
  fill(255, 255, 255);
  rect(x, y, 100, 100);
}
let ufoX = 100;
let ufoY = 100;
let thrustY = 2;
function draw() {
  clear();
  ufoShip(ufoX, ufoY);
  //y = y + 5;
  //x = x + 5;
}

if (playingGame) {
  if (keyIsPressed(32)) {
    thrustY = -1;
  }
}
