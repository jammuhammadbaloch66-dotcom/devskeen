interface LogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
}

export default function Logo({
  className = 'w-8 h-8',
  showText = true,
  textClassName = 'font-display font-bold text-xl tracking-tight text-slate-900',
}: LogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        className={`${className} transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Back Tall Block */}
        <path
          d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V26C18 27.1046 17.1046 28 16 28H8C6.89543 28 6 27.1046 6 26V6Z"
          fill="#0D6E52"
        />
        {/* Front Overlapping Mint Block */}
        <path
          d="M15 13C15 11.8954 15.8954 11 17 11H27C28.1046 11 29 11.8954 29 13V30C29 31.1046 28.1046 32 27 32H17C15.8954 32 15 31.1046 15 30V13Z"
          fill="#34D399"
        />
        {/* Intersection Highlight */}
        <path
          d="M15 13C15 11.8954 15.8954 11 17 11H18V28H15V13Z"
          fill="#10B981"
        />
      </svg>
      {showText && <span className={textClassName}>devskeen</span>}
    </div>
  )
}
