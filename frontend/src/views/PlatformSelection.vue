<template>
  <v-row>
    <v-col>
      <h4>Which platform do you arrive on?</h4>
      <v-list two-line>
        <v-list-item-group>
          <v-list-item v-for="p in station.platforms" :key="p.name" :to="p.name" :append="true">
            <v-list-item-content>
              <v-list-item-title>{{p.name}}</v-list-item-title>
              <v-list-item-subtitle>
                <line-signet v-for="line in p.lines" :key="line" :line="line.split(' ')[0]" :direction="line.split(' ')[1]"/>
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
import data from "../assets/data.json";
import LineSignet from "../components/LineSignet";

export default {
  name: "PlatformSelection",
  components: {LineSignet},
  data: function () {
    return {
      stations: data.stations,
      trains: data.trains
    }
  },
  computed: {
    station: function() {
      return this.stations.find(it => it.name === this.$route.params.station)
    }
  }
}
</script>

<style scoped>

</style>