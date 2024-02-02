<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header class="flex a-center">
    <h1>Kimu@artix:~$</h1>
  </header>
  <div class="filler" />

  <RouterView />

  <div class="retro-overlay screen-h screen-w" />
</template>

<style scoped>
header {
  height:           3rem;
  width: 100dvw;
  position:         fixed;
  background-color: black;

  z-index: 999;
}
.filler {
  height: 3rem;
}

.retro-overlay {
  position:         fixed;
  top:              0;
  left:             0;

  background:       repeating-linear-gradient(#00000038, #00000038 2.3px, #00000000 2.3px, #00000000 10px);
  pointer-events:   none;
  z-index:          999999999;
}
</style>