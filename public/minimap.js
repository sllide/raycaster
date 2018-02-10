class MiniMap {

  constructor(width, height, world) {
    this.world = world;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width = width;
    this.canvas.height = this.height = height;
    this.c2d = this.canvas.getContext('2d');
  }

  render() {
    var grid = this.world.getGrid();
    this.c2d.fillStyle = 'black';
    this.c2d.fillRect(0,0,this.width,this.height);
    
    var xMult = this.width / grid.length;
    var yMult = this.height / grid[0].length;
    //draw grid
    this.c2d.fillStyle = 'grey';
    for(var i=0;i<this.width;i+=8){
      this.c2d.fillRect(i,0,1,this.height);
      this.c2d.fillRect(0,i,this.width,1);
    }
    
    //draw boxes    
    for(var x=0;x<grid.length;x++) {
      for(var y=0;y<grid[x].length;y++){
        var cell = grid[x][y];
        if(typeof cell !== 'undefined' && cell['type'] === 'wall'){
          this.c2d.fillStyle = cell['c'];
          this.c2d.fillRect(x*xMult,y*yMult,xMult,yMult);
        }
      }
    }

    this.drawObserver();
  }

  drawObserver() {
    var observer = this.world.getObserver();
    var pos = observer.getPos();
    var size = observer.getSize();
    var rotation = observer.getRotation();

    this.c2d.fillStyle = 'white';
    this.c2d.beginPath();
    this.c2d.arc(pos.x,pos.y,size,0,2*Math.PI);
    this.c2d.fill();
    
    this.c2d.strokeStyle = 'white';
    this.c2d.lineWidth = 2;
    this.c2d.beginPath();
    this.c2d.moveTo(pos.x, pos.y);
    this.c2d.lineTo(pos.x + (Math.sin(rotation / 180 * Math.PI)*10),pos.y + (Math.cos(rotation / 180 * Math.PI)*10));
    this.c2d.stroke();
  }

  getDom() {
    return this.canvas;
  }
}
