import Vue from 'vue';
import Router from 'vue-router';
import { commonRouter } from '.';

Vue.use(Router);

export default new Router({
  routes: [
    commonRouter.login,
    commonRouter.page404,
    commonRouter.page403,
    commonRouter.page500,
  ],
});
