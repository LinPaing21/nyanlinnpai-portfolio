<script setup lang="ts">
import { activeZone } from '../composables/useScrollCamera'

const zones = [
  { label: 'Hero' },
  { label: 'About' },
  { label: 'Skills' },
  { label: 'Experiences' },
  { label: 'Contact' },
]

function scrollToZone(index: number) {
  const scrollContainer = document.getElementById('scroll-container')
  if (!scrollContainer) { return }

  const totalZones = zones.length - 1
  const targetProgress = index / totalZones
  const totalHeight = scrollContainer.scrollHeight - window.innerHeight

  window.scrollTo({
    top: targetProgress * totalHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
    <button
      v-for="(zone, index) in zones"
      :key="index"
      class="group relative flex items-center justify-end gap-3 pointer-events-auto"
      @click="scrollToZone(index)"
    >
      <!-- Label — shows on hover -->
      <span
        class="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs text-cyan-400 tracking-widest uppercase whitespace-nowrap translate-x-2 group-hover:translate-x-0"
      >
        {{ zone.label }}
      </span>

      <!-- Dot -->
      <div
        class="rounded-full transition-all duration-300 border border-cyan-500"
        :class="activeZone === index
          ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]'
          : 'w-2 h-2 bg-transparent group-hover:bg-cyan-900'"
      ></div>
    </button>
  </div>
</template>
