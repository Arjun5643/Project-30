
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var box,ground,slingshot, ball

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	box1 = new Box(700,350,70,70);
	box2 = new Box(920,350,70,70);
	box3 = new Box(700,350,70,70);
	box4 = new Box(920,350,70,70);
	box5 = new Box(810,350,70,70);
	ball = new Ball(200, 200);
	slingshot = new SlingShot(ball.body, {x: 300, y: 100})
}


function draw() {
  rectMode(CENTER);
  background(0);
	box1.display();
	box2.display();
	ground.display();
	box3.display();
    box4.display();
	box5.display();
	ball.display();
	slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

