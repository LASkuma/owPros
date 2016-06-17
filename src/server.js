import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

const server = express();
const port = process.env.PORT || 3000;
const devMode = process.env.NODE_ENV == 'development';

server.disable('x-powered-by');
server.set('port', port);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(compression());

if (devMode) {
  server.use(morgan('dev'));
}

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
