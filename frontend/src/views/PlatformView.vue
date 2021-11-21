<template>
  <v-row>
    <v-col>
      <h4>Result</h4>
      <h2>{{ station.name }}</h2>

      <select v-model="platform">
        <option v-for="p in station.platforms" :key="p.name" :value="p">{{p.name}}</option>
      </select>
      <select v-model="numCars">
        <option v-for="i in 3" :key="i" :value="i">{{" ▅ ".repeat(i)}}</option>
      </select>

      <station v-if="platform != null" :train="train" :platform="platform" :units="units"></station>
    </v-col>
  </v-row>
</template>

<script>
import data from "../assets/data.json";
import Station from "../components/Station"

export default {
  components: {Station},
  name: "PlatformView",
  data() {
    return {
      stations: data.stations,
      trains: data.trains
    }
  },
  computed: {
    station: function() {
      return this.stations.find(it => it.name === this.$route.params.station)
    },
    platform: function() {
      return this.station.platforms.find(it => it.name === this.$route.params.platform)
    },
    train: function() {
      return this.trains.find(it => it.name === this.$route.params.train)
    },
    units: function() {
      if (this.$route.query.units !== null) {
        return parseInt(this.$route.query.units);
      } else {
        return this.train.units_per_train[0].units;
      }
    }
  }
}
</script>

<style scoped>

</style>