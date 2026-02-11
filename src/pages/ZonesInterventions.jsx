const ZonesInterventions = () => {
  const communes = [
    { 
      name: "Anderlecht", 
      codePostal: "1070",
      description: "Intervention rapide dans toute la commune d'Anderlecht"
    },
    { 
      name: "Auderghem", 
      codePostal: "1160",
      description: "Service de réparation de châssis disponible à Auderghem"
    },
    { 
      name: "Berchem-Sainte-Agathe", 
      codePostal: "1082",
      description: "Techniciens experts pour Berchem-Sainte-Agathe"
    },
    { 
      name: "Bruxelles-Ville", 
      codePostal: "1000",
      description: "Dépannage urgent au cœur de Bruxelles-Ville"
    },
    { 
      name: "Etterbeek", 
      codePostal: "1040",
      description: "Réparation de châssis PVC, ALU, Bois à Etterbeek"
    },
    { 
      name: "Evere", 
      codePostal: "1140",
      description: "Service professionnel de réparation à Evere"
    },
    { 
      name: "Forest", 
      codePostal: "1190",
      description: "Intervention en 24h à Forest"
    },
    { 
      name: "Ganshoren", 
      codePostal: "1083",
      description: "Experts en réparation de châssis à Ganshoren"
    },
    { 
      name: "Ixelles", 
      codePostal: "1050",
      description: "Dépannage rapide pour Ixelles et alentours"
    },
    { 
      name: "Jette", 
      codePostal: "1090",
      description: "Réparation de quincailleries toutes marques à Jette"
    },
    { 
      name: "Koekelberg", 
      codePostal: "1081",
      description: "Service 24/7 disponible à Koekelberg"
    },
    { 
      name: "Molenbeek-Saint-Jean", 
      codePostal: "1080",
      description: "Techniciens qualifiés pour Molenbeek-Saint-Jean"
    },
    { 
      name: "Saint-Gilles", 
      codePostal: "1060",
      description: "Intervention rapide à Saint-Gilles"
    },
    { 
      name: "Saint-Josse-ten-Noode", 
      codePostal: "1210",
      description: "Réparation de châssis à Saint-Josse-ten-Noode"
    },
    { 
      name: "Schaerbeek", 
      codePostal: "1030",
      description: "Service complet de réparation à Schaerbeek"
    },
    { 
      name: "Uccle", 
      codePostal: "1180",
      description: "Dépannage urgent disponible à Uccle"
    },
    { 
      name: "Watermael-Boitsfort", 
      codePostal: "1170",
      description: "Experts châssis à Watermael-Boitsfort"
    },
    { 
      name: "Woluwe-Saint-Lambert", 
      codePostal: "1200",
      description: "Intervention 24h à Woluwe-Saint-Lambert"
    },
    { 
      name: "Woluwe-Saint-Pierre", 
      codePostal: "1150",
      description: "Réparation professionnelle à Woluwe-Saint-Pierre"
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
      {/* Hero Section avec Image */}
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{
        backgroundImage: 'url("/images/ChatGPT%20Image%2012%20d%C3%A9c.%202025,%2001_29_00.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Nos Zones d'Intervention
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partout sur <span className="text-green-400">Bruxelles</span> et ses 19 Communes
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Intervention rapide dans toute la Région de Bruxelles-Capitale en moins de 24h
            </p>
          </div>
        </div>
      </section>

      {/* Section Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold">
                Couverture Complète
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Une <span className="text-gradient">couverture complète</span> de toute la région bruxelloise
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos techniciens interviennent dans toutes les 19 communes de Bruxelles pour tous vos besoins en réparation de châssis PVC, ALU et BOIS. Quel que soit votre localisation, nous sommes à proximité et prêts à intervenir rapidement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos véhicules équipés sillonnent quotidiennement la région bruxelloise, nous permettant de vous garantir un délai d'intervention de 24h maximum, même pour les zones les plus éloignées du centre.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">19 Communes</div>
                  <div className="text-xs text-gray-500">Couverture totale</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">24h Max</div>
                  <div className="text-xs text-gray-500">Délai d'intervention</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="/images/gpt-image-1_a_Garder_exactement_la.png" 
                alt="Intervention Bruxelles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Communes - Grille */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les <span className="text-gradient">19 Communes</span> de Bruxelles
            </h2>
            <p className="text-lg text-gray-600">
              Nos techniciens interviennent dans toutes les communes de la Région de Bruxelles-Capitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {communes.map((commune, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group cursor-pointer border-2 border-transparent hover:border-green-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <i className="fas fa-map-marker-alt text-green-500"></i>
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors">
                        {commune.name}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      Code Postal : {commune.codePostal}
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <i className="fas fa-check text-green-500 group-hover:text-white"></i>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {commune.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Délais et Urgences */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="/images/WhatsApp Image 2025-11-26 at 22.20.22.jpeg" 
                alt="Véhicule intervention"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <span className="text-gradient">Délais d'intervention</span> garantis
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons à intervenir dans les <strong>24 heures</strong> suivant votre demande pour toutes les communes de Bruxelles. Pour les urgences, notre service de dépannage est disponible <strong>24h/24 et 7j/7</strong>.
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-bolt text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Intervention Standard</h3>
                      <p className="text-sm text-gray-600">Délai : Moins de 24h</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pour toute demande de réparation standard, nous planifions une intervention dans les 24 heures sur toute la région bruxelloise.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-exclamation-triangle text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Service d'Urgence</h3>
                      <p className="text-sm text-gray-600">Disponible 24h/24 - 7j/7</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    En cas de problème urgent (châssis bloqué, sécurité compromise), notre équipe d'urgence intervient en quelques heures, même le soir, la nuit ou le week-end.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-truck text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Véhicules Équipés</h3>
                      <p className="text-sm text-gray-600">Tout le matériel à bord</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Nos véhicules sont équipés d'un stock complet de quincailleries et d'outils pour résoudre la majorité des problèmes dès la première visite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages de notre couverture */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir <span className="text-gradient">notre service</span> ?
            </h2>
            <p className="text-lg text-gray-600">
              Des avantages concrets pour tous les habitants de Bruxelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-3xl text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proximité</h3>
              <p className="text-sm text-gray-600">
                Toujours un technicien proche de chez vous dans les 19 communes
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-3xl text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rapidité</h3>
              <p className="text-sm text-gray-600">
                Intervention sous 24h garantie, urgences 24/7 disponibles
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-3xl text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Équipement</h3>
              <p className="text-sm text-gray-600">
                Véhicules équipés avec stock complet de pièces détachées
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-euro-sign text-3xl text-white"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sans Frais</h3>
              <p className="text-sm text-gray-600">
                Aucun frais de déplacement ajouté, devis 100% gratuit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-green-600 via-green-500 to-green-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous habitez dans une des 19 communes de Bruxelles ?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contactez-nous dès maintenant ! Nos techniciens interviennent rapidement dans votre commune avec tout le matériel nécessaire. Devis gratuit et sans engagement.
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

export default ZonesInterventions
