

var supply;
var helicopter;

function preload(){

  helicopter=loadImage("sprites/helicopter.png");
	supply=loadImage("sprites/package.png");	
}

function setup(){
    var canvas = createCanvas(400,400);
   helicopter=createSprite(350,200,50,20);
   helicopter.velocityX=2;
  
 

   supply=createSprite(350,200,10,10);
supply.velocityX=helicopter.velocityX;

Engine.run(engine);
   
}

function draw(){
    background(0);
   

    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    
  helicopter.display();
supply.display();
  Matter.Bodies.circle(350,350, circle, [options], [30]) 
  
  ellipse(56, 46, 55, 55);
    drawSprites();
   
  }
