
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
     ground = new Ground(270,150,400,30);
    ball1 = new Paper(100,400,60)
    ball2 = new Paper(160,400,60)
    ball3 = new Paper(220,400,60)
    ball4 = new Paper(280,400,60)
    ball5 = new Paper(340,400,60)
    chain1 = new SlingShot(ball1.body,ground.body,-110,0);
    chain2 = new SlingShot(ball2.body,ground.body,-50,0);
    chain3 = new SlingShot(ball3.body,ground.body,0,0);
    chain4 = new SlingShot(ball4.body,ground.body,50,0);
    chain5 = new SlingShot(ball5.body,ground.body,110,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed(){

  if(keyCode===32){

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-60,y:-60});
  }



}


