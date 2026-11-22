import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Technologies() {
  return (
        <section id="insights" className="py-20 sm:py-28 bg-[#0a0a0a] text-white font-montserrat scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

            {/* SECTION HEADER */}
              <div data-reveal="up" className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563eb] block mb-2">
                      THOUGHT LEADERSHIP
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      Latest Insights
                    </h2>
                </div>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
                    Strategic perspectives, deep research, and technical reports on software architecture, AI transformation, and enterprise growth.
                  </p>
              </div>

                {/* ── BENTO GRID: 4 COLUMNS x 2 ROWS (MATCHING REFERENCE IMAGE) ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

                    {/* ════ ROW 1 ════ */}

                    {/* 1. TOP-LEFT: NAVY BLUE ANNOUNCEMENT CARD */}
          <Link
                    to="/capabilities"
                    className="group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-start min-h-[360px] lg:min-h-[380px] bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#0f172a] border border-[#2563eb]/30 hover:border-[#2563eb] shadow-xl hover:shadow-[#1e3a8a]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.22em] text-blue-200/90 uppercase block mb-3">
                      ANNOUNCEMENT
                    </span>
                    <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug">
                      AI-Powered Marketing Strategies
                    </h3>
                  </Link>

                  {/* 2. TOP-COL 2: IMAGE + DARK RESEARCH REPORT CARD */}
                  <Link
                    to="/solutions"
                    className="group relative rounded-2xl overflow-hidden flex flex-col min-h-[360px] lg:min-h-[380px] bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-[210px] sm:h-[220px] w-full overflow-hidden bg-neutral-900 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80&auto=format&fit=crop"
                        alt="High-Performance Sales Solutions Meeting"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = '/images/about/team-collaboration.webp'
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-center">
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase block mb-2">
                        RESEARCH REPORT
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                        High-Performance Sales Solutions
                      </h3>
                    </div>
                  </Link>

                      {/* 3. TOP-COL 3: LIGHT-TO-NAVY GRADIENT CARD WITH CIRCULAR ARROW */}
                      <Link
                        to="/our-services"
                        className="group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between min-h-[360px] lg:min-h-[380px] bg-gradient-to-b from-white via-[#dbeafe] to-[#1e3a8a] border border-white/20 shadow-xl hover:shadow-[#1e3a8a]/40 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div>
                          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#1e3a8a] uppercase block mb-2">
                            RESEARCH REPORT
                          </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
                              Building Powerful Brand Identity
                            </h3>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal line-clamp-4">
                                Create a strong brand presence with compelling storytelling, visual identity, and strategic positioning that builds trust and long-term customer equity.
                              </p>
                            </div>
                            <div className="pt-4">
                              <div className="w-10 h-10 rounded-full bg-white text-[#1e3a8a] shadow-md flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                                <ChevronRight className="h-5 w-5 stroke-[2.5]" />
                              </div>
                            </div>
                      </Link>

                        {/* 4. TOP-COL 4: IMAGE + DARK PERSPECTIVE CARD */}
                        <Link
                          to="/careers"
                          className="group relative rounded-2xl overflow-hidden flex flex-col min-h-[360px] lg:min-h-[380px] bg-[#121212] border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="h-[210px] sm:h-[220px] w-full overflow-hidden bg-neutral-900 shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop"
                              alt="Business Growth Consulting Conference Table"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.onerror = null
                                e.currentTarget.src = '/images/services/team-collaboration-services.webp'
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                          </div>
                          <div className="p-6 sm:p-7 flex-1 flex flex-col justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-neutral-400 uppercase block mb-2">
                              PERSPECTIVE
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                              Business Growth Consulting
                            </h3>
                          </div>
                        </Link>


                        {/* ════ ROW 2 ════ */}

                          {/* 5. BOTTOM-COL 1: WHITE PERSPECTIVE CARD */}
                          <Link
                            to="/about"
                            className="group rounded-2xl p-7 sm:p-8 flex flex-col justify-center min-h-[220px] bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                          >
                            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase block mb-2.5">
                              PERSPECTIVE
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#1e3a8a] transition-colors">
                              Expand Into Global Markets
                            </h3>
                          </Link>

                        {/* 6. BOTTOM-COL 2: FULL PHOTO CARD (GLASS BOARDROOM SILHOUETTES) */}
                        <div className="group rounded-2xl overflow-hidden relative min-h-[220px] border border-white/[0.08] hover:border-white/20 transition-all duration-300">
                          <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop"
                            alt="Global Strategy and Office Discussion at Dusk"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = '/images/solutions/glowing_stairs_office.jpg'
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                        </div>

                        {/* 7. BOTTOM-COL 3: WHITE PERSPECTIVE CARD */}
                        <Link
                          to="/capabilities"
                          className="group rounded-2xl p-7 sm:p-8 flex flex-col justify-center min-h-[220px] bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase block mb-2.5">
                            PERSPECTIVE
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#1e3a8a] transition-colors">
                            Data-Driven Business Decisions
                          </h3>
                        </Link>

                        {/* 8. BOTTOM-COL 4: FULL PHOTO CARD (AI CYBERNETIC HAND & ORB) */}
                        <div className="group rounded-2xl overflow-hidden relative min-h-[220px] border border-white/[0.08] hover:border-white/20 transition-all duration-300">
                          <img
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop"
                            alt="AI Intelligence and Robotics City Innovation"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null
                              e.currentTarget.src = '/images/capabilities/ai-automation.webp'
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                        </div>

                      </div>

                  </div>
                </section>
                )
}
