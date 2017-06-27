<template>
  <div>
    stop
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    stop: String
  },
  computed: {
    ...mapGetters(['getAlertsForStop', 'getPredictionsForStop', 'getScheduleForStop']),
    alerts() {
      return this.getAlertsForStop(this.stop);
    },
    predictions() {
      return this.getPredictionsForStop(this.stop);
    },
    schedule() {
      return this.getScheduleForStop(this.stop);
    },
  },
  methods: {
    ...mapActions(['fetchAllForStop'])
  },
  created() {
    this.fetchAllForStop(this.stop);
  }
};
</script>
