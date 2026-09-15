import React from "react";
import "../styles/services.css";
import SEO from "../components/common/SEO.jsx";
import { Blocks, BrainCircuit, CloudCog, Workflow, Network, Target, Bot, Box, PieChart, Users, CheckCircle, Clock, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "../components/common/CountUp.jsx";
import AnimatedShowcase from "../components/sections/AnimatedShowcase.jsx";




const capabilities = [
  {
    icon: <Blocks className="lucide-icon icon-reveal" strokeWidth={1.5} />,
    title: "Product Engineering",
    text: "From an initial idea to a production-ready digital product.",
  },
  {
    icon: <BrainCircuit className="lucide-icon icon-reveal" strokeWidth={1.5} />,
    title: "AI & Automation",
    text: "Intelligent workflows that remove repetitive operational work.",
  },
  {
    icon: <CloudCog className="lucide-icon icon-reveal" strokeWidth={1.5} />,
    title: "Cloud & Data",
    text: "Reliable infrastructure and data systems built to scale.",
  },
];



function Arrow() {
  return <span className="service-arrow">→</span>;
}



const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'serviceType': 'IT Services & Software Development',
  'provider': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev'
  },
  'areaServed': 'Worldwide',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Digital Engineering Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Web Development',
          'description': 'Fast, responsive, scalable websites and enterprise web applications.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'App Development',
          'description': 'Mobile products for iOS & Android built for performance and user experience.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AI & Workflow Automation',
          'description': 'Intelligent AI agents, n8n workflows, and business application integration.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Multi-Tenant SaaS Systems',
          'description': 'Scalable B2B SaaS platforms with tenant isolation, roles, and subscriptions.'
        }
      }
    ]
  }
}

export default function WhatWeDo() {
  return (
    <main className="services-page what-we-do-page">
      <SEO
        title="What We Do | AD FutureStack"
        description="Explore our digital services: web development, mobile apps, AI workflow automation, SEO growth engines, and multi-tenant SaaS engineering."
        keywords="Web Development Services, Mobile App Development, AI Automation Services, SaaS Engineering, Digital Marketing, AD FutureStack Services"
        canonicalUrl="https://adfuturestack.dev/what-we-do"
        schema={servicesSchema}
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="tcs-hero">
        <div className="tcs-hero-bg" style={{ backgroundImage: "url('/images/hero/what-we-do-hero.jpg')" }}></div>
        <div className="tcs-hero-overlay"></div>

        <div className="tcs-hero-content">
          <h1 className="animate-hero-fade-up" style={{ animationDelay: '120ms', opacity: 0 }}>
            Excellent software services <br /> for your business success
          </h1>
          <p className="animate-hero-fade-up" style={{ animationDelay: '240ms', opacity: 0 }}>
            Unlock the full potential of your enterprise with modern digital solutions
          </p>
        </div>
      </section>

      <div className="what-we-do-content-wrapper">

      {/* =====================================================
          WHY CHOOSE US (ANIMATED)
      ===================================================== */}
      <div id="why-us">
        <AnimatedShowcase />
      </div>

      {/* =====================================================
          CONNECTING PEOPLE & TECHNOLOGY
      ===================================================== */}
      <section className="connection-section">

        <div className="connection-visual">

          <div className="image-frame image-frame-main" data-reveal="left">
            <img
              src="/images/services/team_collaboration.jpg"
              alt="AD FutureStack Digital Engineering & Technology Services Team"
              loading="lazy"
            />
          </div>

          <div className="image-frame image-frame-small" data-reveal="left" data-stagger="150">
            <img
              src="/images/services/business-collaboration.webp"
              alt="AD FutureStack Business Technology Collaboration & Software Consulting"
              loading="lazy"
            />
          </div>

          <div className="image-frame image-frame-small-right" data-reveal="scale" data-stagger="300">
            <img
              src="/images/services/product-engineering-new.jpg"
              alt="Engineering Work"
              loading="lazy"
            />
          </div>

        </div>


        <div data-reveal="right" className="connection-content">

          <span className="section-kicker">
            HOW WE WORK
          </span>

          <h2>
            Connecting people
            <br />
            & technology.
          </h2>

          <p>
            Great technology starts with understanding people. We work
            closely with founders, teams and businesses to turn ideas
            into useful, scalable and measurable digital products.
          </p>

          <div className="connection-points">

            <div>
              <span className="icon-reveal"><Workflow size={18} /></span>

              <div>
                <strong>Business-first thinking</strong>
                <small>
                  Technology decisions aligned with real business goals.
                </small>
              </div>
            </div>

            <div>
              <span className="icon-reveal"><Network size={18} /></span>

              <div>
                <strong>Long-term partnership</strong>
                <small>
                  We support products beyond the first launch.
                </small>
              </div>
            </div>

          </div>

          <a
            href="/contact"
            className="blue-button"
          >
            Get a Quote
            <Arrow />
          </a>

        </div>

      </section>






      {/* =====================================================
          DIGITAL GROWTH CTA
      ===================================================== */}
      <section className="growth-section" style={{ minHeight: '100vh', height: '100vh' }}>
        <div className="growth-bg-image">
          <img 
            src="https://i.pinimg.com/736x/24/22/be/2422bea743ba1144181892dd6ef13af6.jpg" 
            alt="Background" 
            loading="lazy" 
            style={{ maskImage: 'none', WebkitMaskImage: 'none', opacity: 1 }}
          />
        </div>

        <div className="growth-content-wrapper" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}>
          <div className="growth-content-left" data-reveal="up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-kicker" style={{ color: 'white' }}>DIGITAL GROWTH</span>
            <h2 style={{ textAlign: 'center', color: 'white' }}>
              It's your time to grow<br />through <span style={{ color: 'white' }}>technology.</span>
            </h2>
            <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
              Build better digital experiences, automate operations,
              reach more customers and create systems that scale with
              your business.
            </p>
            <div className="growth-buttons" style={{ justifyContent: 'center' }}>
              <a href="/contact" className="hero-primary-btn" style={{ padding: '18px 36px', fontSize: '18px' }}>
                Get Started
                <Arrow />
              </a>
              <a href="/projects" className="hero-primary-btn" style={{ padding: '18px 36px', fontSize: '18px' }}>
                See Our Work
                <span>↗</span>
              </a>
            </div>
            <div className="growth-features" style={{ justifyContent: 'center', marginTop: '20px' }}>
              <span data-reveal="fade" data-stagger="100" style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>✓ Lead Generation</span>
              <span data-reveal="fade" data-stagger="200" style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>✓ Business Automation</span>
              <span data-reveal="fade" data-stagger="300" style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>✓ Scalable Systems</span>
              <span data-reveal="fade" data-stagger="400" style={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>✓ Data-driven Growth</span>
            </div>
          </div>
        </div>


      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="final-service-cta">

        <div data-reveal="up" className="final-cta-content">
          <span className="section-kicker">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something meaningful together
          </h2>

          <p>
            Tell us what you're building. We'll help you find the
            right technology, strategy and path forward.
          </p>

          <a
            href="/contact"
            className="final-cta-button"
          >
            Start a Project
            <Arrow />
          </a>
        </div>

      </section>
      </div>

    </main>
  );
}