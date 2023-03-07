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
let speedY = 7;
let speed = 1;
let playingGame = true;
let startScreen = false;
let succedScreen = false;
let failedScreen = false;

function draw() {
  clear();
  ufoShip(ufoX, ufoY);
  ufoX = ufoX + thrustX;
  ufoY = ufoY + thrustY;

  let playingGame = true;
  if (playingGame) {
    if (keyIsDown(32)) {
      speed = speed + 1;
    }
  }
}

if (isGameActive) {
  if (keyIsDown(38)) {
  } else {
  }
}
console.log(velocity);
