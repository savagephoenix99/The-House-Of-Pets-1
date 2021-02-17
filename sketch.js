
//                                                             A N I M A L     S H E L T E R
var database;

var coin 
var coinImg
var CC

var habitats

//GermanShepherd
//State 0 = Empyty 
var habitatGermanShepherd;
var habitatGermanShepherdImg;
var habitatGermanShepherdState = 0;

//Poodle
//State 0 = Empyty
var habitatPoodle;
var habitatPoodleImg;
var habitatPoodleState = 0;

//SiameseCat
//State 0 = Empyty
var habitatSiameseCat;
var habitatSiameseCatImg;
var habitatSiameseCatState = 0;

//ANTELOPE
//State 0 = Empyty
var habitatAntelope;
var habitatAntelopeImg;
var habitatAntelopeState = 0;

//WHITE Poodle
//State 0 = Empyty
var habitatPersianCat;
var habitatPersianCatImg;
var habitatPersianCatState = 0;



//ShihTzu
//State 0 = Empyty
var habitatShihTzu;
var habitatShihTzuImg;
var habitatShihTzuState = 0;

//BritishShorthair
//State 0 = Empyty
var habitatBritishShorthair;
var habitatBritishShorthairImg;
var habitatBritishShorthairState = 0;

//KING COBRA
//State 0 = Empyty
var habitatGuineaPig;
var habitatGuineaPigImg;
var habitatGuineaPigState = 0;

//Rabbit
//State 0 = Empyty
var habitatRabbit;
var habitatRabbitImg;
var habitatRabbitState = 0;

//Husky
//State 0 = Empyty
var habitatHusky;
var habitatHuskyImg;
var habitatHuskyState = 0;

var gameState;


function preload()
{
   habitatGermanShepherdImg = loadImage("GAME OVER.png");
}



function setup(){

    //creating database
    database=firebase.database();

    coinRef  = database.ref('coinCount');
    coinRef.on("value", getCoin, showError);


    createCanvas(displayWidth, displayHeight-107);

    habitats=createGroup();

     habitatGermanShepherd = createSprite(70, 70, 100, 100);
     habitats.add(habitatGermanShepherd);

     habitatPoodle = createSprite(habitatGermanShepherd.x+200, 70, 100, 100);
     habitats.add(habitatPoodle)

     habitatSiameseCat = createSprite(habitatPoodle.x+200, 70, 100, 100);
     habitats.add(habitatSiameseCat)

     habitatAntelope = createSprite(habitatSiameseCat.x+200, 70, 100, 100);
     habitats.add(habitatAntelope);

     habitatPersianCat = createSprite(habitatAntelope.x+200, 70, 100, 100);
     habitats.add(habitatPersianCat);

     habitatShihTzu = createSprite(habitatPersianCat.x+200, 70, 100, 100);
     habitats.add(habitatShihTzu)

     habitatBritishShorthair = createSprite(70, 250, 100, 100);
     habitats.add(habitatBritishShorthair)

     habitatGuineaPig = createSprite(habitatBritishShorthair.x+200, 250, 100, 100);
     habitats.add(habitatGuineaPig)

     habitatRabbit = createSprite(habitatGuineaPig.x+200, 250, 100, 100);
     habitats.add(habitatRabbit);

     habitatHusky = createSprite(habitatRabbit.x+200, 250, 100, 100);
     habitats.add(habitatHusky);





}



function draw(){
  background("green");
  //getCoin();
  drawSprites();
  

