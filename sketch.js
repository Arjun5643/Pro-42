var hr,mn,sc

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
  scAngle = map(sc, 50, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  hrAngle = map(hr, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}