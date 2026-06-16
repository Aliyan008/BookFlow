import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#d0d0dc]/60 bg-[#ebebf2]">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-[#0d0d15]">Bookflow</p>
            <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-[#9999aa]">
              High-performance distribution software for the next generation of field sales teams.
            </p>
            <p className="mt-3 text-[11px] text-[#9999aa]">
              © {new Date().getFullYear()} Bookflow. All rights reserved.
            </p>
          </div>
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9999aa]">COMPANY</p>
            <NavLink to="/" className="block py-0.5 text-xs text-[#6b6b7e] transition-colors duration-200 hover:text-[#0d0d15]">
              Home
            </NavLink>
            <NavLink to="/features" className="block py-0.5 text-xs text-[#6b6b7e] transition-colors duration-200 hover:text-[#0d0d15]">
              Features
            </NavLink>
            <NavLink to="/about" className="block py-0.5 text-xs text-[#6b6b7e] transition-colors duration-200 hover:text-[#0d0d15]">
              About
            </NavLink>
            <NavLink to="/contact" className="block py-0.5 text-xs text-[#6b6b7e] transition-colors duration-200 hover:text-[#0d0d15]">
              Contact
            </NavLink>
          </div>
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9999aa]">LEGAL</p>
            <NavLink to="/privacy-policy" className="block py-0.5 text-xs text-[#6b6b7e] transition-colors duration-200 hover:text-[#0d0d15]">
              Privacy Policy
            </NavLink>
            <p className="mt-4 text-xs text-[#6b6b7e]">getbookflow@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative h-64 overflow-hidden select-none pointer-events-none">
          <p className="absolute -bottom-8 left-0 text-[20rem] font-black leading-none tracking-tight text-[#8083ff]/[0.09] whitespace-nowrap">
            Bookflow
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #ebebf2)' }}
        />
      </div>
    </footer>
  )
}
