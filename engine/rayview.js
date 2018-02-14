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
    var ctx = this.view.getContext('2d',{alpha: false});

    //clear the screen
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,this.width,this.height);
    ctx.lineWidth = 0.1;
    //loop over trace result
    for(var x=0;x<rays.length;x++) {
      var ray = rays[x];
      ray.distance.real *= 10;
      ray.distance.corrected *= 10;
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(this.width/2,this.height/2);
      ctx.lineTo(Math.cos(ray.rotation/180*Math.PI)*ray.distance.real+this.width/2,Math.sin(ray.rotation/180*Math.PI)*ray.distance.real+this.height/2);
      ctx.stroke();
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(this.width/2,this.height/2);
      ctx.lineTo(Math.cos(ray.rotation/180*Math.PI)*ray.distance.corrected+this.width/2,Math.sin(ray.rotation/180*Math.PI)*ray.distance.corrected+this.height/2);
      ctx.stroke();
    }
  }

  getDOM(){return this.view;}
}
