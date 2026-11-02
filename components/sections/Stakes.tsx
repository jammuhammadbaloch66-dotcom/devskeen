import { TrendingUp, Flame, ZapOff } from 'lucide-react'

export default function Stakes() {
  return (
    <section id="stakes" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">

      {/* Top Editorial Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-slate-200/80">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
            <span>What&apos;s Really at Stake</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12]">
            <span className="text-slate-900 block">Every Month You Wait,</span>
            <span className="text-ds-emerald block mt-1">The Problem Gets More Expensive.</span>
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Technical debt compounds silently until traffic spikes or cloud invoices force an emergency. We eliminate the underlying architectural bottlenecks before they stall your roadmap.
          </p>
        </div>
      </div>

      {/* Main 12-Column Asymmetric Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-12">

        {/* Left 6 Columns: 3 Pain Pillars */}
        <div className="lg:col-span-6 space-y-5">
          {/* Pillar 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 border-l-4 border-l-ds-emerald border border-slate-200/70 hover:bg-white hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-ds-emerald">01 // COST</span>
                <h3 className="font-display font-bold text-xl text-slate-900">Runaway Costs</h3>
              </div>
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-ds-emerald flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Cloud bills scaling 2–3x faster than customer growth due to unoptimized queries, over-provisioned clusters, and band-aid architecture.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 border-l-4 border-l-ds-emerald border border-slate-200/70 hover:bg-white hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-ds-emerald">02 // VELOCITY</span>
                <h3 className="font-display font-bold text-xl text-slate-900">Endless Firefighting</h3>
              </div>
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-ds-emerald flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4" />
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Your best engineers spend every week patching brittle pipelines and fixing production alerts instead of shipping revenue-driving features.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/90 border-l-4 border-l-ds-emerald border border-slate-200/70 hover:bg-white hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-ds-emerald">03 // RELIABILITY</span>
                <h3 className="font-display font-bold text-xl text-slate-900">Breaking Under Load</h3>
              </div>
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-ds-emerald flex items-center justify-center shrink-0">
                <ZapOff className="w-4 h-4" />
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Unpredictable traffic spikes and enterprise client onboarding trigger cascading timeouts, slow dashboards, and customer churn.
            </p>
          </div>
        </div>

        {/* Right 6 Columns: 3D Isometric Processor with "$" Cloud */}
        <div className="lg:col-span-6 relative rounded-[28px] bg-[#F8F9F6] border border-slate-200/70 p-6 sm:p-10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-75 pointer-events-none"></div>

          <svg className="w-full max-w-[520px] h-auto relative z-10" viewBox="0 0 560 350" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D Isometric Cloud Cost Processor">
            <defs>
              <linearGradient id="chipBaseTop" x1="120" y1="160" x2="440" y2="310" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#D5EBE4"/>
                <stop offset="100%" stopColor="#99C7B9"/>
              </linearGradient>
              <linearGradient id="chipDarkL" x1="80" y1="220" x2="280" y2="330" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#29525A"/>
                <stop offset="100%" stopColor="#132A2F"/>
              </linearGradient>
              <linearGradient id="chipDarkR" x1="280" y1="330" x2="480" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0E2226"/>
                <stop offset="100%" stopColor="#071316"/>
              </linearGradient>
              <linearGradient id="dollarCloudGlass" x1="190" y1="40" x2="370" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#0D9488" stopOpacity="0.85"/>
              </linearGradient>
            </defs>

            <polygon points="280,342 85,245 280,148 475,245" fill="#0F172A" opacity="0.14" filter="blur(14px)"/>
            <polygon points="280,318 95,224 280,130 465,224" fill="url(#chipBaseTop)" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4"/>
            <polygon points="95,224 280,318 280,336 95,242" fill="url(#chipDarkL)"/>
            <polygon points="465,224 280,318 280,336 465,242" fill="url(#chipDarkR)"/>

            <polygon points="135,190 90,213 135,236 180,213" fill="#487580"/>
            <polygon points="90,213 135,236 135,260 90,237" fill="#23434B"/>
            <polygon points="180,213 135,236 135,260 180,237" fill="#11272C"/>

            <polygon points="425,190 380,213 425,236 470,213" fill="#487580"/>
            <polygon points="380,213 425,236 425,260 380,237" fill="#23434B"/>
            <polygon points="470,213 425,236 425,260 470,237" fill="#11272C"/>

            <polygon points="335,262 290,285 335,308 380,285" fill="#3B6973"/>
            <polygon points="290,285 335,308 335,332 290,309" fill="#1B3940"/>
            <polygon points="380,285 335,308 335,332 380,309" fill="#0B1E22"/>

            <polygon points="280,256 185,208 280,160 375,208" fill="#E6F7F2" stroke="#34D399" strokeWidth="2"/>
            <path d="M220 226 L195 239 M240 236 L215 249 M260 246 L235 259" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M340 226 L365 239 M320 236 L345 249 M300 246 L325 259" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>

            <g className="iso-float">
              <path d="M215 162 L335 224 C360 236 382 218 382 190 C382 168 366 150 348 146 C345 106 314 78 278 90 C256 62 218 72 210 106 C192 106 182 142 215 162 Z" fill="#132E35" transform="translate(12, -10)"/>
              <path d="M215 162 L335 224 C360 236 382 218 382 190 C382 168 366 150 348 146 C345 106 314 78 278 90 C256 62 218 72 210 106 C192 106 182 142 215 162 Z" fill="url(#dollarCloudGlass)" stroke="#A7F3D0" strokeWidth="2"/>
              <text x="275" y="168" textAnchor="middle" fill="#FFFFFF" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="64" className="iso-glow">$</text>
            </g>
          </svg>
        </div>

      </div>
    </section>
  )
}
