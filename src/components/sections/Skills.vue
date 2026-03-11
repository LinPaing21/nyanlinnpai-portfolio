<script setup lang="ts">
import TechStacks from '../models/Skills/TechStacks.vue'
import { onMounted, shallowRef } from 'vue'
import { useTres } from '@tresjs/core'
import { Object3D } from 'three'

const { scene } = useTres()

const sLight = shallowRef()

onMounted(() => {
  if (!scene.value) { return }

  const target = new Object3D()
  target.position.set(2.5, 0, -1) // ← point here

  scene.value.add(target)

  if (sLight.value) {
    sLight.value.shadow.mapSize.width = 2048
    sLight.value.shadow.mapSize.height = 2048
    sLight.value.shadow.camera.near = 0.1
    sLight.value.shadow.camera.far = 50
    sLight.value.shadow.bias = -0.001

    sLight.value.target = target
  }
})
</script>

<template>
  <Suspense>
    <TechStacks />
  </Suspense>

  <TresSpotLight
    ref="sLight"
    :position="[2.5, 12, 2]"
    :intensity="500"
    :angle="Math.PI / 12"
    :penumbra="0.3"
    :distance="30"
    color="#04d9ff"
    cast-shadow
  />

  <TresMesh :position="[2.5, 6, -1]" :rotation="[0, 0, 0]">
    <TresConeGeometry :args="[3, 12, 32, 1, true]" />
    <TresMeshBasicMaterial color="#04d9ff" :transparent="true" :opacity="0.08" :side="2" :depth-write="false" />
  </TresMesh>
</template>

<style scoped>

</style>
