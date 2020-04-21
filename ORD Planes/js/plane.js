class Plane {
  constructor({
    x = 0,
    y = 50,
    height = 65,
    width = 112,
    images = [
        './images/plane-left.png',
        './images/plane-right.png'
    ],
    speed = 7,
    game,
  }) {
    // position data
    this._x = x;
    this._y = y;
    this._height = height;
    this._width = width;
    this._speed = speed;

    // parent game
    this._game = game;

    // images to use
    this._images = this.loadImages(images);

    // loadImage images
    this.loadImage();

    // draw to canvas at intial position
    this.draw(this.x, this.y);

    // start animation lifecycle
    this.startAnimation();
  }
  
  //Getters and Setters
  get game(){ return this._game; }
  get x() { return this._x; }
  set x(x) { this._x = x; }
  get y() { return this._y; }
  set y(y) { this._y = y; }
  get speed() { return this._speed; }
  set speed(speed) { this._speed = speed; }
  get height() { return this._height; }
  get width() { return this._width; }
  get canvas() { return this.game.canvas; }
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
    if (px >= 0) {
      this.image = this.images[1];
      //Checks if within bounds when moving right
      if ((this.x + this.speed) > 1700) {
        this.speed = (this.speed * -1);
        this.draw()
      } else {
        this.draw();
      }
    } else {
      this.image = this.images[0];
      //Checks if within bounds when moving left
      if ((this.x + this.speed) < -300) {
        this.speed = (this.speed * -1);
        this.draw();
      } else {
        this.draw();
      }
    }  
  }

  update() {
    this.x += this.speed;
  }

  draw() {
    // draw on canvas
    this.clear();
    this.update();
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
    requestAnimationFrame(() => this.startAnimation());
    this.move(this.speed);
  }
  
  stopAnimation() {
    clearInterval(this.animationInterval);
    this.animationInterval = null;
  }

  // return vertices of boundingbox
  getBoundingBox() {
    return {
      topLeft: {x: this.x, y: this.y},
      bottomRight: {x: this.x + this.width, y: this.y + this.height},
    }
  }
};
  