<template>
  
  <div class="columns">
    <div class="column" v-for="(routes, mode) in modes">
      <h2 class="title">{{mode}}</h2>
      <ul>
        <li v-for="route in routes" v-if="!route.route_hide"><router-link :to="{name: 'Route', params: { route: route.route_id }}">{{route.route_name}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return !this.$store.getters.isRoutesFetched;
    },
    modes() {
      return this.$store.getters.getAllModes;
    }
  },
  created() {
    this.$store.dispatch('fetchAllRoutes');
  }
};
</script>
