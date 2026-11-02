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
          backgroundColor: '#0D262B',
          backgroundImage: 'radial-gradient(circle at 85% 25%, rgba(18, 168, 122, 0.35) 0%, transparent 60%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
              <path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V26C18 27.1046 17.1046 28 16 28H8C6.89543 28 6 27.1046 6 26V6Z" fill="#0D8A63"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H27C28.1046 11 29 11.8954 29 13V30C29 31.1046 28.1046 32 27 32H17C15.8954 32 15 31.1046 15 30V13Z" fill="#34D399"/>
              <path d="M15 13C15 11.8954 15.8954 11 17 11H18V28H15V13Z" fill="#10B981"/>
            </svg>
            <span style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
              devskeen
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(18, 168, 122, 0.15)',
              border: '1px solid rgba(18, 168, 122, 0.4)',
              color: '#34D399',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            <span>Cloud &amp; Data Engineering</span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '960px' }}>
          <h1
            style={{
              fontSize: '62px',
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Scale Your Systems Without Scaling{' '}
            <span style={{ color: '#10B981' }}>Your Costs.</span>
          </h1>
          <p
            style={{
              fontSize: '24px',
              lineHeight: 1.4,
              color: '#94A3B8',
              margin: 0,
            }}
          >
            We build data and cloud systems that scale — cutting bills by 50% with sub-500ms performance and zero downtime.
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
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#34D399' }}>&lt;50%</span>
            <span style={{ fontSize: '15px', color: '#94A3B8' }}>Infra Cost Reduction</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#34D399' }}>Sub-500ms</span>
            <span style={{ fontSize: '15px', color: '#94A3B8' }}>Real-Time Latency</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#34D399' }}>0%</span>
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
