import React from "react";
import ServiceGrid from "../components/services/ServiceGrid";
import ServiceCTA from "../components/services/ServiceCTA";
import "../../src/styles/services.css";

const Services = () => {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-grid">
          <div className="services-hero-content">
            <span className="services-eyebrow">
              ENGINEERING EXPERTISE
            </span>

            <h1>
              Bespoke Software
              <span>Services</span>
            </h1>

            <p>
              From high-throughput microservices to full-stack web products
              and AI-driven automation, we build digital solutions designed
              to help businesses grow, scale and lead.
            </p>

            <div className="services-hero-actions ">
              <a href="#our-services" className="services-primary-btn text-lg">
                Explore Services
                <span>→</span>
              </a>

              <a href="/contact" className="services-text-btn text-xl">
                Start a Conversation
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="services-hero-visual">
            <div className="hero-orbit hero-orbit-one"></div>
            <div className="hero-orbit hero-orbit-two"></div>

            <div className="hero-dashboard">
              <div className="hero-dashboard-top">
                <div className="hero-window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>TEC THA / DIGITAL SYSTEM</span>
              </div>

              <div className="hero-dashboard-body">
                <div className="hero-sidebar">
                  <div className="sidebar-logo"></div>
                  <div className="sidebar-line active"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                  <div className="sidebar-line"></div>
                </div>

                <div className="hero-main-dashboard">
                  <div className="dashboard-heading">
                    <div>
                      <small>BUSINESS OVERVIEW</small>
                      <strong>Digital Performance</strong>
                    </div>

                    <div className="dashboard-pill">
                      +24.8%
                    </div>
                  </div>

                  <div className="dashboard-chart">
                    <div className="chart-grid-line"></div>
                    <div className="chart-grid-line"></div>
                    <div className="chart-grid-line"></div>

                    <svg
                      viewBox="0 0 500 180"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#0062CD"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset="100%"
                            stopColor="#0062CD"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0,150 C60,130 70,145 115,105 C160,65 170,120 215,90 C260,60 275,85 315,55 C355,25 380,60 410,35 C445,15 470,30 500,10 L500,180 L0,180 Z"
                        fill="url(#chartFill)"
                      />

                      <path
                        d="M0,150 C60,130 70,145 115,105 C160,65 170,120 215,90 C260,60 275,85 315,55 C355,25 380,60 410,35 C445,15 470,30 500,10"
                        fill="none"
                        stroke="#0062CD"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>

                  <div className="dashboard-stats">
                    <div>
                      <small>Projects</small>
                      <strong>124</strong>
                    </div>

                    <div>
                      <small>Growth</small>
                      <strong>48%</strong>
                    </div>

                    <div>
                      <small>Automation</small>
                      <strong>86%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-one">
              <span>AI AUTOMATION</span>
              <strong>Active</strong>
              <div className="status-dot"></div>
            </div>

            <div className="hero-floating-card hero-floating-card-two">
              <small>SCALABILITY</small>
              <strong>10×</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro" id="our-services">
        <span className="services-eyebrow">OUR SERVICES</span>

        <h2>
          Everything You Need
          <br />
          to Build, Automate & Grow.
        </h2>

        <p>
          We combine strategy, engineering and emerging technology to create
          digital products that are reliable today and ready for tomorrow.
        </p>
      </section>

      {/* SERVICES */}
      <ServiceGrid />

      {/* STATS */}
      <section className="services-stats">
        <div className="service-stat">
          <strong>100+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="service-stat">
          <strong>50+</strong>
          <span>Happy Clients</span>
        </div>

        <div className="service-stat">
          <strong>98%</strong>
          <span>Client Retention</span>
        </div>

        <div className="service-stat">
          <strong>24/7</strong>
          <span>Support & Maintenance</span>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA />
    </main>
  );
};

export default Services;