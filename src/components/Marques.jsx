const Marques = () => {
  const marques = [
    {
      name: "GU / Ferco - Aubi",
      logo: "/images/quincaillerie-gu-ferco.jpg",
      title: "Remplacement de Quincaillerie GU Ferco - Aubi",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Aubi, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    },
    {
      name: "Sigenia",
      logo: "/images/quincaillerie-sigenia.jpg",
      title: "Remplacement de Quincaillerie Sigenia",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Sigenia, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    },
    {
      name: "Roto",
      logo: "/images/quincaillerie-roto.jpg",
      title: "Remplacement de Quincaillerie Roto",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Roto NT, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    },
    {
      name: "Sobinco",
      logo: "/images/quincaillerie-sobinco.jpg",
      title: "Remplacement de Quincaillerie Sobinco",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Sobinco, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    },
    {
      name: "Maco",
      logo: "/images/quincaillerie-maco.jpg",
      title: "Remplacement de Quincaillerie Maco",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Maco, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    },
    {
      name: "Winkhaus",
      logo: "/images/quincaillerie-winkhaus.jpg",
      title: "Remplacement de Quincaillerie Winkhaus",
      description: "Réparation de châssis Bruxelles se charge grâce à son stock conséquent de quincaillerie Winkhaus, de réparer et entretenir vos châssis et porte coulissante partout à Bruxelles."
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Marques Partenaires
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nos Prestations sur <span className="text-gradient">Bruxelles</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Stock conséquent de quincailleries de toutes les grandes marques
          </p>
        </div>

        {/* Grille de marques responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {marques.map((marque, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg group hover:shadow-2xl animate-fade-in transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Logo */}
              <div className="w-full h-48 sm:h-56 md:h-64 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src={marque.logo} 
                  alt={marque.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Titre */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {marque.title}
              </h3>

              {/* Sous-titre */}
              <p className="text-xs sm:text-sm text-primary font-semibold mb-3 sm:mb-4">
                Sur châssis Pvc Alu Bois Bruxelles
              </p>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {marque.description}
              </p>

              {/* Badge gratuit */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                <p className="text-green-700 font-semibold text-xs sm:text-sm text-center">
                  <i className="fas fa-check-circle mr-1 sm:mr-2"></i>
                  Devis 100% Gratuit
                </p>
              </div>

              {/* Bouton */}
              <button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary hover:from-primary hover:to-blue-600 hover:text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm shadow-sm hover:shadow-md"
              >
                Demander un Devis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marques
