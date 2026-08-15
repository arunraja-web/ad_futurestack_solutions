export default function HeroBackground({ bgScale = 1, bgOpacity = 1, mousePos = { x: 0, y: 0 }, isTouch = false }) {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ease-out overflow-hidden"
      style={{
        transform: `scale(${bgScale}) translate3d(${isTouch ? 0 : mousePos.x * 2}px, ${isTouch ? 0 : mousePos.y * 2}px, 0)`,
        opacity: bgOpacity,
      }}
    >
      {/* 1. Full High-Res Image Background */}
      <img
        src="/images/hero/hero-workspace.webp"
        alt="AD FutureStack Modern Software Engineering Studio Workspace"
        loading="eager"
        fetchpriority="high"
        className="w-full h-full object-cover filter brightness-[] contrast-[1.2]"
      />



      {/* 3. Subtle Vector Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 mix-blend-overlay" />
    </div>
  )
}
