class Plane {
    constructor({
        x = 0,
        y = 50,
        height = 65,
        width = 112,
        canvas = ctx,
        images = [
            './images/plane-left.png',
            './images/plane-right.png'
        ],
        speed = 7
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
        this.draw(this.x, this.y);
  
        // start animation lifecycle
        this.startAnimation();

        this.spawnLuggage();
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
    get spawnInterval() { return this._spawnInterval; }
    set spawnInterval(interval) {this._spawnInterval = interval}
  
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

    move(px) {
        // move defined amount of pixels use +/-
        this.clear();
        
        if (px >= 0) {
          this.image = this.images[1];
          //Checks if within bounds when moving right
          if ((this.x + this.speed) > 1700) {
            this.speed = (this.speed * -1);
            this.draw(this.x - this.speed)
          } else {
            this.draw(this.x + this.speed);
          }
        } else {
          this.image = this.images[0];
          //Checks if within bounds when moving left
          if ((this.x + this.speed) < -300) {
            this.speed = (this.speed * -1);
            this.draw(this.x + this.speed);
          } else {
            this.draw(this.x + this.speed);
          }
        }  
    }

    draw(x= this.x, y = this.y) {
    this.x = x;
    this.y = y;
  
    // draw on canvas
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
        this.draw();
        this.animationInterval = setInterval(() => {
          this.clear();
          this.move(this.speed);
      }, 10);
  }
  
    stopAnimation() {
        clearInterval(this.animationInterval);
        this.animationInterval = null;
    }

    spawnLuggage() {
        this.spawnInterval = setInterval(() => {
            var temp0 = new Luggage({x:this.x, y:this.y});
        }, 1000);
    }

    stopSpawn() {
        clearInterval(this.spawnInterval);
        this.spawnInterval = null;
    }
  };
  