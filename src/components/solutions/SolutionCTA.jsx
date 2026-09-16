import Button from '../common/Button.jsx'

export default function SolutionCTA() {
  return (
    <div className="bg-slate-50 rounded-3xl p-10 text-center max-w-4xl mx-auto my-16 border border-slate-200 shadow-md">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase mb-4">Request a Customized Blueprint</h3>
      <p className="text-slate-600 max-w-xl mx-auto mb-6 text-sm leading-relaxed">
        Have specific security or data sovereignty requirements? We tailor enterprise blueprints to fit your compliance needs.
      </p>
      <Button to="/contact" variant="primary" className="!bg-[#0062CD] hover:!bg-[#0050A8] !text-white">
        Request Solution Architecture
      </Button>
    </div>
  )
}
