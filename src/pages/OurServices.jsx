import React, { useState, useEffect, useRef } from "react";
import "../styles/services.css";
import SEO from "../components/common/SEO.jsx";
import { ChevronDown, CheckCircle2, Code2, Rocket, Search, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    id: "01",
    image: "/images/services/web-development-new.jpg",
    title: "Web Development",
    heading: "High-Performance Web Applications & Portals",
    short: "Modern, responsive digital experiences built for speed and conversions.",
    description:
      "We engineer scalable web platforms, responsive corporate websites, and enterprise web portals using React, Next.js, and robust cloud APIs. Built for extreme performance, security, and seamless user experiences across every screen.",
    tags: ["React", "Next.js", "Node.js", "APIs", "Tailwind CSS"],
  },
  {
    id: "02",
    image: "/images/services/app-development-new.jpg",
    title: "App Development",
    heading: "Cross-Platform Mobile Apps for iOS & Android",
    short: "Intuitive mobile experiences crafted for real-world engagement.",
    description:
      "From customer-facing mobile applications to mission-critical business platforms, we create intuitive and high-performance experiences that work seamlessly across all mobile devices.",
    tags: ["React Native", "Flutter", "iOS & Android", "Cloud Sync", "Mobile UI/UX"],
  },
  {
    id: "03",
    image: "/images/services/ai-automation-new.jpg",
    title: "AI & Workflow Automation",
    heading: "Intelligent Systems Turning Repetitive Tasks into Autonomous Flow",
    short: "Turn repetitive operations into intelligent automated systems.",
    description:
      "We connect AI agents, business applications, and automated workflows to reduce manual processes, improve operational speed, and help modern teams operate smarter.",
    tags: ["AI Agents", "n8n", "Workflow Automation", "LLM APIs", "System Integrations"],
  },
  {
    id: "04",
    image: "/images/services/digital-marketing-new.jpg",
    title: "Digital Marketing",
    heading: "Data-Driven Growth Strategies that Generate High-Intent Demand",
    short: "Build authority, generate qualified demand, and scale revenue.",
    description:
      "Our data-driven digital strategies help businesses improve search visibility, reach the right target audience, generate qualified leads, and build sustainable online growth.",
    tags: ["Technical SEO", "Performance Ads", "Lead Funnels", "Social Growth", "Analytics"],
  },
  {
    id: "05",
    image: "/images/services/saas-systems-new.jpg",
    title: "Multi-Tenant SaaS Systems",
    heading: "Scalable Cloud SaaS Architectures Built for Enterprise Multi-Tenancy",
    short: "Scalable platforms engineered for multiple businesses and millions of requests.",
    description:
      "We engineer secure SaaS platforms with tenant isolation, role management, automated subscriptions, isolated databases, and auto-scaling cloud infrastructure.",
    tags: ["Next.js", "PostgreSQL", "Multi-Tenancy", "Subscription Billing", "AWS Cloud"],
  },
];

const processSteps = [
  {
    image: "/images/services/business-collaboration.webp",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to craft a tailored digital roadmap."
  },
  {
    image: "/images/services/web-development-new.jpg",
    title: "Design & Architecture",
    description: "Creating intuitive user experiences and robust system architectures designed for scalability and performance."
  },
  {
    image: "/images/services/app-development-new.jpg",
    title: "Agile Development",
    description: "Building your product in iterative sprints, ensuring transparency, quality, and adaptability to changes."
  },
  {
    image: "/images/services/digital-marketing-new.jpg",
    title: "Launch & Scale",
    description: "Seamless deployment, continuous monitoring, and ongoing optimization to ensure sustainable growth."
  }
];

