import _ from 'lodash';
import { Canvas } from './canvas.js';

export class App {
  canvas() {
    return new Canvas();
  }

  render() {
    var element = document.createElement('div');
    element.setAttribute("id", "elevate-shell")
    element.appendChild(this.canvas().render());
    //element.innerHTML = _.join(['HELLO', 'WORLD'], ' ');
    //element.innerHTML += this.canvas().render();
    return element;
  }
}

//export function appShell() {
//  var element = document.createElement('div');
//  element.setAttribute("id", "elevate-shell")
//  //element.innerHTML = _.join(['HELLO', 'WORLD'], ' ');
//  element.innerHTML += (new Canvas()).render();
//  return element;
//};
