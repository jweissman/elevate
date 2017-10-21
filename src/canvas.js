import { Html } from './html.js';

export class Canvas {
  render(opts) {
    var html = new Html();
    var element = html.canvas(opts);
    element.setAttribute("style",
                         "height:100%;width:auto");
    return element;
  }
}
