
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;

var division1,division2,division3,division5,division6,division7;

var ground ;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
   
 /*division1 = new Divisions(470,740,10,500);
 division2= new Divisions(395,740,10,500);
 division3 = new Divisions(320,740,10,500);
 division4 = new Divisions(245,740,10,500);
 division5 = new Divisions(170,740,10,500);
 division6 = new Divisions(95,740,10,500);
 division7 = new Divisions(15,740,10,500);*/

 ground = new Ground(230,755,500,10);
 for(var k =0; k<= innerWidth; k =k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight));
}
}


function draw() {
  background(0);
  Engine.update(engine);
/*division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();*/

ground.display();

for(var k =0; k<= innerWidth; k =k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight));
}
line(k,height-divisionHeight/2, 10,divisionHeight);

}
