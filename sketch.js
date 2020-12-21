
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball1=new Bob(240,600,40);
  ball2=new Bob(320,600,40);
  ball3=new Bob(400,600,40);
  ball4=new Bob(480,600,40);
  ball5=new Bob(560,600,40);
  ground=new Ground(400,250,400,40);
  rope1=new Rope(ground.body,ball1.body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  rope1.display();
  drawSprites();
 
}



