
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, stone,ground, shot;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg;


function preload()
{
	boyimg = loadImgage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = createSprite(200,500)
boy.addImgage(boyimg)
boy.scale = 0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



