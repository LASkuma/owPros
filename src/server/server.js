// Webpack related
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.dev';

// Express stuff
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

// Utils
import request from 'request';
import urlencode from 'urlencode';
import statsBuilder from './utils/statsBuilder';

// React & Redux
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, RouterContext, match } from 'react-router';

// Lifecycle hook
import { trigger } from 'redial';

import renderFullPage from './utils/renderFullPage';
import { configureStore } from '../common/store/configureStore';
import createRoutes from '../common/routes/root';

import * as constants from './constants';

const server = express();
const port = process.env.PORT || 3000;
const devMode = process.env.NODE_ENV == 'development';

server.disable('x-powered-by');
server.set('port', port);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(compression());

if (devMode) {
  server.use(morgan('dev'));
  const conf = config();
  const compiler = webpack(conf);
  const middleware = webpackMiddleware(compiler, {
    publicPath: conf.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false,
    }
  });
  server.use(middleware);
  server.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

server.get('/api/stats', (req, res) => {
  const plat = req.query.plat;
  const region = req.query.region;
  const battletag = req.query.battletag;

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

  if (!constants.battleTagRegEx.test(battletag)) {
    res.status(404).json({
      message: "请输入以 #数字 结尾的完整Battletag。"
    });
    return;
  }

  // Scrapping
  request(`https://playoverwatch.com/en-us/career/${plat}/${region}/${urlencode(battletag)}`, (err, respond, body) => {
    if (err) {
      res.json(err);
      return;
    }
    statsBuilder(body).then((stats) => {
      res.json(stats);
    }, (err) => {
      res.status(404).json(err);
    });
  });
});

server.get('*', (req, res) => {
  const store = configureStore();
  const routes = createRoutes(store);
  const history = createMemoryHistory(req.path);
  const { dispatch } = store;

  match({ routes, history }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error.');
    }

    if (!renderProps) {
      return res.status(404).send('Not Found');
    }
    const { components } = renderProps;
    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,
      dispatch
    };

    trigger('fetch', components, locals)
      .then(() => {
        const initialState = store.getState();
        const initialView = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const html = ReactDOM.renderToString(initialView);
        res.status(200).send(renderFullPage(html, initialState));
      })
      .catch(console.error);
  });
});

server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});

module.exports = server;
