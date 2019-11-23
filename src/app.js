import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routers();
  }

  middlewares() {
    // usar o formata de json
    this.server.use(express.json());
  }

  routers() {
    this.server.use(routes);
  }
}

export default new App().server;
