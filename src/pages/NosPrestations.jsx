const NosPrestations = () => {
  const services = [
    {
      title: "Réparation de châssis Pvc sur Bruxelles",
      subtitle: "Remplacement de quincailleries toutes Marques",
      image: "/images/gpt-image-1_a_Garder_exactement_la.png",
      icon: "fas fa-window-maximize",
      content: [
        "Réparation de châssis Pvc sur Bruxelles, faites appel à de vrais professionnels locaux pour vos réparations, dépannage et entretien de châssis et porte coulissante sur Bruxelles.",
        "Nos techniciens interviennent partout où vous le demandez, nos devis sont rapides, gratuits et sans engagements. Nous disposons d'un stock conséquent de toutes les quincailleries nécessaires pour réparer vos châssis PVC rapidement.",
        "Afin d'assurer le bon déroulement de toutes interventions, nos véhicules sont équipés de tout le matériel nécessaire afin de trouver une solution rapide et économique à tous vos problèmes de châssis et porte coulissante partout Bruxelles.",
        "Que ce soit pour un problème de fermeture, une poignée cassée, un mécanisme défaillant ou une étanchéité défectueuse, nos experts sont formés pour diagnostiquer et réparer tous types de pannes sur vos châssis PVC."
      ],
      features: [
        "Remplacement de mécanismes de fermeture",
        "Réparation de joints d'étanchéité",
        "Changement de poignées et serrures",
        "Ajustement et réglage de châssis",
        "Remplacement de vitrages"
      ]
    },
    {
      title: "Réparation de châssis Bois sur Bruxelles",
      subtitle: "Expertise en menuiserie bois, toutes marques",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.21.jpeg",
      icon: "fas fa-tree",
      content: [
        "Spécialisés en réparation et entretien de châssis en bois sur Bruxelles, nous remplaçons vos quincailleries défectueuses toutes marques et tous types de châssis en bois.",
        "Si vos quincailleries de châssis en bois ne fonctionnent plus correctement, notre équipe se chargera de les remplacer rapidement et efficacement. Le bois nécessite une attention particulière et un savoir-faire spécifique.",
        "Nous intervenons pour tout type et toute marque de châssis en bois, afin que vous puissiez retrouver confort et sécurité dans votre habitation. Nos techniciens connaissent parfaitement les spécificités du bois et ses contraintes.",
        "Au-delà de la réparation des mécanismes, nous proposons également des services d'entretien et de traitement du bois pour prolonger la durée de vie de vos châssis et maintenir leur esthétique d'origine."
      ],
      features: [
        "Réparation de mécanismes bois spécifiques",
        "Traitement et protection du bois",
        "Remplacement de parties endommagées",
        "Restauration de châssis anciens",
        "Lasure et peinture"
      ]
    },
    {
      title: "Réparation de châssis Alu sur Bruxelles",
      subtitle: "Spécialistes de l'aluminium",
      image: "/images/WhatsApp Image 2025-11-26 at 22.20.22.jpeg",
      icon: "fas fa-square",
      content: [
        "Notre équipe de techniciens est spécialisée dans la réparation et l'entretien de châssis en aluminium à Bruxelles. Nous pouvons remplacer toutes les quincailleries défectueuses sur tous les types de châssis en aluminium, quelle que soit la marque.",
        "L'aluminium est un matériau moderne qui offre d'excellentes performances d'isolation et de durabilité. Cependant, les mécanismes peuvent s'user avec le temps et nécessiter une intervention professionnelle.",
        "Nos techniciens certifiés sont là pour tous vos besoins en réparation et entretien de châssis en aluminium sur Bruxelles. Nous pouvons remplacer toutes les pièces défectueuses quel que soit le type ou la marque de châssis.",
        "Nous travaillons avec tous les fabricants majeurs du marché et disposons d'un stock complet de pièces de rechange pour assurer une intervention rapide et efficace sans temps d'attente prolongés."
      ],
      features: [
        "Remplacement de mécanismes alu",
        "Réparation de systèmes de fermeture",
        "Ajustement de châssis oscillo-battants",
        "Changement de joints et garnitures",
        "Rénovation complète de châssis"
      ]
    },
    {
      title: "Réparation de porte coulissante sur Bruxelles",
      subtitle: "Pvc, Alu, Bois - Tous types",
      image: "/images/ChatGPT Image 12 déc. 2025, 02_35_14.png",
      icon: "fas fa-door-open",
      content: [
        "La qualité et l'expertise de nos techniciens en réparation et entretien de portes coulissantes en aluminium, PVC et bois à Bruxelles sont inégalées. Nous pouvons remplacer vos pièces défectueuses, quelle que soit leur marque ou le type de porte coulissante.",
        "Les meilleurs techniciens de Bruxelles pour la réparation et l'entretien de portes coulissantes en PVC, Alu et Bois. Nos années d'expérience nous permettent de diagnostiquer rapidement l'origine de tout dysfonctionnement.",
        "Nous pouvons remplacer les crémones, chariots et toutes les quincailleries défectueuses de tous les fabricants sur tous types de portes coulissantes en Alu, PVC ou Bois. Nos véhicules sont équipés d'un stock important de pièces de rechange.",
        "Nos techniciens interviennent partout à Bruxelles avec tout le matériel nécessaire pour une intervention rapide et efficace. Qu'il s'agisse d'un problème de roulement, de rail, de système de verrouillage ou de réglage, nous avons la solution."
      ],
      features: [
        "Remplacement de chariots et galets",
        "Réparation de crémones",
        "Ajustement de rails",
        "Changement de poignées coulissantes",
        "Réparation de systèmes de levage"
      ]
    }
  ]

  const quincailleries = [
    {
      title: "Remplacement de Pivot",
      image: "/images/pivot-chassis.jpg",
      description: "Réparation de Pivots toutes marques, entretien et remise à neuf de votre châssis à Bruxelles et partout sur la capitale. Le pivot est un élément essentiel du mécanisme d'ouverture de votre fenêtre."
    },
    {
      title: "Remplacement de Sabot",
      image: "/images/sabot-coulissant.png",
      description: "Réparation de chariots toutes marques, entretien et remise à neuf de votre porte coulissante à Bruxelles. Les sabots permettent le bon glissement de votre porte coulissante."
    },
    {
      title: "Remplacement de Poignée",
      image: "/images/poignee-chassis.png",
      description: "Réparation de poignée toutes marques, entretien et remise à neuf de votre châssis et porte coulissante à Bruxelles. Une poignée défectueuse peut compromettre la sécurité de votre habitation."
    },
    {
      title: "Remplacement de Compas",
      image: "/images/compas-tetiere.png",
      description: "Réparation de compas et têtière toutes marques, entretien et remise à neuf de votre châssis à Bruxelles. Le compas assure le maintien de votre fenêtre en position ouverte."
    },
    {
      title: "Remplacement de Crémone",
      image: "/images/cremone-chassis.png",
      description: "Réparation de crémone toutes marques, entretien et remise à neuf de votre châssis à Bruxelles. La crémone est le système de fermeture multipoints qui sécurise votre fenêtre."
    },
    {
      title: "Remplacement Crémone & Chariot",
      image: "/images/cremone-chariot-coulissant.png",
      description: "Réparation de crémone et chariots GU, entretien et remise à neuf de votre porte coulissante à Bruxelles. L'ensemble crémone-chariot assure la fermeture et le verrouillage de vos portes coulissantes."
    }
  ]

  const marques = [
    {
      name: "GU / Ferco - Aubi",
      logo: "/images/quincaillerie-gu-ferco.jpg",
      description: "Leader mondial de la quincaillerie pour fenêtres et portes. Nous disposons d'un stock complet de pièces GU pour tous types de châssis."
    },
    {
      name: "Siegenia",
      logo: "/images/quincaillerie-sigenia.jpg",
      description: "Fabricant allemand de renom spécialisé dans les systèmes de fermeture innovants. Solutions haute performance pour tous types de menuiseries."
    },
    {
      name: "Roto",
      logo: "/images/quincaillerie-roto.jpg",
      description: "Spécialiste des quincailleries pour fenêtres oscillo-battantes et systèmes de ventilation. Qualité et durabilité garanties."
    },
    {
      name: "Sobinco",
      logo: "/images/quincaillerie-sobinco.jpg",
      description: "Marque belge de référence dans la quincaillerie de bâtiment. Solutions adaptées au marché local et expertise reconnue."
    },
    {
      name: "Maco",
      logo: "/images/quincaillerie-maco.jpg",
      description: "Fabricant autrichien proposant des solutions complètes pour tous types de fenêtres et portes. Innovation et fiabilité."
    },
    {
      name: "Winkhaus",
      logo: "/images/quincaillerie-winkhaus.jpg",
      description: "Spécialiste des systèmes de fermeture et de sécurité. Technologies avancées pour une protection optimale de votre habitation."
    }
  ]

  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      window.location.href = '/#contact'
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              Nos Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nos Prestations de <span className="text-gradient">Réparation de Châssis</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Professionnels locaux pour vos réparations, dépannage et entretien de châssis sur Bruxelles. 
              Intervention rapide et devis gratuits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Colonne Texte */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'} space-y-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-primary font-semibold">{service.subtitle}</p>
                    </div>
                  </div>

                  {service.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-500"></i>
                      Nos Interventions :
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <i className="fas fa-chevron-right text-primary mt-1"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <i className="fas fa-file-invoice"></i>
                    Demander un Devis Gratuit
                  </button>
                </div>

                {/* Colonne Image */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-[500px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Quincailleries */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types de <span className="text-gradient">Quincailleries</span> que nous remplaçons
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Nos Devis sont <strong className="text-primary">100% Gratuits</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quincailleries.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="w-full h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-blue-50 text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg font-semibold transition-all text-sm flex items-center justify-center gap-2"
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

      {/* Section Marques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marques avec lesquelles <span className="text-gradient">nous travaillons</span>
            </h2>
            <p className="text-lg text-gray-600">
              Stock conséquent de quincailleries de toutes les grandes marques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marques.map((marque, index) => (
              <div 
                key={index}
                className="card group hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-white rounded-xl flex items-center justify-center mb-6 overflow-hidden shadow-sm">
                  <img 
                    src={marque.logo} 
                    alt={marque.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {marque.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {marque.description}
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-700 font-semibold text-sm text-center">
                    <i className="fas fa-check-circle mr-2"></i>
                    Devis 100% Gratuit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-green-600 via-green-500 to-green-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'une réparation de châssis sur Bruxelles ?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Nos techniciens interviennent rapidement avec tout le matériel nécessaire. 
              Devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <i className="fas fa-file-invoice"></i>
                Demander un Devis
              </button>
              <a 
                href="tel:+32486390068"
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-md font-bold text-lg transition-all inline-flex items-center justify-center gap-2 border-2 border-white"
              >
                <i className="fas fa-phone"></i>
                +32 486 39 00 68
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NosPrestations
