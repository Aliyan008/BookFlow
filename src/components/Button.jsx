import PropTypes from 'prop-types'
import { createElement } from 'react'

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

  const allClasses = `${baseClasses} ${variantClasses} ${className}`.trim()

  return createElement(Component, { className: allClasses, ...props }, children)
}

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node,
}

