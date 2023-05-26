

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  
  //The Ground
  noStroke();  //no outline
  fill('green'); //make the ground green
  rect(0,400,windowWidth,100); //draw a rectangle 


  //The House
  fill('darkred'); //fill the color dark red
  stroke('black'); //make the stroke color black
  rect(50,200,220,200); //draw a rectangle

  //Windows
  fill('lightblue'); // fill the shape with lightblue
  strokeWeight(10);
  stroke('black'); //make stroke color black
  rect(80,250,50,50); //draw a rectangle 
  rect(180,250,50,50); //draw a rectangle

  //Triangle
  fill('grey'); //make fill color grey
  triangle(50,200, 100,100,270,200); // draw a triangle
//rectangle it is a door
fill('green'); // make the shape green
  rect(134,300,50,100); //draw a rectangle
//rectangle it is the chimney
  fill('grey'); //make shape fill color grey
  rect(50,100,50,100); //draw a rectangle
//rectangle it is part of the tree
   fill('brown'); //make fill color brown
  rect(350,250,50,150); //draw a rectangle
//circle it is the leaves on the tree
   fill('green'); //make fill color green
  ellipse(375,200,150,150);  // draw a circle
//circle it is the sun
   fill('yellow');  //make fill color yellow
  ellipse(30,30,100,100); // draw a circle




  
}