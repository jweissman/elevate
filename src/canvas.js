export class Canvas {
  render(width, height) {
    var element = document.createElement('canvas');
    element.setAttribute("id", "game-canvas");
// id = "game-canvas"; //
    element.setAttribute("width",  800);
    element.setAttribute("height", 600);
    return element;
  }
}
