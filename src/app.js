import _ from 'lodash';
import { Game } from './game.js';
import { Canvas } from './canvas.js';
import { Html } from './html.js';

export class App {
  constructor() {
    this.canvas = new Canvas();
    this.canvasId = 'game-canvas';
  }

  bootstrap() {
    console.log("lv8 bootstrappppp");
    this.game = new Game({canvasId: this.canvasId});
    this.game.kickstart();
  }

  shellAround(contents) {
    var html = new Html();
    return html.div({id: 'elevate-shell'}, contents);
  }

  render() {
    var canvasElement = this.canvas.render({
      id: this.canvasId,
      //width: 800,
      //height: 600
    });

    var shell = this.shellAround(canvasElement);
    return shell;
  }
}
