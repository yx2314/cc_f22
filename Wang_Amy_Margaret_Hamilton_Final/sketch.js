var img; 

var x1 = 0;//x-corrdinate of bullet
var x2 = 0;//x-corrdinate of content
var y1 = 0;//y-corrdinate of bullet
var y2 = 0;//y-corrdinate of content

var L = 10.0;//L is linespacing between each line

var ts = 12.0;//ts is text size

var name;
var reference;
var link;

var bb1;//bb is bullet point
var bb2;
var bb3;
var bb4;
var bb5;

var cot1;//cot is the content of corrseponding bullet point
var cot2;
var cot3;
var cot4;
var cot5;
 
function preload() {
  img1 = loadImage("Margaret.jpg"); 
  img2 = loadImage("Profile_Background.jpg");
  //reference of the background: https://www.freepik.com/premium-vector/abstract-texture-background-white-grey-technology-geometric-technology-modern_5440552.htm
  img3 = loadImage("Margaret_Hamilton_1995.jpg");
  
  //reference of the 2 portraits: https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)
}

function setup() {
  createCanvas(400, 400);

  //In setup(), all values can be modified
  x1 = 40;
  x2 = x1+30;
  
  y1 = 200;
  y2 = y1+20;
  
  L = 40;

  ts = 12.0;
  
  name = "Margaret Hamilton";
  
  reference = "Reference: "
  link ="https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)";
  
  bb1 = "Born:"
  bb2 = "Nationality:"
  bb3 = "Occupation:"
  bb4 = "Education Background:"
  bb5 = "Working Background:"
  
  ct1 = "August 17, 1936";
  ct2 = "American"
  ct3 = "Software Engineer";
  ct4 = "University of Michigan";
  ct5 = "Developed board flight software for Apollo program";
}

function draw() {
  background(220);
  
  image(img2,0,0, 400, 400);
  image(img1, x1-20, y1-180, 150, 150);//set the portrait photo
  image(img3, x1+160, y1-100, 160, 200);
  
  textStyle(BOLD);
  textFont("Times New Roman");
  textSize(26);
  text(name, x1+132, y1-180+25);
  
  textSize(ts);
  textFont("Arial");
  
  textStyle(ITALIC);
  textWrap(WORD);
  text(link, x1+132, y1-180+60);
  
  textStyle(BOLD);
  text(bb1, x1, y1);
  text(bb2, x1, y1+L);
  text(bb3, x1, y1+2*L);
  text(bb4, x1, y1+3*L);
  text(bb5, x1, y1+4*L);
  
  textStyle(NORMAL);
  text(ct1, x2, y2);
  text(ct2, x2, y2+L);
  text(ct3, x2, y2+2*L);
  text(ct4, x2, y2+3*L);
  text(ct5, x2, y2+4*L);
}