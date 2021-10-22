<template>
  <div class="exit" :style="{left: exit.position * scale + 'px'}">
    <img class="line-signet" v-for="line in exit.to_lines" :key="line" :src="'lines/' +  line + '.svg'"/>
    <span v-if="exit.to_destinations">🚪</span>
    <div class="details">
      <span v-if="exit.to_lines">Linien</span> <span v-for="line in exit.to_lines" :key="line">{{line}} </span><br>
      <span v-if="exit.to_destinations">Ausgang zu</span> <span v-for="line in exit.to_destinations" :key="line">{{line}} </span>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'exit',
    'scale'
  ],
  data() {
    return {
    }
  },
  computed: {

  }
}
</script>
<style>
.exit {
  position: absolute;
  width: 20px;
}
.line-signet {
  width: 20px;
  display: block;
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