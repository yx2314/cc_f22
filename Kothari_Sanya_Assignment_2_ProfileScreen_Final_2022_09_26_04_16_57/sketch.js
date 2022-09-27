//Sanya Kothari


var x = 110
var y = 150

var a = 90
var b = 0.35

var name = "John von Neumann"

var img;
function preload(){
  img = loadImage("JohnvonNeumann.png");}
  
 console.log("Image loaded.");

function setup() {  createCanvas(450, 550);
                  
 textFont("Trebuchet MS");   
                  
}

function draw() {  background(170,210,220);

noStroke();                 
fill(210,250,260);                 rect(30,30,390,490); 


strokeWeight(1);
stroke(125);
ellipse(x,y,x,x);              
 
stroke(30,130,90,80);                 
line(180,210,180,90);    line(45,225,400,225);
                 
noStroke();
fill(0,65,90);
   textSize(25);
  text(name,120,72);                    
  
  //rect 1               
  stroke(50,150,90);
fill(70,182,193,90);    
  strokeWeight(0.35);               
  rect(200,a,200,20);  

 //rect 2                
strokeWeight(b);               
rect(200,a+25,200,20);

//rect 3                 
strokeWeight(b);               
rect(200,a+50,200,20);  

 //rect 4                
strokeWeight(b);               
rect(200,a+75,200,20);                 
 
 //rect 5                
strokeWeight(b);               
rect(200,a+100,200,20); 

//rect 1                 
textSize(12);                 
fill(0,110,150);               
text('Hungarian-American',240,a+15);
 
 //rect 2                
 text('He/Him',240,a+40)                
                 
 //rect 3                
 text('Married, Father of 1',240,a+65)
                 
 //rect 4                
 text('December 28, 1903',240,a+90) 
                 
 //rect 5                
 text('Capricorn',240,a+115)                
 
stroke(50,150,90);                 
fill(0,115,140,200);                
rect(55,235,105,30);                 
rect(170,235,105,30); 
rect(285,235,105,30);   

fill(240);                 
text('72 posts',85,255);
text('98 followers',190,255);
text('102 following',300,255);  

                 
 fill(219, 248, 250);                
rect(50, 290, 169, 100, 20);                
                 
rect(50, 400, 350, 105, 20); 
                 
rect(230, 290, 170, 100, 20); 
                                 
                 
 fill(0);
 stroke(0,250,280)                
 textSize(12);                
 text('Education',61,310);  
 text('Work',61,419);              text('Hobbies',243,310);              
 
 
strokeWeight(b);                
 fill(0,60,100);
 stroke(0,200,230)                
 textSize(9);                
 text('Pázmány Péter University',60,335);   
                 
fill(0,60,100);               
 textSize(9);                
 text('University of Berlin',60,345);                  

fill(0,60,100);               
 textSize(9);                
 text('ETH Zürich',60,355);                  
                 
 fill(0,60,100);
 stroke(0,250,280)                
 textSize(9);                
 text('Logic, mathematics, physics, statistics',236,335);
                 
fill(0,60,100);
 stroke(0,250,280)                
 textSize(9);                
 text('economics, computer science',236,345);   
                 
fill(0,60,100);
 stroke(0,250,280)                
 textSize(9);                 
 text('theoretical biology',236,355);
                 
 fill(0,60,100);
 stroke(0,250,280)                
 textSize(9);                
 text('Developed a logical design for computers that paid attention to such concerns as',60,435);            
                 
                 
 fill(0,60,100);              
 textSize(9);                
 text('data storage and the processing of instructions. My design "von Neumann',60,445);
  
fill(0,60,100);                
 textSize(9);                
 text('architecture" became the basic concept for most computers. The design model is',60,455);                 
                 
                 
 fill(0,60,100);               
 textSize(9);                
 text('for a stored-program digital computer that uses a processing unit and a single',60,465);                 

fill(0,60,100);                
 textSize(9);                
 text('separate storage structure to hold both instructions and data.',60,475);                  
 
 // work arrow               
strokeWeight(1.7);      
 stroke(0,180,210);                
 line(385, 489, 380, 487);                
                 
strokeWeight(1.7);     
 stroke(0,180,210);                
 line(385, 489, 380, 493);
                 
// hobbies arrow                
 strokeWeight(1.7);     
 stroke(0,180,210);                
 line(385, 375, 380, 373);                
                 
strokeWeight(1.7);     
 stroke(0,180,210);                
 line(385, 375, 380, 379);                
 
 // education arrow 
 strokeWeight(1.7);      
 stroke(0,180,210);                
 line(203, 375, 198, 373);                
                 
strokeWeight(1.7);      
 stroke(0,180,210);                
 line(203, 375, 198, 379);  
                 
 //more texts
 noStroke();                
 fill(0,180,210);               
 textSize(11.8);                
 text('more',168,379);                
                 
  noStroke();                
 fill(0,180,210);               
 textSize(11.8);                
 text('more',350,379);                
 
 noStroke();                
 fill(0,180,210);               
 textSize(11.8);                
 text('more',350,493);
                 
 //https://en.wikipedia.org/wiki/John_von_Neumann                 
 img.resize(110,110);                
 image(img,55, 95);               
 
                 
}