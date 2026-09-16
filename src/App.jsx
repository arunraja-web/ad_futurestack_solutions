import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import ScrollProgressBar from './components/common/ScrollProgressBar.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Solutions from './pages/Solutions.jsx'
import Careers from './pages/Careers.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import OurServices from './pages/OurServices.jsx'
import WhatWeDo from './pages/WhatWeDo.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: 'red', color: 'white', minHeight: '100vh', zIndex: 9999, position: 'relative' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children; 
  }
}

export default function App() {
  useScrollReveal()

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-white text-slate-900 font-montserrat selection:bg-[#0062CD] selection:text-white w-full">
        <ScrollProgressBar />
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 w-full bg-white font-montserrat">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/projects" element={<Navigate to="/careers" replace />} />
            <Route path="/case-studies" element={<Navigate to="/careers" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
