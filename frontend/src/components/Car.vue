<template>
  <div class="container">
    <div class="coupler" v-if="isFrontCar" :style="{width: unitsSpacing / 2 * scale + 'px'}"></div>
    <div class="walkway" v-if="!isFrontCar" :style="{width: carSpacing * scale + 'px'}"></div>
    <div class="car" :style="{ width: length * scale + 'px', backgroundColor: train.color }">
      <div class="window front-window" v-if="isFrontCar"/>
      <span class="car-number">{{ unit }}-{{ car }}</span>
      <div class="door right-door" v-for="(pos, index) in doorPositions" :style="{left: (pos - doorWidth / 2) * scale + 'px', width: doorWidth * scale + 'px'}" :key="index * 2"></div>
      <div class="door left-door" v-for="(pos, index) in doorPositions" :style="{left: (pos - doorWidth / 2) * scale  + 'px', width: doorWidth * scale + 'px'}" :key="index * 2 + 1"></div>
      <div class="window back-window" v-if="isRearCar"/>
    </div>
    <div class="coupler" v-if="isRearCar" :style="{width: unitsSpacing / 2 * scale + 'px'}"></div>
  </div>
</template>
<script>
export default {
  props: [
    'car',     // car number (1-based index)
    'unit',    // unit number (1-based index)
    'train',   // train object
    'scale'
  ],
  data() {
    return {
      doorWidth: 2.6,  // this is not to scale, actual door widths are typically 1.3 m
      carSpacing: 0.5,
      unitsSpacing: 1
    }
  },
  computed: {
    isFrontCar: function() {
      return this.car === 1
    },
    isRearCar: function() {
      return this.car === this.train.cars_per_unit
    },
    isEndCar: function() {
      return this.isFrontCar || this.isRearCar
    },
    doorDistance: function() {
      // calculates distance between door centers, assuming doors are evenly distributed
      return this.train.unit_length / (this.train.cars_per_unit * this.train.doors_per_car + 1)
    },
    length: function() {
      /* Heuristic assumption for car length:
       * for middle cars, there is 1/2 doorDistance at either side, and 1 doorDistance between doors
       * for end cars, there is 1 doorDistance at one side, 1/2 doorDistance at the other and 1 doorDistance between doors
       */
      if (this.isEndCar) {
        return this.doorDistance * (this.train.doors_per_car + 0.5) - this.carSpacing / 2 - this.unitsSpacing / 2
      } else {
        return this.doorDistance * this.train.doors_per_car - this.carSpacing
      }
    },
    doorPositions: function() {
      let positions = []
      if (this.isFrontCar) {
        positions.push(this.doorDistance)
      } else {
        positions.push(this.doorDistance / 2)
      }
      for (var i = 0; i < this.train.doors_per_car - 1; i++) {
        positions.push(positions[positions.length - 1] + this.doorDistance)
      }
      return positions
    }
  }
}
</script>
<style>
.container {
  height: 60px;
  display: inline-flex;
  align-items: center;
}
.car {
  position: relative;
  color: white;
  display: inline-flex;
  align-items: center; /* Vertical center alignment */
  justify-content: center; /* Horizontal center alignment */
  height: 100%;
  border-radius: 6px;
}
.door {
  background: black;
  position: absolute;
  height: 3px;
}
.right-door {
  top: 0;
}
.left-door {
  bottom: 0;
}
.walkway {
  height: 50%;
  background-color: gray;
  display: inline-flex;
}
.coupler {
  height: 20%;
  background-color: black;
  display: inline-flex;
}
.window {
  height: 60%;
  background-color: aqua;
  position: absolute;
  width: 7px;
}
.front-window {
  left: 0;
}
.back-window {
  right: 0
}
</style>