function ProcessAccordion({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="process-accordion-container">
      {steps.map((step, idx) => {
        const isActive = activeStep === idx;
        const numberString = `0${idx + 1}`;
        
        return (
          <div 
            key={idx} 
            className={`process-panel ${isActive ? 'active' : ''}`}
            onClick={() => setActiveStep(idx)}
          >
            <div className="process-panel-inner">
               <div className="panel-header-vertical">
                 <span className="panel-number">{numberString}</span>
                 {!isActive && <span className="panel-title-vertical">{step.title}</span>}
               </div>

               <div className="panel-expanded-content">
                  <div className="panel-title-horizontal">
                    <span className="panel-number-horiz">{numberString}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="panel-image-container">
                    <img src={step.image} alt={step.title} />
                  </div>
                  <p className="panel-description">{step.description}</p>
               </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ServiceAlternatingCard({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`ser-alt-card ${isEven ? '' : 'reversed'}`} data-reveal="up">
      <div className="ser-alt-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="ser-alt-content">
        <div className="ser-alt-badge">
          <span className="ser-card-id-pill">0{index + 1} • {service.title}</span>
        </div>
        <h3 className="ser-alt-heading">{service.heading}</h3>
        <p className="ser-alt-short">{service.short}</p>
        <p className="ser-alt-desc">{service.description}</p>
        



      </div>
    </div>
  );
}

function ServicesAlternatingShowcase({ services }) {
  return (
    <section className="ser-zoom-section" id="services-list" style={{ paddingBottom: '20px' }}>
      {/* Header with Our Services and related content (Clean, no dots) */}
      <div className="ser-zoom-header" data-reveal="up">
        <h2 className="ser-zoom-title">
          Our Services
        </h2>
        <p className="ser-zoom-subtitle">
          From high-performance web and mobile applications to intelligent AI workflows and scalable cloud SaaS platforms — explore how we engineer future-ready solutions tailored to scale your business.
        </p>
      </div>

      {/* Each service card in a zig-zag layout */}
      <div className="ser-alt-list">
        {services.map((service, index) => (
          <ServiceAlternatingCard
            key={service.id || index}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Do you provide ongoing support after the project is launched?",
    answer: "Absolutely. We offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and perform optimally long after the initial launch."
  },
  {
    question: "How long does a typical web or app development project take?",
    answer: "Project timelines vary depending on complexity and scope. A standard website might take 4-8 weeks, while a complex web application or mobile app can take 3-6 months. We provide clear timelines during the discovery phase."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price for well-defined projects, and time-and-materials or dedicated team models for ongoing, evolving product development."
  },
  {
    question: "Do you work with startups or just established enterprises?",
    answer: "We partner with businesses of all sizes. We help startups build their MVPs to secure funding, and we help established enterprises modernize their legacy systems and scale their operations."
  }
];

function Arrow() {
  return <span className="service-arrow">→</span>;
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <ChevronDown className="faq-icon" />
      </div>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <main className="services-page our-services-page">
      <SEO
        title="Our Services | AD FutureStack"
        description="Explore our digital services: web development, mobile apps, AI workflow automation, SEO growth engines, and multi-tenant SaaS engineering."
        keywords="Web Development Services, Mobile App Development, AI Automation Services, SaaS Engineering, Digital Marketing, AD FutureStack Services"
        canonicalUrl="https://adfuturestack.dev/our-services"
      />

      {/* =====================================================
          HERO (Tailored Services Hero)
      ===================================================== */}
      <section className="tcs-hero our-services-tcs-hero">
        <div className="tcs-hero-bg services-tcs-hero-bg"></div>
        <div className="tcs-hero-overlay"></div>

        <div className="tcs-hero-content">
          <h1 className="animate-hero-fade-up" style={{ animationDelay: '120ms' }}>
            Transforming Ideas Into <br />
            Intelligent Digital Solutions
          </h1>
          <p className="animate-hero-fade-up" style={{ animationDelay: '240ms', fontSize: 'clamp(15px, 1.8vw, 18px)' }}>
            From high-impact web and mobile apps to autonomous AI workflows and enterprise SaaS systems — we build technology that drives measurable business growth.
          </p>
          <a href="#services-list" className="hero-primary-btn animate-hero-fade-up" style={{ animationDelay: '360ms' }}>
            Explore Our Services
            <Arrow />
          </a>
        </div>
      </section>

      <div className="what-we-do-content-wrapper">
        {/* =====================================================
            SERVICES ALTERNATING SHOWCASE
        ===================================================== */}
        <ServicesAlternatingShowcase services={services} />

        {/* =====================================================
            OUR PROCESS
        ===================================================== */}
        <section className="process-section" id="process" style={{ paddingTop: '20px' }}>
          <div className="process-header" data-reveal="up">
            <span className="section-kicker">HOW WE WORK</span>
            <h2>Our Proven Approach</h2>
            <p>A structured, transparent process designed to deliver exceptional results on time and within budget.</p>
          </div>
          <ProcessAccordion steps={processSteps} />
        </section>

        {/* =====================================================
            FAQ SECTION
        ===================================================== */}
        <section className="faq-section">
          <div className="faq-header" data-reveal="up">
            <span className="section-kicker">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-container" data-reveal="up" data-stagger="200">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
