var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
var inv1, inv2, inv3, inv4;
var gameState = "START";
var basket1, basket2;
var points1 = 0;
var points2 = 0;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/walluigi.png");
 circle2img = loadImage("images/mario.png");
 circle3img = loadImage("images/KD.png");
 circle4img = loadImage("images/wario.png");
 ballimg = loadImage("images/Basketball.png");
}
function setup() {
  createCanvas(1000, 1000);
    myteam = createGroup();
    opponentteam = createGroup();
    circle1 = createSprite(500, 200, 10, 10);
    circle1.addImage("circle1", circle1img);
    circle1.scale = 0.1;
    opponentteam.add(circle1);
    circle3 = createSprite(500, 750, 10, 10);
    circle3.addImage("circle3", circle4img);
    circle3.scale = 0.1;
    myteam.add(circle3);
    ball = createSprite(500, 500, 10, 10);
    ball.addImage("ball", ballimg);
    ball.scale = 0.1;
    inv1 = createSprite(990, 500, 10, 1000);
    inv1.shapeColor = "blue";
    inv1.visible = false;
    inv2 = createSprite(10, 500, 10, 1000);
    inv2.shapeColor = "yellow";
    inv2.visible = false;
    inv3 = createSprite(500, 990, 1000, 9);
    inv3.shapeColor = "green";
    inv3.visible = false; 
    inv4 = createSprite(500, 10, 1000, 9);
    inv4.shapeColor = "red";
    inv4.visible = false;
    basket1 = createSprite(500, 950, 10, 30);
    basket1.shapeColor = "red";
    basket1.visible = false;
    basket2 = createSprite(500, 50, 10, 30);
    basket2.shapeColor = "blue";
    basket2.visible = false;
}
function draw() {
  if(gameState === "START"){
    background(courtimg);
    stroke("orange");
    strokeWeight(1);
    textSize(15)
    text("touch anywhere or press space to start", 500, 500);
    if(touches.lenght > 10 || keyDown("space")&& gameState==="START"){
      gameState = "PLAY";
    }
    hidden();
  }
    if(gameState === "PLAY"){
      background(courtimg);
      console.log(circle1.x);
      seen();
      if(keyDown("up")){
        circle3.y-=10;
      }
      if(keyDown("down")){
        circle3.y+=10;
      }
      if(keyDown("right")){
        circle3.x+=10;
      }
      if(keyDown("left")){
        circle3.x-=10;
      }
      if(keyDown("w")){
        circle1.y-=10;
      }
      if(keyDown("s")){
        circle1.y+=10;
      }
      if(keyDown("d")){
        circle1.x+=10;
      }
      if(keyDown("a")){
        circle1.x-=10;
      }
    }
    if(ball.isTouching(inv1)||ball.isTouching(inv2)||ball.isTouching(inv3)||ball.isTouching(inv4)){
      ball.x = 500;
      ball.y = 500;
    }
    if(ball.isTouching(basket1)){
      points2=points2 + 1;
      stroke("purple");
      strokeWeight(1);
      text("WALUIGI SCORED!", 600, 700);
      reset();
    }
    if(ball.isTouching(basket2)){
      points1=points1 + 1;
      stroke("yellow");
      strokeWeight(1);
      text("WARIO SCORED!", 600, 700);
      reset();
    }
    if(circle1.x < 0||circle1.x>1000){
      if(keyDown("w")){
        circle1.y-=0;
      }
      if(keyDown("s")){
        circle1.y+=0;
      }
      if(keyDown("d")){
        circle1.x+=0;
      }
      if(keyDown("a")){
        circle1.x-=0;
      }
    }
    if(points2 === 10){
      gameState = "END";
      stroke("purple");
      strokeWeight(1);
      text("WALUIGI WON THE GAME", 500, 500);
    }
    if(points1 === 10){
      gameState = "END";
      stroke("yellow");
      strokeWeight(1);
      text("WARIO WON THE GAME", 500, 500);
    }
    if(gameState === "END"){
      hidden();
      stroke("orange");
      strokeWeight(1);
      text("touch anywhere or press space to restart", 500, 600);
    }
      if(touches.length>10||keyDown("space")){
        gameState = "PLAY";
        points1 = 0;
        points2 = 0;
        reset();
      }
      stroke("red");
      textSize(20);
      text("Wario's points:" + points1, 230, 29);
      stroke("purple");
      textSize(20);
      text("Waluigi's points: " + points2, 639, 29);
      ball.bounceOff(circle3);
      ball.bounceOff(circle1);
      drawSprites();
}
function hidden(){
  ball.visible = false;
  circle1.visible = false;
  circle3.visible = false;
}
function seen(){
  ball.visible = true;
  circle1.visible = true;
  circle3.visible = true;
}
function reset(){
  ball.x = 500;
  ball.y = 500;
  circle1.x = 500;
  circle1.y = 200;
  circle3.x = 500;
  circle3.y = 750;
}
function ballreset(){
  ball.x = 500;
  ball.y = 500;
}