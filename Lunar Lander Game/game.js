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
let speedY = 0;
let playingGame = true;
let startScreen = false;
let succedScreen = false;
let failedScreen = false;

function draw() {
  clear();
  ufoShip(ufoX, ufoY);

  playingGame = true;
  if (playingGame) {
    if (keyIsDown(32)) {
      speedY = speedY + 1;
    }
  }
}
function keyIsDown() {}

if (isGameActive) {
  if (keyIsDown(38)) {
  } else {
  }
}
console.log(velocity);
