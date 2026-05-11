import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export function FadeUp({ children, delay = 0, duration = 0.5, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

FadeUp.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
}
