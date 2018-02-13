//holds all world data
//the world itself is a 2d array with every unit having a fixed with of 1x1
class World {
  constructor(width, height) {
    this.size = new Vector2(width, height);
    this.grid = new Array(width*height).fill({type:0});
  }

  storeCell(x,y,cell) {
    this.grid[this.size.x*y+x] = cell;
  }

  getCell(x,y) {
    var offset = this.size.x*y+x;
    if(offset>=0&&offset<this.grid.length) {
      if(x>=0&&x<this.size.x&&y>=0&&y<this.size.y) {
        return this.grid[offset];
      }
    }
    return {type:-1};
  }

  getWorldSize() {
    return this.size.clone();
  }
}
