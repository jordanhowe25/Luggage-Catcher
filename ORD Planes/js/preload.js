(() => {
    [
        // put assets here
        './images/plane-left.png',
        './images/plane-right.png',
        './images/truck-left.png',
        './images/truck-right.png',
        './images/luggage-blue.png',
        './images/luggage-pink.png',
        './images/luggage-red.png',
        './images/luggage-yellow.png',
    ].forEach(src => {
        const img = new Image();
        img.src = src;
        return img;  
    })
})();