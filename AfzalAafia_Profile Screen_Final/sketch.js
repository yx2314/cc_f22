var name = "Margaret Hamilton"
var x=30
var y=50.5


//Inserting image of Margaret Hamilton
var img;

function preload(){
  img= loadImage("Image/margaret.jpeg");
  
}

function setup() {
  createCanvas(400, 400);
  
  //resize the image
  img.resize (120, 200, 120, 200)
}


function draw() {
  background(190, 100, 140);
  strokeWeight(3)
  stroke(0)
  fill(100, 150, 120)
  textSize(30)
  text(name, 70, y)
  textFont("Times New Roman")
  
  fill(190, 80, 130)
  rect(245, 65, 250, 210)
  
  fill(190, 80, 130)
    rect(20, 70, 210, 120)
  
  fill(190, 80, 130)
  rect(20, 285, 360, 90)
  
  image(img, 260, 70, 130)
  
  //General info about her
  strokeWeight(2)
  stroke(0)
  fill(100, 150, 120)
  textSize(17)
  text("Age: 86", x, 90)
  text("DoB:August 17, 1936", x, 110)
  text("Nationality: American", x, 130)
  text("Education: University of Michigan, Earlham College", x, 140, 230, 100)
  text("Known for: leading the software engineering division of the MIT Instrumentation Library which helped develop NASA's Apollo Program", x, 300, 350, 100)
  
}