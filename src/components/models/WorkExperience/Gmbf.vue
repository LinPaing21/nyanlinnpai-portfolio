<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { watch } from 'vue'

const { state } = await useGLTF('/models/gmbf.glb', { draco: true })

watch(state, (gltf) => {
  if (!gltf?.scene) { return }
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })
}, { immediate: true })
</script>

<template>
  <primitive
    :object="state?.scene"
    :scale="[0.4, 0.4, 0.4]"
    :position="[6.5, 0, 6]"
    :rotation="[0, -Math.PI / 4.5, 0]"
  />
</template>
