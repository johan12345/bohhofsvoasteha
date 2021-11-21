<template>
  <v-row>
    <v-col>
      <h4>Which type of train are you riding?</h4>
      <v-list two-line>
        <v-list-item-group>
          <template v-for="t in trains">
            <v-list-item v-if="t.units_per_train.length === 1" :to="t.name" :key="t.name" :append="true">
              <v-list-item-content>
                <v-list-item-title>{{t.name}}</v-list-item-title>
                <v-list-item-subtitle>{{t.description}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-group v-else :key="t.name">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{t.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{t.description}}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
              <v-list-item
                  v-for="u in t.units_per_train"
                  :key="u.units"
                  :to="t.name + '?units=' + u.units"
                  :append="true"
              >
                <v-list-item-content>
                  <v-list-item-title>{{u.units}} {{u.units > 1 ? 'cars' : 'car'}}</v-list-item-title>
                  <v-list-item-subtitle>{{u.name}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>

        </v-list-item-group>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import data from "../assets/data.json";

export default {
  components: {},
  name: "TrainSelection",
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
    }
  }
}
</script>

<style scoped>

</style>