// src/composables/useScrollCamera.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTres } from '@tresjs/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { Vector3 } from 'three'

gsap.registerPlugin(ScrollTrigger)

export const activeZone = ref(0) // shared state for overlay
export const zoneProgress = ref(0)
export const showOverlay = ref(true)

// Define which side each zone overlay appears
export const zoneSides = ['center', 'right', 'left', 'right', 'left']
//                        Hero      About   Skills  Projects Contact

const waypoints = [
  // Hero — wide cinematic opening shot, sees everything
  { position: [0, 4, 18], lookAt: [0, 2, 0] },

  // About — camera moves left, faces bedroom + boy
  { position: [-3, 2.5, 6.5], lookAt: [-4, 2, -1] },

  // Skills — faces tech pyramid
  { position: [0, 2, 5], lookAt: [1.5, 2, 1] },

  // Projects — faces work experience models
  // { position: [5, 3, 15],   lookAt: [12, 2, 8]     },
  { position: [4, 3, 10], lookAt: [8, 2, 5] },

  // Contact — deep into stage
  { position: [-2, 3, 4.5], lookAt: [-8, 2, 4.2] },
]

export function useScrollCamera() {
  const { camera } = useTres()

  const isMobile = window.innerWidth <= 1024

  onMounted(() => {
    ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: isMobile ? 0.5 : 1.5,
      onUpdate: (self) => {
        const progress = self.progress
        const totalZones = waypoints.length - 1
        const zoneIndex = Math.min(
          Math.floor(progress * totalZones),
          totalZones - 1,
        )
        const zoneProgress = (progress * totalZones) - zoneIndex

        // Update active zone for overlay
        activeZone.value = Math.round(progress * totalZones)

        const from = waypoints[zoneIndex]
        const to = waypoints[zoneIndex + 1]

        camera.value?.position.lerpVectors(
          new Vector3(...from.position),
          new Vector3(...to.position),
          zoneProgress,
        )

        const lookAtTarget = new Vector3().lerpVectors(
          new Vector3(...from.lookAt),
          new Vector3(...to.lookAt),
          zoneProgress,
        )
        camera.value?.lookAt(lookAtTarget)
      },
    })
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
}
