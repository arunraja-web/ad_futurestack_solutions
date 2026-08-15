import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HeroBackground from './HeroBackground.jsx'
import Container from '../common/Container.jsx'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2
    setMousePos({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[550px] lg:min-h-[85vh] flex flex-col justify-end items-start bg-slate-950 text-white overflow-hidden select-none pt-28 lg:pt-32 pb-0 sm:pb-10 lg:pb-14 font-montserrat"
    >
      {/* Background Image Layer */}
      <HeroBackground mousePos={mousePos} />

      {/* FLOATING CARD OVERLAY MATCHING REFERENCE CAPGEMINI DESIGN (SHARP RECTANGULAR EDGES, SHIFTED LEFT) */}
      <Container className="relative z-10 w-full font-montserrat px-0 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-violet-950/95 sm:bg-violet-900 text-white p-6 sm:p-10 lg:p-12 shadow-2xl rounded-none border-y sm:border border-violet-400/30 backdrop-blur-md space-y-5 sm:space-y-6 animate-hero-fade-up font-montserrat -ml-0 sm:-ml-2 lg:-ml-4">

          {/* Main Headline */}
          <h1 className="font-montserrat font-semibold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-md">
            WE BUILD DIGITAL EXPERIENCES THAT MATTER
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-xs font-montserrat">
            We partner with ambitious companies to deliver scalable cloud architecture, custom software development, and intelligent digital transformation.
          </p>

          {/* Action CTA Button */}
          <div className="pt-2 font-montserrat">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-white text-violet-900 px-8 py-3.5 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-slate-100 hover:text-violet-950 transition-all shadow-lg hover:shadow-white/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none font-montserrat cursor-pointer"
            >
              <span>Let's Build</span>
              <ArrowRight className="h-4 w-4 text-violet-900 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}
