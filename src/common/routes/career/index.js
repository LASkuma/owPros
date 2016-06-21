// polyfill webpack System.import
if(typeof System === "undefined") { var System = { import: function(path) { return Promise.resolve(require(path));}};}
import { injectAsyncReducer } from '../../store/configureStore';

export default function createRoutes(store) {
  return {
    path: 'career/:region/:battletag',
    getComponents(location, cb) {
      Promise.all([System.import('./container'), System.import('./reducer')])
        .then(([container, reducer]) => {
          injectAsyncReducer(store, 'currentStats', reducer.default);
          cb(null, container.default);
        });
    }
  }
}
