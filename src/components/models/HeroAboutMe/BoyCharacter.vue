<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import { watch } from 'vue'

const { state } = await useGLTF('/models/premium_boy_character.glb', { draco: true })

watch(state, (gltf) => {
  if (!gltf?.scene) { return }
  gltf.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      // child.receiveShadow = true
      child.material.needsUpdate = true
      child.material.emissiveIntensity = 0.5

      if (child.isMesh && child.material) {
        // Fix normal map strength
        if (child.material.normalMap) {
          child.material.normalScale.set(0.3, 0.3)
        }
        // Fix metalness roughness
        child.material.metalness = 0
        child.material.roughness = 0.9
        child.material.needsUpdate = true
      }
    }
  })
}, { immediate: true })
</script>

<template>
  <primitive
    :object="state?.scene"
    :scale="[1.4, 1.4, 1.4]"
    :position="[-3, 1.5, 0]"
  />
</template>
