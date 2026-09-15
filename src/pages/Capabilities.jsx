import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/capabilities-new.css'
import SEO from '../components/common/SEO.jsx'
import CountUp from '../components/common/CountUp.jsx'
import { ArrowRight, BarChart2, Cloud, Database, Cpu, Settings, Shield } from 'lucide-react'

const capabilitiesData = [
  {
    id: '01',
    title: 'Digital Transformation',
    subtitle: 'Smarter Businesses Brighter Futures',
    description: 'Modernize operations and unlock new growth opportunities with future-ready technologies.',
    icon: <BarChart2 size={24} />,
    bgClass: 'cap-new-card-bg1',
    image: '/images/capabilities/data-systems.webp'
  },
  {
    id: '02',
    title: 'Cloud Solutions',
    subtitle: 'Scale Without Limits',
    description: 'Scalable, secure and resilient cloud ecosystems for a smarter tomorrow.',
    icon: <Cloud size={24} />,
    bgClass: 'cap-new-card-bg2',
    image: '/images/capabilities/cloud-devops.webp'
  },
  {
    id: '03',
    title: 'Data & AI Solutions',
    subtitle: 'From Data To Decisions',
    description: 'Turn data into intelligence and make faster, smarter decisions.',
    icon: <Database size={24} />,
    bgClass: 'cap-new-card-bg3',
    image: 'https://i.pinimg.com/736x/76/73/8a/76738a3cce94f472c46f3d83aa739e63.jpg'
  },
  {
    id: '04',
    title: 'Product Engineering',
    subtitle: 'Ideas Engineered For Impact',
    description: 'From concept to deployment, we build innovative and scalable products.',
    icon: <Cpu size={24} />,
    bgClass: 'cap-new-card-bg4',
    image: '/images/capabilities/microservices.webp'
  },
  {
    id: '05',
    title: 'Automation & DevOps',
    subtitle: 'Automate Scale Accelerate',
    description: 'Accelerate delivery and improve efficiency with intelligent automation.',
    icon: <Settings size={24} />,
    bgClass: 'cap-new-card-bg5',
    image: '/images/services/ai-automation-new.jpg'
  },
  {
    id: '06',
    title: 'IT Infrastructure & Security',
    subtitle: 'Secure Reliable Always On',
    description: 'Build robust, secure and high-performing infrastructure for continuous growth.',
    icon: <Shield size={24} />,
    bgClass: 'cap-new-card-bg6',
    image: '/images/capabilities/cybersecurity.webp'
  }
]

export default function Capabilities() {
  return (
    <main className="cap-new-page">
      <SEO
        title="Engineering Capabilities | AD FutureStack"
        description="Discover our domain expertise in digital transformation, cloud solutions, AI, product engineering, automation, and cybersecurity."
      />

      {/* Hero Section */}
      <section className="tcs-hero cap-tcs-hero">
        <div className="tcs-hero-bg" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/09/6e/35/096e359e1e0bee3457c3517b09c4d165.jpg')" }}></div>
        <div className="tcs-hero-overlay"></div>

        <div className="tcs-hero-content">

          <h1 className="animate-hero-fade-up" style={{ animationDelay: '120ms', opacity: 0 }}>
            Capabilities
          </h1>
          <p className="animate-hero-fade-up" style={{ animationDelay: '240ms', opacity: 0 }}>
            We design and deliver end-to-end technology solutions that help businesses innovate, scale and lead in a rapidly evolving world.
          </p>
          <div className="tcs-hero-buttons animate-hero-fade-up" style={{ animationDelay: '360ms', opacity: 0 }}>
            <Link to="/contact" className="hero-primary-btn">
              Explore Our Capabilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <div className="what-we-do-content-wrapper">
      {/* Grid Section */}
      <section className="cap-new-grid-section">
        <div className="cap-new-grid-header">
          <div className="cap-new-grid-title-area">

            <h2 className="cap-new-grid-title">Turning Possibilities Into <span>Progress</span></h2>
          </div>
          
          <p className="cap-new-grid-desc">
            From modern infrastructure to intelligent automation, we build capabilities that solve real business challenges and create long-term value.
          </p>
          

        </div>

        <div className="cap-new-grid">
          {capabilitiesData.map((card) => (
            <div key={card.id} className={`cap-new-card ${card.bgClass}`}>
              <div className="cap-new-card-content">
                <div className="cap-new-card-header">
                  <span className="cap-new-card-number">{card.id}</span>
                </div>
                
                <div className="cap-new-card-icon">
                  {card.icon}
                </div>
                
                <h3 className="cap-new-card-title">{card.title}</h3>
                <p className="cap-new-card-desc">{card.description}</p>
                
                <Link to="/contact" className="cap-new-card-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
              <Link to="/contact" className="cap-new-card-arrow">
                <ArrowRight size={16} color="#111827" />
              </Link>
              <img src={card.image} alt={card.title} className="cap-new-card-image" />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="cap-new-cta">
        <div className="cap-new-cta-inner">
          <div className="cap-new-cta-left">

            <h2 className="cap-new-cta-title">
              Your Goals.<br/>
              <span>Our Capabilities.</span>
            </h2>
            <p className="cap-new-cta-desc">
              Partner with us to turn challenges into opportunities and ideas into measurable impact.
            </p>
            <Link to="/contact" className="cap-new-btn">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="cap-new-cta-right">
            <div className="cap-new-cta-list">
              <div className="cap-new-cta-list-item">
                <div className="cap-new-cta-list-icon"><div className="dot"></div></div>
                <span>Real Challenges</span>
              </div>
              <div className="cap-new-cta-list-item">
                <div className="cap-new-cta-list-icon"><div className="dot"></div></div>
                <span>Practical Solutions</span>
              </div>
              <div className="cap-new-cta-list-item active">
                <div className="cap-new-cta-list-icon"><div className="dot"></div></div>
                <span>Lasting Impact</span>
              </div>
            </div>
            

          </div>
        </div>
      </section>
      </div>
    </main>
  )
}
