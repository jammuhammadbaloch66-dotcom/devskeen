import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Left: Brand + Left-Aligned Navigation */}
        <div className="flex items-center gap-12">
          <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none" aria-label="devskeen Home">
            <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V26C18 27.1046 17.1046 28 16 28H8C6.89543 28 6 27.1046 6 26V6Z" fill="#0D6E52"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H27C28.1046 11 29 11.8954 29 13V30C29 31.1046 28.1046 32 27 32H17C15.8954 32 15 31.1046 15 30V13Z" fill="#34D399"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H18V28H15V13Z" fill="#10B981"/>
            </svg>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">devskeen</span>
          </a>

          {/* Left-Aligned Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Primary Navigation">
            <a href="#stakes" className="hover:text-ds-emerald transition-colors">Why It Matters</a>
            <a href="#results" className="hover:text-ds-emerald transition-colors">Case Studies</a>
            <a href="#philosophy" className="hover:text-ds-emerald transition-colors">Approach</a>
            <a href="#how-it-works" className="hover:text-ds-emerald transition-colors">How It Works</a>
            <a href="#endorsements" className="hover:text-ds-emerald transition-colors">Endorsements</a>
          </nav>
        </div>

        {/* Right: Status Indicator + Rounded Pill "Contact Us" Button */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-ds-emerald animate-pulse"></span>
            <span>SYS_READY // Q4 SLOTS</span>
          </div>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-ds-emerald hover:bg-ds-emeraldDark text-white font-display font-semibold text-sm shadow-sm hover:shadow-emerald-500/25 hover:shadow-lg transition-all active:scale-95">
            Contact Us
          </a>
        </div>

      </div>
    </header>
  )
}
