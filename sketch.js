const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	dustbin= new DustBin(720,390,100,100)
	// dustbinl= new DustBin(670,380,10,50)
	// dustbinr=new DustBin(750,380,10,100)
	paper= new Paper(100,300,10);
	ground= Bodies .rectangle
	(width / 2,400,width,10,{
	isStatic: true
	}
	
	)
	World.add(world,ground);
}

function draw() {
	background("red");
  rectMode(CENTER);
  
  dustbin.display();
//   dustbinl.display();
//   dustbinr.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{
		  x:14,
		  y:-13
	  });
  }


}


