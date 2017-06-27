import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import modules from './modules';

Vue.use(Vuex);

const state = {
  menuOpen: false,
  modes: {}
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
});

export default store;
