
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
const Body = Matter.Body;
var ground
var ball1
var connect1
var ball2
var connect2
var ball3
var connect3
var ball4
var connect4
var ball5
var connect5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;
ground=new Ground(400,690,800,10)
roof=new Ground(400,175,200,20)
	//Create the Bodies Here.
ball1=new Ball(600,400,50)
connect1=new Connection(ball1.ball,roof.gnd)
ball2=new Ball(400,400,50)
connect2=new Connection(ball2.ball,roof.gnd)
ball3=new Ball(300,400,50)
connect3=new Connection(ball3.ball,roof.gnd)
ball4=new Ball(500,400,50)
connect4=new Connection(ball4.ball,roof.gnd)
ball5=new Ball(700,400,50)
connect5=new Connection(ball5.ball,roof.gnd)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  ground.display()
 roof.display()
 ball1.display()
 connect1.display()
 ball2.display()
 connect2.display()
 ball3.display()
 connect3.display()
 ball4.display()
 connect4.display()
 ball5.display()
 connect5.display()
}



