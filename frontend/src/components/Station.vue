<template>
  <div class="station_container">
    <div class="direction_indicator"><span class="direction_arrow">☚</span> Fahrtrichtung</div>
    <!-- The train -->
    <div class="train_container">
      <div :style="{width: platform.stop_positions[units] * scale + 'px'}"/>
      <template v-for="unit in units">
        <car v-for="car in train.cars_per_unit" :train="train" :unit="unit" :car="car" :key="unit * train.cars_per_unit + car" :scale="scale"></car>
      </template>
    </div>
    <!-- Exit markings -->
    <div class="exits_container">
      <exit v-for="(exit, index) in platform.exits" :key="index" :exit="exit" :scale="scale"/>
    </div>

  </div>
</template>
<script>
import Car from "./Car";
import Exit from "./Exit"
export default {
  components: {Car, Exit},
  data() {
    return {
      scale: 6,
    }
  },
  props: ['train', 'platform', 'units']
}
</script>
<style scoped>
  .station_container {
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .train_container {
    display: flex;
  }
  .exits_container {
    position: relative;
    height: 200px;
  }
  .direction_indicator {
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
  }
  .direction_arrow {
    font-size: 40px;
  }
  .exit {
    position: absolute;
  }
</style>