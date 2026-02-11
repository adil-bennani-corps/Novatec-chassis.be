const Testimonials = () => {
  const testimonials = [
    {
      name: "Emmanuel P.",
      date: "05/07/2024",
      rating: 5,
      text: "Si vous cherchez des artisans de qualité, n'hésitez pas, vous êtes à la bonne adresse. Devis gratuit et travail impeccable.",
      service: "Réparation châssis PVC"
    },
    {
      name: "Sophie A.",
      date: "11/08/2024",
      rating: 5,
      text: "Remplacement de roulettes sur notre porte coulissante et remplacement d'un moteur sur notre volet roulant. Travail impeccable, merci à l'équipe !",
      service: "Porte coulissante & volets"
    },
    {
      name: "Marc D.",
      date: "23/09/2024",
      rating: 5,
      text: "Intervention rapide pour un dépannage urgent. Technicien compétent et très professionnel. Je recommande vivement !",
      service: "Dépannage urgent"
    }
  ]

  return (
    <section className="section-padding bg-white px-4 sm:px-6">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Témoignages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ce Que Disent Nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Plus de 50 clients satisfaits à Bruxelles nous font confiance pour leurs travaux de châssis.
          </p>
        </div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg group hover:shadow-2xl animate-fade-in transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icône citation */}
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <i className="fas fa-quote-left text-white text-base sm:text-xl"></i>
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm sm:text-base"></i>
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Badge service */}
              <div className="inline-block bg-blue-50 text-primary text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full mb-3 sm:mb-4">
                {testimonial.service}
              </div>

              {/* Auteur et date */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{testimonial.date}</div>
                </div>
                <i className="fas fa-check-circle text-xl sm:text-2xl text-green-500"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 pt-10 sm:pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-gray-600">Clients Satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">15 ans</div>
            <div className="text-gray-600">D'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4.8/5</div>
            <div className="text-gray-600">Note Moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">100%</div>
            <div className="text-gray-600">Garantie Qualité</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
