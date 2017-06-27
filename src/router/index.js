import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Routes from '@/components/Routes';
import Route from '@/components/Route';
import Stop from '@/components/Stop';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/routes',
      name: 'Routes',
      component: Routes,
    },
    {
      path: '/route/:route',
      name: 'Route',
      component: Route,
      props: true
    },
    {
      path: '/stop/:stop',
      name: 'Stop',
      component: Stop,
      props: true
    }
  ],
});
