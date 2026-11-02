'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: 1,
    title: '01. Free 1–2 Week System Mapping',
    heading: 'Discovery',
    body: 'We spend 1–2 weeks learning how your business runs. Not just your tech stack — your workflows, your team, your bottlenecks, your goals. We map everything out and document it all. This is free. No commitment. No pressure.',
  },
  {
    num: 2,
    title: '02. Written System Breakdown (Yours to Keep)',
    heading: 'You Walk Away With a Clear Picture',
    body: 'At the end of discovery, you get a full written breakdown of your systems — what\'s working, what\'s not, and where the biggest opportunities are. This is yours to keep whether you hire us or not. Most companies charge for this. We don\'t.',
  },
  {
    num: 3,
    title: '03. Transparent Blueprint, Timeline & Cost',
    heading: 'We Design the Solution Together',
    body: 'No black boxes. We lay out exactly what we\'re going to build, how long it will take, and what it will cost. You\'ll understand every decision — not just what we\'re doing, but why. Nothing starts until you\'re confident in the plan.',
  },
  {
    num: 4,
    title: '04. Zero-Disruption Senior Engineering',
    heading: 'Senior Engineers Build It — Without Disrupting Your Business',
    body: 'Our team builds your solution while your business keeps running. No downtime. No risky cutovers. We launch when it\'s ready, not when the clock runs out. You\'ll have direct access to the people doing the work — not a project manager relaying messages.',
  },
  {
    num: 5,
    title: '05. Long-Term Post-Launch Partnership',
    heading: 'We Don\'t Disappear After Launch',
    body: 'We stick around to make sure everything runs smoothly in the real world and your team is comfortable. But most clients don\'t stop there. We become the team they call when the business grows and the systems need to grow with it. That\'s why every client we\'ve worked with is still with us.',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActiveStep(idx)
          }
        })
      },
      { rootMargin: '-25% 0px -45% 0px', threshold: 0.2 }
    )

    stepRefs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">

      {/* Left-Aligned Section Heading Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 mb-14 border-b border-slate-200/80">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
            <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
            <span>How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-slate-900 block">From Where You Are Now</span>
            <span className="text-ds-emerald block mt-1">to Where You Need to Be.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Zero black-box retainers. Every engagement starts with a free 1–2 week architectural discovery where you keep the full written system blueprint.
          </p>
        </div>
      </div>

      {/* 2-Column Sticky Whiteboard + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Sticky Architecture Whiteboard */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-lg relative group">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#F4F6F4] via-[#EAECE9] to-[#DDE2DEC0] p-6 flex flex-col justify-between relative overflow-hidden">
              <svg className="w-full h-full opacity-85" viewBox="0 0 340 380" fill="none">
                <text x="20" y="32" fill="#334155" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600">SYS_DISCOVERY // WORKFLOW_MAP</text>
                <line x1="20" y1="42" x2="310" y2="42" stroke="#94A3B8" strokeWidth="1"/>

                <rect x="24" y="65" width="110" height="52" rx="6" fill="#FFFFFF" stroke="#475569" strokeWidth="1.8"/>
                <text x="38" y="88" fill="#0F172A" fontFamily="Plus Jakarta Sans" fontWeight="700" fontSize="11">Ingest Layer</text>
                <text x="38" y="104" fill="#10B981" fontFamily="JetBrains Mono" fontSize="9">400+ metrics/rec</text>

                <path d="M134 91 H195" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4"/>
                <polygon points="195,87 203,91 195,95" fill="#10B981"/>

                <rect x="205" y="65" width="110" height="52" rx="6" fill="#FFFFFF" stroke="#10B981" strokeWidth="2"/>
                <text x="218" y="88" fill="#0F172A" fontFamily="Plus Jakarta Sans" fontWeight="700" fontSize="11">Dual Cloud Core</text>
                <text x="218" y="104" fill="#64748B" fontFamily="JetBrains Mono" fontSize="9">Zero Downtime</text>

                <circle cx="170" cy="195" r="42" fill="#ECFDF5" stroke="#10B981" strokeWidth="2"/>
                <text x="170" y="192" textAnchor="middle" fill="#0F172A" fontFamily="Plus Jakarta Sans" fontWeight="800" fontSize="12">devskeen</text>
                <text x="170" y="207" textAnchor="middle" fill="#059669" fontFamily="JetBrains Mono" fontSize="9">ROOT_CAUSE_FIX</text>

                <path d="M80 117 L138 165" stroke="#64748B" strokeWidth="1.5"/>
                <path d="M260 117 L202 165" stroke="#10B981" strokeWidth="1.8"/>

                <rect x="45" y="275" width="250" height="68" rx="10" fill="#0F172A"/>
                <text x="65" y="302" fill="#34D399" fontFamily="JetBrains Mono" fontSize="10">ACTIVE PHASE DELIVERABLE:</text>
                <text x="65" y="324" fill="#FFFFFF" fontFamily="Plus Jakarta Sans" fontWeight="700" fontSize="14">
                  {STEPS[activeStep].title}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: 5-Step Vertical Timeline */}
        <div className="lg:col-span-7 relative pl-4 sm:pl-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] sm:left-[47px] top-4 bottom-8 w-[2px] bg-slate-200"></div>

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el }}
                className={`timeline-step relative flex items-start gap-6 cursor-pointer${activeStep === i ? ' active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className={`timeline-node w-8 h-8 rounded-full font-display font-bold text-xs flex items-center justify-center shrink-0 relative z-10 mt-1 border-2 ${
                  activeStep === i
                    ? 'bg-ds-emerald text-white border-ds-emerald'
                    : 'bg-white text-slate-500 border-slate-300'
                }`}>
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h3 className={`font-display text-xl sm:text-2xl font-bold ${activeStep === i ? 'text-slate-900' : 'text-slate-700'}`}>
                    {step.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
