'use client'

import { useState, useRef } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [successMsg, setSuccessMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string

    setStatus('sending')

    setTimeout(() => {
      setSuccessMsg(`Thanks ${firstName}! Your message has been received by the devskeen engineering team. We'll get back to you within 24 hours.`)
      setStatus('done')
      formRef.current?.reset()
    }, 700)
  }

  return (
    <section id="contact" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
      <div className="contact-gradient-surface rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left 5 Columns: Pitch & Discovery Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200 text-xs font-semibold text-ds-emeraldDark">
              <span className="w-2 h-2 rounded-full bg-ds-emerald"></span>
              <span>Start With Free Discovery</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-slate-900 block">Ready to</span>
              <span className="text-ds-emerald block">connect?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Drop us a message and a principal engineer will respond within 24 hours. No sales reps, no pressure — just a clear conversation about your architecture.
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-200/70">
              {[
                '1–2 week free system & workflow discovery',
                'Written architectural breakdown yours to keep',
                'Direct access to senior engineers',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-ds-emerald flex items-center justify-center text-xs font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Engineering Desk</div>
              <a href="mailto:hello@devskeen.com" className="font-display font-bold text-lg text-slate-900 hover:text-ds-emerald transition-colors">
                hello@devskeen.com
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Intake Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-semibold text-slate-700 mb-2">First Name *</label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ds-emerald focus:outline-none shadow-2xs transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-semibold text-slate-700 mb-2">Last Name *</label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ds-emerald focus:outline-none shadow-2xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="work-email" className="block text-xs font-semibold text-slate-700 mb-2">Work Email *</label>
                <input
                  id="work-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ds-emerald focus:outline-none shadow-2xs transition-colors"
                />
              </div>

              <div>
                <label htmlFor="project-message" className="block text-xs font-semibold text-slate-700 mb-2">How can we help?</label>
                <textarea
                  id="project-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your current infrastructure, bottlenecks, or upcoming roadmap..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ds-emerald focus:outline-none shadow-2xs transition-colors"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500">Response time: &lt; 24 hours</span>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'done'}
                  className="px-8 py-3.5 rounded-full bg-ds-emerald hover:bg-ds-emeraldDark text-white font-display font-semibold text-sm shadow-sm hover:shadow-emerald-500/25 hover:shadow-lg transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : status === 'done' ? 'Submitted ✓' : 'Submit Inquiry'}
                </button>
              </div>

              {status === 'done' && successMsg && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium text-left">
                  {successMsg}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
