class Loop {
  constructor(callback) {
    this.callback = callback;
  }

  run() {
    this.then = performance.now();
    this.looping = true;
    requestAnimationFrame(this.loop.bind(this));
  }

  stop() {
    this.looping = false;
  }

  loop(now) {
    var dt = now - this.then;
    this.then = now;
    this.callback(dt/1000);
    if(this.looping) {
      requestAnimationFrame(this.loop.bind(this));
    }
  }
}
