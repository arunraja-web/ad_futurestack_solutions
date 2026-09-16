import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const directoryCards = [
  {
    id: 'diversity',
    title: 'Diversity and Inclusion',
    description: 'The different. The difference. We celebrate both. We are intentionally diverse and globally inclusive.',
    ctaText: 'Learn More',
    ctaLink: '#team',
    image: '/images/about/diversity-inclusion.webp',
    imageAlt: 'Diversity and Inclusion at AD FutureStack',
    reverse: false // Text Left, Image Right
  },
  {
    id: 'alumni',
    title: 'Reconnect with Us',
    description: 'Get answers, explore return opportunities, join the alumni community, subscribe to updates in the newsletter and inspire the world with your story. Be part of our alumni portal.',
    ctaText: 'Visit Alumni Portal',
    ctaLink: '/contact',
    image: '/images/about/reconnect-alumni.webp',
    imageAlt: 'Reconnect with our alumni network',
    reverse: true // Image Left, Text Right
  },
  {
    id: 'culture',
    title: 'The FutureStack Way',
    description: "We are a company with the purpose of creating meaningful human experiences for our associates. Let's help you Rise to new heights, the FutureStack way.",
    ctaText: 'Learn More',
    ctaLink: '#our-story',
    image: '/images/about/techm-way.webp',
    imageAlt: 'The FutureStack Way corporate culture',
    reverse: false // Text Left, Image Right
  }
]

function AnimatedDirectoryCard({ card }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])


  const textContent = (
    <div
      className={`flex flex-col justify-center max-w-xl transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : card.reverse
          ? 'opacity-0 translate-x-12'
          : 'opacity-0 -translate-x-12'
      }`}
    >
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight mb-4 font-montserrat">
        {card.title}
      </h3>
      <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-8 font-normal font-montserrat">
        {card.description}
      </p>

    </div>
  )

  const imageContent = (
    <div
      className={`overflow-hidden shadow-sm transition-all duration-700 ease-out group ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : card.reverse
          ? 'opacity-0 -translate-x-12 scale-95'
          : 'opacity-0 translate-x-12 scale-95'
      }`}
    >
      <img
        src={card.image}
        alt={card.imageAlt}
        loading="lazy"
        className="w-full h-auto max-h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
  )

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 sm:py-14 border-b border-[#eae4d8]/70 last:border-none"
    >
      {card.reverse ? (
        <>
          <div className="order-1 lg:order-1">{imageContent}</div>
          <div className="order-2 lg:order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{textContent}</div>
          <div className="order-1 lg:order-2">{imageContent}</div>
        </>
      )}
    </div>
  )
}

export default function QuickLinks() {
  const headerRef = useRef(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#f6f2ea] py-16 sm:py-24 border-b border-[#eae4d8] font-montserrat">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-xs font-mono font-bold text-[#0062CD] uppercase tracking-widest block mb-2">
            COMPANY DIRECTORY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-tight">
            Our Culture & Communities
          </h2>
        </div>

        {/* 3 Alternating Animated Cards */}
        <div>
          {directoryCards.map((card) => (
            <AnimatedDirectoryCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
