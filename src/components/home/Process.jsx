import Container from '../common/Container.jsx'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const processStories = [
  {
    id: 'engineering-impact',
    tag: 'Engineering Impact',
    title: 'Building Scalable AI & Cloud Infrastructure for Tomorrow',
    subtitle: 'Developing scalable AI-powered platforms and distributed cloud systems engineered to accelerate enterprise digital transformation.',
    image: '/images/capabilities/cloud-devops.webp',
    link: '/about',
    reveal: 'left'
  },
  {
    id: 'future-shaping-systems',
    tag: 'Future-Shaping Systems',
    title: 'A unique architecture blueprint to drive digital transformation',
    subtitle: null,
    image: '/images/home/architecture-blueprint.webp',
    link: '/solutions',
    reveal: 'up'
  },
  {
    id: 'culture-talent',
    tag: 'Culture & Talent',
    title: 'The code for careers in tech: Empowering young software engineers',
    subtitle: null,
    image: '/images/about/team-collaboration.webp',
    link: '/about',
    reveal: 'right'
  }
]

export default function Process() {
  return (
    <section id="built-with-purpose" className="py-20 sm:py-28 bg-slate-50/70 font-montserrat border-b border-slate-200/80 scroll-mt-28">
      <Container className="font-montserrat">
        {/* SECTION HEADER */}
        <div data-reveal="up" className="mb-14 font-montserrat flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-montserrat uppercase">
              <span className="gsap-mask-wrapper">
                <span className="gsap-mask-line">Built With Purpose</span>
              </span>
            </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed font-montserrat">
            How we design scalable architectures, foster technical talent, and deliver mission-critical software systems.
          </p>
        </div>

        {/* 3 EQUAL-WIDTH TALL CARDS ROW */}
        <div className="gsap-card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 font-montserrat">
          {processStories.map((item, idx) => (
            <Link
              key={item.id}
              to={item.link}
              className={`gsap-card-item ${idx === 0 ? 'process-left-feature' : 'process-right-card'} group relative flex flex-col justify-end aspect-[4/5] sm:aspect-[3/4] bg-slate-950 rounded-none border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] font-montserrat select-none cursor-pointer overflow-hidden`}
            >
              {/* Full-bleed Background Image with Parallax on left feature */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`${idx === 0 ? 'process-parallax-img scale-105' : ''} absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform z-0`}
              />

              {/* Top-Left Category / Tag Pill */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-none bg-slate-950/75 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 group-hover:via-slate-950/60 transition-all duration-500 z-10 pointer-events-none" />

              {/* Revealed Headline & Details on Hover */}
              <div className="relative z-20 p-6 sm:p-7 space-y-2.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out font-montserrat">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-montserrat">
                    {item.title}
                  </h3>
                  <div className="h-8 w-8 rounded-none bg-white/10 text-white flex items-center justify-center shrink-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {item.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed font-montserrat line-clamp-2">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
