import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'

const navLinkClasses =
  'text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors'

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="relative z-40 bg-[#F9FAFB]/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden items-center justify-between md:flex">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Bookflow logo"
              className="h-12 w-12 rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-900">
                Bookflow
              </span>
              <span className="text-xs text-neutral-500">
                Field Sales Platform
              </span>
            </div>
          </NavLink>

          <nav className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClasses} ${
                  isActive
                    ? 'text-[#344955] font-semibold underline underline-offset-8 decoration-[#344955]/80'
                    : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `${navLinkClasses} ${
                  isActive
                    ? 'text-[#344955] font-semibold underline underline-offset-8 decoration-[#344955]/80'
                    : ''
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkClasses} ${
                  isActive
                    ? 'text-[#344955] font-semibold underline underline-offset-8 decoration-[#344955]/80'
                    : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkClasses} ${
                  isActive
                    ? 'text-[#344955] font-semibold underline underline-offset-8 decoration-[#344955]/80'
                    : ''
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex">
            <Button as={NavLink} to="/contact">
              Request a Demo
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#344955]"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>

          <NavLink to="/" className="flex flex-1 flex-col items-center">
            <span className="text-sm font-semibold text-neutral-900">
              Bookflow
            </span>
            <span className="text-[11px] text-neutral-500">
              Field Sales Platform
            </span>
          </NavLink>

          <div className="w-5" />
        </div>

        {isMobileOpen && (
          <div className="fixed inset-0 z-40 flex items-start justify-center bg-gradient-to-b from-transparent via-black/25 to-black/30 pt-16 md:hidden">
            <div className="w-full max-w-xs rounded-3xl border border-neutral-200 bg-white/95 p-4 shadow-xl backdrop-blur md:max-w-sm">
              <nav className="space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-[#344955] text-white shadow-sm'
                        : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/features"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-[#344955] text-white shadow-sm'
                        : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Features</span>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-[#344955] text-white shadow-sm'
                        : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>About</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-3 py-2 text-sm ${
                      isActive
                        ? 'bg-[#344955] text-white shadow-sm'
                        : 'text-neutral-800 hover:bg-neutral-50'
                    }`
                  }
                >
                  <span>Contact</span>
                </NavLink>
              </nav>

              <div className="mt-4 border-t border-neutral-200 pt-4">
                <Button
                  as={NavLink}
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full justify-center"
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

