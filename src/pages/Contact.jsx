import { useState } from "react";
import { Building2, Mail, PhoneCall, CheckCircle2, AlertCircle } from "lucide-react";
import SEO from "../components/common/SEO.jsx";
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME } from "../utils/constants.js";

const PORTRAIT_IMAGE = "/contact.avif";
const MESSAGE_MAX_LENGTH = 1500;

// FormSubmit Endpoint configured for AD FutureStack
const FORM_ENDPOINT = "https://formsubmit.co/ajax/adfuturestacksolutions@gmail.com";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  organization: "",
  message: "",
  consentContact: false,
  consentMarketing: false,
};

// Underline Text Field Primitive
const TextField = ({ label, required, ...props }) => (
  <label className="block text-left font-montserrat">
    <span className="text-sm font-medium text-white font-montserrat">
      {label}
      {required && <span className="text-violet-400 ml-0.5">*</span>}
    </span>
    <input
      {...props}
      required={required}
      className="mt-3 w-full border-0 border-b border-white/25 bg-transparent pb-2 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-violet-400 font-montserrat"
    />
  </label>
);

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Contact AD FutureStack',
  'description': 'Get in touch with AD FutureStack lead software architects for tech consultations, custom software quotes, and architecture audits.',
  'mainEntity': {
    '@type': 'Organization',
    'name': 'AD FutureStack',
    'url': 'https://adfuturestack.dev',
    'email': 'adfuturestacksolutions@gmail.com',
    'telephone': '+91 9488681492',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Kovilpatti',
      'addressRegion': 'Tamil Nadu',
      'addressCountry': 'IN'
    }
  }
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Service Inquiry — ${form.firstName} ${form.lastName} (${form.organization || "Independent"})`,
          _template: "table",
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Organization: form.organization,
          Message: form.message,
          "Contact Consent": form.consentContact ? "Granted" : "Denied",
          "Marketing Consent": form.consentMarketing ? "Yes" : "No",
        }),
      });

      if (!response.ok) throw new Error("FormSubmit request failed");

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Request for services submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white font-montserrat overflow-hidden pt-24 pb-16">
      <SEO
        title="Contact AD FutureStack — Request Tech Consultation"
        description="Get in touch with our lead software architects. Request an architecture audit, discuss your custom software project, or get a project quote."
        keywords="Contact AD FutureStack, Software Consultation, Hire Tech Agency, Architecture Audit, Contact Software Engineers"
        canonicalUrl="https://adfuturestack.dev/contact"
        schema={contactSchema}
      />

      {/* 1. FULL IMAGE BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={PORTRAIT_IMAGE}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";
          }}
          alt="AD FutureStack Technical Software Architecture & Consultation Workspace"
          loading="lazy"
          className="w-full h-full object-cover filter brightness-[0.2] contrast-[1.1]"
        />

        {/* 2. DARK TINT OVERLAY */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs" />
      </div>

      {/* CENTERED CONTENT CONTAINER */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 text-center flex flex-col items-center">
        <div className="w-full max-w-3xl font-montserrat">

          {/* HEADER BADGE */}
          <div className="inline-flex items-center justify-center gap-3 font-montserrat mx-auto">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/30 border border-violet-500/40 text-violet-400 backdrop-blur-md">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white font-montserrat">
              Request For Services
            </span>
          </div>

          {/* MAIN TITLE & INTRO */}
          <h1 className="mt-6 text-3xl sm:text-5xl font-semibold text-white tracking-tight uppercase leading-tight font-montserrat text-center">
            Let's Engineer Your <span className="text-violet-400 font-montserrat">Digital Future</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-200 font-normal leading-relaxed font-montserrat text-center max-w-2xl mx-auto">
            As enterprises embrace AI and modern cloud architectures at scale, we help turn high-throughput vision into robust software reality. Tell us a bit about your project so our lead architects can connect.
          </p>

          {/* CENTERED FORM */}
          <form onSubmit={handleSubmit} className="mt-12 w-full space-y-8 font-montserrat text-left">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 font-montserrat">
              <TextField
                label="First name"
                required
                type="text"
                value={form.firstName}
                onChange={updateField("firstName")}
                placeholder="John"
              />
              <TextField
                label="Last name"
                required
                type="text"
                value={form.lastName}
                onChange={updateField("lastName")}
                placeholder="Doe"
              />
              <TextField
                label="Corporate Email"
                required
                type="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="john@company.com"
              />
              <TextField
                label="Organization / Company"
                required
                type="text"
                value={form.organization}
                onChange={updateField("organization")}
                placeholder="Acme Enterprises"
              />
            </div>

            <label className="block text-left font-montserrat">
              <span className="text-sm font-medium text-white font-montserrat">
                How can we help you?<span className="text-violet-400 ml-0.5">*</span>
              </span>
              <textarea
                required
                rows={3}
                maxLength={MESSAGE_MAX_LENGTH}
                value={form.message}
                onChange={updateField("message")}
                placeholder="Briefly describe your project requirements, target architecture, or timeline..."
                className="mt-3 w-full border-0 border-b border-white/25 bg-transparent pb-2 text-base text-white outline-none transition-colors duration-200 placeholder:text-white/30 focus:border-violet-400 font-montserrat"
              />
              <span className="mt-2 block text-right text-xs text-slate-300 font-montserrat">
                ({form.message.length}/{MESSAGE_MAX_LENGTH})
              </span>
            </label>

            {/* CONSENT CHECKBOXES */}
            <div className="space-y-4 pt-2 font-montserrat text-left">
              <label className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-200 font-montserrat cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.consentContact}
                  onChange={updateField("consentContact")}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-slate-600 bg-transparent accent-violet-600 cursor-pointer"
                />
                <span>
                  I consent to the processing of my personal data entered above for {SITE_NAME} to contact me regarding this inquiry.<span className="text-violet-400 ml-0.5">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-slate-200 font-montserrat cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consentMarketing}
                  onChange={updateField("consentMarketing")}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-slate-600 bg-transparent accent-violet-600 cursor-pointer"
                />
                <span>
                  I would like to receive technological insights, whitepapers, and engineering updates from {SITE_NAME}.
                </span>
              </label>

              <p className="text-[11px] text-slate-300 leading-relaxed font-montserrat">
                *Mandatory fields. Your privacy is strictly protected in accordance with SOC2 and GDPR compliance standards.
              </p>
            </div>

            {/* SUBMIT BUTTON & STATUS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-montserrat">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-violet-700 hover:bg-violet-800 px-12 py-4 text-xs font-bold text-white uppercase tracking-widest transition-all shadow-lg hover:shadow-violet-700/30 active:scale-95 disabled:opacity-50 cursor-pointer font-montserrat"
              >
                {status === "sending" ? "Submitting Inquiry..." : "Submit Service Request"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-semibold font-montserrat">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Thank you! Your request has been received. We'll be in touch within 24 hours.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm font-semibold font-montserrat">
                  <AlertCircle className="h-4 w-4" />
                  <span>Submission error. Please email us directly at {CONTACT_EMAIL}</span>
                </div>
              )}
            </div>
          </form>

          {/* CONTACT INFO CARDS BELOW FORM */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6 font-montserrat w-full text-left">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 font-montserrat">
              <div className="h-10 w-10 rounded-lg bg-violet-700/30 text-violet-400 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col font-montserrat">
                <span className="text-[10px] uppercase font-bold text-slate-400">Direct Inbox</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs font-bold text-white hover:text-violet-400 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 font-montserrat">
              <div className="h-10 w-10 rounded-lg bg-violet-700/30 text-violet-400 flex items-center justify-center shrink-0">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div className="flex flex-col font-montserrat">
                <span className="text-[10px] uppercase font-bold text-slate-400">Direct Hotline</span>
                <a href={`tel:${CONTACT_PHONE}`} className="text-xs font-bold text-white hover:text-violet-400 transition-colors">
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}