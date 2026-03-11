<script setup lang="ts">
import { useTres } from '@tresjs/core'
import { onMounted } from 'vue'
import { BufferGeometry, Float32BufferAttribute, FogExp2, PlaneGeometry, Points, PointsMaterial } from 'three'
import { useScrollCamera } from '../composables/useScrollCamera'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'

import WorkExperience from './sections/WorkExperience.vue'
import Contact from './sections/Contact.vue'
import HeroAboutMe from './sections/HeroAboutMe.vue'
import Skills from './sections/Skills.vue'

useScrollCamera()

const { scene } = useTres()

onMounted(() => {
  scene.value.fog = new FogExp2('#020818', 0.025)

  // Reflective floor
  const geometry = new PlaneGeometry(80, 80)
  const reflector = new Reflector(geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: '#223344', // dark blue floor color
  })

  // Rotate to lay flat on ground
  reflector.rotation.x = -Math.PI / 2
  reflector.position.y = 0
  reflector.receiveShadow = true

  scene.value.add(reflector)

  // Stars
  const count = 2000
  const positions = []

  for (let i = 0; i < count; i++) {
    positions.push(
      (Math.random() - 0.5) * 100, // x
      (Math.random() - 0.5) * 100, // y
      (Math.random() - 0.5) * 100, // z
    )
  }

  const pointGeometry = new BufferGeometry()
  pointGeometry.setAttribute('position', new Float32BufferAttribute(positions, 3))

  const material = new PointsMaterial({
    color: '#ffffff',
    size: 0.1,
    transparent: true,
    opacity: 0.8,
  })

  const stars = new Points(pointGeometry, material)
  scene.value.add(stars)
})
</script>

<template>
  <TresPerspectiveCamera :position="[0, 4, 18]" :look-at="[0, 2, 0]" />
  <!-- <OrbitControls /> -->

  <!-- GLOBAL lights -->
  <TresAmbientLight :intensity="0.3" color="#112244" />
  <TresDirectionalLight :position="[0, 10, 10]" :intensity="0.8" />
  <TresDirectionalLight :position="[-10, 5, -5]" :intensity="0.3" />
  <TresDirectionalLight :position="[0, 5, -10]" :intensity="0.4" color="#4dd0e1" />

  <Contact />

  <HeroAboutMe />

  <Skills />

  <WorkExperience />

  <!-- Shadow receiver on top of reflector -->
  <TresMesh :rotation="[-Math.PI / 2, 0, 0]" :position="[0, 0.001, 0]" receive-shadow>
    <TresPlaneGeometry :args="[80, 80]" />
    <TresMeshStandardMaterial color="#020818" :transparent="true" :opacity="0.4" />
  </TresMesh>
  <!-- <TresGridHelper :args="[10, 10]" /> -->
</template>
