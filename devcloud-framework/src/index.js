import 'iview/dist/styles/iview.css';

import iview from 'iview';
import VueWait from 'vue-wait';
import components from './components';
import * as filters from './utils/filters';

import * as _commonRouter from './router_common';

export const commonRouter = _commonRouter;

export const instanceProperties = {
  wait: new VueWait({
    useVuex: true,
  }),
};

export default {
  install(Vue) {
    // Vue.config.errorHandler = function (err, vm, info) {
    //   // handle error
    //   // `info` is a Vue-specific error info, e.g. which lifecycle hook
    //   // the error was found in. Only available in 2.2.0+
    // };


    Vue.use(iview);
    Vue.use(VueWait);
    Vue.use(components);

    Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
  },
};
