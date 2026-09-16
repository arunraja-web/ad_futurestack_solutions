import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from '../../utils/constants.js'

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-3xl p-8 space-y-8 border border-slate-200 shadow-xl">
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0062CD]">Direct Contact</span>
        <h3 className="text-2xl font-bold text-slate-900 uppercase mt-1">Global Headquarters</h3>
        <p className="text-xs text-slate-500 mt-2">Reach out directly to schedule an introductory video call.</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Email Architecture Desk</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-slate-900 hover:text-[#0062CD] transition-colors">{CONTACT_EMAIL}</a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] shrink-0">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Phone Hotline</span>
            <span className="text-sm font-bold text-slate-900">{CONTACT_PHONE}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Office Location</span>
            <span className="text-sm font-bold text-slate-900">{OFFICE_ADDRESS}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0062CD] shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Response SLA</span>
            <span className="text-sm font-bold text-slate-900">Under 24 Hours (Mon - Fri)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
