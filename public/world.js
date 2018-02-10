class World {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = new Array(width);
    for(var i=0;i<width;i++){
      this.grid[i] = new Array(height);
    }
  }

  addBoundaries() {
    var y = 0;
    while(y<this.height) {
      var x = 0;
      while(x<this.width) {
        if(y==0||y==this.height-1) {
          this.addBox(x++,y,'red');
        } else {
          this.addBox(0,y,'red');
          this.addBox(this.width-1,y,'red');
          break;
        }
      }
      y++;
    }
  }

  addBox(x,y,c) {
    this.grid[x][y] = ({type:'wall',c:c});
  }

  registerObserver(observer) {
    this.observer = observer;
  }
  
  step() {
    observer.update();
  }

  getCell(x,y) {
    if(x<0||x>this.width||y<0||y>this.height) {
      return {type:'invalid'};
    }
    if(typeof this.grid[x][y] === 'undefined') {
      return {type:'empty'};
    }
    return this.grid[x][y];
  }

  getObserver() {return this.observer;}
  getGrid() {return this.grid;}
}
