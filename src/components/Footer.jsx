import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#464554]/40 bg-[#0d0d15]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-[#c7c4d7] md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-[#e4e1ed]">Bookflow</p>
          <p className="mt-2 max-w-sm text-xs text-[#908fa0]">
            High-performance distribution software for the next generation of field sales teams.
          </p>
        </div>
        <nav className="space-y-1 text-xs">
          <p className="font-semibold uppercase tracking-wider text-[#e4e1ed]">Company</p>
          <NavLink to="/" className="block hover:text-[#4cd7f6]">Home</NavLink>
          <NavLink to="/features" className="block hover:text-[#4cd7f6]">Features</NavLink>
          <NavLink to="/about" className="block hover:text-[#4cd7f6]">About</NavLink>
          <NavLink to="/contact" className="block hover:text-[#4cd7f6]">Contact</NavLink>
        </nav>
        <div className="space-y-1 text-xs">
          <p className="font-semibold uppercase tracking-wider text-[#e4e1ed]">Contact</p>
          <p>Email: text19013@gmail.com</p>
          <p className="pt-3 text-[11px] text-[#908fa0]">
            © {new Date().getFullYear()} Bookflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

