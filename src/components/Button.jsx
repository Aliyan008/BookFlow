import PropTypes from 'prop-types'

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#344955] disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-[#344955] text-white hover:bg-[#232F34] focus-visible:ring-[#344955]',
  secondary:
    'bg-white text-[#1E1E1E] border border-neutral-200 hover:bg-neutral-50 focus-visible:ring-neutral-400',
  ghost:
    'bg-transparent text-[#344955] hover:bg-neutral-50 focus-visible:ring-[#344955]',
}

export function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const variantClasses = variants[variant] ?? variants.primary

  const allClasses = `${baseClasses} ${variantClasses} ${className}`.trim()

  return (
    <Component className={allClasses} {...props}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node,
}

