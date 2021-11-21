<template>
  <v-row>
    <v-col>
      <h4>Which station do you want to get off at?</h4>
      <v-list two-line>
        <v-list-item-group>
          <v-list-item v-for="s in stations" :key="s.name" :to="s.name">
            <v-list-item-content>
              <v-list-item-title>{{s.name}}</v-list-item-title>
              <v-list-item-subtitle>
                <line-signet v-for="line in getAllLines(s)" :key="line" :line="line"/>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import LineSignet from "../components/LineSignet";
import data from "../assets/data.json";

export default {
  components: {LineSignet},
  name: "StationSelection",
  data() {
    return {
      stations: data.stations,
      trains: data.trains,
    }
  },
  methods: {
    getAllLines(station) {
      let lines = [];
      for (let platform of station.platforms) {
        for (let line of platform.lines) {
          let l = line.split(" ")[0];
          if (!lines.includes(l)) lines.push(l);
        }
      }
      return lines;
    }
  },
}
</script>

<style scoped>

</style>