
// Declare Variables
var luggageArray = [];
var luggageImageOne = new Image();
CrateImageOne.src = "./images/LuggageCrate1.png";
var luggageImageTwo = new Image();
CrateImageTwo.src = "./images/LuggageCrate2.png";
var luggageImageThree = new Image();
CrateImageThree = "./images/LuggageCrate3.png";
var luggageImageFour = new Image();
CrateImageFour = "./images/LuggageCrate4.png";
infiniteLuggage();

function infiniteLuggage (){
    var luggageIndex = 0;
    setInterval(function(){
        addLuggage();
        fallingLuggage(luggageArray[luggageIndex]);
        luggageIndex++;
    }, 2000)
}

var theLuggage = {y: 0, x: 0 };

function addLuggage() {
    var rando = Math.floor(Math.random() * 1000);
    theLuggage = {
        x: 0, 
        y: 0, 
        width:50,
        height:50 
    };
    theLuggage.x = rando;
    luggageArray.push(theLuggage);
}


function fallingLuggage (luggage){
    var id = setInterval(function(){
        luggage.y+=8
        if(luggage.y > 1000){
            clearInterval(id)
        }
    },100)
}

function drawAllTheLuggage(){
    //  console.log("falling");
   luggageArray.forEach(function(oneLuggage){
        ctx.drawImage(luggageImageOne,oneLuggage.x, oneLuggage.y,oneLuggage.width, oneLuggage.height)
   }) 

}


