
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof
var ball1
var ball2
var ball3
var ball4
var ball5
var rope1, rope2, rope3, rope4, rope5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(600, 200, 600, 10)
ball1=new Ball(600,500,65)
rope1=new Rope(ball1.body, roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roof.display();
  rope1.display();
  ball1.display();

}



