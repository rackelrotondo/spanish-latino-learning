import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Countries from '@/components/sections/Countries'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Countries />
      <CTA />
      <Footer />
    </main>
  )
}
