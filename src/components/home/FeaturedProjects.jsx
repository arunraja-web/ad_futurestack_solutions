import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Container from '../common/Container.jsx'

const highlights = [
  {
    id: 'cloud-performance',
    category: 'Cloud Engineering',
    title: 'H1 Enterprise Cloud Modernization',
    subtitle: 'Multi-cloud Kubernetes deployment delivering 99.999% SLA uptime across distributed global regions.',
    image: '/images/projects/fintech-enterprise.webp',
    link: '/solutions',
    reveal: 'left'
  },
  {
    id: 'ai-insights',
    category: 'AI & Data Systems',
    title: 'Conversations for Tomorrow: AI Systems',
    subtitle: 'Intelligent automated workflows, RAG knowledge bases, and digital sovereignty for high-growth enterprises.',
    image: '/images/home/ai-data-systems.webp',
    link: '/solutions',
    reveal: 'up'
  },
  {
    id: 'trading-throughput',
    category: 'Full-Stack Engineering',
    title: 'High-Frequency Digital Platforms',
    subtitle: 'Engineering sub-millisecond API response times, microservices streaming, and zero-downtime database failovers.',
    image: '/images/solutions/saas-blueprint.webp',
    link: '/capabilities',
    reveal: 'right'
  },
  {
    id: 'fintech-gateway',
    category: 'Payment Architecture',
    title: 'Global Payment Gateway Engine',
    subtitle: 'PCI-DSS compliant transactional backend architectures processing millions of monthly transactions.',
    image: '/images/solutions/fintech-platform.webp',
    link: '/solutions',
    reveal: 'left'
  },
  {
    id: 'healthcare-telemetry',
    category: 'Healthcare Tech',
    title: 'Real-Time Patient Telemetry Platform',
    subtitle: 'HIPAA-compliant cloud platform unifying IoT biometric sensors with predictive diagnostic algorithms.',
    image: '/images/projects/healthcare-system.webp',
    link: '/solutions',
    reveal: 'up'
  },
  {
    id: 'supply-chain-ai',
    category: 'Supply Chain Tech',
    title: 'Autonomous Supply Chain System',
    subtitle: 'Logistics routing with graph optimization, automated dispatching, and live inventory telemetry.',
    image: '/images/projects/logistics-engine.webp',
    link: '/capabilities',
    reveal: 'right'
  }
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 font-montserrat">
      <Container className="font-montserrat">
        {/* SECTION TITLE */}
        <div data-reveal="up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 font-montserrat">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062CD] block mb-2">
              Case Studies & Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-montserrat uppercase">
              <span className="gsap-mask-wrapper">
                <span className="gsap-mask-line">Highlights & Case Studies</span>
              </span>
            </h2>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0062CD] hover:text-[#0050A8] transition-colors uppercase tracking-wider font-montserrat group"
          >
            <span>Explore All Solutions</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 6-CARD MNC EDITORIAL GRID */}
        <div className="gsap-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-montserrat">
          {highlights.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              data-reveal={item.reveal}
              className="gsap-card-item group relative flex flex-col justify-end aspect-[4/5] sm:aspect-[3/4] bg-slate-950 p-6 sm:p-7 border border-slate-800/80 hover:border-[#0062CD]/50 shadow-xl hover:shadow-2xl hover:shadow-slate-950/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-montserrat overflow-hidden select-none"
            >
              {/* Full-bleed Background Image */}
              <img
                src={item.image}
                alt={`AD FutureStack Featured Project Case Study - ${item.title}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform z-0"
              />

              {/* Hexagonal / Tech Pattern Graphic Overlay in the upper portion */}
              <div className="absolute top-0 inset-x-0 h-1/2 pointer-events-none overflow-hidden z-10 opacity-30 group-hover:opacity-40 transition-opacity duration-700">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id={`hex-grid-${item.id}`} width="28" height="48.497" patternUnits="userSpaceOnUse">
                      <path
                        d="M 14 0 L 28 8.082 L 28 24.248 L 14 32.33 L 0 24.248 L 0 8.082 Z M 0 48.497 L 14 40.415 L 28 48.497"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="0.7"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#hex-grid-${item.id})`} />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Dark Gradient Scrim Overlay for crystal-clear readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent z-10 pointer-events-none transition-colors duration-500" />

              {/* Content Overlay pinned to bottom */}
              <div className="relative z-20 space-y-2.5 font-montserrat">
                {/* Category Label */}
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#93c5fd] block">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug font-montserrat">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed font-montserrat line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Explore Solutions Link Element */}
                <div className="pt-3.5 mt-2 border-t border-white/15 flex items-center justify-between font-montserrat">
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    Explore Solutions
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/80 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
