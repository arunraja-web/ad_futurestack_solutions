import Container from './Container.jsx'

export default function PageHero({
  eyebrow,
  title,
  description,
  image = '/images/home/architecture-blueprint.webp'
}) {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 border-b border-slate-800/80 overflow-hidden select-none">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={image}
          alt={title || "AD FutureStack Hero Visual"}
          loading="lazy"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Pure Black Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black" />
        <div className="absolute inset-0 bg-tech-grid-dark opacity-40" />
      </div>

      <Container className="relative z-10 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-6 shadow-md backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{eyebrow}</span>
          </div>
        )}

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white uppercase tracking-tight max-w-5xl mx-auto drop-shadow-md">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-normal">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
