const Services = () => {
  const services = [
    {
      icon: "fas fa-window-maximize",
      title: "Réparation Châssis PVC",
      description: "Spécialisés en réparation et entretien de châssis en PVC sur Bruxelles. Remplacement de quincailleries toutes marques et tous types de châssis en PVC.",
      features: ["Quincailleries toutes marques", "Réparation rapide", "Devis gratuit 100%"],
      color: "blue",
      image: "/images/gpt-image-1_a_Garder_exactement_la.png"
    },
    {
      icon: "fas fa-wrench",
      title: "Réparation Châssis Bois",
      description: "Nous remplaçons vos quincailleries défectueuses toutes marques et tous types de châssis en bois. Retrouvez confort et sécurité dans votre habitation.",
      features: ["Toutes marques", "Entretien complet", "Remise à neuf"],
      color: "amber",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.21.jpeg"
    },
    {
      icon: "fas fa-tools",
      title: "Réparation Châssis ALU",
      description: "Nos techniciens certifiés sont spécialisés dans la réparation et l'entretien de châssis en aluminium à Bruxelles. Toutes pièces, toutes marques.",
      features: ["Techniciens certifiés", "Pièces d'origine", "Intervention rapide"],
      color: "gray",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.22.jpeg"
    },
    {
      icon: "fas fa-door-open",
      title: "Portes Coulissantes",
      description: "Expertise inégalée en réparation de portes coulissantes PVC, ALU et Bois. Remplacement de crémones, chariots et toutes quincailleries défectueuses.",
      features: ["Crémones", "Chariots", "Tous fabricants"],
      color: "green",
      image: "/images/714b9e5596ee07815dd79d4ff6ea2551.png"
    }
  ]

  const getColorClasses = (color, urgent = false) => {
    if (urgent) {
      return {
        bg: "bg-gradient-to-br from-red-500 to-orange-500",
        icon: "text-white",
        badge: "bg-yellow-400 text-red-900"
      }
    }
    
    const colors = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
      gray: { bg: "bg-gray-50", icon: "text-gray-600", badge: "bg-gray-100 text-gray-700" },
      amber: { bg: "bg-amber-50", icon: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
      green: { bg: "bg-green-50", icon: "text-green-600", badge: "bg-green-100 text-green-700" },
      teal: { bg: "bg-teal-50", icon: "text-teal-600", badge: "bg-teal-100 text-teal-700" },
      indigo: { bg: "bg-indigo-50", icon: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
      red: { bg: "bg-red-50", icon: "text-red-600", badge: "bg-red-100 text-red-700" }
    }
    
    return colors[color] || colors.blue
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tous Vos Travaux de <span className="text-gradient">Châssis à Bruxelles</span>
          </h2>
          <p className="text-lg text-gray-600">
            De l'installation à la réparation, nous couvrons tous vos besoins en châssis, 
            fenêtres, portes et accessoires. Service professionnel garanti.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color, service.urgent)
            
            return (
              <div 
                key={index}
                className={`group card hover:scale-105 ${service.urgent ? 'ring-2 ring-red-500 animate-pulse-slow' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.urgent && (
                  <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                    URGENT
                  </div>
                )}
                
                {/* Image */}
                {service.image && (
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Icône */}
                <div className={`${service.urgent ? 'bg-gradient-to-br from-red-500 to-orange-500' : colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <i className={`${service.icon} text-2xl ${service.urgent ? 'text-white' : colors.icon}`}></i>
                </div>

                {/* Titre */}
                <h3 className={`text-xl font-bold mb-3 ${service.urgent ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`${service.urgent ? 'text-white/90' : 'text-gray-600'} mb-4 leading-relaxed`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-2 text-sm ${service.urgent ? 'text-white' : 'text-gray-700'}`}>
                      <i className={`fas fa-check-circle ${service.urgent ? 'text-yellow-300' : 'text-green-500'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-2 rounded-lg font-semibold transition-all ${
                    service.urgent 
                      ? 'bg-white text-red-600 hover:bg-yellow-300 hover:text-red-700' 
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {service.urgent ? 'Appeler Maintenant' : 'Demander un Devis'}
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas ce que vous cherchez ? Contactez-nous pour un service personnalisé.
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            <i className="fas fa-comments mr-2"></i>
            Discuter de Mon Projet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
