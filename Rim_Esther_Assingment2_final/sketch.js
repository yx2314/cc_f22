//declare + assign 
var name = "Name: Annie Easley";
//string value 
var age = "Age: 22";
var occupation = "Occupation: Computer Scientist + Mathematician";
//float value 
var rectX = 30.5;
var rect2X = 160.5;
//integer value 
var rectY = 200;
var word = "Followers: 2.5M";
var words = "Following: 2000K";

function setup() {
  createCanvas(400, 400);
  textWrap (WORD);
  textSize (15);
  textFont ("Palentino");
  var img; 
}
function preload(){
  //this is where the image will go in 
   img = loadImage("images/annie_easley.jpeg");
 
  //check if this works 
  console.log("Image loaded.");
}

function draw() {
  background(250);
  //color of the profile
  c = color(230, 175, 175);
  fill(c);
  stroke(51);
  strokeWeight (3);
  square (10,10,375);
  rect (rectX,rectY,115,40);
  text (word,38,225);
  rect (rect2X,rectY,120,40);
  text (words,165,225);
  d = color(0,0,0);
  fill(d);
  noStroke();
  text (name,220,55); 
  text (age,220,77);
  text (occupation,220, 85, 150);
  textWrap (WORD);
  text ("Fun Fact: I helped train African Americans to take the \n voting test in Alabama before the civil rights law was \n passed in the 1960s", 30,270);
  textWrap (WORD);
  text ("Another Fun Fact: I was the founding member and \n on-term president of the NASA Lewis Ski Club", 30,340);
  
  //image 
  img.resize (165,165);
  image (img,30,25);
  
}