//Lucy Hong

//Creating an Insta profile screen for Grace Hopper

//Feed X-position
var xPos1;
var xPos2;
var xPos3;
var xPos4;
var xPos5;
var xPos6;
  
//Feed Y-position
var yPos1;
var yPos2;
var yPos3;
var yPos4;
var yPos5;
var yPos6;
  

//variables for our width and height
var size;

let name=["Grace_","Hopper22"];

let emoji=["💻","➕➖➗","🇺🇸","🤓","🦅"];

//Declaring our image variable
var Img;
var Img2;
var Img3;
var Img4;
var Img5;
//load in the images before the program starts
function preload(){
  
  
  // Assign a 'value' to our variable which means we are going to get the image and connect it to our variable
  Img=loadImage("Images/My project (1).png");
  Img2=loadImage("Images/Piano.jpg");
  Img3=loadImage("Images/Insta3.jpeg");
  Img4=loadImage("Images/Insta4.jpeg");
  Img5=loadImage("Images/Bug.jpeg");
  //check if this works
  console.log("Image loaded");
  
   
   
}





function setup() {
  createCanvas(400, 400);
  
   // Assign values of rect
  xPos0=0;
  xPos1=100;
  xPos2=200;
  xPos3=300;
  yPos=300;


  
  size = 100;
  
  //Use the fuction imagemode() to change where the image is generated from
  imageMode(CORNER);
  
    //Changing the font
  textFont("Tahoma");
  
}

function draw() {
  background(20);
  
 
  
  // Grace Hopper's insta feed 
  
  //rect 1
  
  image(Img2,xPos1,yPos,size,size);
 
  
  //rect 2
  
  image(Img3,xPos2,yPos,size,size);
  
  //rect 3
  
  image(Img4,xPos3,yPos,size,size);
  
  //rect 4
  image(Img5,xPos0,yPos,size,size);
  
  
  //profile image
  fill(255,200,200);
  ellipse(100,90,130,130);
   //use resize to make sure the pic fits
  Img.resize(210,165);
  //put the images in the sketch!
  image(Img,-10,10);
  
  
  
  
  //Username
fill(225);
text(name[0],210,50);
text(name[1],253,50);
  
  //Profile description
  fill(225);
text("12/09/1906 - 01/01/1992",30,190);
text(name[0],30,210);
text("Hopper",75,210);
text(emoji[3],125,210);
text("Programmer of Harvard Mark I",30,230);
text("Navy",30,250);
text(emoji[4],70,250);
text("Yale Alumni 1934",30,270);

  //Follwers
  textSize(14);
  text(75,220,90);
  text("Posts",210,110);
  text(594,280,90);
  text("Followers",260,110);
  text(434,340,90);
  text("Following",330,110);
  
  //button
  fill(0,0,255.250);
  rect(190,130,90,20);
  fill(225);
  text("Follow",215,145);
  fill(125);
  rect(300,130,90,20);
  fill(225);
  text("Message",320,145);
    
}

 //Citations
   //Editors, Biography.com. “Grace Hopper.” Biography.com, A&amp;E Networks Television, 10 May 2021, https://www.biography.com/scientist/grace-hopper. 
  //Norwood, Edited By Arlisha R. “Grace Hopper.” National Women's History Museum, 2017, https://www.womenshistory.org/education-resources/biographies/grace-hopper. 
  //“Grace Murray Hopper (1906-1992): A Legacy of Innovation and Service.” YaleNews, 18 Nov. 2021, https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service. 
  //Amazon.com: Piano and Keyboard Note Chart, Use behind the Keys, Ideal ... 2019, https://www.amazon.com/Keyboard-Note-Chart-Behind-Piano/dp/B081TWB8PF. 