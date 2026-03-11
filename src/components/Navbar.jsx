import { NavLink } from 'react-router-dom'
import { Button } from './Button'

const navLinkClasses =
  'text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors'

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#344955] text-white text-lg font-bold">
            BF
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-900">
              Bookflow
            </span>
            <span className="text-xs text-neutral-500">
              Field Sales Platform
            </span>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? 'text-[#344955]' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? 'text-[#344955]' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? 'text-[#344955]' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex">
          <Button as={NavLink} to="/contact">
            Request a Demo
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Button as={NavLink} to="/contact" className="px-4 py-2 text-xs">
            Demo
          </Button>
        </div>
      </div>
    </header>
  )
}

