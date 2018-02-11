class Tracer {
  
  constructor(world, camera, view, debugView) {
    this.world = world;
    this.camera = camera;
    this.view = view;
    this.debugView = debugView;
    this.rays = new Array();
  }

  trace() {
    this.rays = new Array();
    for(var x=0;x<this.view.width;x++) {
      this.rays.push(this.traceLine(x));
    } 
  }
  
  traceLine(x) {
    var camPos = this.camera.getPos();
    var cameraX = 2 * x / this.view.width - 1;
    var rayDir = this.camera.getPlane().clone();
    rayDir.mul(new Vector2d(cameraX, cameraX));
    rayDir.add(this.camera.getDir());
    
    //get the cell width and height
    var cellDistX = Math.abs(1 / rayDir.x);
    var cellDistY = Math.abs(1 / rayDir.y);

    //calculate initial values
    var mapPos = new Vector2d(Math.floor(camPos.x),Math.floor(camPos.y));
    var stepX = (rayDir.x < 0) ? -1 : 1;
    var stepY = (rayDir.y < 0) ? -1 : 1;
    var rayDistX = (rayDir.x < 0 ? (camPos.x - mapPos.x) : (mapPos.x + 1 - camPos.x)) * cellDistX;
    var rayDistY = (rayDir.y < 0 ? (camPos.y - mapPos.y) : (mapPos.y + 1 - camPos.y)) * cellDistY;

    var side;
    var cell;

    //loop until ray hit something
    while(true) {
      if(rayDistX < rayDistY) {
        rayDistX += cellDistX;
        mapPos.x += stepX;
        side = 0;
      } else {
        rayDistY += cellDistY;
        mapPos.y += stepY;
        side = 1;
      }
      cell = this.world.getCell(mapPos.x,mapPos.y); 

      if(cell['type'] === World.cellTypes.wall || cell['type'] === World.cellTypes.invalid) {
        break;
      }
    }

    var rayLength;
    if(side == 0) rayLength = (mapPos.x - camPos.x + (1-stepX) / 2) / rayDir.x;
    else          rayLength = (mapPos.y - camPos.y + (1-stepY) / 2) / rayDir.y;

    var hitPos = camPos.clone();
    hitPos.sub(mapPos);

    return {
      x: x,
      hit: hitPos,
      distance: rayLength,
      color: cell.color,
    };
  }

  buildView() {
    var ctx = this.view.getContext();
    var viewHeight = this.view.height;
    for(var i=0;i<this.rays.length;i++) {
      var ray = this.rays[i];
      var offset = viewHeight / 2 - (viewHeight / ray.distance / 2);
      var length = viewHeight / ray.distance;
      ctx.fillStyle = ray.color;
      ctx.fillRect(ray.x,offset,1, length);
    }
  }

  buildDebugView() {
    var ctx = this.debugView.getContext();
    var worldSize = this.world.getWorldSize();
    var cellWidth = this.debugView.width / worldSize.x;
    var cellHeight = this.debugView.height / worldSize.y;

    var cPos = this.camera.getPos();
    var cDir = this.camera.getDir();

    ctx.fillStyle = '#222222';
    for(var y=0;y<worldSize.y;y++) {
      ctx.fillRect(0,y*cellHeight,worldSize.x*cellWidth,1);
    }
    for(var x=0;x<worldSize.x;x++) {
      ctx.fillRect(x*cellWidth,0,1,worldSize.y*cellHeight);
    }
    
    for(var y=0;y<worldSize.y;y++) {
      for(var x=0;x<worldSize.x;x++) {
        var cell = this.world.getCell(x,y);
        ctx.fillStyle = cell.color;
        if(cell.color !== 'black') {
          ctx.fillRect(x*cellWidth,y*cellWidth, cellWidth, cellHeight);
        }
      }
    }

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(cPos.x*cellWidth,cPos.y*cellHeight,3,0,2*Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;

    for(var i=0;i<this.rays.length;i++) {
      var ray = this.rays[i];
      ctx.beginPath();
      ctx.moveTo(cPos.x*cellWidth, cPos.y*cellHeight);
      ctx.lineTo(ray.hit.x*cellWidth+cellWidth/2,ray.hit.y*cellHeight+cellHeight/2);
      ctx.stroke();
    }

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cPos.x*cellWidth, cPos.y*cellHeight);
    ctx.lineTo(cPos.x*cellWidth + cDir.x*cellWidth, cPos.y*cellHeight + cDir.y*cellHeight);
    ctx.stroke();
  }
}
