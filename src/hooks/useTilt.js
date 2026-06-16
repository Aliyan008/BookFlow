import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function useTilt(strength = 12) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [strength, -strength])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-strength, strength])

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
