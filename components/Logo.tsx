import React from 'react'

export interface LogoProps {
  /**
   * Whether to display the { < / > } gradient icon
   * @default true
   */
  showIcon?: boolean

  /**
   * Whether to display the "DEVSKEEN" wordmark
   * @default true
   */
  showName?: boolean

  /**
   * Whether to display the "Stay Keen • Build With DevsKeen" tagline
   * @default false
   */
  showTagline?: boolean

  /**
   * Layout direction when showing multiple elements
   * @default 'horizontal'
   */
  layout?: 'horizontal' | 'vertical'

  /**
   * Size preset
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom'

  /**
   * Color theme for typography
   * @default 'light' (dark text for light backgrounds)
   */
  theme?: 'light' | 'dark'

  /**
   * Optional custom classes
   */
  className?: string
  iconClassName?: string
  nameClassName?: string
  taglineClassName?: string
}

/**
 * Pure SVG vector mark of the Devskeen { < / > } eye & brackets.
 * Completely transparent background, crisp at all scales.
 */
export function DevskeenIcon({
  className = 'w-10 h-7',
  id = 'devskeen-icon-grad',
}: {
  className?: string
  id?: string
}) {
  return (
    <svg
      className={`${className} transition-transform duration-300 group-hover:scale-105 shrink-0`}
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0084FF" />
          <stop offset="35%" stopColor="#1B6FFF" />
          <stop offset="70%" stopColor="#5B2AE5" />
          <stop offset="100%" stopColor="#8225EB" />
        </linearGradient>
      </defs>

      {/* Left Bracket { */}
      <path
        d="M 68 28
           C 52 28, 48 38, 48 54
           L 48 82
           C 48 94, 38 98, 28 100
           C 38 102, 48 106, 48 118
           L 48 146
           C 48 162, 52 172, 68 172"
        stroke={`url(#${id})`}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Bracket } */}
      <path
        d="M 252 28
           C 268 28, 272 38, 272 54
           L 272 82
           C 272 94, 282 98, 292 100
           C 282 102, 272 106, 272 118
           L 272 146
           C 272 162, 268 172, 252 172"
        stroke={`url(#${id})`}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Eye Almond Shape */}
      <path
        d="M 66 100
           C 95 36, 225 36, 254 100
           C 225 164, 95 164, 66 100 Z"
        stroke={`url(#${id})`}
        strokeWidth="16"
        strokeLinejoin="round"
      />

      {/* Center Code Tag < / > */}
      {/* < */}
      <path
        d="M 134 85 L 116 100 L 134 115"
        stroke={`url(#${id})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* / */}
      <path
        d="M 166 78 L 154 122"
        stroke={`url(#${id})`}
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* > */}
      <path
        d="M 186 85 L 204 100 L 186 115"
        stroke={`url(#${id})`}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Modular Devskeen Brand Logo
 * Combines Icon, Name, and Tagline with flexible layouts and sizing.
 */
export default function Logo({
  showIcon = true,
  showName = true,
  showTagline = false,
  layout = 'horizontal',
  size = 'md',
  theme = 'light',
  className = '',
  iconClassName = '',
  nameClassName = '',
  taglineClassName = '',
}: LogoProps) {
  // Sizing presets
  const sizeMap = {
    sm: {
      icon: 'w-7 h-5',
      name: 'text-lg tracking-wider',
      tagline: 'text-[10px]',
      gap: 'gap-2',
    },
    md: {
      icon: 'w-10 h-7',
      name: 'text-2xl tracking-wider',
      tagline: 'text-xs',
      gap: 'gap-3',
    },
    lg: {
      icon: 'w-16 h-11',
      name: 'text-3xl sm:text-4xl tracking-wider',
      tagline: 'text-sm',
      gap: 'gap-3.5',
    },
    xl: {
      icon: 'w-24 h-16',
      name: 'text-4xl sm:text-5xl tracking-widest',
      tagline: 'text-base',
      gap: 'gap-4',
    },
    custom: {
      icon: '',
      name: '',
      tagline: '',
      gap: '',
    },
  }[size]

  const nameColor =
    theme === 'dark' ? 'text-white' : 'text-[#121845]'
  const taglineColor =
    theme === 'dark' ? 'text-slate-400' : 'text-[#2B3454]'

  const isVertical = layout === 'vertical'

  return (
    <div
      className={`inline-flex ${
        isVertical
          ? 'flex-col items-center text-center'
          : 'items-center'
      } ${sizeMap.gap} ${className}`}
    >
      {showIcon && (
        <DevskeenIcon
          className={`${sizeMap.icon} ${iconClassName}`}
          id={`devskeen-icon-${size}-${theme}`}
        />
      )}

      {(showName || showTagline) && (
        <div
          className={`flex flex-col ${
            isVertical ? 'items-center' : 'items-start'
          } leading-none`}
        >
          {showName && (
            <span
              className={`font-display font-extrabold uppercase ${nameColor} ${sizeMap.name} ${nameClassName}`}
            >
              DEVSKEEN
            </span>
          )}

          {showTagline && (
            <span
              className={`font-body font-medium tracking-wide ${taglineColor} mt-1 ${sizeMap.tagline} ${taglineClassName}`}
            >
              Stay Keen • Build With DevsKeen
            </span>
          )}
        </div>
      )}
    </div>
  )
}
