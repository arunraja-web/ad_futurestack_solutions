import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Code,
  Search
} from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation.js'

const iconMap = {
  Layers: <Layers className="h-4 w-4 text-[#2563eb]" />,
  Sparkles: <Sparkles className="h-4 w-4 text-[#2563eb]" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4 text-[#2563eb]" />,
  Code: <Code className="h-4 w-4 text-[#2563eb]" />
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full font-montserrat transition-colors duration-500 ${scrolled ? 'bg-[#0a0a0a]' : 'bg-transparent'}`}>

      {/* ── MAIN BAR ── */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-[80px] flex items-center justify-between">

        {/* LEFT — Logo */}
        <Link to="/" className="shrink-0 flex items-center justify-center group">
          <div className="w-20 h-20 flex items-center justify-center transition-opacity group-hover:opacity-80">
            <img
              src="/images/logo/ad-logo.png"
              onError={(e) => { e.target.src = '/images/AD Logo.png' }}
              alt="AD FutureStack"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* CENTER — Nav links (desktop) */}
        <nav
          className="hidden lg:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const hasChildren = Boolean(link.children?.length)
            const isParentActive =
              location.pathname === link.to ||
              (hasChildren && link.children.some((c) => location.pathname === c.to))

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleMouseEnter(link.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-7 py-[18px] text-[20px] transition-colors whitespace-nowrap font-medium ${isActive || isParentActive
                      ? 'text-white'
                      : 'text-[#a0a0a0] hover:text-white'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-white' : 'text-[#606060]'
                        }`}
                    />
                  )}
                </NavLink>

                {/* Dropdown */}
                {
                  hasChildren && activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 w-72 rounded-xl bg-[#111111] py-2 shadow-2xl border border-white/[0.08] z-50"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setActiveDropdown(null)}
                          className={({ isActive }) =>
                            `group flex items-center gap-3 px-3 py-2.5 mx-1.5 rounded-lg transition-colors ${isActive
                              ? 'bg-[#1e3a8a]/30 text-white'
                              : 'text-[#a0a0a0] hover:bg-white/[0.06] hover:text-white'
                            }`
                          }
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:bg-[#1e3a8a]/30 transition-all">
                            {iconMap[child.iconName] || <Layers className="h-4 w-4" />}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium leading-tight">{child.label}</span>
                            <span className="text-xs text-[#606060] mt-0.5 leading-tight line-clamp-1">{child.description}</span>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-[#404040] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
                        </NavLink>
                      ))}
                    </div>
                  )
                }
              </div>
            )
          })}
        </nav>

        {/* RIGHT — Search + Contact us + Mobile trigger */}
        <div className="flex items-center gap-1">




          {/* Contact us — ghost pill */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-6px justify-center  border border-white/25 px-5 py-[14px] text-large font-semibold text-white hover:bg-white hover:text-black transition-all duration-200 shrink-0"
          >
            Contact us
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="lg:hidden flex items-center justify-center w-8 h-8 text-[#a0a0a0] hover:text-white transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div >

      {/* ── MOBILE DRAWER ── */}
      {
        open && (
          <div className="lg:hidden bg-[#0d0d0d] border-t border-white/[0.08] px-5 py-5">
            <nav id="mobile-nav" aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = Boolean(link.children?.length)
                return (
                  <div key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => !hasChildren && setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-2.5 text-sm ${isActive ? 'text-white' : 'text-[#a0a0a0]'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      {hasChildren && <ChevronDown className="h-4 w-4 text-[#505050]" />}
                    </NavLink>

                    {hasChildren && (
                      <div className="pl-4 border-l border-white/[0.08] mb-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `py-2 text-sm ${isActive ? 'text-[#2563eb]' : 'text-[#707070] hover:text-white'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}

                <div className="mt-3 pt-4 border-t border-white/[0.08]">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm text-white hover:bg-white hover:text-black transition-all"
                  >
                    Contact us
                  </Link>
                </div>
              </nav>
            </div>
          )
        }
      </header >
      )
}
