import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'

const navLinkClasses =
  'relative text-sm font-medium text-neutral-600 transition-colors duration-200 ease-out px-3 py-1.5 rounded-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:to-sky-500'

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 border-b border-neutral-200/80 shadow-md backdrop-blur-lg'
          : 'bg-white/60 border-b border-transparent shadow-sm backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden flex-1 items-center justify-between md:flex">
          <NavLink
            to="/"
            className="flex items-center gap-2 rounded-full px-2 py-1 transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <img
              src="/logo.svg"
              alt="Bookflow logo"
              className="h-14 w-14 object-contain transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-900">
                Bookflow
              </span>
              <span className="text-[11px] font-medium text-indigo-500">
                Field Sales Platform
              </span>
            </div>
          </NavLink>

          <div className="flex items-center justify-center">
            <nav className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 shadow-sm shadow-neutral-200 ring-1 ring-neutral-100 backdrop-blur-md">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                      : 'hover:bg-neutral-100/90'
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
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                      : 'hover:bg-neutral-100/90'
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
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                      : 'hover:bg-neutral-100/90'
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
                      ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-sm'
                      : 'hover:bg-neutral-100/90'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>

          <div className="flex justify-end">
            <Button
              as={NavLink}
              to="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(79,70,229,0.55)] transition-transform duration-200 hover:scale-[1.04] active:scale-95"
            >
              <span className="relative z-10">Request a Demo</span>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_55%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-1 items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 text-neutral-700 shadow-sm shadow-neutral-200 backdrop-blur-md transition-transform duration-200 hover:scale-105 hover:bg-neutral-50 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation"
          >
            <svg
              className={`h-5 w-5 transform transition-transform duration-200 ${
                isMobileOpen ? 'rotate-90' : ''
              }`}
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
            <span className="text-[11px] font-medium text-indigo-500">
              Field Sales Platform
            </span>
          </NavLink>

          <div className="w-5" />
        </div>

        {isMobileOpen && (
          <div className="fixed inset-0 z-40 flex items-start justify-center bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-black/90 backdrop-blur-md md:hidden">
            <div className="mt-16 w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900/80 px-6 py-6 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
              <nav className="space-y-2">
                <NavLink
                  to="/"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-3 py-3 text-base ${
                      isActive
                        ? 'bg-indigo-600/90 text-white shadow-sm shadow-indigo-500/40'
                        : 'text-slate-100 hover:bg-slate-800/80'
                    } transition-all duration-200`
                  }
                >
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/features"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-3 py-3 text-base ${
                      isActive
                        ? 'bg-indigo-600/90 text-white shadow-sm shadow-indigo-500/40'
                        : 'text-slate-100 hover:bg-slate-800/80'
                    } transition-all duration-200`
                  }
                >
                  <span>Features</span>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-3 py-3 text-base ${
                      isActive
                        ? 'bg-indigo-600/90 text-white shadow-sm shadow-indigo-500/40'
                        : 'text-slate-100 hover:bg-slate-800/80'
                    } transition-all duration-200`
                  }
                >
                  <span>About</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-3 py-3 text-base ${
                      isActive
                        ? 'bg-indigo-600/90 text-white shadow-sm shadow-indigo-500/40'
                        : 'text-slate-100 hover:bg-slate-800/80'
                    } transition-all duration-200`
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
                  className="w-full justify-center bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-sm font-semibold shadow-[0_16px_40px_rgba(79,70,229,0.7)] hover:scale-[1.02] active:scale-95 transition-transform duration-200"
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

