<template>
  <div class="line-signet">
    <img class="line-signet-icon" :src="'lines/' +  line + '.svg'" :alt="line"/>
    <span class="line-signet-direction" v-if="direction != null">{{direction}}</span>
  </div>
</template>

<script>
export default {
  props: [
    'line',
      'direction'
  ],
}
</script>

<style scoped>
.line-signet {
  display: inline-flex;
  align-items: center;
  margin: 4px;
}
.line-signet-icon {
  width: 30px;
}
.line-signet-direction {
  margin-left: 4px;
}
</style>