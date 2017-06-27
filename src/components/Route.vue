<template>
  <div>
    <h2 class="title">{{routeName}}</h2>
    <div class="columns">
      <div v-for="direction in directions" class="column">
        <h2 class="title">{{direction.direction_name}}</h2>
        <ul>
          <li v-for="stop in direction.stop"><router-link :to="{ name: 'Stop', params: { stop: stop.stop_id }}">{{stop.stop_name}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { stopsByRoute } from '../api';

export default {
  props: {
    route: String
  },
  computed: {
    ...mapGetters(['getRouteById']),
    routeName() {
      return this.getRouteById(this.route);
    }
  },
  data() {
    return {
      directions: []
    };
  },
  created() {
    stopsByRoute(this.route).then(({ data }) => {
      this.directions = data.direction;
    });
  }
};
</script>
