import PropTypes from 'prop-types'
import { createElement } from 'react'
import { motion } from 'framer-motion'

const baseClasses =
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c0c1ff] disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-[#c0c1ff] text-[#1000a9] hover:bg-[#8083ff]',
  secondary:
    'bg-[#1f1f27] text-[#e4e1ed] border border-[#464554] hover:bg-[#292932]',
  ghost:
    'bg-transparent text-[#c0c1ff] border border-[#464554] hover:bg-[#1f1f27]',
}

export function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const variantClasses = variants[variant] ?? variants.primary
  const isPrimary = variant === 'primary'
  const primaryMotionClasses = isPrimary ? 'relative isolate overflow-hidden' : ''

  const allClasses = `${baseClasses} ${variantClasses} ${primaryMotionClasses} ${className}`.trim()

  const buttonChildren = isPrimary ? (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[-35%] w-[30%] skew-x-[-20deg] bg-white/40 blur-md"
        variants={{
          rest: { x: '-140%', opacity: 0 },
          hover: { x: '380%', opacity: [0, 1, 0] },
        }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      />
      <span className="relative z-[1]">{children}</span>
    </>
  ) : (
    children
  )

  return (
    <motion.div
      className="inline-block"
      whileTap={{ scale: 0.96 }}
      initial="rest"
      whileHover={isPrimary ? 'hover' : 'rest'}
      animate="rest"
    >
      {createElement(Component, { className: allClasses, ...props }, buttonChildren)}
    </motion.div>
  )
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node,
}

