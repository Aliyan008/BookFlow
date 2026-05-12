import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X, XCircle } from 'lucide-react'

const typeStyles = {
  success: {
    container: 'bg-[#0d1f17] border-[#1a5c35]',
    icon: 'text-[#4ade80]',
    text: 'text-[#bbf7d0]',
  },
  error: {
    container: 'bg-[#1f0d0d] border-[#5c1a1a]',
    icon: 'text-[#f87171]',
    text: 'text-[#fecaca]',
  },
}

export function Toast({ type, message, show, onClose }) {
  useEffect(() => {
    if (!show) return undefined
    const id = window.setTimeout(() => {
      onClose()
    }, 4000)
    return () => window.clearTimeout(id)
  }, [show, onClose])

  const styles = typeStyles[type] ?? typeStyles.success
  const Icon = type === 'error' ? XCircle : CheckCircle2

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={`toast-${type}`}
          role="status"
          aria-live="polite"
          className={`fixed left-1/2 top-6 z-50 flex max-w-md -translate-x-1/2 items-center gap-3 rounded-xl border px-5 py-3 shadow-lg backdrop-blur-md ${styles.container}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Icon className={`h-5 w-5 shrink-0 ${styles.icon}`} aria-hidden />
          <p className={`min-w-0 flex-1 text-sm leading-snug ${styles.text}`}>{message}</p>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md p-1 text-[#908fa0] transition-colors hover:text-[#c7c4d7]"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
