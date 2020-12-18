//Create variables here
var dog, happyDog, database, foodStock, dogImg, foodS;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database=firebase.database();
  
  dog = createSprites(500,500,50,50);
  dog.addImage ("dogImg")

  foodStock=database.ref('food');
  foodStock.on("value",readStock)
  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock('food');
    dog = addImage("happyDog");
    
    
  }

  drawSprites();
  Text("foodStock",foodStock,300,300);


}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }


  database.ref('/').update({
    food:x
  })

}



