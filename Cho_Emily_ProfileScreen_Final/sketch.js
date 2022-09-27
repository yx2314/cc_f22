//Emily Cho

//declare
let x = 27.5;
let y = 15;
let z = 25;
let a = 170;
let height = 600;
let b = height/2;

var xPos1;
var xPos2;
var xPos3;
var yPos;
var size;

var img;

function preload(){
  
  img=loadImage("Images/Bill.jpeg")
  
  console.log("Image loaded.")
  
  
}

//function preload() {
//img=loadImage("Bill.jpg");  
  

function setup() {
  createCanvas(400, 600);

  imageMode(CENTER);
  
textWrap(WORD);
  
xPos1=130;
xPos2=width/2;
xPos3=270;
yPos=560;

size=60;
  
  
textFont("Arial");  
  

}

function draw() {
  background(255);

//picture goes here
rect(0,0,width,b);
  img.resize(500,400);
image(img,width/2,170);

//description box
  fill (230);
  rect(0,300,width,height/2)
  
//Name
fill(0);
textSize(x);
text("William, 66",z,340);


//Description (Job, Uni, how far)
fill(a);
stroke(255,0);
textSize(y);
text("Co-founder, Microsoft",z,370);
text("Harvard University, Dropout", z,390);
text("Seattle, Washington; Currently in California", z,410);
  
//divider
stroke(a);
line(0,425,400,425);
  
//bio
noStroke();
text("Call me Bill :) American computer programmer and entrepreneur who cofounded Microsoft Corp, the largest personal-computer software company ♏🍔🐶 Recently divorced and ready for something new<3 Father of 3, net worth of over $100",20,435,375);

//arrow
fill(250,70,120);
  ellipse(350,b,50,50);
fill(255);
  beginShape();
    vertex(350,b-15); //top left corner
    vertex(345,b);
    vertex(340,b);
    vertex(350,b+15);
    vertex(360,b);
    vertex(355,b);
    vertex(350,b-15); //top right corner
  endShape(CLOSE);
 
  
//options
ellipse(xPos1,yPos,size,size)
ellipse(xPos2,yPos,size,size)
ellipse(xPos3,yPos,size,size)
  
noStroke();
  textSize(40)
text("❎",110,540,375);  
  text("❤️",250,540,375); 
  text("💬",180,540,375);

  
}