class Tracer {
  
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.c2d = this.canvas.getContext('2d');
  }

  render() {
    return;
    for(var y=0;y<this.height;y++){
      for(var x=0;x<this.width;x++){
        this.renderPixel(x,y);
      }
    }
  }
  
  renderPixel(x,y) {
    this.c2d.fillStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.c2d.fillRect(x,y,1,1);
  }

  getDom() {
    return this.canvas;
  }
}
