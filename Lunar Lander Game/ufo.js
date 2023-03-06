background(0, 7, 45);
//let x = 200;
//let y = 200;

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

  /*push();

  translate(200, 200);
  rotate(3.14);
  translate(-200, -200);
  arc(x, y - 4, 90, 90, 0, PI);

  pop();
  */
}

let x = 200;
let y = 200;
function draw() {
  clear();
  ufoShip(x, y);
  //y = y + 5;
  //x = x + 5;
}
