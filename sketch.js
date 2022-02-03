
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var solo;

var ball;
var wall;
var wall2;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
	var plane_options = {
		isStatic : true
	}

    var ball_options = {
		isStatic: false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}

	var wall_options ={
		isStatic: true
	}
	var wall2_options ={
		isStatic: true
	}


	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

  	solo = Bodies.rectangle(200,678,1500,10,plane_options);
	World.add(world,solo);
 	wall = Bodies.rectangle(560,635,10,75,wall_options);
 	World.add(world,wall);
	wall2 = Bodies.rectangle(730,635,10,75,wall2_options);
	World.add(world,wall2);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(1);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(wall.position.x,wall.position.y,10,75);
  rect(wall2.position.x,wall2.position.y,10,75);
  rect(solo.position.x,solo.position.y,1500,10);

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}
