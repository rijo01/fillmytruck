import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/layout/Hero'
import { TickerBar } from '@/components/layout/TickerBar'
import { HowItWorks } from '@/components/layout/HowItWorks'
import { MapSection } from '@/components/map/MapSection'
import { MatchForm } from '@/components/forms/MatchForm'
import { WhySection } from '@/components/layout/WhySection'
import { CtaBand } from '@/components/layout/CtaBand'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TickerBar />
      <HowItWorks />
      <MapSection />
      <MatchForm />
      <WhySection />
      <CtaBand />
      <Footer />
    </main>
  )
}
