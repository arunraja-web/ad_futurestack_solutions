import React from "react";
import "../styles/services.css";
import SEO from "../components/common/SEO.jsx";

const services = [
  {
    number: "01",
    title: "Web Development",
    short: "Modern digital experiences built around your business.",
    description:
      "We design and develop fast, responsive and scalable websites and web applications that combine strong visual experiences with reliable engineering.",
    tags: ["React", "Node.js", "APIs", "Databases"],
  },
  {
    number: "02",
    title: "App Development",
    short: "Mobile products designed for real-world users.",
    description:
      "From customer-facing mobile applications to business platforms, we create intuitive and high-performance experiences that work seamlessly across devices.",
    tags: ["React Native", "APIs", "Cloud", "Mobile"],
  },
  {
    number: "03",
    title: "AI & Workflow Automation",
    short: "Turn repetitive work into intelligent systems.",
    description:
      "We connect AI agents, business applications and automated workflows to reduce manual processes, improve productivity and help teams operate smarter.",
    tags: ["AI Agents", "n8n", "Automation", "APIs"],
  },
  {
    number: "04",
    title: "Digital Marketing",
    short: "Build visibility. Generate demand. Grow online.",
    description:
      "Our data-driven digital strategies help businesses improve search visibility, reach the right audience, generate qualified leads and build sustainable online growth.",
    tags: ["SEO", "Ads", "Social", "Analytics"],
  },
  {
    number: "05",
    title: "Multi-Tenant SaaS Systems",
    short: "Scalable platforms built for multiple businesses.",
    description:
      "We engineer secure SaaS platforms with multi-tenancy, role management, subscriptions, isolated data and scalable infrastructure.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
];

const capabilities = [
  {
    icon: "◈",
    title: "Product Engineering",
    text: "From an initial idea to a production-ready digital product.",
  },
  {
    icon: "✦",
    title: "AI & Automation",
    text: "Intelligent workflows that remove repetitive operational work.",
  },
  {
    icon: "⌁",
    title: "Cloud & Data",
    text: "Reliable infrastructure and data systems built to scale.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "AI",
  "APIs",
];

function Arrow() {
  return <span className="service-arrow">→</span>;
}

function ServiceVisual({ index }) {
  if (index === 0) {
    return (
      <div className="visual-browser">
        <div className="browser-header">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-layout">
          <div className="browser-menu">
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="browser-content">
            <div className="browser-heading" />

            <div className="browser-metrics">
              <div />
              <div />
              <div />
            </div>

            <div className="browser-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="visual-phone">
        <div className="phone">
          <div className="phone-speaker" />

          <div className="phone-screen">
            <div className="phone-title" />
            <div className="phone-hero" />

            <div className="phone-items">
              <span />
              <span />
            </div>

            <div className="phone-bottom">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="visual-automation">
        <div className="automation-core">
          <span>AI</span>
        </div>

        <div className="automation-node node-a">
          CRM
        </div>

        <div className="automation-node node-b">
          API
        </div>

        <div className="automation-node node-c">
          DATA
        </div>

        <div className="automation-node node-d">
          n8n
        </div>

        <div className="automation-line line-a" />
        <div className="automation-line line-b" />
        <div className="automation-line line-c" />
        <div className="automation-line line-d" />
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="visual-marketing">
        <div className="marketing-card">
          <div className="marketing-top">
            <span />
            <span />
          </div>

          <div className="marketing-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="marketing-bottom">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visual-saas">
      <div className="saas-window">
        <div className="saas-sidebar">
          <b />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="saas-content">
          <div className="saas-top">
            <span />
            <span />
          </div>

          <div className="saas-boxes">
            <i />
            <i />
            <i />
          </div>

          <div className="saas-graph">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="tenant-bubble bubble-a">A</div>
      <div className="tenant-bubble bubble-b">B</div>
      <div className="tenant-bubble bubble-c">C</div>
    </div>
  );
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

export default function Services() {
  return (
    <main className="services-page">
      <SEO
        title="IT Services & Digital Engineering | AD FutureStack"
        description="Explore our digital services: web development, mobile apps, AI workflow automation, SEO growth engines, and multi-tenant SaaS engineering."
        keywords="Web Development Services, Mobile App Development, AI Automation Services, SaaS Engineering, Digital Marketing, AD FutureStack Services"
        canonicalUrl="https://adfuturestack.dev/services"
        schema={servicesSchema}
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="services-hero">

        <div className="services-hero-overlay" />

        <div className="services-hero-inner">

          <div className="services-hero-content">

            <br></br>
            <h1>
              Excellent software
              <br />
              services for your
              <br />
              <span>business success.</span>
            </h1>

            <p>
              From modern websites and applications to AI-powered
              automation and scalable SaaS platforms, we build digital
              solutions that help ambitious businesses move forward.
            </p>

            <div className="hero-buttons">

              <a
                href="#services-list"
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
              className="watch-story"
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
          WHY CHOOSE US
      ===================================================== */}
      <section
        className="why-section"
        id="why-us"
      >

        <div className="why-intro">

          <span className="section-kicker">
            WHY CHOOSE US
          </span>

          <h2>
            Technology that works
            <br />
            for your business.
          </h2>

          <p>
            We don't just deliver software. We understand the business
            behind the technology and create solutions designed around
            your goals, customers and future growth.
          </p>

        </div>


        <div className="capability-grid">

          {capabilities.map((item) => (
            <article
              className="capability-card"
              key={item.title}
            >

              <div className="capability-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a href="#services-list">
                Explore
                <Arrow />
              </a>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          CONNECTING PEOPLE & TECHNOLOGY
      ===================================================== */}
      <section className="connection-section">

        <div className="connection-visual">

          <div className="image-frame image-frame-main">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
              alt="AD FutureStack Digital Engineering & Technology Services Team"
              loading="lazy"
            />
          </div>

          <div className="image-frame image-frame-small">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=85"
              alt="AD FutureStack Business Technology Collaboration & Software Consulting"
              loading="lazy"
            />
          </div>

          <div className="award-card">
            <strong>100+</strong>
            <span>Digital Projects<br />Delivered</span>
          </div>

        </div>


        <div className="connection-content">

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
              <span>✦</span>

              <div>
                <strong>Business-first thinking</strong>
                <small>
                  Technology decisions aligned with real business goals.
                </small>
              </div>
            </div>

            <div>
              <span>◈</span>

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
          SERVICES
      ===================================================== */}
      <section
        className="services-list-section"
        id="services-list"
      >

        <div className="services-list-heading">

          <div>
            <span className="section-kicker">
              WHAT WE DO
            </span>

            <h2>
              Full-service digital
              <br />
              engineering.
            </h2>
          </div>

          <p>
            One technology partner for everything from your first
            digital experience to complex business systems.
          </p>

        </div>


        <div className="services-list">

          {services.map((service, index) => (
            <article
              className={`full-service-card ${index === 2 ? "featured-service" : ""
                }`}
              key={service.number}
            >

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-copy">

                <span className="service-label">
                  DIGITAL SOLUTION
                </span>

                <h3>{service.title}</h3>

                <strong>
                  {service.short}
                </strong>

                <p>
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="service-link"
                >
                  Explore Service
                  <Arrow />
                </a>

              </div>

              <ServiceVisual index={index} />

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY STRIP
      ===================================================== */}
      <section className="technology-section">

        <div className="technology-inner">

          <div>
            <span className="section-kicker">
              TECHNOLOGY
            </span>

            <h2>
              Built with modern
              <br />
              technology.
            </h2>
          </div>

          <div className="technology-list">

            {technologies.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL GROWTH CTA
      ===================================================== */}
      <section className="growth-section">

        <div className="growth-overlay" />

        <div className="growth-content">

          <span className="section-kicker">
            DIGITAL GROWTH
          </span>

          <h2>
            It's your time to grow
            <br />
            through technology.
          </h2>

          <p>
            Build better digital experiences, automate operations,
            reach more customers and create systems that scale with
            your business.
          </p>

          <div className="growth-buttons">

            <a
              href="/contact"
              className="hero-primary-btn"
            >
              Get Started
              <Arrow />
            </a>

            <a
              href="/projects"
              className="hero-secondary-btn"
            >
              See Our Work
              <span>↗</span>
            </a>

          </div>

          <div className="growth-features">

            <span>✓ Lead Generation</span>
            <span>✓ Business Automation</span>
            <span>✓ Scalable Systems</span>
            <span>✓ Data-driven Growth</span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="final-service-cta">

        <div>
          <span className="section-kicker">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <br />
            meaningful together.
          </h2>

          <p>
            Tell us what you're building. We'll help you find the
            right technology, strategy and path forward.
          </p>
        </div>

        <a
          href="/contact"
          className="final-cta-button"
        >
          Start a Project
          <Arrow />
        </a>

      </section>

    </main>
  );
}