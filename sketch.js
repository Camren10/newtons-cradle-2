var roof,bob1,bob2,bob3,bob4,bob5,world,engine;
var rope1,rope2,rope3,rope4,rope5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	roof = new Roof(400,200,300,20);
	bob1 = new Bob(400,400,20);
	rope1 = new Rope(bob1.body,roof.body,0,0);
	bob2 = new Bob(440,400,20);
	rope2 = new Rope(bob2.body,roof.body,40,0);
	bob3 = new Bob(480,400,20);
	bob4 = new Bob(360,400,20);
	bob5 = new Bob(320,400,20);
	rope3 = new Rope(bob3.body,roof.body,80,0);
	rope4 = new Rope(bob4.body,roof.body,-40,0);
	rope5 = new Rope(bob5.body,roof.body,-80,0);
}


function draw() {
  background("white");
 //roof.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

/*function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-50 })
	}
}*/

function mouseDragged() {
	Matter.Body.setPosition(bob5.body, {x: mouseX, y: mouseY});
}

