<!-- The Scriptsss -->
<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Header from "@/components/Header.vue";

  import clickSound from "@/assets/audio/click.mp3";

  // Funny COD hitmarker sound effect on each click
  function playClickSound() {
    if (localStorage.getItem("muted") === "true") return;

    const audio = new Audio(clickSound);
    audio.play();
  }
</script>

<!-- Content -->
<template>
  <div class="global__container" @click="playClickSound()">
    <Header />

    <RouterView />
  </div>

  <div class="retro-overlay screen-h screen-w" />
</template>

<!-- Styles -->
<style scoped>
  .retro-overlay {
    position:       fixed;
    top:            0;
    left:           0;

    background:     repeating-linear-gradient(#00000038, #00000038 2.3px, #00000000 2.3px, #00000000 10px);
    pointer-events: none;

    animation:      scanlines-scroll 15s infinite linear;
    z-index:        999999999;
  }

  @keyframes scanlines-scroll {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 100px;
    }
  }
</style>