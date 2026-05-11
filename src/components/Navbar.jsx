import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import bookflowLogo from '../assets/bookflow-logo.png'

const navLinkClasses =
  'relative px-1 pb-1 text-sm font-medium text-[#c7c4d7] transition-all duration-300 hover:text-[#4cd7f6]'

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
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? 'border-[#464554]/40 bg-[#13131b]/90 backdrop-blur-md'
          : 'border-[#464554]/20 bg-[#13131b]/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden flex-1 items-center justify-between md:flex">
          <NavLink
            to="/"
            className="flex items-center gap-0"
          >
            <img
              src={bookflowLogo}
              alt="Bookflow logo"
              className="h-[4.6rem] w-[4.6rem] object-contain"
            />
            <span className="-ml-1 text-2xl font-semibold tracking-tight text-[#e4e1ed]">
              Bookflow
            </span>
          </NavLink>

          <div className="flex items-center justify-center">
            <nav className="flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'text-[#c0c1ff] border-b-2 border-[#c0c1ff]'
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
                      ? 'text-[#c0c1ff] border-b-2 border-[#c0c1ff]'
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
                      ? 'text-[#c0c1ff] border-b-2 border-[#c0c1ff]'
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
                      ? 'text-[#c0c1ff] border-b-2 border-[#c0c1ff]'
                      : ''
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
              className="rounded-lg px-5 py-2 text-xs font-medium"
            >
              Request a Demo
            </Button>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-1 items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-[#464554] bg-[#1b1b23] p-2 text-[#e4e1ed]"
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

          <NavLink to="/" className="flex flex-1 items-center justify-center gap-0">
            <img
              src={bookflowLogo}
              alt="Bookflow logo"
              className="h-[3.3rem] w-[3.3rem] object-contain"
            />
            <span className="-ml-1 text-lg font-semibold tracking-tight text-[#e4e1ed]">
              Bookflow
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

              <div className="mt-4 border-t border-[#464554] pt-4">
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

