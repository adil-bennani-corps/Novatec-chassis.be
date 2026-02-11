import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import EmergencyBanner from './components/EmergencyBanner'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import Home from './pages/Home'
import QuiSommesNous from './pages/QuiSommesNous'
import NosPrestations from './pages/NosPrestations'
import ZonesInterventions from './pages/ZonesInterventions'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Bannière d'urgence fixe */}
        <EmergencyBanner />
        
        {/* Navigation */}
        <Header isScrolled={isScrolled} />
        
        {/* Contenu principal avec routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/nos-prestations" element={<NosPrestations />} />
            <Route path="/zones-interventions" element={<ZonesInterventions />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Widget WhatsApp flottant */}
        <WhatsAppWidget />
      </div>
    </Router>
  )
}

export default App
