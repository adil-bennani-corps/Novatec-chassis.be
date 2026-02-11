const Footer = () => {
  const communes = [
    "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe",
    "Bruxelles-Ville", "Etterbeek", "Evere",
    "Forest", "Ganshoren", "Ixelles",
    "Jette", "Koekelberg", "Molenbeek-Saint-Jean",
    "Saint-Gilles", "Saint-Josse-ten-Noode", "Schaerbeek",
    "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert",
    "Woluwe-Saint-Pierre"
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white px-4 sm:px-6">
      {/* Section principale */}
      <div className="container-custom py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Colonne 1 : Informations */}
          <div>
            <img 
              src="/images/logo-footer.png" 
              alt="Novatec Châssis" 
              className="h-16 sm:h-20 md:h-24 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Expert en réparation et installation de châssis PVC, ALU et Bois partout à Bruxelles.
            </p>
            
            {/* Contacts */}
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+32486390068"
                className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-sm sm:text-base"></i>
                </div>
                <span className="font-semibold text-sm sm:text-base">+32 486 39 00 68</span>
              </a>

              <a 
                href="mailto:info@novatec-chassis.be"
                className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-sm sm:text-base"></i>
                </div>
                <span className="text-xs sm:text-sm md:text-base break-all">info@novatec-chassis.be</span>
              </a>

              <div className="flex items-center gap-2 sm:gap-3 text-gray-300">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
                </div>
                <span className="text-sm sm:text-base">Bruxelles, Belgique</span>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Horaires */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Horaires de Travail</h4>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Lundi - Jeudi</span>
                <span className="font-semibold text-white">8h - 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Vendredi</span>
                <span className="font-semibold text-white">8h - 17h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span className="font-semibold text-white">9h - 15h</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="font-semibold text-red-400">Urgences uniquement</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 text-green-300 mb-2">
                <i className="fas fa-clock text-sm sm:text-base"></i>
                <span className="font-bold text-sm sm:text-base">Service d'urgence 24/7</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300">
                Dépannage urgent disponible tous les jours, toute la nuit
              </p>
            </div>
          </div>

          {/* Colonne 3 : Liens rapides */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Liens Rapides</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <i className="fas fa-chevron-right text-primary text-xs"></i>
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <i className="fas fa-chevron-right text-primary text-xs"></i>
                  Nos Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <i className="fas fa-chevron-right text-primary text-xs"></i>
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <i className="fas fa-chevron-right text-primary text-xs"></i>
                  Contact
                </button>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="mt-4 sm:mt-6">
              <h5 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Suivez-nous</h5>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 text-sm sm:text-base">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 text-sm sm:text-base">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-9 sm:w-10 h-9 sm:h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 text-sm sm:text-base">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Rappel gratuit */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Rappel Gratuit</h4>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Code Postal"
                className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                RAPPELEZ-MOI
              </button>
            </form>
          </div>
        </div>

        {/* Zones d'intervention responsive */}
        <div className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12">
          <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-center">
            Zones d'Intervention - Toutes les Communes de Bruxelles
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
            {communes.map((commune, index) => (
              <button
                key={index}
                onClick={() => scrollToSection('contact')}
                className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors text-left py-1"
              >
                <i className="fas fa-map-pin mr-1 sm:mr-2 text-primary text-xs"></i>
                {commune}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar responsive */}
      <div className="bg-black/30 py-4 sm:py-6">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <div className="text-center md:text-left">
              © 2026 Novatec Châssis Bruxelles. Tous droits réservés.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
