class Loop {
  constructor(fps) {
    this.interval = 1000/fps;
  }

  registerCallback(callback) {
    this.callback = callback;
  }

  run() {
    this.then = Date.now();
    this.start = this.then;
    this.looping = true;
    this.loop();
  }

  stop() {
    this.looping = false;
  }

  loop() {
    if(this.looping) {
      requestAnimationFrame(this.loop.bind(this));
    }
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if(this.elapsed > this.interval) {
      this.then = this.now - (this.elapsed % this.interval);
      this.callback();
    }
  }
}
