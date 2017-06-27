import * as mbta from '../api';

export default function fetchStops({ commit, state }, routeId) {
  if (state.routesCached) {
    return;
  }

  mbta.stopsByRoute(routeId).then(({ data }) => {
    data.mode.forEach(mode => commit('ADD_STOPS', mode));
    commit('ROUTES_CACHED', true);
  });
}

