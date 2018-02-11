class World {
  constructor(width, height) {
    this.size = new Vector2d(width, height);
    this.grid = new Array(width*height).fill(this.createCell(World.cellTypes.empty,'black'));
  }

  storeCell(x,y,cell) {
    this.grid[this.size.x*y+x] = cell;
  }

  createCell(type, color) {
    return {
      type: type,
      color: color,
    };
  }

  getCell(x,y) {
    var offset = this.size.x*y+x;
    if(offset>=0&&offset<this.grid.length) {
      return this.grid[offset];
    }
    return this.createCell(World.cellTypes.invalid,'black');
  }

  getGridSize() {
    return this.grid.length;
  }

  getWorldSize() {
    return this.size.clone();
  }
}

World.cellTypes = Object.freeze({
  invalid: -1,
  empty: 0,
  wall: 1,
  mirror: 2,
});
