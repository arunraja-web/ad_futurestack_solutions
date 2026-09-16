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
  Code
} from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation.js'
import { SITE_NAME } from '../../utils/constants.js'

const iconMap = {
  Layers: <Layers className="h-4 w-4 text-[#0062CD]" />,
  Sparkles: <Sparkles className="h-4 w-4 text-[#0062CD]" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4 text-[#0062CD]" />,
  Code: <Code className="h-4 w-4 text-[#0062CD]" />
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
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 font-montserrat text-slate-900">
      {/* MAIN NAVBAR */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-20 flex items-center justify-between font-montserrat">
        {/* LEFT: Brand Logo */}
        <Link to="/" className="flex items-center group shrink-0 font-montserrat relative z-20">
          {/* Logo Icon Box - Sits in front (z-10) with solid background */}
          <div className="relative z-10 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-900 p-1 shadow-md transition-transform group-hover:scale-105 border border-slate-800">
            <img
              src="/images/logo/ad-logo.png"
              onError={(e) => { e.target.src = '/images/AD Logo.png' }}
              alt="AD FutureStack - IT Services & Software Development Studio Logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Brand Text - Butter smooth slide into the logo on scroll, slides back out at top */}
          <div
            className={`flex flex-col font-montserrat overflow-hidden whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[max-width,opacity,transform] ${
              scrolled
                ? 'max-w-0 opacity-0 -translate-x-6 ml-0 pointer-events-none'
                : 'max-w-[260px] opacity-100 translate-x-0 ml-3.5'
            }`}
          >
            <span className="font-montserrat text-base sm:text-lg xl:text-xl font-bold tracking-tight text-slate-900 leading-tight">
              AD FUTURE STACK
            </span>
            <span className="text-[9px] sm:text-[10px] font-montserrat font-extrabold tracking-widest text-[#0062CD] uppercase">
              IT SOLUTIONS & SERVICES
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links - Perfectly STATIC at true center regardless of logo width */}
        <nav
          className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 font-montserrat absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const hasChildren = Boolean(link.children && link.children.length > 0)
            const isParentActive =
              location.pathname === link.to ||
              (hasChildren && link.children.some((child) => location.pathname === child.to))

            return (
              <div
                key={link.label}
                className="relative py-6 font-montserrat"
                onMouseEnter={() => hasChildren && handleMouseEnter(link.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors uppercase tracking-wider font-montserrat ${
                      isActive || isParentActive
                        ? 'text-[#0062CD] font-extrabold'
                        : 'text-slate-800 hover:text-[#0062CD]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-[#0062CD]' : ''
                      }`}
                    />
                  )}
                </NavLink>

                {/* DROPDOWN MENU */}
                {hasChildren && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 w-88 sm:w-96 rounded-2xl bg-white p-3.5 shadow-2xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200 font-montserrat text-slate-900"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1.5 font-montserrat">
                      {link.children.map((child) => {
                        return (
                          <NavLink
                            key={child.label}
                            to={child.to}
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `group flex items-center gap-3.5 rounded-xl p-3 transition-colors font-montserrat ${
                                isActive ? 'bg-blue-50/80 text-[#0062CD]' : 'hover:bg-slate-50 text-slate-700'
                              }`
                            }
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 group-hover:bg-[#0062CD] group-hover:text-white transition-all font-montserrat">
                              {iconMap[child.iconName] || <Layers className="h-5 w-5" />}
                            </div>

                            <div className="flex flex-col flex-1 min-w-0 font-montserrat">
                              <span className="text-sm font-bold flex items-center justify-between text-slate-900 font-montserrat">
                                <span>{child.label}</span>
                                <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </span>
                              <span className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5 font-montserrat">
                                {child.description}
                              </span>
                            </div>
                          </NavLink>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* RIGHT SIDE: CTA & Mobile Menu */}
        <div className="flex items-center gap-4 font-montserrat">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#0062CD] px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#0052b0] transition-all shadow-md hover:shadow-[#0062CD]/25 active:scale-95 font-montserrat shrink-0"
          >
            Contact us
          </Link>

          {/* Mobile Drawer Trigger Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors lg:hidden focus-visible:ring-2 focus-visible:ring-[#0062CD] focus-visible:outline-none cursor-pointer"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white text-slate-900 px-4 py-6 shadow-2xl animate-in slide-in-from-top duration-200 font-montserrat">
          <nav id="mobile-navigation-menu" aria-label="Mobile Navigation" className="flex flex-col space-y-4 font-montserrat">
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children && link.children.length > 0)
              return (
                <div key={link.label} className="space-y-2 font-montserrat">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => !hasChildren && setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-bold flex items-center justify-between uppercase tracking-wider font-montserrat ${
                        isActive ? 'text-[#0062CD] font-extrabold' : 'text-slate-800'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                  </NavLink>

                  {hasChildren && (
                    <div className="pl-4 space-y-2 border-l-2 border-slate-200 pt-1 font-montserrat">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `text-xs py-1.5 transition-colors flex items-center gap-2 font-montserrat ${
                              isActive ? 'text-[#0062CD] font-bold' : 'text-slate-600 hover:text-slate-950'
                            }`
                          }
                        >
                          <span>{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3 font-montserrat">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-[#0062CD] px-5 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#0052b0] transition-all font-montserrat"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
