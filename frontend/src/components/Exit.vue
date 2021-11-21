<template>
  <div class="exit" :style="{left: exit.position * scale + 'px'}">
    <line-signet v-for="line in exit.to_lines" :key="line" :line="line" />
    <span v-if="exit.to_destinations">🚪</span>
    <div class="details">
      <span v-if="exit.to_lines">Linien</span> <span v-for="line in exit.to_lines" :key="line">{{line}} </span><br>
      <span v-if="exit.to_destinations">Ausgang zu</span> <span v-for="line in exit.to_destinations" :key="line">{{line}} </span>
    </div>
  </div>
</template>
<script>
import LineSignet from "./LineSignet";
export default {
  components: {LineSignet},
  props: [
    'exit',
    'scale'
  ],
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.exit {
  position: absolute;
  width: 20px;
}
.exit > .details {
  position: absolute;
  width: auto;
  max-width: 200px;
  transform: translate(-50%, 0);
  left: 10px;
  visibility: hidden;
}
.exit:hover > .details {
  visibility: visible;
}
</style>