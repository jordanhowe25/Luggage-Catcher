//global vars
var canvasWidth = 1400;
var canvasHeight = 700;
var btnStart = document.getElementById('btn-start-game');
var btnMoveLeft = document.getElementById('btn-move-left');
var btnMoveRight = document.getElementById('btn-move-right');
var truck = Truck;
var plane = Plane;
var score = 0;

//Create Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

function updateCanvas(){
  setInterval(function(){
    ctx.clearRect(truck.x, truck.y, truck.width, truck.height);
    drawTruck();
    
  },10)
}

function startGame(){
  hideStartWindow();
  truck = new Truck({});
  plane = new Plane({});
}
function ShowScore(){
  $(".score").html(score);

}

/*
// scoring functionality, Calling $('#id') will return a jQuery object that wraps the DOM object and provides jQuery methods., .html is A function returning the HTML content to set and returns as String



function AddPoints(pointsToAdd){
  score += pointsToAdd;
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
  leftBtnHold = setInterval(function(){
    truck.move((truck._speed - (truck._speed * 2)));
    
  }, 10);
} );
btnMoveLeft.addEventListener('mouseup', function(){
  clearInterval(leftBtnHold);
});

btnMoveLeft.addEventListener('touchstart', function() {
  
  
  leftBtnHold = setInterval(function(){
    truck.move((truck._speed - (truck._speed * 2)));
  }, 10);
} );

btnMoveLeft.addEventListener('touchend', function(){
  clearInterval(leftBtnHold);
});


/*Right Button:  Listeners for both mouse and touch*/
btnMoveRight.addEventListener('mousedown', function() {
  rightBtnHold = setInterval(function(){
    truck.move(truck._speed);
    
  }, 10);
} );

btnMoveRight.addEventListener('mouseup', function(){
  clearInterval(rightBtnHold);
  
  
});

btnMoveRight.addEventListener('touchstart', function() {
  rightBtnHold = setInterval(function(){
    truck.move(truck._speed);
    
  }, 10);
} );

btnMoveRight.addEventListener('touchend', function(){
  clearInterval(rightBtnHold);
});