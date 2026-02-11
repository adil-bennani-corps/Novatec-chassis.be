const Benefits = () => {
  const benefits = [
    {
      icon: "fas fa-file-invoice",
      title: "Devis Rapide & Gratuit",
      description: "Obtenez votre devis détaillé gratuitement en moins de 30 minutes. Sans engagement, transparent et personnalisé."
    },
    {
      icon: "fas fa-user-shield",
      title: "Techniciens Experts",
      description: "Tous nos techniciens sont certifiés et expérimentés. Les meilleures solutions pour vos châssis PVC, ALU et Bois."
    },
    {
      icon: "fas fa-truck-fast",
      title: "Intervention en 1h",
      description: "Service d'urgence disponible 24h/24 et 7j/7. Intervention rapide sur Bruxelles et alentours en moins d'1 heure."
    },
    {
      icon: "fas fa-shield-halved",
      title: "Travaux Garantis",
      description: "Garantie sur nos travaux et réparations selon la prestation. Assurance décennale pour les installations complètes."
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden px-4 sm:px-6">
      {/* Formes décoratives en arrière-plan */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in border border-gray-100 hover:border-primary/20 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icône avec cercle et effet */}
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all"></div>
                <div className="relative inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary to-blue-600 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform shadow-lg sm:shadow-xl">
                  <i className={`${benefit.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                {benefit.description}
              </p>

              {/* Barre décorative en bas */}
              <div className="mt-4 sm:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-green-500 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
