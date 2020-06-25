const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var engine, world;
var groundSprite,base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32
var polygon, sling
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 groundSprite= new Ground(400, 500, 480, 20);
 base1= new Ground(390, 300, 210, 10);
 base2= new Ground(650, 200, 210, 10);

 //ground
 box1 = new Box(300, 275, 30, 40, 0);
 box2 = new Box(330, 275, 30, 40, 0);
 box3 = new Box(360, 275, 30, 40, 0);
 box4 = new Box(390, 275, 30, 40, 0);
 box5 = new Box(420, 275, 30, 40, 0);
 box6 = new Box(450, 275, 30, 40, 0);
 box7 = new Box(480, 275, 30, 40, 0);

//1st
box8 = new Box(330, 245, 30, 40, 0);
box9 = new Box(360, 245, 30, 40, 0);
box10 = new Box(390, 245, 30, 40, 0);
box11 = new Box(420, 245, 30, 40, 0);
box12 = new Box(450, 245, 30, 40, 0);

//2nd
box13 = new Box(360, 215, 30, 40, 0);
box14 = new Box(390, 215, 30, 40, 0);
box15 = new Box(420, 215, 30, 40, 0);
//terrace
box16 = new Box(390, 185, 30, 40, 0);


//ground
box17 = new Box(560, 175, 30, 40, 0);
box18 = new Box(590, 175, 30, 40, 0);
box19 = new Box(620, 175, 30, 40, 0);
box20 = new Box(650, 175, 30, 40, 0);
box21 = new Box(680, 175, 30, 40, 0);
box22 = new Box(710, 175, 30, 40, 0);
box23 = new Box(740, 175, 30, 40, 0);

//1st
box24 = new Box(590, 145, 30, 40, 0);
box25 = new Box(620, 145, 30, 40, 0);
box26 = new Box(650, 145, 30, 40, 0);
box27 = new Box(680, 145, 30, 40, 0);
box28 = new Box(710, 145, 30, 40, 0);

//2nd
box29 = new Box(620, 115, 30, 40, 0);
box30 = new Box(650, 115, 30, 40, 0);
box31 = new Box(680, 115, 30, 40, 0);
//terrace
box32 = new Box(650, 85, 30, 40, 0);

polygon = new Polygon(100,100) ;//Bodies.rectangle(100, 200, 25, 25);
sling = new Slingshot(polygon.body,{x:100, y: 50});
Engine.run(engine);
}

function draw() {
  background(245,245,245);  
 
  groundSprite.display();
  base1.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  //rectMode(CENTER);
  //fill("yellow");
  //rect(polygon.position.x, polygon.position.y,25,25);
  polygon.display();




  //drawSprites();

}

function keyPressed(){
	if(keyCode===32){
   // polygon.x = 100;
   // polygon.y = 50;
		sling.attach(polygon.body);
	}
}

  function mouseDragged()
{
	Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})	
}

function mouseReleased()
{
	sling.fly();
}