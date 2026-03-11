<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import { useTres } from '@tresjs/core'
import { Object3D } from 'three'
import BoyCharacter from '../models/HeroAboutMe/BoyCharacter.vue'
import DreamRoom from '../models/HeroAboutMe/DreamRoom.vue'

const { scene } = useTres()

const sLight = shallowRef()

onMounted(() => {
  if (!scene.value) { return }

  const target = new Object3D()
  target.position.set(-4, 0, 0) // ← point here

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
    <BoyCharacter />
  </Suspense>

  <Suspense>
    <DreamRoom />
  </Suspense>

  <!-- Spotlight beam -->
  <TresSpotLight
    ref="sLight"
    :position="[-4, 12, 0]"
    :intensity="500"
    :angle="Math.PI / 10"
    :penumbra="0.3"
    :distance="30"
    color="#04d9ff"
    cast-shadow
  />

  <!-- <TresSpotLightHelper v-if="sLight" :args="[sLight]" /> -->
  <!-- Fake beam Center -->
  <TresMesh :position="[-4, 6, 0]" :rotation="[0, 0, 0]">
    <TresConeGeometry :args="[3, 12, 32, 1, true]" />
    <TresMeshBasicMaterial color="#04d9ff" :transparent="true" :opacity="0.08" :side="2" :depth-write="false" />
  </TresMesh>
</template>

<style scoped></style>
