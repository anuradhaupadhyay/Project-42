var ho, hoAngle;
var mi, miAngle;
var se, seAngle;

function setup() {
  createCanvas(800,800);


}

function draw() {
  background(0);

  ho = hour();
  mi = minute();
  se = second();

  angleMode(DEGREES);

  hoAngle = map(ho, 0, 60, 0, 360);
  miAngle = map(mi, 0, 60, 0, 360);
  seAngle = map(se, 0, 60, 0, 360);



  push();
  translate(400, 400);
  strokeWeight(5);
  stroke(0,0,255);
  rotate(seAngle - 90);
  line(0,0,100,0);
  noFill();
  arc(0,0,210,210,-seAngle,0)
  pop();

  push();
  translate(400, 400);
  strokeWeight(7);
  stroke(255,0,0);
  rotate(miAngle - 90);
  line(0,0,200,0);
  noFill();
  arc(0,0,410,410,-miAngle,0)
  pop();

  push();
  translate(400, 400);
  strokeWeight(9);
  stroke(0,255,0);
  rotate(hoAngle - 90);
  line(0,0,50,0);
  noFill();
  arc(0,0,110,110,hoAngle,0)
  pop();


  drawSprites();
}