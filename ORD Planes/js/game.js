/* globals Truck Luggage Plane */

class Game {
  constructor({
    canvasElementId,
    onScoreUpdate = (/* score */) => {},
    luggageSpawnInterval = 333,
  }){
    this._score = 0;
    this._luggage = new Set();
    this._canvasElementId = canvasElementId;
    this._onScoreUpdate = onScoreUpdate;
    this._luggageSpawnInterval = luggageSpawnInterval;
    this._time = 180;
    this._endGame = false;
  
    this.createCanvas(canvasElementId);
  }

  get canvas(){ return this._canvas; }
  set canvas(value){ this._canvas = value; }

  get canvasWidth(){ return 1400; }
  get canvasHeight(){ return 700; }

  get canvasElementId(){ return this._canvasElementId; }

  get onScoreUpdate(){ return this._onScoreUpdate; }

  get luggageSpawnInterval() { return this._luggageSpawnInterval; }

  get luggageSpawner() { return this._luggageSpawner; }
  set luggageSpawner(val) { this._luggageSpawner = val; }

  get score(){ return this._score; }
  set score(value){ this._score = value; }

  get truck(){ return this._truck; }
  set truck(value) { this._truck = value; }

  get luggage(){ return this._luggage; }

  get plane(){ return this._plane; }
  set plane(value) { this._plane = value; }

  get timer() { return this._timer; }
  set timer(value) { this._timer = value; }
  
  get time(){ return this._time; }
  set time(value){ this._time = value; }

  get endGame() { return this._endGame; }
  set endGame(value){ this._endGame = value; }



  createCanvas(elementId){ 
    const canvas = document.getElementById(elementId);
    this.canvas = canvas.getContext('2d');
    canvas.width = this.canvasWidth;
    canvas.height = this.canvasHeight;

    return this.canvas;
  }

  clearCanvas(){
    this.canvas.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  startCountdown()
  {
    this.timer = setInterval(() => {
      var seconds = this.time;
      const minutes = Math.floor(seconds/60);
      const time001 = document.getElementById('time001');
      seconds = seconds % 60;
      seconds = seconds <10? '0' + seconds:seconds;
      time001.innerHTML = minutes + ':' + seconds;
      this.time --;
      if (this.time < 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.timer);
    this.stop();
  }

  updateScore(int = 0) {
    this.score += int;
    this.onScoreUpdate(this.score)
  }

  moveX(int) {
    this.truck.move(int);
  }

  spawnTruck() {
   this.truck = new Truck({
     game: this,
   });
  }

  clearTruck() {
    this.truck.stopAnimation();
  }

  spawnPlane() {
    this.plane = new Plane({
      game: this,
    });
  }

  clearPlane() {
    this.plane.stopAnimation();
  }

  stopLuggageSpawner() {
    clearInterval(this.luggageSpawner);
    this.luggageSpawner = null;
  }

  startLuggageSpawner() {
    this.luggageSpawner = setInterval(
      () => this.spawnLuggage(), 
      this.luggageSpawnInterval
    );
  }

  // spawn luggage relative to plane
  spawnLuggage() {
    const {x, y, width, height} = this.plane;
    const offsetX = 15;
    const offsetY = 10;
    const triggerSpawn = Math.random() >= 0.5;

    // only spawn luggage if plane is on screen
    if (this.plane.x >= 0 && this.plane.x + this.plane.width <= this.canvasWidth) {
      //50-50 chance that the interval will create luggage. Adds some randomness.
      if (triggerSpawn) {
        // spawn some luggage
        this.luggage.add(
          new Luggage({
            x: (x + width - offsetX),
            y: (y + height + - offsetY),
            game: this,
          })
        );
      }
    }
  }

  start() {
    this.endGame = false;
    this.score = 0;
    this.time = 180;
    this.startCountdown();
    this.updateScore(0, () => {});
    this.spawnTruck();
    this.spawnPlane();
    this.startLuggageSpawner();
  }

  stop() {
    this.stopLuggageSpawner();
    this.endGame = true;
    this.clearPlane();
    this.clearTruck();
    this.truck = null;
    this.plane = null;
    $('#game-scene').hide();
    $('#end-screen-window').show();
  }

  // return true if two bounding boxes collided
  static didCollide(obj1, obj2){
    // since we have getBoundingBox it should be easy
    if (!obj1.getBoundingBox && !obj2.getBoundingBox) return false;

    // get boxes
    const box1 = obj1.getBoundingBox();
    const box2 = obj2.getBoundingBox();

    // check for intersections based on the vertices from bounding box
    return (box1.topLeft.x < (box2.bottomRight.x) && 
    (box1.bottomRight.x) > box2.topLeft.x) && 
    (box1.topLeft.y < (box2.bottomRight.y) && 
    (box1.bottomRight.y) > box2.topLeft.y);
  }
}

const game = new Game({
  canvasElementId: 'canvas',
  onScoreUpdate: (score) => $('.score').text(score),
});
