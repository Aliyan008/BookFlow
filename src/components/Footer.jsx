import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeUp } from './FadeUp'

export function Footer() {
  return (
    <footer className="border-t border-[#464554]/40 bg-[#0d0d15]">
      <FadeUp>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-[#c7c4d7] md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-lg font-semibold text-[#e4e1ed]">Bookflow</p>
            <p className="mt-2 max-w-sm text-xs text-[#908fa0]">
              High-performance distribution software for the next generation of field sales teams.
            </p>
          </div>
          <nav className="space-y-1 text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#e4e1ed]">Company</p>
            <NavLink to="/" className="block">
              <motion.span whileHover={{ color: '#4cd7f6' }} transition={{ duration: 0.2 }} className="block">
                Home
              </motion.span>
            </NavLink>
            <NavLink to="/features" className="block">
              <motion.span whileHover={{ color: '#4cd7f6' }} transition={{ duration: 0.2 }} className="block">
                Features
              </motion.span>
            </NavLink>
            <NavLink to="/about" className="block">
              <motion.span whileHover={{ color: '#4cd7f6' }} transition={{ duration: 0.2 }} className="block">
                About
              </motion.span>
            </NavLink>
            <NavLink to="/contact" className="block">
              <motion.span whileHover={{ color: '#4cd7f6' }} transition={{ duration: 0.2 }} className="block">
                Contact
              </motion.span>
            </NavLink>
            <NavLink to="/privacy-policy" className="block">
              <motion.span whileHover={{ color: '#4cd7f6' }} transition={{ duration: 0.2 }} className="block">
                Privacy Policy
              </motion.span>
            </NavLink>
          </nav>
          <div className="space-y-1 text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#e4e1ed]">Contact</p>
            <p>Email: getbookflow@gmail.com</p>
            <p className="pt-3 text-[11px] text-[#908fa0]">
              © {new Date().getFullYear()} Bookflow. All rights reserved.
            </p>
          </div>
        </div>
      </FadeUp>
    </footer>
  )
}

