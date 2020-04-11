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
  },100)
}

updateCanvas();


/*
// set width and height for cat variable

var cat = {
  x: 600,
  y: 500,
  width: 150,
  height:150
}


updateCanvas(); 


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

// sets the cat's image
var catImage = new Image();
catImage.src = './images/cat.png';


// draws cat 

function drawCat(){
  ctx.drawImage(catImage,cat.x,cat.y, cat.width, cat.height)
}


// controls movement
document.onkeydown = function (e) {
  console.log("working moving!!!!");
  if (e.which === 38){
    cat.y -= 20;
  }
  else if (e.which === 40)
  {
    cat.y += 20;
  }
  else if (e.which === 37){
    cat.x -= 20;
  }
  else if (e.which === 39){
    cat.x += 20;
  }
}
  
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
btnStart.addEventListener('click', hideStartWindow);

function hideStartWindow() {
	document.getElementById('start-screen-window').style.display = "none";
}

//Event listeners for movement buttons in game.  More needs added to it for press and hold to allow acceleration.
btnMoveLeft.addEventListener('click', moveLeft);
btnMoveRight.addEventListener('click', moveRight);

