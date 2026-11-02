export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-14 border-t border-slate-100">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Top Row: Logo Lockup + LinkedIn */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-slate-200/80">
          <a href="#hero" className="flex items-center gap-4 group">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V26C18 27.1046 17.1046 28 16 28H8C6.89543 28 6 27.1046 6 26V6Z" fill="#0D6E52"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H27C28.1046 11 29 11.8954 29 13V30C29 31.1046 28.1046 32 27 32H17C15.8954 32 15 31.1046 15 30V13Z" fill="#34D399"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H18V28H15V13Z" fill="#10B981"/>
            </svg>
            <span className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-slate-900">devskeen</span>
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
