class DebugView {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.view = document.createElement('canvas');
    this.view.width = width;
    this.view.height = height;
  }

  build(world, camera, rays) {
    var ctx = this.view.getContext('2d');
    var scale = new Vector2d(this.width / world.getWorldSize().x, this.height / world.getWorldSize().y);
    ctx.imageSmoothingEnabled = false;
  
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,this.width,this.height);
    this.drawGrid(world,ctx,scale);
    this.drawRays(rays,ctx,scale);
    this.drawCamera(camera,ctx,scale);
  }

  drawGrid(world, ctx, scale) {
    for(var y=0;y<this.width;y++) {
      for(var x=0;x<this.height;x++) {
        var cell = world.getCell(x,y);
        if(cell.type === World.cellTypes.wall || cell.type === World.cellTypes.mirror) {
          ctx.fillStyle = cell.color;
          ctx.fillRect(x*scale.x,y*scale.y,scale.x,scale.y);
        }
      }
    }
  }

  drawCamera(camera, ctx, scale) {
    var pos = camera.getPos().clone();
    pos.mul(scale);

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(pos.x,pos.y,4,0,2*Math.PI);
    ctx.fill();
  }

  drawRays(rays, ctx, scale) {
    var pos = camera.getPos().clone();
    pos.mul(scale);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = .2;
    for(var i=0;i<rays.length;i++) {
      var ray = rays[i];
      ctx.beginPath();
      ctx.moveTo(pos.x,pos.y);
      ray.hitPos.mul(scale);
      ctx.lineTo(ray.hitPos.x,ray.hitPos.y);
      ctx.stroke();
    }
  }

  setClearColor(color) {
    this.clearColor = color;
  }

  getCanvas(){return this.view;}
}
