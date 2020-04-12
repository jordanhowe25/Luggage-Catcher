//global vars
var canvasWidth = 1400;
var canvasHeight = 700;
var btnStart = document.getElementById('btn-start-game');
var btnMoveLeft = document.getElementById('btn-move-left');
var btnMoveRight = document.getElementById('btn-move-right');

//Create Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

/*This is just a test to show that the height and width are set for the canvas properly.  
You should see small red border around canvas.*/
ctx.strokeStyle = "#FF0000";
ctx.strokeRect(0, 0, canvas.width, canvas.height);

function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTruck();
  },10)
}

function startGame(){
  hideStartWindow();
  updateCanvas();
}


/*
// set width and height for cat variable

var cat = {
  x: 600,
  y: 500,
  width: 150,
  height:150
}





// scoring functionality, Calling $('#id') will return a jQuery object that wraps the DOM object and provides jQuery methods., .html is A function returning the HTML content to set and returns as String

var score = 0;
function ShowScore(){
  $(".score").html(score);

}
function AddPoints(pointsToAdd){
  score += pointsToAdd;
}
function LosePoints(pointsLost){
  score -= pointsLost;
}

// if (score < 0){
//   alert("Game Over");
// }





  
 // collision detection, set y property to any number greater than 1000 in order to make the object disappear

function cupcakeCollision() {
  cupCakesArray.forEach(function(cupcake) {
    let catLeft = cat.x;
    let catRight = cat.x + cat.width/2;
    let catTop = cat.y;
    let catBottom = cat.y + cat.height/2;
    let cupcakeLeft = cupcake.x;
    let cupcakeRight = cupcake.x + cupcake.width/2;
    let cupcakeTop = cupcake.y;
    let cupcakeBottom = cupcake.y + cupcake.height;
    if(catLeft <= cupcakeRight && cupcakeLeft <= catRight && catBottom <= cupcakeBottom  && cupcakeTop <= catBottom){
      cupcake.y = 1444;
      AddPoints(10);
    }
    })
}

function shardCollision() {
  shardsArray.forEach(function(shard) {
    let catLeft = cat.x;
    let catRight = cat.x + cat.width/2;
    let catTop = cat.y;
    let catBottom = cat.y + cat.height/2;
    let shardLeft = shard.x;
    let shardRight = shard.x + shard.width/2;
    let shardTop = shard.y;
    let shardBottom = shard.y + shard.height;
    if(catLeft <= shardRight && shardLeft <= catRight && catBottom <= shardBottom  && shardTop <= catBottom){
      shard.y = 1444;
      LosePoints(10);
    }
  });
}
  
 


function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCat();
    drawAllTheCupcakes();
    drawAllTheShards();
    shardCollision();
    cupcakeCollision();
    ShowScore();
  },100)
}
*/

/* Hides Start Window Screen when Start button is pressed */
btnStart.addEventListener('click', startGame);

function hideStartWindow() {
	document.getElementById('start-screen-window').style.display = "none";
}

/*Event listeners for movement buttons in game*/
/*Left Button:  Listeners for both mouse and touch*/
btnMoveLeft.addEventListener('mousedown', function() {
  moveLeft();
  
  leftBtnHold = setInterval(function(){
    moveLeft();
 
  }, 100);
} );

btnMoveLeft.addEventListener('mouseup', function(){
  clearInterval(leftBtnHold);
  truckStop();
  
});
btnMoveLeft.addEventListener('touchstart', function() {
  moveLeft();
  
  leftBtnHold = setInterval(function(){
    moveLeft();
 
  }, 100);
} );

btnMoveLeft.addEventListener('touchend', function(){
  clearInterval(leftBtnHold);
  truckStop();
  
});


/*Right Button:  Listeners for both mouse and touch*/
btnMoveRight.addEventListener('mousedown', function() {
  moveRight();
  
  rightBtnHold = setInterval(function(){
    moveRight();
    
  }, 100);
} );

btnMoveRight.addEventListener('mouseup', function(){
  clearInterval(rightBtnHold);
  truckStop();
  
});

btnMoveRight.addEventListener('touchstart', function() {
  moveRight();
  
  rightBtnHold = setInterval(function(){
    moveRight();
    
  }, 100);
} );

btnMoveRight.addEventListener('touchend', function(){
  clearInterval(rightBtnHold);
  truckStop();
  
});
