const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground,backGroundImg,boxes;

function preload() {
  backGroundImg = loadImage("gamingbackground1.jpg")
  // getTime();
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  boxes = [];

  for(var x = 600 ; x<860 ; x = x+50)
  {
    for(var y = 200 ; y<460 ; y = y+50)
    {
      boxes.push(new Box(x,y));
    }
  }

}

function draw() {
 
  if(backGroundImg)
  {
    background(backGroundImg);
    console.log("backGround");
  }
  Engine.update(engine);
  ground.display();
  
  text(mouseX+","+mouseY,100,50);

  for(var i=0 ; i<boxes.length ; i++)
  {
    boxes[i].display();
  }

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

async function getTime()
{
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var time = dateTime.slice(11,13);
  console.log(time);
  if(time>6 && time<18)
  {
    bg = "gamingbackground2.png";
  }
  else
  {
    bg  = "gamingbackground1.jpg";
  }
  backGroundImg = loadImage(bg);
}
