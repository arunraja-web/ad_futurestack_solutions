import { useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Sparkles,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Code
} from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation.js'
import { SITE_NAME, CONTACT_PHONE } from '../../utils/constants.js'

const iconMap = {
  Layers: <Layers className="h-4 w-4 text-violet-600" />,
  Sparkles: <Sparkles className="h-4 w-4 text-violet-600" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4 text-violet-600" />,
  Code: <Code className="h-4 w-4 text-violet-600" />
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const timeoutRef = useRef(null)

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-20 flex items-center justify-between font-montserrat">
        {/* LEFT: Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0 font-montserrat">
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-900 p-1 shadow-xs transition-transform group-hover:scale-105 border border-slate-800">
            <img
              src="/images/logo/ad-logo.png"
              onError={(e) => { e.target.src = '/images/AD Logo.png' }}
              alt="AD FutureStack - IT Services & Software Development Studio Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col font-montserrat">
            <span className="font-montserrat text-base sm:text-lg xl:text-xl font-bold tracking-tight text-slate-900 leading-tight">
              AD FUTURE STACK
            </span>
            <span className="text-[9px] sm:text-[10px] font-montserrat font-extrabold tracking-widest text-violet-600 uppercase">
              IT SOLUTIONS & SERVICES
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 font-montserrat" aria-label="Primary Navigation">
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
                    `flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors uppercase tracking-wider font-montserrat ${isActive || isParentActive
                      ? 'text-violet-700 font-extrabold'
                      : 'text-slate-800 hover:text-violet-700'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-violet-700' : ''
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
                              `group flex items-center gap-3.5 rounded-xl p-3 transition-colors font-montserrat ${isActive ? 'bg-violet-50 text-violet-700' : 'hover:bg-slate-50 text-slate-700'
                              }`
                            }
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 group-hover:bg-violet-700 group-hover:text-white transition-all font-montserrat">
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

        {/* RIGHT SIDE: Phone Call Badge & CTA */}
        <div className="flex items-center gap-5 sm:gap-6 font-montserrat">
          <div className="hidden xl:flex items-center gap-3 font-montserrat">
            <div className="h-10 w-10 rounded-full bg-violet-700 text-white flex items-center justify-center shadow-md shrink-0">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div className="flex flex-col font-montserrat">
              <span className="text-[10px] font-montserrat uppercase font-bold text-slate-500">
                Let's Talk
              </span>
              <a href={`tel:${CONTACT_PHONE}`} className="text-xs font-bold text-slate-900 hover:text-violet-700 transition-colors font-montserrat">
                {CONTACT_PHONE}
              </a>
            </div>
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-violet-700 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-violet-800 transition-all shadow-md hover:shadow-violet-700/30 active:scale-95 font-montserrat shrink-0"
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
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors lg:hidden focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:outline-none cursor-pointer"
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
                      `text-sm font-bold flex items-center justify-between uppercase tracking-wider font-montserrat ${isActive ? 'text-violet-700 font-extrabold' : 'text-slate-800'
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
                            `text-xs py-1.5 transition-colors flex items-center gap-2 font-montserrat ${isActive ? 'text-violet-700 font-bold' : 'text-slate-600 hover:text-slate-950'
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
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="text-xs font-bold text-slate-800 flex items-center gap-2 font-montserrat"
              >
                <PhoneCall className="h-4 w-4 text-violet-700" />
                <span>{CONTACT_PHONE}</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-xl bg-violet-700 px-5 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-violet-800 transition-all font-montserrat"
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
