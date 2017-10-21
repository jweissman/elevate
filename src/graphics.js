export class Graphics {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  }

  line(x0,y0,x1,y1) {
    var w = this.width(),
        h = this.height();
    console.log(`LINE (${x0},${y0}) -> (${x1},${y1})`);
    this.context.beginPath();
    this.context.moveTo(x0,y0);
    this.context.lineTo(x1,y1);
    this.context.stroke();
  }

  width() { return this.canvas.width; }
  height() { return this.canvas.height; }
}
