import Container from '../components/common/Container.jsx'
import Button from '../components/common/Button.jsx'
import SEO from '../components/common/SEO.jsx'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <SEO
        title="404: Page Not Found | AD FutureStack"
        description="The page you requested could not be found. Return to AD FutureStack homepage to explore our IT services and software solutions."
        canonicalUrl="https://adfuturestack.com/404"
        robots="noindex, nofollow"
      />
      <div className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-950">
        <Container className="text-center space-y-6">
          <div className="h-16 w-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Error 404</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase">Page Not Found</h1>
          <p className="text-slate-400 max-w-md mx-auto">
            The architectural route you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-4">
            <Button to="/" variant="primary">Return to Home</Button>
          </div>
        </Container>
      </div>
    </>
  )
}
