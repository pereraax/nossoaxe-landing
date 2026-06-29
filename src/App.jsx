import TopBar from './components/layout/TopBar'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Benefits from './components/sections/Benefits'
import PorDentro from './components/sections/PorDentro'
import Problema from './components/sections/Problema'
import Solucao from './components/sections/Solucao'
import ParaQuemE from './components/sections/ParaQuemE'
import OQueVoceRecebe from './components/sections/OQueVoceRecebe'
import OQueVoceEncontra from './components/sections/OQueVoceEncontra'
import Diferenciais from './components/sections/Diferenciais'
import Testimonials from './components/sections/Testimonials'
import Guarantee from './components/sections/Guarantee'
import FAQ from './components/sections/FAQ'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/layout/Footer'
import LivePurchasePopup from './components/overlays/LivePurchasePopup'

export default function App() {
  return (
      <>
      <div className="sticky top-0 z-50 w-full min-w-0">
        <TopBar />
        <Header />
      </div>
      <main className="overflow-x-clip">
        <Hero />
        <Benefits />
        <PorDentro />
        <Problema />
        <Solucao />
        <ParaQuemE />
        <OQueVoceRecebe />
        <OQueVoceEncontra />
        <Diferenciais />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <LivePurchasePopup />
    </>
  )
}
