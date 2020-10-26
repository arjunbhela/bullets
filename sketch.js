var car,wall;
var speed,light,weight,speed1,light1,weight1;
var speed2,light2,weight2,speed3,light3,weight3;
var thick1,thick2,thick3,thick4;
function setup() {
  createCanvas(1600,400);
  bor = createSprite(300, 100,16000,5);
  bor.shapeColor = "white";

  bor1 = createSprite(300, 200,16000,5);
  bor1.shapeColor = "white";

  bor2 = createSprite(300, 300,16000,5);
  bor2.shapeColor = "white";

  speed=random(55,90);
  weight=random(400,1500);
  thick1=random(22,83);

  
  speed1=random(55,90);
  weight1=random(400,1500);
  thick2=random(22,83);

  speed2=random(55,90);
  weight2=random(400,1500);
  thick3=random(22,83);

  speed3=random(55,90);
  weight3=random(400,1500);
  thick4=random(22,83);

  car1 = createSprite(50,250,50,50);
  car1.velocityX = speed;
car1.shapeColor = "white";
  car2= createSprite(50,150,50,50);
  car2.velocityX = speed2;
  car2.shapeColor = "white";
  wall1 = createSprite(1500,200,100,height/2);
  wall1.shapeColor = color(80,80,80);

  wall2 = createSprite(1500,200,100,1600);
  wall2.shapeColor = color(80,80,80);

  car3 = createSprite(50,350,50,50);
  car3.velocityX = speed3;
  car3.shapeColor = "white";

  car4 = createSprite(50,50,50,50);
  car4.velocityX = speed1;
  car4.shapeColor = "white";
}
function draw() {
  background(0);  
  if (wall1.x-car1.x < (car1.width+wall1.width)/2) {
car1.velocityX = 0;
car1.x = 1425;
var def = 0.5 * weight * speed * speed/(thick1 * thick1 * thick1)
if (def>10)  {
car1.shapeColor=color(255,0,0)
}

if (def<10) {
car1.shapeColor=color(0,255,0);
}
  }

  if (wall1.x-car2.x < (car2.width+wall1.width)/2) {
    car2.velocityX = 0;
    car2.x = 1425;
    var def = 0.5 * weight * speed * speed/(thick2 * thick2 * thick2)
    if (def>10)  {
    car2.shapeColor=color(255,0,0)
    }
    
    
    if (def<10) {
    car2.shapeColor=color(0,255,0);
    }
      }
  
      
      if (wall1.x-car3.x < (car3.width+wall1.width)/2) {
        car3.velocityX = 0;
        car3.x = 1425;
        var def = 0.5 * weight * speed * speed/(thick3 * thick3 * thick3)
        if (def>10)  {
        car3.shapeColor=color(255,0,0)
        }
        
    
        if (def<10) {
        car3.shapeColor=color(0,255,0);
        }
          }

       if (wall1.x-car4.x < (car4.width+wall1.width)/2) {
    car4.velocityX = 0;
    car4.x = 1425;
    var def = 0.5 * weight * speed * speed/(thick4 * thick4 * thick4)
    if (def>10)  {
    car4.shapeColor=color(255,0,0)
    }
    
    if (def<10) {
    car4.shapeColor=color(0,255,0);
    }
      }
  drawSprites();
}