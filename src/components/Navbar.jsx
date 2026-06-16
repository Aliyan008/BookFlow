import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'
import bookflowLogo from '../assets/bookflow-logo.png'

const navLinkClasses =
  'relative px-1 pb-1 text-sm font-medium text-[#6b6b7e] transition-all duration-300 hover:text-[#0d0d15]'

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = isMobileOpen ? 'hidden' : originalOverflow

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMobileOpen])

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d0d0dc]/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden flex-1 items-center justify-between md:flex">
          <NavLink
            to="/"
            className="flex items-center gap-0"
          >
            <motion.img
              src={bookflowLogo}
              alt="Bookflow logo"
              className="h-14 w-14 object-contain"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <span className="-ml-1 text-xl font-bold tracking-tight text-[#0d0d15]">
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
                      ? 'text-[#0d0d15]'
                      : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Home</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#c0c1ff]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'text-[#0d0d15]'
                      : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Features</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#c0c1ff]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'text-[#0d0d15]'
                      : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>About</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#c0c1ff]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClasses} ${
                    isActive
                      ? 'text-[#0d0d15]'
                      : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>Contact</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#c0c1ff]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </>
                )}
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

        {/* Mobile layout — relative bar; menu absolute left; logo mx-auto (true horizontal center) */}
        <div className="relative w-full flex-1 py-0 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            className="absolute left-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-[#d0d0dc] bg-[#e8e8f0] p-2 text-[#0d0d15]"
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

          <div className="mx-auto flex w-fit items-center">
            <NavLink to="/" className="flex items-center gap-0">
              <motion.img
                src={bookflowLogo}
                alt="Bookflow logo"
                className="h-[3.3rem] w-[3.3rem] object-contain"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="-ml-1 text-lg font-semibold tracking-tight text-[#0d0d15]">
                Bookflow
              </span>
            </NavLink>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex min-h-screen flex-col bg-white/98 backdrop-blur-md md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between border-b border-[#d0d0dc]/40 px-4 py-2.5 sm:px-6">
                <NavLink to="/" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-0">
                  <img
                    src={bookflowLogo}
                    alt="Bookflow logo"
                    className="h-[3.3rem] w-[3.3rem] object-contain"
                  />
                  <span className="-ml-1 text-lg font-semibold tracking-tight text-[#0d0d15]">
                    Bookflow
                  </span>
                </NavLink>
                <button
                  type="button"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d0d0dc] bg-[#e8e8f0] text-[#0d0d15]"
                  aria-label="Close navigation"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-1 items-center justify-center px-6">
                <nav className="flex flex-col items-center justify-center gap-8 text-center">
                  <NavLink
                    to="/"
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-semibold transition-colors ${
                        isActive ? 'text-[#c0c1ff]' : 'text-[#0d0d15] hover:text-[#c0c1ff]'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/features"
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-semibold transition-colors ${
                        isActive ? 'text-[#c0c1ff]' : 'text-[#0d0d15] hover:text-[#c0c1ff]'
                      }`
                    }
                  >
                    Features
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-semibold transition-colors ${
                        isActive ? 'text-[#c0c1ff]' : 'text-[#0d0d15] hover:text-[#c0c1ff]'
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-semibold transition-colors ${
                        isActive ? 'text-[#c0c1ff]' : 'text-[#0d0d15] hover:text-[#c0c1ff]'
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </nav>
              </div>

              <div className="flex justify-center px-6 pb-8">
                <NavLink
                  to="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full max-w-xs"
                >
                  <Button className="w-full justify-center">Request a Demo</Button>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

