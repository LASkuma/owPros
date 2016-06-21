// polyfill webpack System.import
if(typeof System === "undefined") { var System = { import: function(path) { return Promise.resolve(require(path));}};}
import App from '../components/App';
import Home from '../components/Home';

export default function createRoutes(store) {
  return {
    path: '/',
    component: App,
    getChildRoutes(location, cb) {
      System.import('./career').then((module) => {
        cb(null, module.default(store))
      });
    },

    indexRoute: {
      component: Home
    }
  };
}
