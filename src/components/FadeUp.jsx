import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variantConfigs = {
  fadeUp: {
    initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fadeIn: {
    initial: { opacity: 0, filter: 'blur(6px)' },
    whileInView: { opacity: 1, filter: 'blur(0px)' },
    duration: 0.6,
  },
  slideRight: {
    initial: { opacity: 0, x: -32, filter: 'blur(6px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  slideLeft: {
    initial: { opacity: 0, x: 32, filter: 'blur(6px)' },
    whileInView: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
    whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
}

export function FadeUp({ children, variant = 'fadeUp', delay = 0, duration = 0.5, className = '' }) {
  const selectedVariant = variantConfigs[variant] ?? variantConfigs.fadeUp
  const resolvedDuration = selectedVariant.duration ?? duration
  const isScaleUp = variant === 'scaleUp'

  return (
    <motion.div
      className={className}
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      transition={{
        delay,
        duration: resolvedDuration,
        type: 'spring',
        stiffness: isScaleUp ? 100 : 80,
        damping: isScaleUp ? 20 : 18,
        mass: 0.8,
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

FadeUp.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['fadeUp', 'fadeIn', 'slideRight', 'slideLeft', 'scaleUp']),
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
}
