<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { watch } from 'vue'

const { state } = await useGLTF('/models/exams.glb', { draco: true })

watch(state, (gltf) => {
  if (!gltf?.scene) { return }
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    //   child.material.needsUpdate = true
    //   // If materials are too dark:
    //   child.material.emissiveIntensity = 0.5
    }
  })
}, { immediate: true })
</script>

<template>
  <primitive
    :object="state?.scene"
    :scale="[0.1, 0.1, 0.1]"
    :position="[9, 0, 6]"
    :rotation="[0, -Math.PI / 1.2, 0]"
  />
</template>
