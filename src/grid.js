export class Grid {
  constructor(opts) {
    this.meshSize = opts.meshSize;
    //this.meshSize = this.meshSize || 20;
  }

  draw(graphics) {
    var width = graphics.width(),
        height = graphics.height(),
        sz = this.meshSize;

    console.log('drawing grid', width, height);

    var verticalLines = width / sz; // this.meshSize;
    console.log('vertical lines', verticalLines);
    for (var x=0; x<verticalLines; x++) {
      var xi = x * sz;
      graphics.line(xi,0,xi,height);
    }

    var horizontalLines = height / sz; // this.meshSize;
    for (var y=0; y<horizontalLines; y++) {
      var yi = y * sz;
      graphics.line(0,yi,width,yi);
    }

    console.log('grid drawn!');
  }
}
