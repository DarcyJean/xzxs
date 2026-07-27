import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sprout } from 'lucide-react'
import Button from '../ui/Button'

const sectionLinks = [
  { id: 'intro-section', label: '项目定位' },
  { id: 'tracks-section', label: '创业匹配' },
  { id: 'cases-section', label: '案例库' },
  { id: 'cta-section', label: '案例共建' },
]

const routeLinks = [
  { to: '/', label: '首页' },
  { to: '/test', label: '创业匹配' },
  { to: '/cases', label: '案例库' },
  { to: '/system', label: '孵化体系' },
  { to: '/submit', label: '案例共建' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  // IntersectionObserver — 监听当前视口所在段落
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sectionLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHomePage])

  // 平滑滚动到指定段落
  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    } else {
      navigate('/', { state: { scrollTo: id } })
      setMobileOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[rgba(7,15,30,0.75)] backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-brand-cyan flex items-center justify-center group-hover:brightness-110 transition-all">
              <Sprout className="w-5 h-5 text-[#070F1E]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight">
                乡智新生
              </span>
              <span className="text-[10px] text-white/60 font-medium leading-tight tracking-wider">
                XZXS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {isHomePage
              ? sectionLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeSection === link.id
                        ? 'text-brand-cyan'
                        : 'text-white/60 hover:text-brand-cyan hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-cyan"
                      />
                    )}
                  </button>
                ))
              : routeLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? 'text-brand-cyan'
                        : 'text-white/60 hover:text-brand-cyan hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-cyan"
                      />
                    )}
                  </Link>
                ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/test">
              <Button variant="cyan" size="sm">
                开始创业匹配
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-white/80" />
            ) : (
              <Menu className="w-6 h-6 text-white/80" />
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
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#0B1B30]/95 backdrop-blur-xl"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {isHomePage
                ? sectionLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                        activeSection === link.id
                          ? 'bg-brand-cyan/10 text-brand-cyan'
                          : 'text-white/60 hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))
                : routeLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location.pathname === link.to
                          ? 'bg-brand-cyan/10 text-brand-cyan'
                          : 'text-white/60 hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
              <Link to="/test" onClick={() => setMobileOpen(false)}>
                <Button variant="cyan" size="md" className="w-full mt-2">
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
