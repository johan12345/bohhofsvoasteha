<template>
  <div>
    <h1>Bohhofsvoasteha</h1>

    <select v-model="station">
      <option v-for="s in stations" :key="s.name" :value="s">{{s.name}}</option>
    </select>
    <select v-model="train">
      <option v-for="t in trains" :key="t.name" :value="t">{{t.name}}</option>
    </select>

    <div v-if="station != null">
      <h2>{{ station.name }}</h2>

      <select v-model="platform">
        <option v-for="p in station.platforms" :key="p.name" :value="p">{{p.name}}</option>
      </select>
      <select v-model="numCars">
        <option v-for="i in 3" :key="i" :value="i">{{" ▅ ".repeat(i)}}</option>
      </select>

      <station v-if="platform != null" :train="train" :platform="platform" :numCars="numCars"></station>
    </div>
  </div>
</template>
<script>
import Station from "./components/Station";
export default {
  components: {Station},
  data() {
    return {
      stations: [],
      trains: [],
      station: null,
      train: null,
      platform: null,
      numCars: 2
    }
  },
  async created() {
    const data = require("./assets/data.json");
    this.stations = data.stations;
    this.trains = data.trains;
  }
}
</script>