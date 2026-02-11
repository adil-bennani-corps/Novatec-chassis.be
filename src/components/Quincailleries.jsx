const Quincailleries = () => {
  const quincailleries = [
    {
      title: "Remplacement de Pivot toutes marques sur châssis Pvc Alu Bois Bruxelles",
      description: "Réparation de Pivots toutes marques, entretien et remise à neuf de votre châssis à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Toutes marques sur châssis Pvc Alu Bois Bruxelles",
      image: "/images/pivot-chassis.jpg"
    },
    {
      title: "Remplacement de Sabot toutes marques sur châssis Pvc Alu Bois Bruxelles",
      description: "Réparation de chariots toutes marques, entretien et remise à neuf de votre porte coulissante à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Toutes marques sur châssis Pvc Alu Bois Bruxelles",
      image: "/images/sabot-coulissant.png"
    },
    {
      title: "Remplacement de poignée toutes marques sur châssis Pvc Alu Bois Bruxelles",
      description: "Réparation de poignée toutes marques, entretien et remise à neuf de votre châssis et porte coulissante à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Toutes marques sur châssis Pvc Alu Bois Bruxelles",
      image: "/images/poignee-chassis.png"
    },
    {
      title: "Remplacement de Compas têtière toutes marques sur châssis Bruxelles",
      description: "Réparation de compas, têtière toutes marques, entretien et remise à neuf de votre châssis et porte coulissante à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Toutes marques sur châssis Bruxelles",
      image: "/images/compas-tetiere.png"
    },
    {
      title: "Remplacement de crémone toutes marques sur châssis Pvc Alu Bois Bruxelles",
      description: "Réparation de crémone toutes marques, entretien et remise à neuf de votre châssis et porte coulissante à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Toutes marques sur châssis Pvc Alu Bois Bruxelles",
      image: "/images/cremone-chassis.png"
    },
    {
      title: "Remplacement de crémone et chariot sur coulissants Pvc Alu Bois Bruxelles",
      description: "Réparation de crémone et chariots GU, entretien et remise à neuf de votre porte coulissante à Bruxelles et partout sur la capitale Nos Devis sont 100% Gratuits",
      subtitle: "Sur coulissants Pvc Alu Bois Bruxelles",
      image: "/images/cremone-chariot-coulissant.png"
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
    <section className="section-padding bg-white px-4 sm:px-6">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">
            Nos Devis sont <strong className="text-primary">100% Gratuits</strong>
          </p>
        </div>

        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Quincailleries que nous remplaçons
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-green-500 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Grille de quincailleries responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {quincailleries.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image en haut */}
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenu */}
              <div className="p-4 sm:p-6 text-center">
                {/* Titre */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  {item.description}
                </p>

                {/* Bouton */}
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-50 to-primary/5 text-primary hover:from-primary hover:to-blue-600 hover:text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <i className="fas fa-file-invoice"></i>
                  Demander un Devis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quincailleries
