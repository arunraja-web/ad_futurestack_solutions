import Container from '../common/Container.jsx'
import { Link } from 'react-router-dom'

export default function Process() {
  return (
    <section className="py-16 sm:py-24 bg-white font-montserrat border-b border-slate-200/80">
      <Container className="font-montserrat">

        {/* SECTION TITLE */}
        <div className="mb-12 font-montserrat">
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight font-montserrat">
            Built With Purpose
          </h2>

        </div>

        {/* ASYMMETRIC 2-COLUMN GRID MATCHING REFERENCE IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start font-montserrat">

          {/* LEFT LARGE FEATURE STORY */}
          <Link
            to="/about"
            className="lg:col-span-7 group block space-y-4 font-montserrat select-none"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-slate-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Building Scalable AI & Cloud Infrastructure for Enterprise Software"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-2 font-montserrat">
              <span className="text-sm font-montserrat text-slate-500 font-medium block">
                — Engineering Impact
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors font-montserrat">
                Building Scalable AI & Cloud Infrastructure for Tomorrow
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-montserrat max-w-2xl">
                Developing scalable AI-powered platforms and distributed cloud systems engineered to accelerate enterprise digital transformation.
              </p>
            </div>
          </Link>

          {/* RIGHT 2 STACKED STORY CARDS */}
          <div className="lg:col-span-5 space-y-8 font-montserrat">

            {/* RIGHT TOP CARD */}
            <Link
              to="/solutions"
              className="group block space-y-3 font-montserrat select-none"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-slate-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="AD FutureStack Unique Software Architecture Blueprint"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1 font-montserrat">
                <span className="text-sm font-montserrat text-slate-500 font-medium block">
                  — Future-shaping projects
                </span>
                <h4 className="text-lg sm:text-3xl font-bold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors font-montserrat">
                  A unique architecture blueprint to drive digital transformation
                </h4>
              </div>
            </Link>

            {/* RIGHT BOTTOM CARD */}
            <Link
              to="/about"
              className="group block space-y-3 font-montserrat select-none"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-slate-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="AD FutureStack Engineering Culture & Career Growth in Tech"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1 font-montserrat">
                <span className="text-xs font-montserrat text-slate-500 font-medium block">
                  — Culture & Talent
                </span>
                <h4 className="text-lg sm:text-3xl font-bold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors font-montserrat">
                  The code for careers in tech: Empowering young software engineers
                </h4>
              </div>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  )
}
