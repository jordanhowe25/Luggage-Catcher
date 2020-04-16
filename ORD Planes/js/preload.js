(() => {
    [
        // put assets here
        './images/Luggage Crate.png',
        './images/truck-left.png',
        './images/truck-right.png'
    ].forEach(src => {
        const img = new Image();
        img.src = src;
        return img;
        
    })
})();