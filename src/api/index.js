// For API Documentation
// http://realtime.mbta.com/Portal/Content/Documents/MBTA-realtime_APIDocumentation_v2_1_4_2017-03-08.pdf

import axios from 'axios';
import settings from './settings';

const mbta = axios.create({
  baseURL: settings.baseURL,
  params: {
    api_key: settings.apiKey,
    format: settings.format
  }
});

// ROUTES
export function routes() {
  return mbta.get('routes');
}

export function routesByStop(stop) {
  return mbta.get('routesbystop', {
    params: { stop }
  });
}

// STOPS
export function stopsByRoute(route) {
  return mbta.get('stopsbyroute', {
    params: { route }
  });
}


export function stopsByLocation(lat, lon) {
  return mbta.get('stopsbyroute', {
    params: { lat, lon }
  });
}

// SCHEDULES
export function scheduleByStop(stop) {
  return mbta.get('schedulebystop', {
    params: { stop }
  });
}

// PREDICTIONS
export function predictionsByStop(stop) {
  return mbta.get('predictionsbystop', {
    params: { stop }
  });
}


// ALERTS
export function alertsByStop(stop) {
  return mbta.get('alertsbystop', {
    params: { stop }
  });
}

export function alertHeadersByStop(stop) {
  return mbta.get('alertheadersbystop', {
    params: { stop }
  });
}
