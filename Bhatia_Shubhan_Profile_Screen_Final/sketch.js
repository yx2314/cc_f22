// Shubhan Bhatia, Assignment 2: Profile Screen_Final Draft

// Declaring my variables

var brick_background;
var headshot;
var custom_font_regular;
var custom_font_italic;
var title = "'Father of Quantum Computing'"; //variable stored as a string
var m_line;
var qubit;
var binary;
var dwight_meme;
var not_worthy;
let y = false; //boolean variable
var i = 130.7; //float variable
var n = 0; //integer variable
var key_typed = false; //another boolean variable

// Loading my media files (cited) using the preload() function

function preload() {
  brick_background = loadImage('bricked.jpeg');
  // Image source: https://depositphotos.com/106652870/stock-photo-beige-brick-wall-background-texture.html
  headshot = loadImage('david_deutsch.jpeg');
  // Image source: http://www.daviddeutsch.org.uk/
  custom_font_regular = loadFont('UbuntuMono-Regular.ttf');
  custom_font_italic = loadFont('UbuntuMono-Italic.ttf');
  // Font source: Google fonts (https://fonts.google.com/)
  qubit = loadImage('qubit.jpeg');
  // Image source: https://www.quantum-inspire.com/kbase/what-is-a-qubit/
  binary = loadImage('binary.jpeg');
  // Image source: http://www.datarecoveryspecialists.co.uk/blog/how-is-magnetic-data-stored
  dwight_meme = loadImage('dwight_meme.jpeg');
  // Image source: https://richwoodbank.com/the-office-meme-for-zoom/
  not_worthy = loadImage('not_worthy.jpeg');
  // Image source: https://tenor.com/search/you-re-not-worthy-gifs
  
}

// Creating a function that introduces the task to the user and provides necessary aid
function initial_state() {
  let p_1 = createP("Hello, there! In order to view Dr. David Deutsch's profile screen, you must first complete a task. This task will test your understanding of the fundamentals of quantum computing (its relevance will become apparent once you complete your task). If you feel overwhelmed by this task, fear not! You can find all the information you need to complete this task on this link: ");
  let p_2 = createP("If you are interested in learning more about quantum computing, ")
  let a_1 = createA('https://www.quantum-inspire.com/kbase/what-is-a-qubit/', 'UNDERSTANDING THE QUANTUM!')
  let a_2 = createA('https://learn.qiskit.org/course/introduction/what-is-quantum','Click here!')
  p_1.style('font-size', '16px');
  p_1.style('background', '#D4F4EC');
  p_2.style('font-size', '16px');
  p_2.style('background', '#D4F4EC'); //Alternate background color: #9ED9CCFF
  p_1.size(width,height/7);
  p_2.size(width,height/21);
  p_1.position(4, height-10);
  p_2.position(4,height+80);
  a_1.size(width,height);
  a_1.position(360,height+60);
  a_2.size(width,height);
  a_2.position(423,height+97);
}

// Setting a condition to invert the boolean variable key_typed if the enter key is pressed using the keyTyped function.

function keyTyped() {
  if (keyCode === ENTER) {
    key_typed = true
  }
}

// Setting up the canvas, custom font for the sketch, and calling the initial state (half a second after the program is run using the predefined setTimeout() function)

function setup() {
  createCanvas(700, 600);
  textFont(custom_font_regular);
  setTimeout(initial_state,500);
}

// Creating a class for the squares I intend to create to make this sketch interactive.

class square {
  constructor(x,y,w,n) {
    this.x = x
    this.y = y
    this.w = w
    this.n = n
  }
  clicked() {
    let d_x = dist(mouseX,0,this.x+this.w,0);
    let d_y = dist(0,mouseY,0,this.y+this.w);
    if (d_x <= this.w) {
      if (d_y <= this.w) {
        console.log('Clicked on square',this.n);
        n = this.n
      if (this.n == 1) {
        y = true
      }
      }   
        }
  }
  show() {
    stroke(255);
    strokeWeight(0);
    rect(this.x,this.y,this.w*2,this.w*2)
  }
}

// Checking if either squares are pressed, if they are the clicked() function in the square class is called.

function mousePressed() {
  square1.clicked();
  square2.clicked();
}

