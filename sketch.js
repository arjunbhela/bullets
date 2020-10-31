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

  bul1 = createSprite(50,250,30,20);
  bul1.velocityX = speed;
bul1.shapeColor = "white";
  bul2= createSprite(50,150,30,20);
  bul2.velocityX = speed2;
  bul2.shapeColor = "white";
  wall1 = createSprite(1500,200,100,height/2);
  wall1.shapeColor = color(80,80,80);

  wall2 = createSprite(1500,200,100,1600);
  wall2.shapeColor = color(80,80,80);

  bul3 = createSprite(50,350,30,20);
  bul3.velocityX = speed3;
  bul3.shapeColor = "white";

  bul4 = createSprite(50,50,30,20);
  bul4.velocityX = speed1;
  bul4.shapeColor = "white";
}
function draw() {
  background(0);  
  if (wall1.x-bul1.x < (bul1.width+wall1.width)/2) {
bul1.velocityX = 0;
bul1.x = 1435;
var dam = 0.5 * weight * speed * speed/(thick1 * thick1 * thick1)
if (dam>10)  {
bul1.shapeColor=color(255,0,0)
}

if (dam<10) {
bul1.shapeColor=color(0,255,0);
}
  }

  if (wall1.x-bul2.x < (bul2.width+wall1.width)/2) {
    bul2.velocityX = 0;
    bul2.x = 1435;
    var dam = 0.5 * weight * speed * speed/(thick2 * thick2 * thick2)
    if (dam>10)  {
    bul2.shapeColor=color(255,0,0)
    }
    
    
    if (dam<10) {
    bul2.shapeColor=color(0,255,0);
    }
      }
  
      
      if (wall1.x-bul3.x < (bul3.width+wall1.width)/2) {
        bul3.velocityX = 0;
        bul3.x = 1435;
        var dam = 0.5 * weight * speed * speed/(thick3 * thick3 * thick3)
        if (dam>10)  {
        bul3.shapeColor=color(255,0,0)
        }
        
    
        if (dam<10) {
        bul3.shapeColor=color(0,255,0);
        }
          }

       if (wall1.x-bul4.x < (bul4.width+wall1.width)/2) {
    bul4.velocityX = 0;
    bul4.x = 1435;
    var dam = 0.5 * weight * speed * speed/(thick4 * thick4 * thick4)
    if (dam>10)  {
    bul4.shapeColor=color(255,0,0)
    }
    
    if (dam<10) {
    bul4.shapeColor=color(0,255,0);
    }
      }
  drawSprites();
}