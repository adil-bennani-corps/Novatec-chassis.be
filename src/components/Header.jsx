import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Header = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    // Si on n'est pas sur la page d'accueil, on navigue d'abord vers l'accueil
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 100
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`sticky top-0 lg:top-12 z-40 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/images/logo-header.png" 
              alt="Novatec Châssis Bruxelles" 
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-all"
            />
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/qui-sommes-nous"
              className="nav-link text-sm font-semibold uppercase tracking-wide"
            >
              Qui Sommes Nous ?
            </Link>

            <Link 
              to="/nos-prestations"
              className="nav-link text-sm font-semibold uppercase tracking-wide"
            >
              Nos Prestations
            </Link>

            <Link 
              to="/zones-interventions"
              className="nav-link text-sm font-semibold uppercase tracking-wide"
            >
              Zones d'Interventions
            </Link>

            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-sm font-semibold uppercase tracking-wide"
            >
              Contact
            </button>
          </div>

          {/* Bouton menu mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 text-2xl"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t animate-fade-in">
          <div className="container-custom py-4 space-y-3">
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setMobileMenuOpen(false)
              }}
              className="block w-full text-left py-2 text-gray-700 font-medium"
            >
              Accueil
            </button>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700"
            >
              Nos Services
            </button>
            
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-gray-700"
            >
              FAQ
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full text-center py-3"
            >
              Devis Gratuit
            </button>
            
            <a 
              href="tel:+32486390068"
              className="block w-full text-center py-3 bg-red-600 text-white rounded-full font-bold"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              Appeler Maintenant
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
