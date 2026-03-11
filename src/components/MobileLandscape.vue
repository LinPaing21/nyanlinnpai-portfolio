<template>
  <Transition name="fade">
    <div
      v-if="isPortrait"
      class="fixed inset-0 z-200 bg-[#020818] flex flex-col items-center justify-center gap-6 p-8"
    >
      <!-- Rotate icon -->
      <div class="text-cyan-400 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(90 12 12)" />
          <path d="M9 7l3-3 3 3" />
          <path d="M12 4v8" />
        </svg>
      </div>

      <div class="text-center">
        <p class="text-white text-lg font-semibold mb-2">
          Please Rotate Your Device
        </p>
        <p class="text-blue-400 text-sm">
          This experience is best viewed in landscape mode
        </p>
      </div>

      <!-- Decorative dots -->
      <div class="flex gap-2 mt-4">
        <div class="w-1.5 h-1.5 rounded-full bg-cyan-400" ></div>
        <div class="w-1.5 h-1.5 rounded-full bg-cyan-700" ></div>
        <div class="w-1.5 h-1.5 rounded-full bg-cyan-700" ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isPortrait = ref(false)

function checkOrientation() {
  // Only show on mobile devices
  const isMobile = window.innerWidth <= 1024
  isPortrait.value = isMobile && window.innerHeight > window.innerWidth
}

onMounted(() => {
  checkOrientation()
  window.addEventListener('resize', checkOrientation)
  window.addEventListener('orientationchange', checkOrientation)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation)
  window.removeEventListener('orientationchange', checkOrientation)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>