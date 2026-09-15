import React from 'react';
import { ArrowRight, Package, BrainCircuit, Sparkles, Database, Cloud, Bot } from 'lucide-react';
import '../../styles/connected-capabilities.css';
import { Link } from 'react-router-dom';

export default function ConnectedCapabilities() {
  const nodes = [
    { label: 'Intelligence', icon: <BrainCircuit size={18} />, angle: 0, delay: '0s' },
    { label: 'Experience', icon: <Sparkles size={18} />, angle: 60, delay: '0.8s' },
    { label: 'Data', icon: <Database size={18} />, angle: 120, delay: '1.6s' },
    { label: 'Cloud', icon: <Cloud size={18} />, angle: 180, delay: '2.4s' },
    { label: 'Automation', icon: <Bot size={18} />, angle: 240, delay: '3.2s' },
    { label: 'Products', icon: <Package size={18} />, angle: 300, delay: '4s' }
  ];

  return (
    <>
      <section className="cc-intro-section" data-reveal="up">
        <div className="cc-intro-inner">
          <h2>
            Capabilities that connect <span className="text-blue">possibilities.</span>
          </h2>
          <p>
            A unified ecosystem of technology, people and ideas to help businesses move forward.
          </p>
          <a href="#core-capabilities" className="cc-explore-btn light-mode">
            <span className="arrow-circle"><ArrowRight size={16} /></span>
            Explore Our Capabilities
          </a>
        </div>
      </section>

      <section className="connected-cap-section">
        <div className="connected-cap-grid">
        
        {/* LEFT COLUMN (THE ORB) */}
        <div className="cc-center-col" data-reveal="scale">
          <div className="cc-ecosystem-container">
            
            {/* The orbital rings */}
            <div className="cc-orbital-ring ring-1"></div>
            <div className="cc-orbital-ring ring-2"></div>
            <div className="cc-orbital-ring ring-3"></div>

            {/* Orbiting nodes */}
            <div className="cc-nodes-wrapper">
              {nodes.map((node, idx) => (
                <div 
                  key={idx} 
                  className={`cc-node-container node-${idx}`}
                >
                  <div className="cc-node-float" style={{ animationDelay: node.delay }}>
                    <div className="cc-node">
                      <div className="cc-node-icon">{node.icon}</div>
                    </div>
                    <span className="cc-node-label">{node.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom glowing platform */}
            <div className="cc-platform">
              <div className="cc-platform-base"></div>
              <div className="cc-platform-beam"></div>
              <div className="cc-platform-text">
                PEOPLE <span>+</span> TECHNOLOGY <span>+</span> GROWTH
              </div>
            </div>
            
            {/* The core glowing orb (on top for layering) */}
            <div className="cc-core-orb">
              <div className="cc-core-inner"></div>
              <div className="cc-core-glow"></div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="cc-right-col" data-reveal="left">
          <div className="cc-right-inner">
            <span className="cc-kicker">INTEGRATED CAPABILITIES</span>
            <div className="cc-dots">
              <span className="cc-dot-active"></span><span></span><span></span><span></span>
            </div>
            
            <h2>Stronger<br/>together.</h2>
            <p>
              Our capabilities work as a connected ecosystem — bringing strategy, engineering and innovation together to create meaningful impact.
            </p>
            
            <Link to="/contact" className="cc-explore-btn">
              <span className="arrow-circle"><ArrowRight size={16} /></span>
              See How It Connects
            </Link>

            <div className="cc-footer-labels">
              IDEAS <span>→</span> SOLUTIONS <span>→</span> IMPACT
            </div>
          </div>
        </div>

      </div>
      </section>
    </>
  );
}
