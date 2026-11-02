import { MessageSquare } from 'lucide-react'

const testimonials = [
  {
    quote: '"They developed highly effective solutions that dramatically improved our system performance [...] wholeheartedly recommend devskeen."',
    initials: 'KE',
    name: 'Kevin Epstein',
    title: 'CEO, E&Z Agency Inc',
    avatarBg: 'bg-slate-800',
    col: 1,
  },
  {
    quote: '"Demonstrated exceptional technical skills and leadership qualities... effectively led critical projects and provided clear technical guidance."',
    initials: 'H',
    name: 'Hamid Kalantari',
    title: 'CEO & Founder, Better App',
    avatarBg: 'bg-[#648894]',
    col: 2,
  },
  {
    quote: '"With a small core team he managed to setup a stable cloud based cost effective platform from scratch."',
    initials: 'P',
    name: 'Patrik Jonsson',
    title: 'Founding CISO',
    avatarBg: 'bg-ds-emerald',
    col: 1,
  },
  {
    quote: '"A great mix of operational understanding and great leadership skills."',
    initials: 'O',
    name: 'Olle Frodema',
    title: 'Founder',
    avatarBg: 'bg-[#0F292F]',
    col: 2,
  },
]

export default function Endorsements() {
  const col1 = testimonials.filter((t) => t.col === 1)
  const col2 = testimonials.filter((t) => t.col === 2)

  return (
    <section id="endorsements" className="py-16 lg:py-24 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Left Column: Sticky Title */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-600">
            <MessageSquare className="w-3.5 h-3.5 text-ds-emerald" />
            <span>Endorsements</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-slate-900 block">What Founders &amp;</span>
            <span className="text-slate-400 block mt-1">Executives Say</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed pt-2">
            Direct feedback from CEOs, Founders, and CISOs who trusted devskeen with mission-critical cloud and data infrastructure.
          </p>
        </div>

        {/* Right Column: Staggered 2-Column Endorsement Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {col1.map((t) => (
              <div key={t.name} className="rounded-2xl bg-[#F4F6F8] p-7 text-left border border-slate-200/60 hover:border-ds-emerald/40 hover:shadow-md transition-all flex flex-col justify-between">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/70">
                  <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-display font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (staggered offset on desktop) */}
          <div className="space-y-6 sm:mt-8">
            {col2.map((t) => (
              <div key={t.name} className="rounded-2xl bg-[#F4F6F8] p-7 text-left border border-slate-200/60 hover:border-ds-emerald/40 hover:shadow-md transition-all flex flex-col justify-between">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/70">
                  <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-display font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-500">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
