import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-neutral-900">
            OrderBooker
          </p>
          <nav className="flex flex-wrap gap-3 text-xs sm:text-sm">
            <NavLink to="/" className="hover:text-indigo-600">
              Home
            </NavLink>
            <NavLink to="/features" className="hover:text-indigo-600">
              Features
            </NavLink>
            <NavLink to="/about" className="hover:text-indigo-600">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:text-indigo-600">
              Contact
            </NavLink>
          </nav>
          <p className="text-[11px] text-neutral-500">
            Built for FMCG &amp; distribution teams across Pakistan.
          </p>
        </div>

        <div className="space-y-2 text-xs sm:text-sm">
          <p className="font-semibold text-neutral-900">Contact</p>
          <p>Email: hello@orderbooker.app</p>
          <p className="text-[11px] text-neutral-500">
            © {new Date().getFullYear()} Bookflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

