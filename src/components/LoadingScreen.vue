<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const progress = ref(0)

const loadingTexts = [
  'Initializing scene...',
  'Loading models...',
  'Setting up lights...',
  'Preparing experience...',
  'Almost ready...',
]
const loadingText = ref(loadingTexts[0])

onMounted(() => {
  const interval = setInterval(() => {
    // Update loading text
    const textIndex = Math.floor((progress.value / 100) * loadingTexts.length)
    loadingText.value = loadingTexts[Math.min(textIndex, loadingTexts.length - 1)]

    // Increment progress
    const remaining = 100 - progress.value
    progress.value += Math.ceil(remaining * 0.08)

    if (progress.value >= 99) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 600)
    }
  }, 100)
})
</script>

<template>
  <Transition name="fade-out">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-100 bg-[#020818] flex flex-col items-center justify-center"
    >
      <!-- Stars background -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 80"
          :key="i"
          class="absolute rounded-full bg-white"
          :style="{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.1,
          }"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center gap-8">
        <!-- Percentage -->
        <div class="text-6xl font-thin text-cyan-400 tabular-nums">
          {{ progress }}%
        </div>

        <!-- Progress bar -->
        <div class="w-48 h-px bg-cyan-900/50 rounded-full overflow-hidden">
          <div
            class="h-full bg-cyan-400 rounded-full transition-all duration-300"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>

        <!-- Loading text -->
        <p class="text-blue-400 text-xs tracking-widest uppercase animate-pulse">
          {{ loadingText }}
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-out-leave-active {
  transition: opacity 0.8s ease;
}
.fade-out-leave-to {
  opacity: 0;
}
</style>
