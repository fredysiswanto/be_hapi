// const Hapi = require("@hapi/hapi");
import Hapi from '@hapi/hapi';
import routes from '../src/routes.js';

const init = async () => {
  const server = Hapi.server({ port: 5000, host: 'localhost' });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
