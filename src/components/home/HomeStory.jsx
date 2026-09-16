import { CheckCircle2, ArrowRight, ShieldCheck, Briefcase, Users, Rocket, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

/* --- Card data with images that relate to each card content --- */
const cultureCards = [
  {
    id: 'engineering',
    tag: 'Engineering',
    title: 'Ship Real Code',
    desc: 'Every engineer works on live client products — not demos, not internal tools.',
    img: '/images/services/product-engineering-new.jpg',
    icon: Code2,
  },
  {
    id: 'collaboration',
    tag: 'Culture',
    title: 'Collaborate & Grow',
    desc: 'Senior architects, developers, and designers mentor each other every sprint.',
    img: '/images/services/team-collaboration-services.webp',
    icon: Users,
  },
  {
    id: 'cloud',
    tag: 'Infrastructure',
    title: 'Cloud-First Mindset',
    desc: 'Build on AWS, GCP and Azure with Kubernetes, CI/CD, and zero-downtime deploys.',
    img: '/images/services/cloud-data-new.jpg',
    icon: Rocket,
  },
  {
    id: 'ai',
    tag: 'AI & Automation',
    title: 'Intelligent Systems',
    desc: 'LLM pipelines, RAG vector search, and workflow automation at scale.',
    img: '/images/capabilities/ai-automation.webp',
    icon: ShieldCheck,
  },
]

const highlights = [
  'Agile engineering tailored to real business objectives',
  'Modern architecture focused on speed, security & scalability',
  'Passionate team of software engineers and system architects',
]

export default function HomeStory() {
  return (
    <>
      {/* MAIN STORY SECTION */}
      <section className="py-20 sm:py-28 bg-white font-montserrat border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-montserrat">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center font-montserrat">
            <div data-reveal="left" className="lg:col-span-6 relative">
              <div className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 transition-all duration-500 hover:border-slate-300 hover:shadow-xl">
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                  <img
                    src="/images/about/team-collaboration.webp"
                    alt="AD FutureStack Software Architecture Team Collaboration"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="bg-slate-900 text-white px-6 py-4 border-t border-slate-800 flex items-center justify-between font-montserrat">
                  <div className="flex items-center gap-3.5">
                    <div className="h-9 w-9 rounded-lg bg-[#0062CD]/20 border border-[#0062CD]/40 flex items-center justify-center text-[#0062CD] shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-white block leading-tight font-montserrat">100%</span>
                      <span className="text-[10px] font-montserrat font-semibold uppercase tracking-wider text-slate-400 block">Quality &amp; Precision</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-300 uppercase tracking-widest border-l border-slate-800 pl-6">
                    <span className="w-2 h-2 rounded-full bg-[#0062CD]" />
                    <span>Engineering Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            <div data-reveal="right" className="lg:col-span-6 space-y-7 font-montserrat">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12] sm:leading-[1.08] uppercase font-montserrat">
                Turning Complex Ideas Into <span className="text-[#0062CD] font-montserrat">Digital Reality</span>
              </h2>
              <div className="space-y-4 font-montserrat max-w-xl">
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed font-montserrat">
                  AD Future Stack is a forward-thinking technology studio dedicated to engineering modern software, intelligent cloud systems, and high-impact digital experiences.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-montserrat">
                  We collaborate with visionary companies and ambitious teams to design scalable architectures from the ground up. Combining clean code standards, modern technology stacks, and agile execution, we build software designed for long-term growth.
                </p>
              </div>
              <div className="border-y border-slate-200 divide-y divide-slate-200 font-montserrat py-1">
                {highlights.map((item) => (
                  <div key={item} className="group py-3.5 flex items-center justify-between gap-4 font-montserrat cursor-default">
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:translate-x-1 transition-transform duration-300 font-montserrat">{item}</span>
                    <CheckCircle2 className="h-4 w-4 text-[#0062CD] shrink-0" />
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 bg-[#0062CD] text-white px-8 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#0052b0] transition-all duration-300 shadow-md hover:shadow-[#0062CD]/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-montserrat"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section className="relative overflow-hidden font-montserrat" style={{ minHeight: '680px' }}>
        <div className="absolute inset-0">
          <img
            src="/images/about/architecting-resilient-platforms.webp"
            alt="Careers at AD FutureStack"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/45 to-[#0062CD]/25" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] uppercase font-montserrat mb-4">
              Build Your Future <span className="text-[#3894FF]">With Us</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-montserrat max-w-xl">
              Join a team of engineers, designers, and architects who ship real production software for ambitious clients worldwide.
            </p>
          </div>

          {/* Asymmetric broken-grid card layout */}
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto' }}
          >
            {/* Card 1 — Tall hero card (row 1-2, col 1) */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              style={{ gridColumn: '1', gridRow: '1 / 3', minHeight: '420px' }}
            >
              <img
                src={cultureCards[0].img}
                alt={cultureCards[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3894FF] mb-2">
                  <Code2 className="h-3.5 w-3.5" />
                  {cultureCards[0].tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 font-montserrat leading-snug">{cultureCards[0].title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-montserrat">{cultureCards[0].desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0062CD] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Card 2 — Top center (row 1, col 2) */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              style={{ gridColumn: '2', gridRow: '1', minHeight: '200px' }}
            >
              <img
                src={cultureCards[1].img}
                alt={cultureCards[1].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3894FF] mb-1.5">
                  <Users className="h-3.5 w-3.5" />
                  {cultureCards[1].tag}
                </span>
                <h3 className="text-base font-bold text-white font-montserrat leading-snug mb-1">{cultureCards[1].title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-montserrat line-clamp-2">{cultureCards[1].desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0062CD] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Card 3 — Top right (row 1, col 3) */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              style={{ gridColumn: '3', gridRow: '1', minHeight: '200px' }}
            >
              <img
                src={cultureCards[2].img}
                alt={cultureCards[2].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3894FF] mb-1.5">
                  <Rocket className="h-3.5 w-3.5" />
                  {cultureCards[2].tag}
                </span>
                <h3 className="text-base font-bold text-white font-montserrat leading-snug mb-1">{cultureCards[2].title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-montserrat line-clamp-2">{cultureCards[2].desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0062CD] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Card 4 — Wide bottom (row 2, col 2-3) */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              style={{ gridColumn: '2 / 4', gridRow: '2', minHeight: '210px' }}
            >
              <img
                src={cultureCards[3].img}
                alt={cultureCards[3].title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center max-w-sm">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#3894FF] mb-2">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cultureCards[3].tag}
                </span>
                <h3 className="text-lg font-bold text-white font-montserrat leading-snug mb-2">{cultureCards[3].title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-montserrat">{cultureCards[3].desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0062CD] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/careers"
              className="group inline-flex items-center gap-3 bg-[#0062CD] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#0052b0] transition-all duration-300 shadow-lg hover:shadow-[#0062CD]/40 hover:-translate-y-0.5 active:scale-95 font-montserrat"
            >
              <span>Explore Careers</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold transition-colors duration-200 font-montserrat"
            >
              Send Your CV ?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
