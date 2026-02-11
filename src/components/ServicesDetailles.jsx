const ServicesDetailles = () => {
  const services = [
    {
      title: "Expert en Châssis PVC",
      subtitle: "Dépannage & Entretien Toutes Marques",
      icon: "fas fa-window-maximize",
      image: "/images/gpt-image-1_a_Garder_exactement_la.png",
      content: `Besoin d'un spécialiste pour vos châssis PVC à Bruxelles ? Faites confiance à nos professionnels locaux pour tous vos travaux de réparation, dépannage et maintenance. Nos experts interviennent rapidement partout dans la capitale, avec des devis toujours gratuits et transparents.

Grâce à nos véhicules parfaitement équipés, nous disposons sur place de l'ensemble du matériel et des pièces nécessaires. Cette organisation nous permet de vous apporter des solutions efficaces et économiques, directement chez vous, pour tous types de problèmes sur vos fenêtres et baies vitrées.

Qu'il s'agisse d'un mécanisme bloqué, d'une quincaillerie défaillante ou d'un réglage nécessaire, notre savoir-faire garantit une intervention professionnelle et durable.`
    },
    {
      title: "Spécialiste Châssis Bois",
      subtitle: "Réparation & Restauration sur Mesure",
      icon: "fas fa-tree",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.21.jpeg",
      content: `Nos artisans spécialisés en menuiserie bois interviennent sur l'ensemble de Bruxelles pour restaurer et réparer vos châssis en bois. Nous maîtrisons toutes les techniques de réparation adaptées à ce matériau noble et exigeant.

Lorsque vos mécanismes de fenêtres en bois montrent des signes de faiblesse, notre équipe qualifiée procède au remplacement des pièces défectueuses avec précision et rapidité. Nous travaillons avec toutes les marques et tous les styles de châssis bois, du plus classique au plus contemporain.

Notre objectif : vous permettre de retrouver le confort, la sécurité et l'esthétique d'origine de vos menuiseries en bois. Chaque intervention est réalisée avec le matériel approprié transporté dans nos véhicules d'intervention.`
    },
    {
      title: "Réparation Châssis Aluminium",
      subtitle: "Solutions Techniques Toutes Configurations",
      icon: "fas fa-industry",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.22.jpeg",
      content: `L'aluminium requiert une expertise technique spécifique que nos techniciens certifiés possèdent parfaitement. Nous intervenons sur tous systèmes de châssis aluminium présents à Bruxelles, quelle que soit leur complexité ou leur fabricant.

Nos spécialistes diagnostiquent rapidement l'origine des dysfonctionnements et procèdent au remplacement des quincailleries et mécanismes défectueux. Du châssis coulissant au système oscillo-battant, nous maîtrisons l'ensemble des technologies.

L'avantage de notre service : des véhicules équipés d'un stock complet de pièces compatibles avec toutes les marques du marché. Cela nous permet d'assurer des réparations complètes en une seule visite, pour des solutions économiques et définitives.`
    },
    {
      title: "Portes Coulissantes",
      subtitle: "Réparation Express Tous Matériaux",
      icon: "fas fa-door-open",
      image: "/images/ChatGPT Image 12 déc. 2025, 02_35_14.png",
      content: `Votre porte coulissante ne glisse plus correctement ? Nos experts en réparation de portes coulissantes PVC, aluminium et bois interviennent rapidement pour résoudre tous vos problèmes de coulissement, de fermeture ou de verrouillage.

Spécialisés dans le remplacement de chariots, galets, crémones et rails, nous disposons d'un savoir-faire unique à Bruxelles. Chaque type de porte coulissante demande une approche spécifique que nos techniciens maîtrisent parfaitement, quel que soit le fabricant ou l'année d'installation.

Nos interventions incluent le diagnostic complet, le remplacement des pièces usées, le réglage optimal et les tests de bon fonctionnement. Résultats garantis avec notre équipement professionnel embarqué.`
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
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden px-4 sm:px-6">
      {/* Formes décoratives */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* En-tête amélioré */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-green-50 border border-green-200 text-green-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <i className="fas fa-tools mr-2"></i>
            Nos Expertises
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
            Des Solutions Complètes pour <br className="hidden sm:block"/>
            <span className="text-gradient">Chaque Type de Châssis</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-4">
            Expertise locale à Bruxelles • Interventions rapides • Matériel professionnel
          </p>
        </div>

        {/* Sections détaillées avec nouveau design */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Colonne Texte avec nouveau design responsive */}
              <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  {/* Badge avec icône */}
                  <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary/10 to-green-500/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-primary to-green-500 rounded-md sm:rounded-lg flex items-center justify-center">
                      <i className={`${service.icon} text-white text-base sm:text-lg`}></i>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">{service.subtitle}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                    {service.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-sm sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                    <button 
                      onClick={scrollToContact}
                      className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold inline-flex items-center gap-2 sm:gap-3 transition-all hover:shadow-lg hover:shadow-green-500/30 text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      <i className="fas fa-comments text-base sm:text-xl"></i>
                      <span>Demander mon Devis Gratuit</span>
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-sm sm:text-base"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Colonne Image avec effets responsive */}
              <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                <div className="relative group">
                  {/* Effet de fond */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all"></div>
                  
                  {/* Image */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] border-2 sm:border-4 border-white group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bas de section redesigné */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-primary/10 to-green-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative bg-white border-2 border-gray-100 rounded-3xl p-10 md:p-14 text-center shadow-xl">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <i className="fas fa-headset text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Besoin d'une Intervention ?
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nos experts mobiles interviennent rapidement partout à Bruxelles. 
                Chaque véhicule est équipé d'un atelier complet pour des réparations immédiates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+32486390068"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-10 py-5 rounded-xl font-bold inline-flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:shadow-green-500/30"
                >
                  <i className="fas fa-phone-alt text-xl"></i>
                  <span>0486 39 00 68</span>
                </a>
                <button 
                  onClick={scrollToContact}
                  className="bg-white border-2 border-gray-200 hover:border-primary text-gray-900 hover:text-primary text-lg px-10 py-5 rounded-xl font-bold inline-flex items-center justify-center gap-3 transition-all hover:shadow-lg"
                >
                  <i className="fas fa-calendar-check text-xl"></i>
                  <span>Prendre Rendez-vous</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesDetailles
