const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

    engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(700,600,20,120);

	var ball_options={
		
		isStatic : false,
		restitution : 1,
		//friction : 0,
		density : 1.2

	}

	//Create the Bodies Here.
    ball = Bodies.circle(100,200,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);

  Engine.update(engine);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-1})

	}
}



