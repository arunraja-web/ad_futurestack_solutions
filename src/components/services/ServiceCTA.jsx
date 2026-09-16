import Button from '../common/Button.jsx'

export default function ServiceCTA() {
  return (
    <div className="glass-card-dark rounded-3xl p-10 text-center max-w-4xl mx-auto my-16 border-[#0062CD]/30">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4">Need a Custom Engineering Solution?</h3>
      <p className="text-slate-300 max-w-xl mx-auto mb-6">
        Our senior engineers build custom architectures tailored specifically to your existing stack and business goals.
      </p>
      <Button to="/contact" variant="primary" className="!bg-[#0062CD] hover:!bg-[#0050A8] !text-white shadow-[#0062CD]/30">Talk to an Architect</Button>
    </div>
  )
}
