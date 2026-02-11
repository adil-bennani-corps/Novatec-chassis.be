const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center bg-cover bg-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20" style={{
      backgroundImage: 'url("/images/ChatGPT%20Image%2012%20d%C3%A9c.%202025,%2001_29_00.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Overlay bleu léger */}
      <div className="absolute inset-0 bg-blue-800/60"></div>

      <div className="container-custom relative z-10 text-center text-white px-4">
        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in">
          Réparation de Châssis <span className="text-white">Pvc Alu Bois</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic mt-2 block">
            Partout sur Bruxelles
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
          Pour toutes vos demandes de réparation de châssis de fenêtre PVC, ALU et Bois,<br className="hidden sm:block" />
          nos techniciens interviennent chez vous dans un délai de 24h.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <button 
            onClick={scrollToContact}
            className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
          >
            <i className="fas fa-file-invoice mr-2"></i>
            Demander Un Devis
          </button>
          
          <a 
            href="tel:+32486390068" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
          >
            <i className="fas fa-phone mr-2"></i>
            <span className="hidden xs:inline">+32 </span>0486 39 00 68
          </a>
        </div>
      </div>

      {/* Widget flottant "Besoin d'aide" - responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 bg-blue-900 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl max-w-xs sm:max-w-sm hidden md:block animate-slide-up">
        <h3 className="font-bold text-base sm:text-lg mb-3">Besoin d'une réparation de châssis sur Bruxelles?</h3>
        <button 
          onClick={scrollToContact}
          className="bg-white text-blue-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all w-full"
        >
          DEVIS GRATUIT
        </button>
      </div>
    </section>
  )
}

export default Hero
