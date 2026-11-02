import { CloudLightning, BarChart2, Sparkles } from 'lucide-react'

export default function MarqueeBanner() {
  return (
    <section aria-label="Partnering Companies" className="px-4 sm:px-8 lg:px-12 pb-16">
      <div className="max-w-[1360px] mx-auto rounded-[32px] bg-gradient-to-b from-[#12A87A] to-[#0E8F67] text-white pt-10 pb-10 overflow-hidden shadow-xl relative">

        {/* Giant Scrolling Marquee Text */}
        <div className="marquee-wrapper select-none pb-8 border-b border-white/20">
          <div className="flex items-center gap-10 shrink-0 px-4">
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-emerald-100/80">
              Growth shouldn&apos;t break your systems.
            </span>
            <span className="text-3xl sm:text-5xl text-emerald-200/70">•</span>
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-emerald-100/80">
              Growth shouldn&apos;t break your systems.
            </span>
            <span className="text-3xl sm:text-5xl text-emerald-200/70">•</span>
          </div>
          <div className="flex items-center gap-10 shrink-0 px-4" aria-hidden="true">
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-emerald-100/80">
              Growth shouldn&apos;t break your systems.
            </span>
            <span className="text-3xl sm:text-5xl text-emerald-200/70">•</span>
            <span className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-emerald-100/80">
              Growth shouldn&apos;t break your systems.
            </span>
            <span className="text-3xl sm:text-5xl text-emerald-200/70">•</span>
          </div>
        </div>

        {/* Left-Aligned 12-Column Partner Split */}
        <div className="px-6 sm:px-10 lg:px-14 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-left border-l-2 border-emerald-200/60 pl-4">
            <p className="text-xs uppercase font-mono tracking-widest text-emerald-200 mb-1">Trusted Production Partners</p>
            <p className="text-sm sm:text-base font-medium text-white">
              Partnering with high-growth companies to build systems that scale.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-wrap items-center justify-start lg:justify-between gap-8 sm:gap-10 opacity-95">
            {/* DISCOVR */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border-2 border-white flex items-center justify-center font-display font-extrabold text-sm">D</div>
              <span className="font-mono text-xs tracking-widest uppercase font-semibold">DISCOVR</span>
            </div>
            {/* E&Z */}
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">~</span>
              <span className="font-display font-extrabold text-2xl tracking-wider">E&amp;Z</span>
            </div>
            {/* BIG BRO */}
            <div className="flex items-center gap-2">
              <CloudLightning className="w-6 h-6" />
              <span className="font-mono text-xs tracking-widest uppercase font-semibold">BIG BRO</span>
            </div>
            {/* statrankings */}
            <div className="flex items-center gap-2">
              <BarChart2 className="w-5 h-5" />
              <span className="font-display font-bold text-base tracking-tight">statrankings</span>
            </div>
            {/* Spikeel */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-display font-bold text-base">Spikeel</span>
            </div>
            {/* DAILY EDGE SPORTS */}
            <div className="flex items-center gap-1.5 font-display font-extrabold text-sm tracking-wider uppercase">
              <span>DAILY EDGE</span>
              <span className="px-1.5 py-0.5 bg-white text-ds-emerald rounded text-xs">DE</span>
              <span>SPORTS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
