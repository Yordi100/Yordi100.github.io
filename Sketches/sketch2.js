function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(120);
  line(65, 0, 65, 300);
  line(140, 0, 140, 300);
  line(220, 0, 220, 300);
  
  if (mouseX > 0 && mouseX <= 65) {
      background(150, 0, 0)
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 20, 20);

  }
  
  else if (mouseX > 65 && mouseX <= 140) {
    background(0, 0, 155)
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
  }
  
  else if (mouseX > 140 && mouseX <= 220) {
    background(155, 0, 155)
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 60, 60);
  }
  else if (mouseX > 220 && mouseX <= 300) {
    background(155, 300, 155)
    fill(0, 100, 200);
    ellipse(mouseX, mouseY, 80, 80);
  }
  
}







