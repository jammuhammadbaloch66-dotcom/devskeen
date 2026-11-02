'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const svg = svgRef.current
    if (!container || !svg) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14
      svg.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    const handleMouseLeave = () => {
      svg.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="hero" className="relative pt-10 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Strictly Left-Aligned Editorial Stack (6 Cols) */}
          <div className="lg:col-span-6 space-y-7 z-10 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-ds-emeraldDark">
              <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
              <span>Cloud, Data &amp; Systems Engineering House</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-slate-900 leading-[1.08] tracking-tight">
              Scale Your Systems Without Scaling <span className="font-normal text-ds-emerald">Your Costs.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Most infrastructure wasn&apos;t designed for what comes next. We build data and cloud systems that are — so your team can stop firefighting and start shipping.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#contact" className="inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full bg-slate-900 hover:bg-ds-emerald text-white shadow-sm hover:shadow-md transition-all group">
                <span className="font-display font-semibold text-sm">Book a Discovery Call</span>
                <span className="w-9 h-9 rounded-full bg-ds-emerald group-hover:bg-white group-hover:text-slate-900 text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <a href="#results" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 hover:border-slate-400 text-sm font-display font-semibold text-slate-700 transition-colors">
                <span>See Measurable Results</span>
              </a>
            </div>

            {/* Left-Aligned Architectural Proof Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-slate-900">&lt;50%</div>
                <div className="text-xs text-slate-500 mt-0.5">Infra Cost Reduction</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-slate-900">Sub-500ms</div>
                <div className="text-xs text-slate-500 mt-0.5">Real-Time Latency</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-slate-900">0%</div>
                <div className="text-xs text-slate-500 mt-0.5">Migration Downtime</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Isometric Glass Cloud & Server Infrastructure (6 Cols) */}
          <div
            ref={containerRef}
            className="lg:col-span-6 flex items-center justify-start lg:justify-end relative py-4"
          >
            {/* Ambient Emerald Backglow */}
            <div className="absolute right-10 w-80 h-80 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none"></div>

            {/* High-Detail 3D Isometric Cloud & Server Cluster SVG */}
            <svg
              ref={svgRef}
              className="w-full max-w-[520px] h-auto drop-shadow-2xl transition-transform duration-300 ease-out"
              viewBox="0 0 500 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="3D Isometric Cloud and Data Infrastructure"
            >
              <defs>
                <linearGradient id="platTop" x1="100" y1="220" x2="400" y2="360" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E2F1EC"/>
                  <stop offset="100%" stopColor="#C5E3D8"/>
                </linearGradient>
                <linearGradient id="platSideL" x1="80" y1="280" x2="250" y2="380" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2D5A62"/>
                  <stop offset="100%" stopColor="#17373D"/>
                </linearGradient>
                <linearGradient id="platSideR" x1="250" y1="380" x2="420" y2="280" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#112A2E"/>
                  <stop offset="100%" stopColor="#09191C"/>
                </linearGradient>
                <linearGradient id="cloudGlass" x1="160" y1="70" x2="340" y2="250" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.78"/>
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#0F766E" stopOpacity="0.82"/>
                </linearGradient>
                <linearGradient id="cloudDepth" x1="180" y1="60" x2="360" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1E3A40"/>
                  <stop offset="100%" stopColor="#0D2327"/>
                </linearGradient>
                <linearGradient id="serverTower" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B6978"/>
                  <stop offset="100%" stopColor="#163038"/>
                </linearGradient>
              </defs>

              {/* Decorative Floating Crosshairs */}
              <path d="M75 110V126M67 118H83" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              <path d="M420 95V111M412 103H428" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>

              {/* Base Isometric Grid Shadow */}
              <polygon points="250,395 75,300 250,205 425,300" fill="#0F172A" opacity="0.08" filter="blur(12px)"/>

              {/* Isometric Base Motherboard Platform */}
              <polygon points="250,372 85,282 250,192 415,282" fill="url(#platTop)" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4"/>
              <polygon points="85,282 250,372 250,388 85,298" fill="url(#platSideL)"/>
              <polygon points="415,282 250,372 250,388 415,298" fill="url(#platSideR)"/>

              {/* Glowing Isometric Data Conduit Lines on Platform */}
              <path d="M165 285 L220 255" stroke="#10B981" strokeWidth="2.5" className="iso-stream-line"/>
              <path d="M285 255 L345 288" stroke="#10B981" strokeWidth="2.5" className="iso-stream-line"/>
              <path d="M250 295 L205 322" stroke="#059669" strokeWidth="2" className="iso-stream-line"/>
              <path d="M265 302 L310 328" stroke="#10B981" strokeWidth="2" className="iso-stream-line"/>

              {/* Left Server Rack Stack 1 */}
              <g className="iso-float">
                <polygon points="135,235 100,254 135,273 170,254" fill="#7DD3FC"/>
                <polygon points="100,254 135,273 135,315 100,296" fill="#295264"/>
                <polygon points="170,254 135,273 135,315 170,296" fill="#15323C"/>
                <line x1="108" y1="268" x2="128" y2="279" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="108" y1="278" x2="128" y2="289" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="108" y1="288" x2="128" y2="299" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round"/>
              </g>

              {/* Back Left Server Tower 2 */}
              <g className="iso-float-delay">
                <polygon points="185,195 155,212 185,229 215,212" fill="#A7F3D0"/>
                <polygon points="155,212 185,229 185,278 155,261" fill="#234E52"/>
                <polygon points="215,212 185,229 185,278 215,261" fill="#132E32"/>
                <line x1="162" y1="226" x2="178" y2="235" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                <line x1="162" y1="236" x2="178" y2="245" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
              </g>

              {/* CENTERPIECE: 3D Translucent Isometric Glass Cloud */}
              <g className="iso-float">
                <path d="M205 198 L335 268 C362 282 385 262 385 232 C385 208 368 188 348 185 C345 142 312 112 275 125 C252 95 210 105 202 142 C182 142 172 178 205 198 Z" fill="url(#cloudDepth)" transform="translate(14, -10)"/>
                <path d="M205 198 L335 268 C362 282 385 262 385 232 C385 208 368 188 348 185 C345 142 312 112 275 125 C252 95 210 105 202 142 C182 142 172 178 205 198 Z" fill="url(#cloudGlass)" stroke="#A7F3D0" strokeWidth="2"/>
                <path d="M235 175 L265 192 L265 222" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M265 192 L305 175 L330 190" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M285 148 L285 182 L318 202" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="235" cy="175" r="4.5" fill="#FFFFFF"/>
                <circle cx="265" cy="192" r="5.5" fill="#34D399" stroke="#FFFFFF" strokeWidth="1.5"/>
                <circle cx="305" cy="175" r="4.5" fill="#FFFFFF"/>
                <circle cx="285" cy="148" r="4.5" fill="#A7F3D0"/>
                <circle cx="330" cy="190" r="4.5" fill="#FFFFFF"/>
                <circle cx="318" cy="202" r="4.5" fill="#6EE7B7"/>
              </g>

              {/* Front Database Cylinder Stack */}
              <g className="iso-float-delay">
                <ellipse cx="220" cy="312" rx="26" ry="13" fill="#16353D"/>
                <path d="M194 282 V312 C194 319 206 325 220 325 C234 325 246 319 246 312 V282 Z" fill="#285866"/>
                <ellipse cx="220" cy="282" rx="26" ry="13" fill="#93C5FD" stroke="#E0F2FE" strokeWidth="1.5"/>
                <path d="M194 292 C194 299 206 305 220 305 C234 305 246 299 246 292" stroke="#34D399" strokeWidth="2" fill="none"/>
                <path d="M194 302 C194 309 206 315 220 315 C234 315 246 309 246 302" stroke="#38BDF8" strokeWidth="2" fill="none"/>
              </g>

              {/* Front Right Server Cluster Block */}
              <g className="iso-float">
                <polygon points="315,285 280,304 315,323 350,304" fill="#6EE7B7"/>
                <polygon points="280,304 315,323 315,356 280,337" fill="#1F4850"/>
                <polygon points="350,304 315,323 315,356 350,337" fill="#102A30"/>
                <line x1="288" y1="316" x2="308" y2="327" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="288" y1="326" x2="308" y2="337" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
              </g>

              {/* Far Right Secondary Node */}
              <g>
                <polygon points="368,262 344,275 368,288 392,275" fill="#BAE6FD"/>
                <polygon points="344,275 368,288 368,318 344,305" fill="#28515E"/>
                <polygon points="392,275 368,288 368,318 392,305" fill="#142E36"/>
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
