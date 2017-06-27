import Vue from 'vue';
import * as mbta from '@/api';

const state = {
  alertsByStop: {},
  predictionsByStop: {},
  scheduleByStop: {},
};

export default {
  state,
  actions: {
    fetchAllForStop(context, stopId) {
      mbta.alertsByStop(stopId).then(res => context.commit('newAlertsForStop', { stopId, data: res.data }));
      mbta.predictionsByStop(stopId).then(res => context.commit('newPredictionsForStop', { stopId, data: res.data }));

      if (!context.state.scheduleByStop[stopId]) {
        mbta.scheduleByStop(stopId).then(res => context.commit('newScheduleForStop', { stopId, data: res.data }));
      }
    }
  },
  getters: {
    getAlertsForStop: store => stop => store.alertsByStop[stop],
    getPredictionsForStop: store => stop => store.predictionsByStop[stop],
    getScheduleForStop: store => stop => store.scheduleByStop[stop],
  },
  mutations: {
    newAlertsForStop(store, { stopId, data }) {
      Vue.set(store.alertsByStop, stopId, data);
    },
    newPredictionsForStop(store, { stopId, data }) {
      Vue.set(store.predictionsByStop, stopId, data);
    },
    newScheduleForStop(store, { stopId, data }) {
      Vue.set(store.scheduleByStop, stopId, data);
    },
  }
};
