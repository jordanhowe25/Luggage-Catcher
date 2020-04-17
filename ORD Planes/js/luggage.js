class Luggage {
    constructor({
        x = 0,
        y = 0,
        height = 50,
        width = 50,
        canvas = ctx,
        images = [
            './images/luggage-blue.png',
            './images/luggage-pink.png',
            './images/luggage-yellow.png',
            './images/luggage-red.png'
        ],
        speed = 1
    }) {
        // position data
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._speed = speed;

        // parent canvas
        this._canvas = canvas;
    
        // images to use
        this._images = this.loadImages(images);

        // loadImage images
        this.loadImage();
 
        // draw to canvas at intial position
        this.draw();

        // start animation lifecycle
        this.startAnimation();
    }

    //Getters and Setters
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get speed() { return this._speed; }
    set speed(speed) { this._speed = speed; }
    get height() { return this._height; }
    get width() { return this._width; }
    get canvas() { return this._canvas; }
    get images() { return this._images; }
    get image() { return this._image; }
    set image(src) { this._image = src; }
    get animationInterval() { return this._animationInterval; }
    set animationInterval(interval) { this._animationInterval = interval }

    loadImages(images) {
        return images.map(src => {
            const img = new Image();
            img.height = this.height;
            img.width = this.width;
            img.src = src;
            return img;
        });
    }
    
    loadImage() {
        this.image = this.images[Math.floor(Math.random() * this.images.length)];
    }
    
    update() {
        this.y += this.speed;
        this.draw();
    }

    draw() {
        this.canvas.drawImage(
            this.image,
            this.x, 
            this.y,
            this.width, 
            this.height
        );
    }

    clear() {
        this.canvas.clearRect(
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }

    startAnimation() {
        this.animationInterval = setInterval(() => {
            if (this.y == 560) {
                this.clear();
                this.stopAnimation();
            } else {
                this.clear();
                this.update(); 
            }
        }, 10);
    }

    stopAnimation() {
        clearInterval(this.animationInterval);
        this.animationInterval = null;
    }
};









