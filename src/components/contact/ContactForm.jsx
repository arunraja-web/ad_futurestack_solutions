import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack Engineering',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center space-y-4 border border-[#BFDBFE] shadow-xl">
        <div className="h-16 w-16 bg-[#EFF6FF] text-[#0062CD] rounded-full flex items-center justify-center mx-auto border border-[#BFDBFE]">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 uppercase">Inquiry Received!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          Thank you for reaching out. A principal solutions architect will review your project scope and respond within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-mono font-bold text-[#0062CD] underline pt-4 cursor-pointer hover:text-[#0050A8]"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 space-y-6 border border-slate-200 shadow-xl">
      <h3 className="text-2xl font-bold text-slate-900 uppercase">Project Inquiry</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Full Name *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062CD] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Work Email *</label>
          <input
            type="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062CD] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Company Name</label>
          <input
            type="text"
            placeholder="Acme Inc."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062CD] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Primary Interest</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0062CD] transition-colors"
          >
            <option>Full-Stack Engineering</option>
            <option>Cloud Infrastructure & DevOps</option>
            <option>AI & Automation Workflows</option>
            <option>Mobile App Development</option>
            <option>Security & Architecture Audit</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">Project Overview *</label>
        <textarea
          required
          rows="4"
          placeholder="Tell us about your timeline, key requirements, and current tech stack..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062CD] transition-colors"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#0062CD] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#0050A8] transition-all cursor-pointer shadow-lg shadow-[#0062CD]/20 active:scale-95 text-xs uppercase tracking-wider"
      >
        <span>Submit Technical Request</span>
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
