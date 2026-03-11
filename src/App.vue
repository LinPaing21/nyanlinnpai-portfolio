<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import Hall from './components/Hall.vue'
import PortfolioOverlay from './components/PortfolioOverlay.vue'
import NavDots from './components/NavDots.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import MobileLandscape from './components/MobileLandscape.vue'

const gl = {
  clearColor: '#020205',
  antialias: true,
  pixelRatio: Math.min(window.devicePixelRatio, 2),
}
</script>

<template>
  <LoadingScreen />
  <MobileLandscape />

  <div style="position: fixed; inset: 0; z-index: 0;">
    <TresCanvas v-bind="gl" shadows>
      <Hall />
    </TresCanvas>
  </div>

  <div id="scroll-container" style="height: 500vh; position: relative; z-index: 1;"></div>

  <PortfolioOverlay />
  <NavDots />
</template>
