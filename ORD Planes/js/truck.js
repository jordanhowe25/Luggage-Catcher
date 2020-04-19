class Truck {
  constructor({
      x = 600,
      y = 540,
      height = 65,
      width = 112,
      canvas = ctx,
      images = [
          './images/truck-left.png',
          './images/truck-right.png'
      ],
      speed = 5
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
  
  move(px) {
    // move defined amount of pixels use +/-
    this.clear();
    
    if (px >= 0) {
      this.image = this.images[1];
      //Checks if within bounds when moving right
      if ((this.x + this.speed) > 1290) {
        this.draw(1290); 
      } else {
        this.draw(this.x + this.speed);
      }
    } else {
      this.image = this.images[0];
      //Checks if within bounds when moving left
      if ((this.x + this.speed) < 0) {
        this.draw(0);
      } else {
        this.draw(this.x - this.speed);
      }
    }  
}


draw(x = this.x, y = this.y) {
  // update position data
  this.x = x;
  this.y = y;

  // draw on canvas
  this.canvas.drawImage(
      this.image,
      x, 
      y,
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
    const x = this.x;
    const y = this.y;
    this.clear();
    this.draw();
  
  }
  
};
