
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
        ground=new Ground(400,680,800,20);
        ball=new Ball(100,650,30);
        dustbin=new Dustbin(600,670);

	Engine.run(engine);
  
}


function draw() {
	 background(0);
	
 	rectMode(CENTER);
	
  	ground.display();
	
  	ball.display();
  	dustbin.display();
	
  	drawSprites();
 	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}

}


