import React from 'react'

export default function AboutHeroSlider() {
  return (
    <section
      className="relative w-full min-h-[100dvh] h-[100dvh] overflow-hidden select-none font-outfit bg-white flex items-center justify-center border-b border-[#eae4d8] pt-20 lg:pt-24 pb-4"
      aria-label="About AD FutureStack Overview"
    >
      <h1 className="sr-only">
        Architecting Resilient Enterprise Platforms — AD FutureStack
      </h1>

      {/* Subtle vertical architectural background lines matching the banner texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '32px 100%'
        }}
      />

      <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <img
          src="/images/about/architecting-resilient-platforms-white.webp"
          alt="Architecting Resilient Enterprise Platforms — AD FutureStack"
          className="w-full h-full max-h-[85vh] object-contain object-center select-none"
          loading="eager"
          onError={(e) => {
            e.target.src = '/images/about/architecting-resilient-platforms.png'
          }}
        />
      </div>
    </section>
  )
}

