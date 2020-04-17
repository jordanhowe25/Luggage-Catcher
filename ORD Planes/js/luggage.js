
// Declare Variables
var luggageArray = [];
var luggageImageOne = new Image();
LuggageImageOne.src = "./images/LuggageCrate1.png";
var luggageImageTwo = new Image();
LuggageImageTwo.src = "./images/LuggageCrate2.png";
var luggageImageThree = new Image();
LuggageImageThree = "./images/LuggageCrate3.png";
var luggageImageFour = new Image();
LuggageImageFour = "./images/LuggageCrate4.png";
infiniteLuggage();

function infiniteLuggage (){
    var luggageIndex = 0;
    setInterval(function(){
        addLuggage();
        fallingLuggage(luggageArray[luggageIndex]);
        luggageIndex++;
    }, 2000)
}



function addLuggage() {
    var rando = Math.floor(Math.random() * 1000);
    luggage = {
        x: 0, 
        y: 0, 
        width:50,
        height:50 
    };
    luggage.x = rando;
    luggageArray.push(luggage);
}


function fallingLuggage (luggage){
    var id = setInterval(function(){
        luggage.y+=8
        if(luggage.y > 650){
            // Add code here to pause the luggage for about 1 sec. before disappering
            clearInterval(id)  
        }
    },100)
}

function drawLuggage() {
    //  console.log("falling");
    luggageArray.forEach(function (oneLuggage) {
        ctx.drawImage(luggageImageOne, oneLuggage.x, oneLuggage.y, oneLuggage.width, oneLuggage.height)
    })
}
// We need to randomize which luggage crate is created between the 4 of them.
// Maybe a randnum between 1 and 4.  Then a switch with 1-4 where each option is a different crate image?
    /*  
       var x = console.log(Math.ceil(Math.random() * 10))
        switch (x)
        case 1:
            luggageArray.forEach(function(oneLuggage){
            ctx.drawImage(luggageImageOne,oneLuggage.x, oneLuggage.y,oneLuggage.width, oneLuggage.height)})
            break;
        case 2:
            luggageArray.forEach(function(oneLuggage){
            ctx.drawImage(luggageImageTwo,oneLuggage.x, oneLuggage.y,oneLuggage.width, oneLuggage.height)})
            break;
        case 3:
            luggageArray.forEach(function(oneLuggage){
            ctx.drawImage(luggageImageThree,oneLuggage.x, oneLuggage.y,oneLuggage.width, oneLuggage.height)})
            break;
        case 4:
            luggageArray.forEach(function(oneLuggage){
            ctx.drawImage(luggageImageFour,oneLuggage.x, oneLuggage.y,oneLuggage.width, oneLuggage.height)})
            break;
    */




