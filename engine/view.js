class View {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
    this.clearColor = 'white';
  }

  clear() {
    this.context.fillStyle = this.clearColor;
    this.context.fillRect(0,0,this.width,this.height);
  }

  setClearColor(color) {
    this.clearColor = color;
  }

  getCanvas(){return this.canvas;}
  getContext(){return this.context;}
}