function draw() {
  // Condition 1: Task presented, User must select the image of the qubit
  
  if (y == false && n == 0) {
    square1 = new square(80,150,i,1);
    square2 = new square(400,150,i,2);
    //background('#f5c993'); //Alternate background
    background(255,230,200,60);
    fill(80);
    textSize(30);
    text('Click on the qubit to see the sketch: ',50,100);
    square1.show();
    square2.show();
    image(qubit,square1.x,square1.y,square1.w *2,square1.w * 2)
    image(binary,square2.x,square2.y,square2.w * 2, square2.w * 2)
    // Condition 2: Incorrect image selected (/clicked upon)
    
  } else if (y == false && n == 2){
    
    //background(220); // Alternate background 1
    //background('#f5c993'); //Alternate background 2
    background(255,230,200,90);
    fill(80);
    textSize(30);
    text('Click on the qubit to see the sketch: ',50,100);
    square1.show();
    square2.show();
    image(qubit,square1.x,square1.y,square1.w *2,square1.w * 2)
    image(binary,square2.x,square2.y,square2.w * 2, square2.w * 2)
    textSize(20);
    fill(0);
    textFont(custom_font_italic);
    text('Incorrect, try again',square2.x,square2.y+2*square2.w+20)
    textFont(custom_font_regular);
    image(not_worthy,350,455,348,145);
    
    // Condition 3: Upon selection of the correct image i.e. the image of the qubit.
  } else if (y == true && n == 1 && key_typed == false) {
    
    //background(204); //Alternate background 1
    //background('#f5c993'); //Alternate background 2
    background(255,230,200,90);
    image(dwight_meme,60,30,540,372);
    textSize(26);
    fill(0);
    text('Press enter to continue to the sketch:',30,500);
    
    // Condition 4: Upon pressing the enter key after completing the task
  } else if (y == true && n == 1 && key_typed == true) {
    
    textFont(custom_font_regular);
    background(255);
    tint(255,100);
    image(brick_background,0,0,700,600);
    noTint();
    image(headshot,40,20,150,150);
    fill(0);
    strokeWeight(0);
    textSize(30);
    text(title,250,50);
    textSize(25);
    
    //Creating textboxes
    
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(11,175,222,100);
    rect(245,75,420,195);
    rect(5,285,680,105);
    rect(5,397,680,100);
    rect(5,505,680,60);
    fill(0);
    
    // Personal information: (1) Born: 18 May, 1953 (Age: 69) (2) British Physicist (3) Email: david.deutsch@qubit.org
    
    noStroke();
    text('Dr. David Deutsch',18,200);
    textSize(18);
    text('Born: 18th May, 1953',25,220);
    text('(Age: 69 years)',40,240);
    textSize(15);
    text('Email: ',15,260);
    text('david.deutsch@qubit.org',60,260)
    stroke(80);
    strokeWeight(2);
    textSize(16);
    noStroke();
    
    //Known for: (1) Quantum-Turing machine (2) Church-Turing-Deutsch Principle (3) Quantum circuit (4) Qunatum logic gate.
    //and,
    //Education: (1) BA Clare college, Cambridge (2) PhD Wolfson college, Oxford.
    
    text('- British Physicist; Pioneer of Quantum Computation',250,100);
    text('- Known for: (1) Quantum-Turing machine',250,135);
    text('(2) Church-Turing-Deutsch Principle',355,160);
    text('(3) Quantum circuit',355,185);
    text('(4) Qunatum logic gate',355,210);
    //Education
    text('- Education: (1) BA Clare college, Cambridge',250,240);
    text('(2) PhD Wolfson college, Oxford',355,260);

    //Work: (1) Visiting Professor of physics at the Centre for Quantum Computation, the Clarendon Laboratory, Oxford University (2) Honorary Fellow of Wolfson College, Oxford
    
    textSize(24);
    textFont(custom_font_italic);
    text('Work: ',280,310);
    textFont(custom_font_regular);
    textSize(16);
    text('(1) Visiting Professor of Physics at the Centre for Quantum Computation, the',10,340);
    text('Clarendon Laboratory, Oxford University',45,362);
    text('(2) Honorary Fellow of Wolfson College, Oxford',10,380);
    
    //Prominent research
    
    textSize(24);
    textFont(custom_font_italic);
    text('Prominent research: ',210,417);
    textFont(custom_font_regular);
    textSize(16);
    text("(1) Information Flow in Entangled Quantum Systems (with Patrick Hayden), disproves ",10,447);
    text("'the myth of ‘quantum non-locality’.",30,465);
    text('(2) Rapid Solution of Problems by Quantum Computation (with Richard Jozsa).',10,485);
    
    //Some thinkers I admire: Karl Popper, Michael Faraday, William Godwin, Thomas Macaulay and Richard Feynman.
    
    textSize(24);
    textFont(custom_font_italic);
    text('Some thinkers I admire: ',180,525);
    textFont(custom_font_regular);
    textSize(16);
    text('- Karl Popper, Michael Faraday, William Godwin, Thomas Macaulay and Richard Feynman.',15,550);
    text('(My personal website: http://www.daviddeutsch.org.uk/)',100,585);
    
  }

}

//Other data collected:

//1. Work: (3) Works on the quantum theory of computation and information, and constructor theory. (4) Pioneered the field of Quantum Computing (5) Authored two books: The Fabric of Reality and The Beginning of Infinity.

//2. Prominent Research papers: (1) Information Flow in Entangled Quantum Systems (with Patrick Hayden), disproves the myth of ‘quantum non-locality’. It appeared in Proceedings of the Royal Society A456 1759-74 (2000) (2) Rapid Solution of Problems by Quantum Computation (with Richard Jozsa) (read online at JSTOR) appeared in Proceedings of the Royal Society A439 1907 553-8 (1992).Rapid Solution of Problems by Quantum Computation (with Richard Jozsa) (read online at JSTOR) appeared in Proceedings of the Royal Society A439 1907 553-8 (1992).

//3. Hyperlinks: (1) Personal Website: http://www.daviddeutsch.org.uk/ (2) ORCID: https://orcid.org/0000-0003-4337-8161 (3) SemanticScholar: https://www.semanticscholar.org/author/D.-Deutsch/145346874