export class Html {
  div(opts, contents=null) {
    var element = document.createElement('div');
    element.setAttribute("id", opts.id);
    if (contents != null) {
      element.appendChild(contents);
    }
    return element;
  }

  canvas(opts) {
    var element = document.createElement('canvas');
    element.setAttribute("id", opts.id);
    element.setAttribute("width",  opts.width);
    element.setAttribute("height", opts.height);
    element.setAttribute("style",
                         "height:100%;width:auto");
    return element;
  }
}
