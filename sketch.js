var squareSize = 5;
var counter = 0;
var numSquares;
var xStart = 0;
var yStart = 0;

var colors = [];
var numColors = 10000;

var img1, img2;

var particles = [];
var numParticles = 1000;
var theta = 0;
var inc = 0.1;


function preload(){

	img1 = loadImage('download.jpg');
  img2 = loadImage('download-1.jpg');
}


function setup() {
  createCanvas(400, 400);
  frameRate(20);
  //noLoop();
  numSquares = width/squareSize;
  //numSquares = 4;
  for(var i =0; i < numColors; i++){
  		colors[i] = [random(255),0,10];
  		//particles[i] = 0;
  }
  
  img1.loadPixels();
  img2.loadPixels();
  
  
  for(var j=0; j < numSquares; j++){  
    for(var i = 0; i < numSquares; i++){
       // fill(colors[int(random(0,colors.length-1))]);
      
      	var thisColor = img2.get(i*3,j/2);
      	var thatColor = img1.get(i,j);
        var chosenColor;
           
      var choice = random(100);
      
      if(choice> 90){
       chosenColor = thisColor;
      } else {
     
      chosenColor = thatColor;
      }
      
      //squareSize = random(2,5);
      var a = new Particle(i*squareSize, j*squareSize, squareSize, chosenColor);
      
      particles.push(a);
     // rect(xStart + (i*squareSize), yStart+(j*squareSize), squareSize, squareSize);
    }
	} 
  
 console.log(particles);
  
  
}

function draw() {
//  background(220);
  //background(img1);
  
  // stroke(255);
  // strokeWeight(1);
  noStroke();
 
	
 
    for(var i = 0; i < particles.length; i++){
      
     // particles[i*j].update(theta);
      
      // console.log(particles[1]);
      
      particles[i].display();
    }
  
  
  
 // image(img1, 0, 0, 400, 400)
  theta+=inc
}



var Particle = function(x,y,size,col){
	this.x = x;
  this.y = y;
  this.size = size;
  this.color = col;

  
  this.update = function(theta){
    this.x = this.x+sin(theta)/random(10);
    this.y = this.y+cos(theta)/random(5);
  }
  
  this.display = function(){
    stroke(90,20,random(30));
    strokeWeight(random(3));
    fill(this.color);
    this.size = random(this.size-2,this.size+2);
    ellipse(this.x, this.y, this.size);
  }
  
  
  

}