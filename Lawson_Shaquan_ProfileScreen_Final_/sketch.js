//Shaquan Lawson
  
  var img;
   
 function preload() {
  img = loadImage("Alan/alan.jpg"); 
}

  //words on profile

  let name = ["Alan Turing, 23", "Mathematician", "Princeton University", "less than one mile away", "I am an English mathematician and computer scientist looking to decode someone's heart. I am also a former marathon runner, so I won't let you get away that easy.", "Nope", "Save", "Like"];
  
  let hey = "How Many Times Page was Visited"

  let circleP = 10;

  var x = 655;
  var y = 80;



function setup() {
  createCanvas(500, 700);
  textFont("Georgia");
}

  function draw() {
  
  
  //rect(0,0, 500, 350);
    
  fill(255)
    
  fill(0, 196, 255)  
  
  rect(30, 40, 450, 720)
   
  //color for circle on left (orange)
  fill(256, 128, 0);
 
  //orange circle to left
  let str = '82';
  let diameter = float(str);
  ellipse(100, 655, diameter, diameter);
  
 
  ellipse(100, x, y, y);
  noStroke();
  fill(66, 138, 245);
 
  ellipse(250, x, y, y);
  fill(89, 255, 0)
  
  ellipse(400, x, y, y);
  fill(256, 128, 0);
  noStroke(0)

  //name under picture
  fill(0);
  textSize(25);
  text(name[0], 40, 380);
  
  //bio
  
  //Profession
  fill(255);
  textSize(15);
  text(name[1], 40, 420);
   
  textSize(20)
  
  //Like, Dislike, Etc
  text(name[5], 80, 660)
  text(name[6], 230, 660)
  text(name[7], 380, 660)   
    
  //Education
  textSize(15)
  text(name[2], 40, 400);
  
  //distance
  textSize(15);
  text(name[3], 40, 440);
  
  //like, dislike, etc.
   
  fill(255)  
  textSize(22)
  text(name[4], 40, 470, 400)

    
  image(img, 0, 10, 500, 349);
  
  console.log(hey);
  }