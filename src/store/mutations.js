export function ROUTES_CACHED(state, isCached) {
  state.routesCached = isCached;
}

export function ADD_ROUTES(state, newRoutes) {
  state.routes = state.routes.concat(newRoutes);
}

export function ADD_MODE(state, mode) {
  state.modes[mode.route_type] = mode;
}
