class TraceView {
  constructor(width, height, multiplier, clearColor) {
    this.width = width;
    this.height = height;
    this.clearColor = clearColor;
    
    this.gameView = document.createElement('canvas');
    this.gameView.width = width;
    this.gameView.height = height;

    this.view = document.createElement('canvas');
    
    this.view.getContext('2d').imageSmoothingEnabled = false;
    this.view.width = width * multiplier;
    this.view.height = height * multiplier;
  }

  build(rays) {
    var ctx = this.gameView.getContext('2d');
    ctx.imageSmoothingEnabled = false;
  
    ctx.fillStyle = this.clearColor;
    ctx.fillRect(0,0,this.width,this.height);

    for(var i=0;i<rays.length;i++) {
      var ray = rays[i];
      var yOffset = this.height / 2 - (this.height / ray.rayLength / 2);
      var yLength = this.height / ray.rayLength;
      ctx.fillStyle = ray.cell.color;
      ctx.fillRect(ray.offset, yOffset, 1, yLength);
    }

    ctx = this.view.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.gameView,0,0, this.view.width, this.view.height);
  }

  setClearColor(color) {
    this.clearColor = color;
  }

  getCanvas(){return this.view;}
}
