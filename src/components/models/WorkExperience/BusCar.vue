<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { watch } from 'vue'

const { state } = await useGLTF('/models/hcr2_bus.glb', { draco: true })

watch(state, (gltf) => {
  if (!gltf?.scene) { return }
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.needsUpdate = true
      // If materials are too dark:
      child.material.emissiveIntensity = 0.5
    }
  })
}, { immediate: true })
</script>

<template>
  <primitive
    :object="state?.scene"
    :scale="[0.6, 0.6, 0.6]"
    :position="[8.8, 0, 3.4]"
    :rotation="[0, -Math.PI / 5, 0]"
  />
</template>
