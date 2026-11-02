export default function Philosophy() {
  return (
    <section id="philosophy" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">

      {/* Left-Aligned Section Heading Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
            <span>Why devskeen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-slate-900 block">Your Technology Problems Started</span>
            <span className="text-ds-emerald block mt-1">With Good Intentions.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fast patches and quick MVPs eventually hit a ceiling. We re-architect the core without halting your daily operations.
          </p>
        </div>
      </div>

      {/* 2-Column Split Container */}
      <div className="rounded-[32px] bg-[#F8F9F6] border border-slate-200/60 p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Copy + 3 Checkmark Pills (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              We Fix the Root Cause, Not the Symptoms
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Most firms start writing code. We start by learning how your business actually runs — mapping workflows, data flows, and dependencies before touching a single system. Then we design solutions that grow with you.
            </p>

            {/* 3 Checkmark Pill Rows */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-ds-emerald flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span className="text-sm font-medium text-slate-800">No rip-and-replace.</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-ds-emerald flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span className="text-sm font-medium text-slate-800">No generic tools.</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-ds-emerald flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                <span className="text-sm font-medium text-slate-800">Senior engineers who stay accountable long after launch.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 pt-2">
              It&apos;s why every client we&apos;ve ever worked with is still with us.
            </p>
          </div>

          {/* Right Column: 3D Isometric Diagnostic Motherboard & Magnifying Glass (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <svg className="w-full max-w-[460px] h-auto" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D Isometric Root Cause System Diagnostics">
              {/* Floating Isometric Workflow Document Cards */}
              <g className="iso-float-delay">
                <polygon points="150,70 105,95 105,155 150,130" fill="#E2F2EE" stroke="#10B981" strokeWidth="1"/>
                <polygon points="185,88 140,113 140,173 185,148" fill="#FFFFFF" stroke="#34D399" strokeWidth="1.5"/>
                <line x1="148" y1="120" x2="175" y2="105" stroke="#10B981" strokeWidth="2"/>
                <line x1="148" y1="132" x2="170" y2="120" stroke="#94A3B8" strokeWidth="2"/>
              </g>

              {/* Base Isometric Diagnostic Board */}
              <polygon points="245,335 75,245 245,155 415,245" fill="#173A42" stroke="#10B981" strokeWidth="1.5"/>
              <polygon points="75,245 245,335 245,350 75,260" fill="#0F292F"/>
              <polygon points="415,245 245,335 245,350 415,260" fill="#08181C"/>

              {/* Glowing Circuit Grid Inside Board */}
              <polygon points="245,315 110,245 245,175 380,245" fill="#204E58"/>
              <path d="M165 245 L245 205 L325 245 L245 285 Z" stroke="#34D399" strokeWidth="2" className="iso-stream-line" fill="rgba(16, 185, 129, 0.12)"/>

              {/* Top Server */}
              <polygon points="265,122 238,136 265,150 292,136" fill="#6EE7B7"/>
              <polygon points="238,136 265,150 265,195 238,181" fill="#1E464E"/>
              <polygon points="292,136 265,150 265,195 292,181" fill="#0E262B"/>

              {/* Right Server */}
              <polygon points="365,165 338,179 365,193 392,179" fill="#6EE7B7"/>
              <polygon points="338,179 365,193 365,242 338,228" fill="#1E464E"/>
              <polygon points="392,179 365,193 365,242 392,228" fill="#0E262B"/>

              {/* Left Bottom Node */}
              <polygon points="118,262 92,276 118,290 144,276" fill="#5EEAD4"/>
              <polygon points="92,276 118,290 118,325 92,311" fill="#1E464E"/>
              <polygon points="144,276 118,290 118,325 144,311" fill="#0E262B"/>

              {/* Floating Isometric Magnifying Diagnostic Lens Over Center */}
              <g className="iso-float">
                <ellipse cx="255" cy="235" rx="46" ry="26" fill="rgba(52, 211, 153, 0.28)" stroke="#A7F3D0" strokeWidth="4"/>
                <ellipse cx="255" cy="230" rx="46" ry="26" fill="rgba(255, 255, 255, 0.35)" stroke="#FFFFFF" strokeWidth="2.5"/>
                <path d="M292 246 L332 272" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round"/>
                <path d="M295 248 L332 272" stroke="#0F172A" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="255" cy="230" r="8" fill="#10B981"/>
                <circle cx="255" cy="230" r="16" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3"/>
              </g>
            </svg>
          </div>

        </div>
      </div>

    </section>
  )
}
