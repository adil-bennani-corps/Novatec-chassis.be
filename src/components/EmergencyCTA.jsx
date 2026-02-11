const EmergencyCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white relative overflow-hidden px-4 sm:px-6">
      {/* Motifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="font-bold text-sm sm:text-base md:text-lg">SERVICE D'URGENCE ACTIF</span>
          </div>

          {/* Titre */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4">
            Dépannage Urgent à Bruxelles,<br />
            <span className="text-yellow-300">Rien de Plus Simple !</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
            Besoin d'un technicien chez vous ? Nous intervenons en <strong className="text-yellow-300">moins d'1 heure</strong> partout à Bruxelles. 
            Service disponible 24h/24 et 7j/7.
          </p>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
            {/* Téléphone */}
            <a 
              href="tel:+32486390068"
              className="group flex items-center gap-3 sm:gap-4 bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:bg-yellow-300 hover:text-green-700 transition-all shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
            >
              <i className="fas fa-phone-alt text-xl sm:text-2xl group-hover:animate-pulse"></i>
              <div className="text-left">
                <div className="text-xs text-green-500 font-normal">Appelez maintenant</div>
                <div className="text-sm sm:text-base md:text-lg">+32 486 39 00 68</div>
              </div>
            </a>

            {/* Séparateur */}
            <span className="hidden sm:block text-white/50 text-xl md:text-2xl">|</span>

            {/* Devis en ligne */}
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  const offset = 100
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
                }
              }}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all shadow-lg w-full sm:w-auto"
            >
              <i className="fas fa-file-invoice mr-2"></i>
              Devis En Ligne
            </button>
          </div>

          {/* Points clés */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-xs sm:text-sm text-white/80">Service non-stop</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">&lt;1h</div>
              <div className="text-xs sm:text-sm text-white/80">Intervention rapide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300">0€</div>
              <div className="text-xs sm:text-sm text-white/80">Devis gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyCTA
