import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import ScrollProgressBar from './components/common/ScrollProgressBar.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Capabilities from './pages/Capabilities.jsx'
import Solutions from './pages/Solutions.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  useScrollReveal()

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-montserrat selection:bg-violet-700 selection:text-white w-full overflow-x-hidden">
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full bg-white font-montserrat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
