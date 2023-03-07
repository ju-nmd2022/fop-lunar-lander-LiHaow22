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
  velocity = 0.6;
  mass = 100;
  accelerate = mass * 0.01;
}

function ufoShip(x, y) {
  //Landing gear (triangles)
  //left
  fill(217, 240, 255);
  noStroke();
  triangle(x - 50, y + 10, x - 80, y + 10, x - 75, y + 70);
  //right
  triangle(x + 50, y + 10, x + 80, y + 10, x + 75, y + 70);
  //middle
  triangle(x - 15, y + 10, x + 15, y + 10, x, y + 80);

  //Landing gear (circles/balls)
  //left
  fill(255, 255, 255);
  ellipse(x - 75, y + 70, 10);
  //right
  ellipse(x + 75, y + 70, 10);
  //middle
  ellipse(x, y + 80, 10);

  //Glass dome
  fill(255, 255, 255);
  stroke(217, 240, 255);
  ellipse(x, y, 90);

  //"metal" body/hull
  fill(167, 187, 236);
  stroke(255, 255, 255);
  ellipse(x, y + 20, 200, 50);
  ellipse(x, y + 15, 200, 50);
  fill(255, 255, 255);
  strokeWeight(2);
  stroke(217, 240, 255);
  ellipse(x, y, 110, 20);

  //lines on top of hull
  stroke(255, 255, 255);
  line(x, y + 15, x, y + 30);
  line(x - 40, y + 12, x - 60, y + 25);
  line(x + 40, y + 12, x + 60, y + 25);
  line(x - 60, y, x - 80, y + 2);
  line(x + 60, y, x + 80, y + 2);
}
function draw() {
  clear();

  velocity += accelerate;
  yVal += velocity;
  ufoShip(width / 2, yVal, mass, mass);
  if (yVal > height - mass / 2);
  if (keyIsDown(32)) {
    velocity = 3;
    velocity = velocity - 0.3;
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

console.log(velocity);
