/************* GLOBAL VARS ********************/ 
var truckSpeed = 10;

/************** TRUCK IMAGE HANDLING *******************************/
var truckImage = new Image();
truckImage.src = './images/truck 1.png';

/************* TRUCK OBJECT PROPERTIES ***************************/
var truck = {
  x: 600,
  y: 540,
  width: 112,
  height: 65,
}

/************* TRUCK FUNCTIONS **********************************/
function drawTruck(){
  ctx.drawImage(truckImage, truck.x, truck.y, truck.width, truck.height);
}

/*Moves truck to the left.  Checks if the truck is at a position greater than 0 which is the left edge of canvas.
Checks if the current position and the current speed will draw the truck outside of the 0 position, if so then 
draws it at 0 instead.
*/
function moveLeft(){
  if (truck.x > 0) {
    if ((truck.x - truckSpeed) < 0) {
      truck.x = 0;
    } else {
      truck.x -= truckSpeed;
      truckSpeed += 2;
    } 
  }
  
}

/*Moves truck to the right.  Checks if the truck is at a position less than 1290.  In its current setup, even though
canvas is set to be 1400 wide, 1290 is the edge of the canvas.  Checks if the current position and speed will draw the
truck outside of the 1290 position, if so then draws it at 1290 instead.
*/
function moveRight(){
  if (truck.x < 1290) {
    if ((truck.x + truckSpeed) > 1290) {
      truck.x = 1290;
    } else {
      truck.x += truckSpeed;
      truckSpeed += 2;
    }
    
  }
  
}

/*Resets the truck speed to the origin speed of 10.  This is used for the button HOLD functions in game.js*/
function truckStop(){
  truckSpeed = 10;
}

/*



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
*/