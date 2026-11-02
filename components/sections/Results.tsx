import { Activity } from 'lucide-react'

export default function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">

      {/* Left-Aligned Split Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 mb-12 border-b border-slate-200/80">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
            <span>Real Systems. Real Scale</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-slate-900">Real Problems. </span>
            <span className="text-ds-emerald">Measurable Results.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every engagement below involved a data-heavy platform under real-world pressure. The problems — and the solutions — apply across industries.
          </p>
        </div>
      </div>

      {/* Stacking Case Study Cards Container */}
      <div className="space-y-10 relative">

        {/* CASE STUDY CARD 1 */}
        <article className="stack-card-1 case-study-surface rounded-[28px] p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Visual: <50% Gauge Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#113247] p-6 sm:p-8 shadow-inner flex items-center justify-between relative overflow-hidden">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 w-full text-left shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ds-emerald font-semibold block">Cost Delta</span>
                    <div className="font-display font-extrabold text-4xl text-slate-900 mt-1">&lt;50%</div>
                    <span className="text-xs font-medium text-slate-500 block mt-1">Monthly Infrastructure Bill</span>
                  </div>
                  {/* Semi-Circular SVG Gauge */}
                  <svg className="w-36 h-24 shrink-0 overflow-visible" viewBox="0 0 200 110">
                    <path d="M 20 95 A 80 80 0 0 1 180 95" fill="none" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M 20 95 A 80 80 0 0 1 100 15" fill="none" stroke="#10B981" strokeWidth="16" strokeLinecap="round"/>
                    <circle cx="100" cy="15" r="7" fill="#FFFFFF" stroke="#10B981" strokeWidth="4"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-ds-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-ds-emerald"></span>
                <span>Cost Optimization · Infrastructure</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Same Performance. Half the Bill.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A real-time platform handling unpredictable traffic spikes and multiple simultaneous data sources — running at over 2x the necessary infrastructure cost. We delivered a full platform upgrade that cut spending by 50% with sub-500ms response times.
              </p>
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-lg sm:text-xl font-bold text-slate-900">&lt;50% Infrastructure</div>
                  <div className="text-xs text-slate-500 mt-0.5">Monthly cloud spend reduction</div>
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl font-bold text-slate-900">Sub-500ms</div>
                  <div className="text-xs text-slate-500 mt-0.5">Real-time query response</div>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* CASE STUDY CARD 2 */}
        <article className="stack-card-2 case-study-surface rounded-[28px] p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Visual: Zero Downtime + 30% Growth Chart */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/80 border border-slate-200/70 p-6 sm:p-7 shadow-sm relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#113247] text-white text-xs font-semibold mb-4 shadow-sm">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Downtime</span>
                </div>
                <div className="relative pt-2">
                  <div className="absolute right-2 top-0 px-2.5 py-1 rounded-full bg-ds-emerald text-white font-display font-bold text-xs shadow">
                    30% Growth
                  </div>
                  <svg className="w-full h-36" viewBox="0 0 280 120" fill="none">
                    <defs>
                      <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.35"/>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <path d="M10 105 Q 80 95, 140 65 T 260 20 L 260 115 L 10 115 Z" fill="url(#growthGrad)"/>
                    <path d="M10 105 Q 80 95, 140 65 T 260 20" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                    <circle cx="260" cy="20" r="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="3.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-ds-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-ds-emerald"></span>
                <span>Cloud Migration · Zero Downtime</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Legacy System to Modern Cloud — Without Missing a Beat.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A fast-growing platform was held back by aging architecture and manual deployments. We migrated them to modern cloud infrastructure while the business kept running — zero downtime, zero data loss.
              </p>
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-lg sm:text-xl font-bold text-slate-900">Zero Downtime</div>
                  <div className="text-xs text-slate-500 mt-0.5">Seamless live cutover</div>
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl font-bold text-slate-900">Zero Data Loss</div>
                  <div className="text-xs text-slate-500 mt-0.5">Automated CI/CD pipelines</div>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* CASE STUDY CARD 3 */}
        <article className="stack-card-3 case-study-surface rounded-[28px] p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Visual: <2 Seconds Node Diagram */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm relative">
                <div className="flex justify-end mb-2">
                  <span className="px-3 py-1 rounded-md bg-[#113247] text-white text-[11px] font-semibold">
                    26+ years of data
                  </span>
                </div>
                <div className="py-3 flex items-center justify-between gap-6 relative px-2">
                  <div className="text-left">
                    <div className="font-mono text-xs text-slate-400 uppercase">Query Latency</div>
                    <div className="font-display font-extrabold text-2xl text-slate-900 mt-0.5">&lt;2 Seconds</div>
                    <div className="text-xs text-slate-500 mt-1">400+ metrics per record</div>
                  </div>
                  <div className="w-24 h-24 rounded-full border-[6px] border-slate-100 flex flex-col items-center justify-center relative shadow-inner shrink-0">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" stroke="#113247" strokeWidth="7" fill="none" strokeDasharray="220" strokeDashoffset="45" strokeLinecap="round"/>
                    </svg>
                    <span className="w-2 h-2 rounded-full bg-ds-emerald mb-1"></span>
                    <span className="font-display font-extrabold text-xs text-slate-900">1.4s avg</span>
                  </div>
                </div>
                <div className="flex justify-start mt-2">
                  <span className="px-3 py-1 rounded-md bg-ds-emerald text-white text-[11px] font-semibold">
                    Production-ready
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-ds-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-ds-emerald"></span>
                <span>Data Engineering · Scale</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                26 Years of Data. Under $600 a Month.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                The platform needed to ingest and process 26 years of historical data and 400+ metrics per record — on a startup budget, competing against well-funded incumbents. We built dual cloud environments that deliver sub-2-second load times for under $600/month.
              </p>
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="font-display text-lg font-bold text-slate-900">26+ Years</div>
                  <div className="text-xs text-slate-500">of data processed</div>
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-slate-900">&lt;$600/month</div>
                  <div className="text-xs text-slate-500">Dual cloud environments</div>
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-slate-900">&lt;2 Seconds</div>
                  <div className="text-xs text-slate-500">Full site load time</div>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  )
}
