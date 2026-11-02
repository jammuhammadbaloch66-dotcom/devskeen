import { ImageResponse } from 'next/og'

export const alt = 'devskeen | Scale Your Systems Without Scaling Your Costs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0D162B',
          backgroundImage:
            'radial-gradient(circle at 85% 25%, rgba(0, 132, 255, 0.25) 0%, transparent 55%), radial-gradient(circle at 95% 85%, rgba(130, 37, 235, 0.25) 0%, transparent 55%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Devskeen { < / > } Icon */}
            <svg width="68" height="42" viewBox="0 0 320 200" fill="none">
              <defs>
                <linearGradient id="ogGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0084FF" />
                  <stop offset="50%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#8225EB" />
                </linearGradient>
              </defs>
              <path
                d="M 68 28 C 52 28, 48 38, 48 54 L 48 82 C 48 94, 38 98, 28 100 C 38 102, 48 106, 48 118 L 48 146 C 48 162, 52 172, 68 172"
                stroke="url(#ogGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 252 28 C 268 28, 272 38, 272 54 L 272 82 C 272 94, 282 98, 292 100 C 282 102, 272 106, 272 118 L 272 146 C 272 162, 268 172, 252 172"
                stroke="url(#ogGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 66 100 C 95 36, 225 36, 254 100 C 225 164, 95 164, 66 100 Z"
                stroke="url(#ogGrad)"
                strokeWidth="18"
                strokeLinejoin="round"
              />
              <path d="M 134 85 L 116 100 L 134 115" stroke="url(#ogGrad)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 166 78 L 154 122" stroke="url(#ogGrad)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 186 85 L 204 100 L 186 115" stroke="url(#ogGrad)" strokeWidth="14" strokeLinecap="round" />
            </svg>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '0.04em', color: '#FFFFFF' }}>
                DEVSKEEN
              </span>
              <span style={{ fontSize: '14px', letterSpacing: '0.08em', color: '#94A3B8', marginTop: '2px' }}>
                Stay Keen • Build With DevsKeen
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 24px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 132, 255, 0.12)',
              border: '1px solid rgba(0, 132, 255, 0.35)',
              color: '#38BDF8',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            <span>Cloud &amp; Data Engineering House</span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '980px' }}>
          <h1
            style={{
              fontSize: '60px',
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Scale Your Systems Without Scaling{' '}
            <span style={{ color: '#38BDF8' }}>Your Costs.</span>
          </h1>
          <p
            style={{
              fontSize: '22px',
              lineHeight: 1.45,
              color: '#94A3B8',
              margin: 0,
            }}
          >
            We build data, AI, and cloud systems that scale — cutting bills by 50% with sub-500ms latency and zero downtime.
          </p>
        </div>

        {/* Bottom Proof Metrics */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '64px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#38BDF8' }}>&lt;50%</span>
            <span style={{ fontSize: '15px', color: '#94A3B8' }}>Infra Cost Reduction</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#818CF8' }}>Sub-500ms</span>
            <span style={{ fontSize: '15px', color: '#94A3B8' }}>Real-Time Latency</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#A855F7' }}>0%</span>
            <span style={{ fontSize: '15px', color: '#94A3B8' }}>Migration Downtime</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
