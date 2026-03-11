<script setup lang="ts">
import ClassicPhone from '../models/Contact/ClassicPhone.vue'
import ContactTable from '../models/Contact/ContactTable.vue'
import ResumePapers from '../models/Contact/ResumePapers.vue'
import MailPost from '../models/Contact/MailPost.vue'

import { onMounted, shallowRef } from 'vue'
import { useTres } from '@tresjs/core'
import { Object3D } from 'three'

// const props = defineProps<{
//     position?: [number, number, number]
//     rotation?: [number, number, number]
// }>()
const { scene } = useTres()

const sLight = shallowRef()

onMounted(() => {
  if (!scene.value) { return }

  const target = new Object3D()
  target.position.set(-9, 0, 4) // ← point here

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
    <ContactTable />
  </Suspense>
  <Suspense>
    <ClassicPhone />
  </Suspense>
  <Suspense>
    <ResumePapers />
  </Suspense>
  <Suspense>
    <MailPost />
  </Suspense>

  <!-- Spotlight beam -->
  <TresSpotLight
    ref="sLight"
    :position="[-9, 12, 4]"
    :intensity="500"
    :angle="Math.PI / 10"
    :penumbra="0.3"
    :distance="30"
    color="#04d9ff"
    cast-shadow
  />

  <!-- Fake beam Center -->
  <TresMesh :position="[-9, 6, 4]" :rotation="[0, 0, 0]">
    <TresConeGeometry :args="[3, 12, 32, 1, true]" />
    <TresMeshBasicMaterial color="#04d9ff" :transparent="true" :opacity="0.06" :side="2" :depth-write="false" />
  </TresMesh>
</template>

<style scoped></style>
