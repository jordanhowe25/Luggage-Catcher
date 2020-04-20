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
        speed = 1,
        minSpeed = 1,
        maxSpeed = 1
    }) {
        // position data
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
        this._speed = speed;
        this._minSpeed = minSpeed;
        this._maxSpeed = maxSpeed;

        // parent canvas
        this._canvas = canvas;
    
        // images to use
        this._images = this.loadImages(images);

        // loadImage images
        this.loadImage();

        //Set min and max speed range based on score
        this.setRandomSpeedVars(score);

        // Randomize speed per min and max speed variables
        this._speed = this.randomSpeed();
        console.log(this.speed)
       
 
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
    get minSpeed() { return this._minSpeed; }
    set minSpeed(minSpeed) {this._minSpeed = minSpeed}
    get maxSpeed() { return this._maxSpeed; }
    set maxSpeed(maxSpeed) {this._maxspeed = maxSpeed}

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
        this.clear();
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

    setRandomSpeedVars(score) {
        if (score < 25) {
            this._minSpeed = 1;
            this._maxSpeed = 1;
        } else if (score < 50) {
            this._minSpeed = 1;
            this._maxSpeed = 2;
        } else if (score < 75) {
            this._minSpeed = 1;
            this._maxSpeed = 3;
        } else if (score < 100) {
            this._minSpeed = 2;
            this._maxSpeed = 3;
        } else if (score < 125) {
            this._minSpeed = 2;
            this._maxSpeed = 4;
        } else {
            this._minSpeed = 2;
            this._maxSpeed = 5;
        }
    }

    randomSpeed(){
      const min = Math.ceil(this._minSpeed);
      const max = Math.floor(this.maxSpeed);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    startAnimation() {
       const request = requestAnimationFrame(() => this.startAnimation(request));
        if (this.y >= 560){
            this.clear();
            cancelAnimationFrame(request);
        } else {
            this.update();
            if(this.checkCollisions()) {
                this.clear();
                cancelAnimationFrame(request);
            }
        }
        
      }


    checkCollisions() {
        if (this.checkHitbox(truck)) {
            score ++;
            ShowScore();
           return true;
        }
    }
    checkHitbox(otherObject){
        return (((this.x + this.width) > otherObject.x && (this.x < (otherObject.x + otherObject.width))) && ((this.y + this.height) > otherObject.y && (this.y < (otherObject.y + otherObject.height))));
    }
};









