import Vue from 'vue';
import core, { instanceProperties } from '.';
import App from './App.vue';
import router from './router';
import store from './store';
import components from './components';

Vue.config.productionTip = false;

Vue.use(core);
Vue.use(components);

new Vue({
  router,
  store,
  ...instanceProperties,

  render: h => h(App),
}).$mount('#app');
