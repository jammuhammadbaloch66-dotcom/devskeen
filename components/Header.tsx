import Logo from '@/components/Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Left: Brand + Left-Aligned Navigation */}
        <div className="flex items-center gap-12">
          <a href="#hero" className="group focus:outline-none" aria-label="devskeen Home">
            <Logo />
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
