import Vue from 'vue';
import Router from 'vue-router';
// import { commonRouter } from 'devcloud-framework';
import MasterView from './MasterView.vue';
import Kanban from './modules/kanban/router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'kanban' },
    },
    {
      path: '/kanban',
      component: MasterView,
      children: Kanban('kanban'),
    },

    // commonRouter.login,
    // commonRouter.page404,
    // commonRouter.page403,
    // commonRouter.page500,
  ],
});
