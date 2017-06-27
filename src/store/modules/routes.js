import Vue from 'vue';
import { routes } from '@/api';

const init = {
  fetched: false,
  byId: {},
  all: [],
  lines: {
    Red: [],
    Green: [],
    Orange: [],
    Silver: []
  },
  modes: {
    Subway: [],
    'Commuter Rail': [],
    Bus: [],
    Boat: []
  }
};

export default {
  state: init,
  actions: {
    fetchAllRoutes({ commit, state }) {
      if (state.fetched) {
        return;
      }

      routes().then(({ data }) => {
        data.mode.forEach(mode => commit('addRoutes', {
          newRoutes: mode.route,
          modeName: mode.mode_name
        }));
        commit('setFetched', { isFetched: true });
      });
    }
  },
  getters: {
    isRoutesFetched: store => store.fetched,
    getAllRoutes: store => store.all,
    getAllModes: store => store.modes,
    getRoutesForMode: store => mode => store.modes[mode],
    getRouteById: store => routeId => store.byId[routeId]
  },
  mutations: {
    setFetched(store, { isFetched }) {
      store.fetched = !!isFetched;
    },
    addRoutes(store, { newRoutes, modeName }) {
      store.all = store.all.concat(newRoutes);
      store.modes[modeName] = store.modes[modeName].concat(newRoutes);
      newRoutes.forEach(route => Vue.set(store.byId, route.routeId, route));
    }
  }
};
