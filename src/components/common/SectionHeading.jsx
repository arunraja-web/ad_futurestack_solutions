export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = ''
}) {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-mono font-bold tracking-widest text-[#0062CD] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0062CD] animate-ping"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
