class World {
  constructor() {
    this.objects = [];
  }

  addBoundaries(width, height, size) {
    this.addBox(0,0,width,size,'red');
    this.addBox(0,0,size,height,'red');
    this.addBox(0,height-size,width,size,'red');
    this.addBox(width-size,0,size,height,'red');
  }

  addBox(x,y,w,h,c) {
    this.objects.push({type:'box',x:x,y:y,w:w,h:h,c:c});
  }

  registerObserver(observer) {
    this.objects.push(observer);
  }

  getObjects() {return this.objects;}
}
