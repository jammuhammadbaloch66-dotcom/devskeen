import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-14 border-t border-slate-100">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Top Row: Full Devskeen Brand Lockup (Icon + Name + Tagline) + LinkedIn */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-slate-200/80">
          <a href="#hero" className="group" aria-label="devskeen Home">
            <Logo
              size="lg"
              showIcon={true}
              showName={true}
              showTagline={true}
              layout="horizontal"
            />
          </a>

          <a
            href="https://linkedin.com/company/devskeen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="devskeen LinkedIn"
            className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-ds-emerald hover:text-white text-slate-600 flex items-center justify-center transition-colors font-display font-bold text-sm"
          >
            in
          </a>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 devskeen. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#contact" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Terms &amp; Conditions</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
