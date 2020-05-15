(() => {
    [
        // put assets here
        './images/airplane-left.png',
        './images/airplane-right.png',
        './images/truck-left.png',
        './images/truck-right.png',
        './images/luggage-blue.png',
        './images/luggage-pink.png',
        './images/luggage-red.png',
        './images/luggage-yellow.png',
        './images/airport-truck-right.png',
        './images/airport-truck-left.png',
    ].forEach(src => {
        const img = new Image();
        img.src = src;
        return img;  
    })
})();

(() => {
    var t;
    //window.onload = resetTimer;
    window.onmousemove = resetTimer; // catches mouse movements
    window.onmousedown = resetTimer; // catches mouse movements
    window.onclick = resetTimer;     // catches mouse clicks
    window.onscroll = resetTimer;    // catches scrolling
    window.onkeypress = resetTimer;  //catches keyboard actions
 
   function reload() {
          window.location.href = 'http://www.flywithbutchohare.com';  
   }
 
   function resetTimer() {
        clearTimeout(t);
        t= setTimeout(reload, 120000);  // time is in milliseconds (1000 is 1 second)
    }   
})();