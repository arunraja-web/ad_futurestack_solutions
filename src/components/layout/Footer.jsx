import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Share2, Code2 } from 'lucide-react'
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from '../../utils/constants.js'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4 font-montserrat">
            <Link to="/" className="flex items-center gap-3 font-montserrat">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-1">
                <img
                  src="/images/logo/ad-logo.png"
                  onError={(e) => { e.target.src = '/images/AD Logo.png' }}
                  alt="AD FutureStack - IT Services & Software Development Studio Logo"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col font-montserrat">
                <span className="font-montserrat text-lg font-bold text-white tracking-tight leading-tight">
                  AD FUTURE STACK
                </span>
                <span className="text-[10px] font-montserrat tracking-widest text-violet-400 uppercase font-bold">
                  IT SOLUTIONS & SERVICES
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-montserrat">
              Architecting next-generation digital products, intelligent systems, and scalable cloud platforms for ambitious enterprises worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="AD FutureStack GitHub Repository" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/50 transition-all focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none">
                <Code2 className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="AD FutureStack LinkedIn Profile" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/50 transition-all focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="AD FutureStack Twitter Profile" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-violet-400 hover:border-violet-500/50 transition-all focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="font-montserrat">
            <h3 className="text-xs sm:text-sm font-montserrat font-bold uppercase tracking-widest text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-montserrat text-slate-300">
              <li><Link to="/" className="hover:text-violet-400 transition-colors font-montserrat">Home</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors font-montserrat">Services</Link></li>
              <li><Link to="/capabilities" className="hover:text-violet-400 transition-colors font-montserrat">Capabilities</Link></li>
              <li><Link to="/solutions" className="hover:text-violet-400 transition-colors font-montserrat">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-violet-400 transition-colors font-montserrat">Case Studies</Link></li>
            </ul>
          </div>

          {/* Solutions & Tech */}
          <div className="font-montserrat">
            <h3 className="text-xs sm:text-sm font-montserrat font-bold uppercase tracking-widest text-white mb-4">Expertise</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-montserrat text-slate-300">
              <li><Link to="/services" className="hover:text-violet-400 transition-colors font-montserrat">Product Engineering</Link></li>
              <li><Link to="/capabilities" className="hover:text-violet-400 transition-colors font-montserrat">Web Development</Link></li>
              <li><Link to="/solutions" className="hover:text-violet-400 transition-colors font-montserrat">AI & RAG Workflows</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors font-montserrat">Mobile Application</Link></li>
              <li><Link to="/about" className="hover:text-violet-400 transition-colors font-montserrat">About Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="font-montserrat">
            <h3 className="text-xs sm:text-sm font-montserrat font-bold uppercase tracking-widest text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-xs sm:text-sm font-montserrat text-slate-300">
              <li className="flex items-center gap-2.5 font-montserrat">
                <Mail className="h-4 w-4 text-violet-400 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-violet-400 transition-colors font-montserrat">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2.5 font-montserrat">
                <Phone className="h-4 w-4 text-violet-400 shrink-0" />
                <span className="hover:text-violet-400 transition-colors font-montserrat">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-start gap-2.5 font-montserrat">
                <MapPin className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="hover:text-violet-400 transition-colors font-montserrat">{OFFICE_ADDRESS}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-montserrat text-slate-500">
          <p className="font-montserrat">© {new Date().getFullYear()} AD FutureStack Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 font-montserrat">
            <span className="hover:text-violet-400 cursor-pointer transition-colors font-montserrat">Privacy Policy</span>
            <span className="hover:text-violet-400 cursor-pointer transition-colors font-montserrat">Terms of Service</span>
            <span className="hover:text-violet-400 cursor-pointer transition-colors font-montserrat">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
