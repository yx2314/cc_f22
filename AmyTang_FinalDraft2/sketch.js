var pic;
var name;
var yPos;
var space;
var jobArray;
var space2;

//preload pictures
function preload(){
  pic = loadImage('Turing.jpeg');
  profile = loadImage('Profilepic.jpeg');
}

//set up
function setup() {
  createCanvas(450, 600);
  firstName = "Alan ";
  lastName = "Turing";
  yPos = 250;
  textPos = 280;
  space = 13.5;
  space2 = 55;
  jobArray = ["mathematician", 
              "computer scientist", "logician"];
  infoArray =["Born: 23/06/1912", "Death: 07/06/1954", "Education Experiences:","King's College, London","Princeton University"]
}

function draw() {
  background(0);
  image(pic,0,0,450,250);

  //Background
  noStroke();
  fill(255)
  arc(400,yPos,250,250,PI,TWO_PI);
  arc(250,yPos,200,150,PI,TWO_PI);
  arc(100,yPos,250,80,PI,TWO_PI);
  rect(0,yPos,450,100);
  
  //ProfilePic
  image(profile,340,140,105,105);
  stroke(255);
  strokeWeight(2);
  fill(120,180,50);
  rect(370,230,45,23,20);
  
  fill(255);
  strokeWeight(1);
  textAlign(CENTER)
  textFont("Helvetica",13);
  text("PRO",393,246)
  
  //name
  fill(0);
  textStyle(BOLD);
  textAlign(RIGHT);
  textFont("Bebas Neue",30);
  text(firstName+lastName,width-15,textPos);

  //text for job
  fill(180);
  var jobPos = textPos+15;
  for (var i=0; i<=2; i+=1){
    var job = jobArray[i];
    jobPos += space;
    textFont("Roboto Condensed",14);
    text(job,width-15,jobPos);
  }
  
  //background2
  noStroke();
  fill(0,100,180)
  quad(0,yPos,300,yPos+80,230,height,0,height);
  
  //left: background&text;
  textAlign(CENTER);
  textFont("Roboto Condensed", 18);
  var roundPos = textPos-15;
  for (var j=0; j<=4; j+=1){
    var info = infoArray[j];
    roundPos += space2;
    fill(255);
    rect(20,roundPos,200,35,30);
    fill(0);
    text(info,120,roundPos+23);
  }
  
  //right: motto & title
  fill(255);
  textAlign(RIGHT);
  textWrap(WORD);
  textFont("Alex Brush",24);
  text("Those who can imagine anything, can create the impossible.",285,380,150)
  textFont("Roboto Condensed", 15)
  text("—— Father of Modern Computer Science & AI, Alan Turing", 285,520,150)
  
  textAlign(LEFT);
  textFont("Helvetica",50);
  text("“", 300,510)
  fill(0);
  text("”",210,285);
  
  
  //follow & check his work
  rect(20,260,60,25,30);
  rect(90,260,120,25,30);
  fill(255);
  textFont("Roboto Condensed", 15);
  text("Follow",32,278);
  text("Check His Works",100,278);
  
  //citations
  //Frank, Adam. “Setting the Record Straight for Alan Turing.” NPR, NPR, 6 Jan. 2015, https://www.npr.org/sections/13.7/2015/01/06/375356142/setting-the-record-straight-for-alan-turing.
  
  //“Alan Turing.” Queer Portraits in History, https://www.queerportraits.com/bio/turing.
  
}