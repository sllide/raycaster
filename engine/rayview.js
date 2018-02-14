class RayView {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.view = document.createElement('canvas');
    
    this.view.getContext('2d').imageSmoothingEnabled = false;
    this.view.width = width;
    this.view.height = height;
  }

  //visualize ray data
  build(rays) {
    var ctx = this.view.getContext('2d');
  
    //clear the screen
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.width,this.height);
    ctx.fillStyle = "white";
    ctx.fillRect(this.width/2-1,this.height/2-1,2,2);
    //loop over trace result
    for(var x=0;x<rays.length;x++) {
      var ray = rays[x];
      ray.distance *= 10;
      ctx.strokeStyle = 'rgb('+(100+ray.distance)+',0,0)';
      ctx.lineWidth = 0.1;
      ctx.beginPath();
      ctx.moveTo(this.width/2,this.height/2);
      ctx.lineTo(Math.cos(ray.rotation/180*Math.PI)*ray.distance+this.width/2,Math.sin(ray.rotation/180*Math.PI)*ray.distance+this.height/2);
      ctx.stroke();
    }
  }

  getDOM(){return this.view;}
}
