/* globals game */

const bindToTouch = (selector, handler) => {
    $(selector).on('click touch', handler);
  };
  
  const bindToHoldWithAcceleration = (selector, handler ) => {
    $(selector).on('mousedown touchstart', () => {
      let maxAccelration = 3; // top speed could be added to Truck as a validation point
      let accelerationRate = .10; // accelaration rate makes game feel more realistic
      let ticks = 0;
      let listen = true;
  
      // callback to handler every 16 milliseconds which is good click / button push speed for web
      let ticker = setInterval(() => {
        if (listen) {
          // limt ticks to limit the speed, can also be done in truck class as a maxSpeed check
          ticks = ticks < maxAccelration ? ticks += accelerationRate : maxAccelration;
  
          // callback with how many ticks have elapsed
          handler(Math.abs(ticks));
        }; 
      }, 16)
  
      // turn off listener and set ticks to 0
      // NOTE: important to have mouseout function to stop of they leave the clickable area
      $(selector).on('mouseup touchend mouseout', () => {
        ticks = 0;
        listen = false;
        ticker = null;
      });
    });
  }
  
  bindToTouch('#start-button', () => {
    $('#start-screen-window').fadeToggle();
    $('#game-scene').fadeToggle(game.start());
    $('#small-logo').fadeToggle();
  });

  bindToTouch('#btn-quit', () => {
    window.location.href = 'http://www.flywithbutchohare.com';
  });
  
  bindToTouch('#btn-replay', () => {
    $('#end-screen-window').fadeToggle();
    $('#game-scene').fadeToggle(game.start());
    $('#small-logo').fadeToggle();
  });

  bindToTouch('#btn-reset', () => {
    window.location.href = 'http://www.flywithbutchohare.com';
  });

  bindToTouch('#quit-game', () => {
    window.location.href = 'http://www.flywithbutchohare.com';
  });

  
  bindToHoldWithAcceleration('#btn-move-left', (ticks) => game.moveX(-(game.truck.speed * ticks)));
  bindToHoldWithAcceleration('#btn-move-right', (ticks) => game.moveX(game.truck.speed * ticks));
  