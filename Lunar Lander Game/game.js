let ufoX = 100;
let ufoY = 100;
let speedY = 6;
let yVal;
let velocity;
let accelerate;
let mass;
let playingGame = true;
let startScreen = false;
let succedScreen = false;
let failedScreen = false;
// Gravity thanks to https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm
function setup() {
  createCanvas(800, 600);
  background(0);
  yVal = 0;
  velocity = 0;
  mass = 100;
  accelerate = mass * 0.01;
}

function ufoShip(x, y) {
  fill(255, 255, 255);
  rect(x, y, 100, 100);
}
function draw() {
  clear();
  if (ufoY >= 500) {
    velocity += accelerate;
    yVal += velocity;
    ufoShip(width / 2, yVal, mass, mass);
    if (yVal > height - mass / 2);
  }
}
function mousePressed() {
  yVal = 0;
  velocity = 0;
}

/*function draw() {
  clear();
  ufoShip(ufoX, ufoY);
  ufoY = ufoY + speedY;

  playingGame = true;
  if (playingGame) {
    if (keyIsDown(32)) {
      speedY = speedY - 1;
    }
  }
}
NEWER
function draw() {
  playingGame = true;
  if (playingGame) {
    if (keyIsDown(32)) {
      velocity = velocity - 1;
    }
  }
}
*/

console.log(speedY);
