import { App } from './app.js';

function setup() {
  var app = new App();
  document.body.appendChild(app.render());
  app.bootstrap();
  return app;
}

setup();
