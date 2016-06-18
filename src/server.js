// Express stuff
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
// Utils
import request from 'request';
import urlencode from 'urlencode';
import statsBuilder from './statsBuilder';

import * as constants from './constants';

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

server.get('/:plat/:region/:id', (req, res) => {
  const plat = req.params.plat;
  const region = req.params.region;
  const id = req.params.id;

  if (constants.platForms.indexOf(plat) < 0) {
    res.status(404).json( {
      message: "抱歉，暂不支持该平台。"
    });
    return;
  }

  if (constants.regions.indexOf(region) < 0) {
    res.status(404).json({
      message: "抱歉，暂不支持该服务器。"
    });
    return;
  }

  if (!constants.battleTagRegEx.test(id)) {
    res.status(404).json({
      message: "请输入以 #数字 结尾的完整Battletag。"
    });
    return;
  }

  request(`https://playoverwatch.com/en-us/career/${plat}/${region}/${urlencode(id)}`, (err, respond, body) => {
    // TODO: Check not found
    if (err) {
      res.json(err);
      return;
    }
    statsBuilder(body).then((stats) => {
      res.json(stats);
    });
  });

});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
