import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import MarqueeBanner from '@/components/sections/MarqueeBanner'
import Stakes from '@/components/sections/Stakes'
import Results from '@/components/sections/Results'
import Philosophy from '@/components/sections/Philosophy'
import HowItWorks from '@/components/sections/HowItWorks'
import Endorsements from '@/components/sections/Endorsements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <Stakes />
        <Results />
        <Philosophy />
        <HowItWorks />
        <Endorsements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
