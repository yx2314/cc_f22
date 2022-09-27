//Reina Huang
var connections = 500; //integar
var followers = 10.1; //float
var name = 'Alan M. Turing'; //string
var photo;
var back; //profile background
var paper;
var bombe;

function preload(){
  //assign a value to the variable
  photo = loadImage("images/AlanTuring.png");
  back = loadImage("images/background.png");
  paper = loadImage('images/paper.png');
  bombe = loadImage('images/Bombe.png');
}


function setup() {
  createCanvas(450, 900);
  background(249, 245, 235);
  
}

function draw() {
  
  //background photo
  tint(220);
  //filter(BLUR,3);
  imageMode(CORNER);
  image(back,0,0);
  // noStroke();
  // fill(220);
  // rect(0,0,450,140);
  
  //noStroke();
  
  //background block#1
   fill(255, 253, 250);
   rect(10,150,430,200,10);
  
  
  //profile photo
  fill(255);
  noTint();
  ellipse(100,120,130,130);
  imageMode(CENTER);
  photo.resize(133,133);
  image(photo,99,120);  
  
  // fill(220);
  // ellipse(100,120,120,120);
  
  //name
  fill(0);
  textSize(23);
  textFont('Helvetica'); //change textFont
  text(name,40,220);
  
  // current position
  fill(0);
  textSize(17);
  
  
  text('Codebreaker at GC&CS',40,245);
  
  //text('Bletchley Park',100,100); this line just interestly cause error
  
  
  //location
  fill(130);
  textSize(14);
  text('Milton Keynes, Buckinghamshire, England, United Kingdom',40,265);
  
 //followers and connections
  fill(100);
  textSize(15);
  text(followers,40,290);
  
  textSize(14);
  fill(130);
  text('M followers',70,290); 
  
  
  fill(100);
  textSize(15);
  text('· '+connections,150,290);
  
  textSize(14);
  fill(130);
  text('+ connections',185,290);
  
  //message
  fill(28, 56, 121);
  rect(40,310,100,25,15);
  
  fill(255);
  textSize(16);
  text('Message',60,328);
  
   //background block#2
  fill(255, 253, 250);
  rect(10,360,430,530,10);
  
  //Feacture
  fill(0);
  textSize(20);
  text('Featured',40,400);
  
  fill(224, 220, 211,70);
  rect(40,410,300,200,10);
  
  
  fill(130);
  textSize(14);
  text('Article',50,430);
  
  fill(0);
  textSize(15);
  text('On Computable Numbers, with an Applica \n-tion to the Entscheidungsproblem',50,580);
  
  imageMode(CORNER);
  rect(40,435,300,125);
  image(paper,40,435);
  
  fill(90,90);
  ellipse(380,510,40,40);
  fill(255);
  textSize(35);
  text('>',370,520);
  
  stroke(120,50);
  line(10,650,440,650);
  
  //activities
  fill(0);
  textSize(20);
  text('Activities',40,690);
  
  fill(130);
  textSize(14);
  text('Alan M. Turing posted this · 15h',40,710);
  
  rect(40,720,120,120);
  image(bombe,40,720);
  
  fill(28, 56, 121);
  text('#Bombe',40,855);
  
  fill(0);
  textSize(12);
  text('My fellow colleague Knox and I are happy to \nannounce that we have recently developed a \nbroader solution Bombe as an improvement of \nthe Polish Bomba, using crib-based decryption. \n\nI have started working on two papers relate to \noptimize the possibilities of codebreaking through \nmathematical approaches.',170,730)
  
  
  fill(130);
  textSize(14);
  text('623 Comments',340,880); //using his birthday number
}