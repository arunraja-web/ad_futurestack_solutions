import React from 'react'
import '../styles/page-sections.css'
import '../styles/services.css'
import '../styles/projects-showcase.css'
import SEO from '../components/common/SEO.jsx'
import ProjectRow from '../components/projects/ProjectRow.jsx'
import ProjectsFinalCTA from '../components/projects/ProjectsFinalCTA.jsx'

const projectItems = [
  {
    id: 'saviours-clinic',
    tag: 'Healthcare & Medical',
    title: 'Saviours Clinic Management System',
    description: 'End-to-end healthcare platform with patient portal login, online appointments, and electronic health records.',
    bullets: [
      'Online doctor appointment booking & real-time scheduling',
      'HIPAA-compliant EHR with secure patient access',
    ],
    stat: '99.9%',
    statLabel: 'Uptime SLA',
    liveUrl: 'https://clinic-management-system-iota-five.vercel.app/',
    bgImage: '/images/projects/saviours-clinic.webp',
    fallbackImage: '/images/projects/saviours-clinic.jpg'
  },
  {
    id: 'gymnex-premium',
    tag: 'Fitness & SaaS',
    title: 'Gymnex Premium Athletic Platform',
    description: 'Enterprise fitness SaaS for modern athletic clubs — memberships, trainer booking, and multi-branch management in one.',
    bullets: [
      'Club membership management & subscription billing',
      'Personal trainer booking & attendance tracking',
    ],
    stat: '4.9★',
    statLabel: 'Member Rating',
    liveUrl: 'https://gymnex-premium.vercel.app/',
    bgImage: '/images/projects/gymnex-premium.webp',
    fallbackImage: '/images/projects/gymnex-premium.jpg'
  },
  {
    id: 'gymnex-site',
    tag: 'Fitness & Web App',
    title: 'Gymnex Fitness & Member Portal',
    description: 'Dark-themed fitness club portal with interactive schedules, trainer profiles, membership tiers, and multi-branch exploration.',
    bullets: [
      'Workout program catalog & trainer showcase',
      'Multi-location branch explorer with class schedules',
    ],
    stat: '100%',
    statLabel: 'Responsive UI',
    liveUrl: 'https://gymnex-site-bqqa.vercel.app/',
    bgImage: '/images/projects/gymnex-site.webp',
    fallbackImage: '/images/projects/gymnex-site.jpg'
  },
  {
    id: 'aura-studio',
    tag: 'Media & Creative Studio',
    title: 'Aura Cinematic Wedding Studio',
    description: 'Luxury cinema and photography studio portal with cinematic showcases, package booking engine, and admin scheduling.',
    bullets: [
      'Cinematic video gallery & high-res film showcase',
      'Wedding package selector & instant date booking engine',
    ],
    stat: '60fps',
    statLabel: 'Cinema UI',
    liveUrl: 'https://aura-studio-psi-lac.vercel.app/',
    bgImage: '/images/projects/aura-studio.webp',
    fallbackImage: '/images/projects/aura-studio.jpg'
  },
  {
    id: 'glowora',
    tag: 'E-Commerce & Marketplace',
    title: 'Glowora Beauty & Salon Marketplace',
    description: 'Luxury beauty marketplace for booking verified salons & spas, with professional skincare e-commerce and real-time slot availability.',
    bullets: [
      'Salon/spa bookings & e-commerce in one platform',
      'Real-time slot availability & payment gateway integration',
    ],
    stat: '2.4x',
    statLabel: 'Faster Booking',
    liveUrl: 'https://glowora-fds5-smoky.vercel.app/',
    bgImage: '/images/projects/glowora.webp',
    fallbackImage: '/images/projects/glowora.jpg'
  },
  {
    id: 'vastram-textile',
    tag: 'Textiles & E-Commerce',
    title: 'Vastram Luxury Indian Textiles & Handlooms',
    description: 'Premium e-commerce portal for luxury silk sarees and artisan handlooms, with curated catalogs and custom fabric inquiry workflows.',
    bullets: [
      'Curated silk saree & handloom fabric digital catalog',
      'Interactive fabric inquiry & ordering workflow',
    ],
    stat: '100%',
    statLabel: 'Pure Handloom',
    liveUrl: 'https://textile-site-ten.vercel.app/',
    bgImage: '/images/projects/textile-site.webp',
    fallbackImage: '/images/projects/textile-site.jpg'
  },
  {
    id: 'angadix-marketplace',
    tag: 'E-Commerce & Retail Platform',
    title: 'Angadix Multi-Category Retail Platform',
    description: 'High-performance multi-category retail platform built for fast browsing, smart cart management, and seamless checkout at scale.',
    bullets: [
      'Multi-category catalog with instant search & filter indexing',
      'High-conversion checkout with payment gateway integration',
    ],
    stat: '50K+',
    statLabel: 'Catalog Items',
    liveUrl: 'https://angadix.vercel.app/',
    bgImage: '/images/projects/angadix.webp',
    fallbackImage: '/images/projects/angadix.jpg'
  },
  {
    id: 'bookverse-studio',
    tag: 'Publishing & Digital Media',
    title: 'BookVerse Studio Curated Imprint Platform',
    description: 'Digital publishing ecosystem connecting authors, publishers, and readers through curated catalogs, author portals, and instant search.',
    bullets: [
      'Curated book catalog with keyboard-shortcut search',
      'Author profiles & independent publisher imprint portals',
    ],
    stat: '10K+',
    statLabel: 'Active Readers',
    liveUrl: 'https://book-website-theta-five.vercel.app/',
    bgImage: '/images/projects/book-verse.webp',
    fallbackImage: '/images/projects/book-verse.jpg'
  }
]

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'AD FutureStack Featured Projects',
  'description': 'Live software deliverables across healthcare, athletic SaaS, cinematic web applications, and e-commerce.',
  'numberOfItems': projectItems.length,
  'itemListElement': projectItems.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'item': {
      '@type': 'CreativeWork',
      'name': item.title,
      'description': item.description,
      'url': item.liveUrl || 'https://adfuturestack.dev/projects'
    }
  }))
}

export default function Projects() {
  return (
    <div className="bespoke-page">
      <SEO
        title="Client Portfolio & Software Case Studies | AD FutureStack"
        description="Browse our portfolio of healthcare portals, athletic SaaS platforms, digital cinema engines, and enterprise web applications."
        keywords="AD FutureStack Projects, Web App Case Studies, Vercel Demos, SaaS Software, Healthcare Management System, E-Commerce Platform"
        canonicalUrl="https://adfuturestack.dev/projects"
        schema={projectsSchema}
      />

      {/* ── PROJECTS SHOWCASE ─────────────────────────────── */}
      <section className="prow-section" id="case-studies">
        {/* Section header */}
        <div className="prow-section-header">
          <span className="section-kicker">SELECTED PORTFOLIO</span>
          <h2 className="section-title font-medium" style={{ marginBottom: 0 }}>
            Production Case Studies
          </h2>
          <p className="section-description" style={{ marginBottom: 0, marginTop: '12px' }}>
            Live enterprise deployments across specialized business sectors.
          </p>
        </div>

        {/* Project rows */}
        <div className="prow-list">
          {projectItems.map((item, idx) => (
            <ProjectRow
              key={item.id}
              project={item}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* ── 3. FINAL CTA (SPLIT LAYOUT WITH LOOPING VIDEO) ──── */}
      <ProjectsFinalCTA />
    </div>
  )
}
