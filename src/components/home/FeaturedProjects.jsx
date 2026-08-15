import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Container from '../common/Container.jsx'

const highlights = [
  {
    id: 'cloud-performance',
    category: 'Cloud Engineering',
    title: 'H1 Enterprise Cloud Modernization',
    subtitle: 'Learn about our multi-cloud Kubernetes deployment results and 99.999% SLA uptime across distributed regions.',
    image: '/images/projects/fintech-enterprise.webp',
    link: '/projects'
  },
  {
    id: 'ai-insights',
    category: 'AI & Data Systems',
    title: 'Conversations for Tomorrow: The AI Corner',
    subtitle: 'Defining intelligent automated workflows, RAG knowledge bases, and digital sovereignty for high-growth enterprises.',
    image: '/images/home/ai-augmented-engineering.webp',
    link: '/solutions'
  },
  {
    id: 'trading-throughput',
    category: 'Full-Stack Stack',
    title: 'Driving Innovation in High-Frequency Digital Platforms',
    subtitle: 'Engineering sub-millisecond API response times, microservices streaming, and zero-downtime database failovers.',
    image: '/images/solutions/saas-blueprint.webp',
    link: '/capabilities'
  },
  {
    id: 'fintech-gateway',
    category: 'Payment Architecture',
    title: 'Global Payment Gateway & Compliance Engine',
    subtitle: 'Building PCI-DSS compliant transactional backend architectures processing millions of monthly transactions.',
    image: '/images/solutions/fintech-platform.webp',
    link: '/projects'
  },
  {
    id: 'healthcare-telemetry',
    category: 'Healthcare Tech',
    title: 'Real-Time Patient Telemetry & Analytics Platform',
    subtitle: 'HIPAA-compliant cloud platform unifying IoT biometric sensors with predictive diagnostic AI algorithms.',
    image: '/images/projects/healthcare-system.webp',
    link: '/solutions'
  },
  {
    id: 'supply-chain-ai',
    category: 'Supply Chain Tech',
    title: 'Autonomous Supply Chain Optimization System',
    subtitle: 'Redefining logistics routing with graph optimization, automated dispatching, and live inventory telemetry.',
    image: '/images/projects/logistics-engine.webp',
    link: '/capabilities'
  }
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 font-montserrat">
      <Container className="font-montserrat">
        {/* SECTION TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 font-montserrat">
          <div>
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-violet-700 block mb-1">
              Case Studies & Portfolio
            </span>
            <h2 className="text-3xl sm:text-6xl font-semibold text-slate-900 tracking-tight font-montserrat">
              Highlights & Case Studies
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-violet-700 hover:text-violet-800 transition-colors uppercase tracking-wider font-montserrat"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6-CARD EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 font-montserrat">
          {highlights.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group block space-y-4 font-montserrat select-none"
            >
              {/* Sharp Rectangular Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 rounded-xl shadow-xs">
                <img
                  src={item.image}
                  alt={`AD FutureStack Featured Project Case Study - ${item.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Headline & Description Below Image */}
              <div className="space-y-2 font-montserrat">
                <span className="text-[10px] font-montserrat font-extrabold uppercase tracking-widest text-violet-700 block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-3xl font-semibold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors font-montserrat">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-montserrat">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
