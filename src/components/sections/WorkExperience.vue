<script setup lang="ts">
import Shopping from '../models/WorkExperience/Shopping.vue'
import Exam from '../models/WorkExperience/Exam.vue'
import Gmbf from '../models/WorkExperience/Gmbf.vue'
import BusCar from '../models/WorkExperience/BusCar.vue'
import { onMounted, shallowRef } from 'vue'
import { useTres } from '@tresjs/core'
import { Object3D } from 'three'

// const props = defineProps<{
//     position?: [number, number, number]
//     rotation?: [number, number, number]
// }>()
const { scene } = useTres()

const sLight = shallowRef()
const dLight1 = shallowRef()
const dLight2 = shallowRef()
const dLight3 = shallowRef()

onMounted(() => {
  if (!scene.value) { return }

  const target = new Object3D()
  target.position.set(8, 0, 4)

  scene.value.add(target)

  if (sLight.value) {
    sLight.value.shadow.mapSize.width = 2048
    sLight.value.shadow.mapSize.height = 2048
    sLight.value.shadow.camera.near = 0.1
    sLight.value.shadow.camera.far = 50
    sLight.value.shadow.bias = -0.001

    sLight.value.target = target
  }

  if (dLight1.value) {
    dLight1.value.target = target
  }
  if (dLight2.value) {
    dLight2.value.target = target
  }
  if (dLight3.value) {
    dLight3.value.target = target
  }
})
</script>

<template>
  <!-- Spotlight beam -->
  <TresSpotLight
    ref="sLight"
    :position="[8, 12, 4]"
    :intensity="500"
    :angle="Math.PI / 10"
    :penumbra="0.3"
    :distance="30"
    color="#04d9ff"
    cast-shadow
  />


  <!-- <TresSpotLightHelper v-if="sLight" :args="[sLight]" /> -->

  <!-- Fake beam Center -->
  <TresMesh :position="[8, 6, 4]" :rotation="[0, 0, 0]">
    <TresConeGeometry :args="[3.25, 12, 32, 1, true]" />
    <TresMeshBasicMaterial color="#04d9ff" :transparent="true" :opacity="0.06" :side="2" :depth-write="false" />
  </TresMesh>

  <Suspense>
    <Shopping />
  </Suspense>
  <Suspense>
    <BusCar />
  </Suspense>
  <Suspense>
    <Exam />
  </Suspense>
  <Suspense>
    <Gmbf />
  </Suspense>
</template>

<style scoped></style>
