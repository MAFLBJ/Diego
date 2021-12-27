// definir variáveis:
var dino, dinoImg, dinoAnima;
var chao, chaoimg, chaoinv;

// carregar imagens:
function preload() {
  dinoImg = loadImage("trex1.png");
  dinoAnima = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  chaoimg = loadImage("ground2.png");
  
 
}

// configurar e criar personagens:
function setup() {
  createCanvas(600, 200);
  dino = createSprite(50, 150, 20, 40);
  //dino.addImage(dinoImg);
  dino.addAnimation("dino_corre",dinoAnima);
  dino.scale = 0.6;

  chao = createSprite(120, 190, 150, 20);
  chao.addImage(chaoimg);
  chao.velocityX = -4;

  chaoinv = createSprite(120, 198, 150, 4);
  chaoinv.visible = false;
}

// Desenhar os personagens:
function draw() {
  background("white");
  textSize(20);
  text(mouseX+","+mouseY, mouseX, mouseY);
  if(keyDown("space") &&dino.y>= 167.8 ){
    dino.velocityY = -10; 
  }
  dino.velocityY = dino.velocityY + 0.8;
  dino.collide(chaoinv );
  console.log(dino.y);
  if (chao.x <= 0){
    chao.x = chao.width/2;
  }     

  drawSprites();
}
