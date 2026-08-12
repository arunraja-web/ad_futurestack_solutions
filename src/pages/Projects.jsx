import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/page-sections.css'
import '../styles/services.css'
import SEO from '../components/common/SEO.jsx'
import { Award, TrendingUp, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react'

const HERO_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=90"

const projectItems = [
  {
    id: 'saviours-clinic',
    tag: 'Healthcare & Medical',
    title: 'Saviours Clinic Management System',
    description: 'An all-in-one healthcare management platform featuring patient portal login, online doctor appointments, electronic health records, and clinical department management.',
    bullets: [
      'Online doctor appointment booking & real-time scheduling',
      'Patient portal login & digital health record management',
      'Inpatient, Radiology, and Clinical department workflow automation',
      'HIPAA-compliant data encryption and secure patient access'
    ],
    tags: ['React', 'Node.js', 'Healthcare UI', 'Tailwind CSS', 'Patient Portal'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://clinic-management-system-iota-five.vercel.app/',
    bgImage: '/images/projects/saviours-clinic.webp',
    fallbackImage: '/images/projects/saviours-clinic.jpg'
  },
  {
    id: 'gymnex-premium',
    tag: 'Fitness & SaaS',
    title: 'Gymnex Premium Athletic Platform',
    description: 'An enterprise-grade fitness management platform built for modern athletic clubs, personal training programs, and wellness center memberships.',
    bullets: [
      'Enterprise club membership management & subscription billing',
      'Personal trainer booking, workout tracking & wellness programs',
      'Multi-branch club access & attendance tracking',
      'High-availability cloud architecture with instant joining workflows'
    ],
    tags: ['React', 'Next.js', 'SaaS Architecture', 'Membership Engine', 'Tailwind CSS'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://gymnex-premium.vercel.app/',
    bgImage: '/images/projects/gymnex-premium.webp',
    fallbackImage: '/images/projects/gymnex-premium.jpg'
  },
  {
    id: 'gymnex-site',
    tag: 'Fitness & Web App',
    title: 'Gymnex Fitness & Member Portal',
    description: 'A high-impact, dark-themed fitness club portal featuring interactive program schedules, trainer profiles, membership plans, and multi-branch exploration.',
    bullets: [
      'Dynamic workout program catalog & trainer showcase',
      'Interactive membership tier selector & instant registration',
      'Multi-location branch explorer with class schedules',
      'Responsive high-contrast UI with smooth scrolling and animations'
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Fitness Portal', 'Framer Motion'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://gymnex-site-bqqa.vercel.app/',
    bgImage: '/images/projects/gymnex-site.webp',
    fallbackImage: '/images/projects/gymnex-site.jpg'
  },
  {
    id: 'aura-studio',
    tag: 'Media & Creative Studio',
    title: 'Aura Cinematic Wedding Studio',
    description: 'An award-winning luxury cinema and photography studio portal featuring cinematic film showcases, package booking engines, and admin scheduling tools.',
    bullets: [
      'Cinematic video gallery & film showcase with high-res playback',
      'Custom wedding package selector & instant date booking engine',
      'Admin portal for booking management & client scheduling',
      'Luxury dark-gold aesthetic with responsive video playback'
    ],
    tags: ['React', 'Luxury UI', 'Video Player API', 'Booking System', 'Tailwind CSS'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://aura-studio-psi-lac.vercel.app/',
    bgImage: '/images/projects/aura-studio.webp',
    fallbackImage: '/images/projects/aura-studio.jpg'
  },
  {
    id: 'glowora',
    tag: 'E-Commerce & Marketplace',
    title: 'Glowora Beauty & Salon Marketplace',
    description: 'A luxury beauty marketplace platform enabling users to book verified top salons and spas while shopping for professional-grade skincare and beauty brands.',
    bullets: [
      'Dual-purpose platform for salon/spa bookings & e-commerce shopping',
      'Verified trade marketplace with GST invoicing and membership tiers',
      'Interactive salon booking widget with real-time slot availability',
      'Sleek pastel aesthetic with secure payment gateway integration'
    ],
    tags: ['React', 'E-Commerce', 'Booking Engine', 'Marketplace API', 'Tailwind CSS'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://glowora-fds5-smoky.vercel.app/',
    bgImage: '/images/projects/glowora.webp',
    fallbackImage: '/images/projects/glowora.jpg'
  },
  {
    id: 'vastram-textile',
    tag: 'Textiles & E-Commerce',
    title: 'Vastram Luxury Indian Textiles & Handlooms',
    description: 'A premium luxury Indian textiles and handloom e-commerce portal showcasing silk sarees, artisan weaving heritage, and custom fabric order inquiries.',
    bullets: [
      'Curated luxury silk saree and handloom fabric digital catalog',
      'Artisan weaving heritage showcase & collection filters',
      'Interactive fabric inquiry & online ordering workflow',
      'Responsive high-contrast design with rich visual storytelling'
    ],
    tags: ['React', 'E-Commerce', 'Luxury Web UI', 'Tailwind CSS', 'Silk Catalog'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://textile-site-ten.vercel.app/',
    bgImage: '/images/projects/textile-site.webp',
    fallbackImage: '/images/projects/textile-site.jpg'
  },
  {
    id: 'angadix-marketplace',
    tag: 'E-Commerce & Retail Platform',
    title: 'Angadix Multi-Category Retail Platform',
    description: 'A modern, high-performance retail and multi-category e-commerce platform built for fast product browsing, smart cart management, and seamless online shopping.',
    bullets: [
      'Multi-category product catalog with instant search & filter indexing',
      'Smart cart management & real-time inventory synchronization',
      'High-conversion checkout workflow with payment gateway integration',
      'Mobile-first responsive architecture designed for speed and scale'
    ],
    tags: ['React', 'Node.js', 'E-Commerce Engine', 'Tailwind CSS', 'REST API'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://angadix.vercel.app/',
    bgImage: '/images/projects/angadix.webp',
    fallbackImage: '/images/projects/angadix.jpg'
  },
  {
    id: 'bookverse-studio',
    tag: 'Publishing & Digital Media',
    title: 'BookVerse Studio Curated Imprint Platform',
    description: 'An interconnected digital publishing ecosystem connecting authors, independent publishers, and readers through curated book catalogs, author portals, and instant search indexing.',
    bullets: [
      'Curated literary book catalog with instant keyboard-shortcut search',
      'Author profile showcase & independent publisher imprint portals',
      'Multi-language interface support with responsive editorial typography',
      'High-performance reader discovery engine with rating highlights'
    ],
    tags: ['React', 'Publishing Platform', 'Editorial UI', 'Tailwind CSS', 'Book Search'],
    metrics: 'Live Vercel Application',
    liveUrl: 'https://book-website-theta-five.vercel.app/',
    bgImage: '/images/projects/book-verse.webp',
    fallbackImage: '/images/projects/book-verse.jpg'
  }
]

const projectPillars = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Measurable Growth',
    description: 'Our digital products deliver clear business results—boosting site traffic, user engagement, and operational speed.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Reliable Software Quality',
    description: 'We build applications designed for 99.99% uptime, ensuring smooth performance for all your users.'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Modern Design Standards',
    description: 'Every project combines sleek UI design, intuitive UX, and clean maintainable code built to scale.'
  }
]

function ProjectVisualWidget({ bgImage, fallbackImage, tag, liveUrl, title }) {
  return (
    <div className="showcase-card-visual relative overflow-hidden rounded-2xl group min-h-[320px] border border-slate-700/60 shadow-xl p-0">
      <img
        src={bgImage}
        onError={(e) => {
          if (fallbackImage) {
            e.target.src = fallbackImage
          }
        }}
        alt={title || tag || "Project Showcase Visual"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />



      {/* Live Demo Overlay Button */}
      {liveUrl && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-violet-700/90 hover:bg-violet-800 text-white font-montserrat font-semibold text-md rounded-xl shadow-lg border border-violet-400/40 transition-all backdrop-blur-md"
          >
            <span>View Live Project Demo</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <div className="bespoke-page">
      <SEO
        title="Featured Projects & Live Deliveries | AD FutureStack"
        description="Explore live software deliverables built by AD FutureStack across Healthcare, Athletic SaaS, Cinematic Studios, E-Commerce, and Luxury Textiles."
        keywords="AD FutureStack Projects, Web App Case Studies, Vercel Demos, SaaS Software, Healthcare Management System, E-Commerce Platform"
      />
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        className="page-hero-bespoke"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="page-hero-overlay" />

        <div className="page-hero-inner">
          <div className="page-hero-content">
            <h1 className="font-medium">
              Our Featured <span>Projects</span>
            </h1>

            <p>
              Explore our live portfolio of healthcare platforms, athletic SaaS portals, luxury cinema studios, and e-commerce marketplaces built for real-world impact.
            </p>

            <div className="hero-action-group">
              <a href="#case-studies" className="hero-btn-primary">
                Explore Showcase <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="hero-btn-secondary">
                Start Your Project ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION */}
      <section className="pillars-section">
        <span className="section-kicker text-xl font-semibold">OUR COMMITMENT TO QUALITY</span>
        <h2 className="section-title font-medium">Engineered for Quantifiable Results</h2>
        <p className="section-description">
          Every project we build is tailored to user experience, reliable software architecture, and measurable growth.
        </p>

        <div className="pillars-grid">
          {projectPillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDIES SHOWCASE GRID */}
      <section className="showcase-section" id="case-studies">
        <div className="showcase-inner">
          <span className="section-kicker">LIVE SHOWCASE</span>
          <h2 className="section-title font-semibold">Featured Live Projects</h2>
          <p className="section-description">
            Explore our production web applications across Healthcare, Athletic SaaS, Cinematic Studios, and E-Commerce Marketplaces.
          </p>

          <div className="showcase-grid">
            {projectItems.map((item, idx) => (
              <div key={item.id} className={`showcase-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
                <div className="showcase-card-content">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="showcase-tag mb-0">{item.tag}</span>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 px-2.5 py-1 rounded-full border border-violet-200 flex items-center gap-1 transition-colors"
                    >

                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                  <p className="text-white/70 text-base mt-2">{item.description}</p>

                  <div className="showcase-bullet-list">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="showcase-bullet-item">
                        <span>✓</span>
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="showcase-tags-group">
                    {item.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <ProjectVisualWidget
                  bgImage={item.bgImage}
                  fallbackImage={item.fallbackImage}

                  liveUrl={item.liveUrl}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bespoke-cta-section">
        <div className="bespoke-cta-content">
          <h2 className="font-normal">Ready to Build Your Project?</h2>
          <p>
            Partner with our team to design and build your web app, mobile app, digital marketing engine, or SaaS platform.
          </p>
        </div>
        <Link to="/contact" className="bespoke-cta-btn">
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
