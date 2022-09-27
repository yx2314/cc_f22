//Christina Kwon
function setup() {
  createCanvas(400, 500);
  background (0,40,100,20);
    textSize (25);
  textWrap (CHAR);
}


function preload (){
gh = loadImage('Images/Gh.png');
}
//https://en.m.wikipedia.org/wiki/Grace_Hopper


function draw() {
//app outline
  fill (220);
  stroke (0);
  rect (0,40,400,200);
  rect (0,300,400,200);
  fill(0,40,100,30)
  rect (100, 85, 170,20);
  rect (10,325,380,200)
  // app media
gh.resize (80,80);
image (gh, 10, 50);
 // app text 
  fill (0)
  textSize (25);
  textFont('Georgia')
text('CONNECT AND MEET', 70,25);
textSize (20) ;
  text ('Grace Hopper',100,70);
  textSize (12);
  text('Navy Rear Admiral',10, 150 )
  text ('American Computer Scientist', 10, 170);
  text('Mathematician', 10, 190)
  text ('ghc.anitab.org', 10, 210)
  text ('Connect',150, 100)
  textSize(17)
  text ('186',80,260)
  text ('u p d a t e s',50, 280)
  text ('20.5k', 260, 260)
  text ('c o n n e c t i o n s', 220, 280)
  text ('UPDATE: AWARD (1991)', 20, 360)
  text ('I am proud to annouce that I have recently have' ,20,390)
 text( 'been presented the National Medal of ', 20, 420)
  text ('Technology and Innovation!', 20,  450)
}