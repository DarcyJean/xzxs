import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sprout } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/test', label: '创业匹配' },
  { to: '/cases', label: '案例库' },
  { to: '/system', label: '孵化体系' },
  { to: '/submit', label: '案例共建' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center group-hover:bg-brand-green-dark transition-colors">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">
                乡智新生
              </span>
              <span className="text-[10px] text-gray-400 font-medium leading-tight tracking-wider">
                XZXS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    location.pathname === link.to
                      ? 'text-brand-green'
                      : 'text-gray-600 hover:text-brand-green hover:bg-brand-light/50'
                  }
                `}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-green"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/test">
              <Button variant="primary" size="sm">
                开始创业匹配
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${
                      location.pathname === link.to
                        ? 'bg-brand-light text-brand-green'
                        : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/test" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" size="md" className="w-full mt-2">
                  开始创业匹配
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
