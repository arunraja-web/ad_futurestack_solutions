import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const content = [
  {
    title: "Product Engineering",
    desc: "From an initial idea to a production-ready digital product.",
    image: "/images/services/product-engineering-new.jpg"
  },
  {
    title: "AI & Automation",
    desc: "Intelligent workflows that remove repetitive operational work.",
    image: "/images/services/business-collaboration.webp"
  },
  {
    title: "Cloud & Data",
    desc: "Reliable infrastructure and data systems built to scale.",
    image: "/images/services/cloud-data-new.jpg"
  }
];

export default function AnimatedShowcase() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      style={{
        backgroundColor: 'var(--light)',
        padding: '120px 20px 40px 20px',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '100px', textAlign: 'center' }}
        >
          <span style={{
            display: 'inline-block',
            marginBottom: '20px',
            color: 'var(--blue)',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            WHY CHOOSE US
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            color: 'var(--navy)',
            margin: '0 auto 24px',
            maxWidth: '800px'
          }}>
            Technology that works for your business.
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.6,
            color: 'var(--muted)',
            margin: '0 auto',
            maxWidth: '600px'
          }}>
            We don't just deliver software. We understand the business
            behind the technology and create solutions designed around
            your goals, customers and future growth.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {content.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <ContentBlock 
                key={index} 
                item={item} 
                isEven={isEven} 
                index={index} 
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ContentBlock({ item, isEven, index }) {
  const blockRef = useRef(null);

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  // Image parallax effect
  const y = useTransform(parallaxProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={blockRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        alignItems: 'center'
      }}
    >
      
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -150 : 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
        style={{
          gridColumn: isEven ? '1 / 6' : '8 / 13',
          gridRow: 1,
          zIndex: 2,
          padding: '50px 40px',
          background: 'white',
          boxShadow: '0 25px 50px rgba(11, 27, 51, 0.05)',
          borderRadius: '4px'
        }}
      >
        <div style={{
          color: 'var(--blue)',
          fontSize: '12px',
          fontWeight: 800,
          marginBottom: '20px',
          opacity: 0.8
        }}>
          0{index + 1}
        </div>
        <h3 style={{
          fontSize: 'clamp(28px, 3vw, 36px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: 'var(--navy)',
          marginBottom: '20px'
        }}>
          {item.title}
        </h3>
        <p style={{
          fontSize: '15px',
          lineHeight: 1.8,
          color: 'var(--muted)',
          margin: 0
        }}>
          {item.desc}
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ clipPath: 'inset(15% 15% 15% 15%)', opacity: 0, scale: 0.95, x: isEven ? 150 : -150 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 70, damping: 20, duration: 1.2 }}
        style={{
          gridColumn: isEven ? '5 / 13' : '1 / 9',
          gridRow: 1,
          height: '560px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '4px',
          boxShadow: '0 30px 60px rgba(11, 27, 51, 0.08)'
        }}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '120%', 
            objectFit: 'cover',
            position: 'absolute',
            top: '-10%', 
            y
          }}
        />
        {/* Subtle overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(11,27,51,0.03) 0%, rgba(11,27,51,0) 100%)',
          pointerEvents: 'none'
        }} />
      </motion.div>

    </div>
  );
}
