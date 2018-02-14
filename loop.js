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
    this.dt = (now - this.then) / 1000;
    this.then = now;
    this.callback(this.dt);
    if(this.looping) {
      requestAnimationFrame(this.loop.bind(this));
    }
  }

  getFps() {
    return Math.round(1/(this.dt));
  }
}
