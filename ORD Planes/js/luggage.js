/* globals Game */

class Luggage {
    constructor({
      x = 0,
      y = 0,
      height = 50,
      width = 50,
      images = [
          './images/luggage-blue.png',
          './images/luggage-pink.png',
          './images/luggage-yellow.png',
          './images/luggage-red.png'
      ],
      maxSpeed = 4,
      game,
    }) {
      // position data
      this._x = x;
      this._y = y;
      this._height = height;
      this._width = width;
      this._maxSpeed = maxSpeed;
  
  
      // parent game
      this._game = game;
  
      // images to use
      this._images = this.loadImages(images);
  
      // loadImage images
      this.loadImage();
  
      // set random speed for luggage based on maxSpeed
      this._speed = Math.floor(Math.random() * (maxSpeed - 1) + 1);
  
      // draw to canvas at intial position
      this.draw();
  
      // start animation lifecycle
      this.startAnimation();
    }
  
    // Getters and Setters
    get game(){ return this._game; }
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get speed() { return this._speed; }
    set speed(speed) { this._speed = speed; }
    get maxSpeed() { return this._maxSpeed; }
    get height() { return this._height; }
    get width() { return this._width; }
    get canvas() { return this.game.canvas; }
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
      // remove object from canvas 
      this.canvas.clearRect(
        this.x,
        this.y,
        this.width,
        this.height,
      );
    }
  
    startAnimation() {
      const request = requestAnimationFrame(() => this.startAnimation(request));
      if (this.y >= 560){
        // collided with bottom of screen -- no points
        this.clear();
        cancelAnimationFrame(request);
      } else {
        this.update();
        // check for collision with truck -- add points
        if(Game.didCollide(this.game.truck, this)) {
          this.clear();
          // remove object from game memory
          this.game.luggage.delete(this);
          this.game.updateScore(1);
          cancelAnimationFrame(request);
        }
      }
    }
  
    // return vertices of boundingbox
    getBoundingBox() {
      return {
        topLeft: {x: this.x, y: this.y},
        bottomRight: {x: this.x + this.width, y: this.y + this.height},
      }
    }
  };
  