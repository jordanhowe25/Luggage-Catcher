
var cupCakesArray = [];
var CrateImageOne = new Image();
CrateImageOne.src = "./images/LuggageCrate1.png";
var CrateImageTwo = new Image();
CrateImageTwo.src = "./images/LuggageCrate2.png";
var CrateImageThree = new Image();
CrateImageThree = "./images/LuggageCrate3.png";
var CrateImageFour = new Image();
CrateImageFour = "./images/LuggageCrate4.png";
infiniteLuggage();

function infiniteLuggage (){
    var luggageIndex = 0;
    setInterval(function(){
        addLuggage();
        fallingLuggage(cupCakesArray[luggageIndex]);
        luggageIndex++;
    }, 2000)
}

// var theCupCake = {y: 0, x: 0 };

function addLuggage() {
    var rando = Math.floor(Math.random() * 1000);
    theCupCake = {
        x: 0, 
        y: 0, 
        width:50,
        height:50 
    };
    theCupCake.x = rando;
    cupCakesArray.push(theCupCake);
}


function fallingLuggage (cupcake){
    var id = setInterval(function(){
        cupcake.y+=8
        if(cupcake.y > 1000){
            clearInterval(id)
        }
    },100)
}

function drawAllTheCupcakes(){
    //  console.log("falling");
   cupCakesArray.forEach(function(oneCupcake){
        ctx.drawImage(CrateImageOne,oneCupcake.x, oneCupcake.y,oneCupcake.width, oneCupcake.height)
   }) 

}


