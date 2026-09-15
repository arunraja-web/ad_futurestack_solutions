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

const technologies = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
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
    'url': 'https://adfuturestack.com'
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

export default function Services() {
  return (
    <main className="services-page">
      <SEO
        title="IT Services & Digital Engineering Solutions | AD FutureStack"
        description="Explore our digital services: web development, mobile apps, AI workflow automation, SEO growth engines, and multi-tenant SaaS engineering."
        keywords="Web Development Services, Mobile App Development, AI Automation Services, SaaS Engineering, Digital Marketing, AD FutureStack Services"
        canonicalUrl="https://adfuturestack.com/services"
        schema={servicesSchema}
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="services-hero">

        <div className="services-hero-overlay" />

        <div className="services-hero-inner">

          <div className="services-hero-content">

            <br></br><br></br>
            <h1 className="animate-hero-fade-up" style={{ animationDelay: '0ms', opacity: 0 }}>
              Excellent software
              <br />
              services for your
              <br />
              <span>business success.</span>
            </h1>

            <p className="animate-hero-fade-up" style={{ animationDelay: '120ms', opacity: 0 }}>
              From modern websites and applications to AI-powered
              automation and scalable SaaS platforms, we build digital
              solutions that help ambitious businesses move forward.
            </p>

            <div className="hero-buttons animate-hero-fade-up" style={{ animationDelay: '240ms', opacity: 0 }}>

              <a
                href="/our-services"
                className="hero-primary-btn"
              >
                Explore Services
                <Arrow />
              </a>

              <a
                href="/contact"
                className="hero-secondary-btn"
              >
                Contact Us
                <span>↗</span>
              </a>

            </div>

            <a
              href="#why-us"
              className="watch-story animate-float animate-hero-fade-up"
              style={{ animationDelay: '360ms', opacity: 0 }}
            >
              <span className="play-circle">▶</span>

              <span>
                <strong>Discover Our Approach</strong>
                <small>How we build digital products</small>
              </span>
            </a>

          </div>

        </div>

        <div className="hero-bottom-curve" />

      </section>


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
              src="/images/services/digital-marketing-new.jpg"
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

          <div className="award-card" data-reveal="scale" data-stagger="300">
            <strong><CountUp target={100} />+</strong>
            <span>Digital Projects<br />Delivered</span>
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
          TECHNOLOGY STRIP
      ===================================================== */}
      <section className="technology-section">

        <div className="technology-inner">

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-kicker">
              TECHNOLOGY
            </span>

            <h2>
              Built with modern technology
            </h2>
          </div>

          <div className="technology-marquee-container">
            <div className="technology-marquee-content">
              {technologies.map((tech, idx) => (
                <div key={idx} className="tech-logo-item">
                  <img src={tech.src} alt={tech.name} loading="lazy" />
                  <span>{tech.name}</span>
                </div>
              ))}
              {/* Duplicate list for seamless infinite scrolling */}
              {technologies.map((tech, idx) => (
                <div key={`dup-${idx}`} className="tech-logo-item">
                  <img src={tech.src} alt={tech.name} loading="lazy" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL GROWTH CTA
      ===================================================== */}
      <section className="growth-section">
        <div className="growth-bg-image">
          <img src="/images/services/digital-marketing-new.jpg" alt="Background" loading="lazy" />
          <div className="growth-bg-overlay"></div>
        </div>

        <div className="growth-content-wrapper">
          <div className="growth-content-left" data-reveal="right">
            <span className="section-kicker">DIGITAL GROWTH</span>
            <h2>
              It's your time to grow<br />through <span className="text-blue">technology.</span>
            </h2>
            <p>
              Build better digital experiences, automate operations,
              reach more customers and create systems that scale with
              your business.
            </p>
            <div className="growth-buttons">
              <a href="/contact" className="hero-primary-btn">
                Get Started
                <Arrow />
              </a>
              <a href="/projects" className="hero-secondary-btn alt-btn">
                See Our Work
                <span>↗</span>
              </a>
            </div>
            <div className="growth-features">
              <span data-reveal="fade" data-stagger="100">✓ Lead Generation</span>
              <span data-reveal="fade" data-stagger="200">✓ Business Automation</span>
              <span data-reveal="fade" data-stagger="300">✓ Scalable Systems</span>
              <span data-reveal="fade" data-stagger="400">✓ Data-driven Growth</span>
            </div>
          </div>

          <div className="growth-content-right" data-reveal="left" data-stagger="200">
            <div className="floating-ui-container">
              
              <div className="float-card card-strategy" style={{ animationDelay: '0s' }}>
                <Target size={22} strokeWidth={2} className="float-icon blue" />
                <div className="float-text">
                  <strong>Strategy</strong>
                  <div className="skeleton-line w-full"></div>
                </div>
              </div>
              
              <div className="float-card card-automation" style={{ animationDelay: '1.5s' }}>
                <Bot size={22} strokeWidth={2} className="float-icon purple" />
                <div className="float-text">
                  <strong>Automation</strong>
                  <div className="skeleton-line w-half"></div>
                </div>
              </div>
              
              <div className="float-card card-growth" style={{ animationDelay: '0.7s' }}>
                <div className="float-text">
                  <strong>Growth</strong>
                </div>
                <div className="chart-line">
                   <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                     <path d="M0,35 Q10,35 20,25 T40,20 T60,10 T80,15 T100,5" fill="none" stroke="var(--blue)" strokeWidth="2.5" />
                     <circle cx="20" cy="25" r="3.5" fill="var(--blue)" />
                     <circle cx="60" cy="10" r="3.5" fill="var(--blue)" />
                     <circle cx="100" cy="5" r="3.5" fill="var(--blue)" />
                   </svg>
                </div>
              </div>
              
              <div className="float-card card-systems" style={{ animationDelay: '2s' }}>
                <Box size={22} strokeWidth={2} className="float-icon navy" />
                <div className="float-text">
                  <strong>Systems</strong>
                  <div className="skeleton-line w-full"></div>
                  <div className="skeleton-line w-half mt-1"></div>
                </div>
              </div>
              
              <div className="float-card card-analytics" style={{ animationDelay: '1.2s' }}>
                <PieChart size={22} strokeWidth={2} className="float-icon blue" />
                <div className="float-text">
                  <strong>Analytics</strong>
                  <div className="skeleton-line w-half"></div>
                </div>
              </div>
              
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

    </main>
  );
}