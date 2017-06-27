import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import router from './router';
import store from './store';

import App from './App';

Vue.config.productionTip = false;

Vue.use(Buefy);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
