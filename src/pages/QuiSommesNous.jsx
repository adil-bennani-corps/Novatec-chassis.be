const QuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section avec Image de fond */}
      <section className="relative min-h-[50vh] flex items-center bg-cover bg-center" style={{
        backgroundImage: 'url("/images/ChatGPT%20Image%2012%20d%C3%A9c.%202025,%2001_29_00.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              À propos de nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              L'entreprise spécialisée en <span className="text-green-400">réparation de châssis</span> sur Bruxelles
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Experts en réparation de châssis PVC, ALU et BOIS depuis plusieurs années
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire avec Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Notre Histoire
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Une équipe passionnée au service de vos châssis
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Spécialisés en réparation de châssis à Bruxelles et alentours, notre entreprise met en œuvre tout son savoir-faire pour vous proposer les meilleures solutions pour vos menuiseries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos techniciens sont toujours disponibles pour réparer tous types de fenêtres et châssis (PVC, ALU, BOIS) afin qu'ils puissent être de nouveau opérationnels. Nous vous garantissons des interventions dans des délais très réduits et en toute urgence dans toute la région Bruxelloise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chaque intervention est réalisée avec soin et professionnalisme, en utilisant des pièces de qualité et des techniques éprouvées. Notre objectif : votre satisfaction à 100%.
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href="/#contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <i className="fas fa-file-invoice"></i>
                  Demander un Devis
                </a>
                <a 
                  href="tel:+32486390068"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <i className="fas fa-phone"></i>
                  Nous Appeler
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/gpt-image-1_a_Garder_exactement_la.png" 
                alt="Équipe Novatec"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs avec images */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-gradient">Valeurs</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ce qui nous distingue et guide notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Expertise approuvée */}
            <div className="card text-center group hover:shadow-2xl overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-blue-50 flex items-center justify-center mb-6">
                <img 
                  src="/images/WhatsApp Image 2025-11-26 at 22.20.22.jpeg" 
                  alt="Expertise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-certificate text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise Approuvée</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos techniciens sont spécialisés uniquement sur la réparation de fenêtres et châssis PVC, ALU et BOIS de tous types. Formation continue et certification garanties.
                </p>
              </div>
            </div>

            {/* Service de qualité */}
            <div className="card text-center group hover:shadow-2xl overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/10 to-green-50 flex items-center justify-center mb-6">
                <img 
                  src="/images/WhatsApp Image 2025-11-26 at 22.20.21.jpeg" 
                  alt="Qualité"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-shield-alt text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service de Qualité</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous offrons un service de qualité avec des pièces originales ou équivalentes certifiées pour vous permettre d'être rassuré sur le long terme.
                </p>
              </div>
            </div>

            {/* Tarifs abordables */}
            <div className="card text-center group hover:shadow-2xl overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-purple-50 flex items-center justify-center mb-6">
                <img 
                  src="/images/ChatGPT Image 12 déc. 2025, 02_35_14.png" 
                  alt="Prix"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-euro-sign text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tarifs Transparents</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tous les tarifs de nos prestations sont abordables et transparents. Vous évitez tout remplacement inutile de votre menuiserie grâce à nos réparations ciblées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe avec véhicule */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                src="/images/pivot-chassis.jpg" 
                alt="Véhicule équipé"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Texte */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Des techniciens <span className="text-gradient">expérimentés</span> à votre service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre équipe de techniciens qualifiés possède une expérience approfondie dans la réparation de tous types de châssis. Chaque membre de notre équipe suit régulièrement des formations pour rester à jour avec les dernières techniques et technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos véhicules sont équipés de tout le matériel nécessaire et d'un stock complet de quincailleries de toutes les grandes marques (GU, Roto, Maco, Siegenia, Winkhaus, Sobinco). Cela nous permet d'intervenir rapidement et efficacement, sans avoir besoin de commander des pièces.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Clients Satisfaits</div>
                </div>
                <div className="bg-green-500/5 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-1">24h</div>
                  <div className="text-sm text-gray-600">Délai d'intervention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Promesse - Service professionnel */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Un service de réparation <span className="text-gradient">professionnel</span> réalisé par des experts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vos châssis sont cassés ou usés, et ont besoin d'être remis en état ? Pour la réparation de vos fenêtres et châssis en PVC, en bois ou en aluminium, appelez notre réparateur disponible à Bruxelles.
            </p>
          </div>

          {/* Grille d'avantages avec images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-blue-50 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-tachometer-alt text-5xl text-primary"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Devis Rapide</h3>
              <p className="text-sm text-gray-600 text-center">Réponse en moins de 30 minutes pour toute demande</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-green-500/10 to-green-50 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-user-cog text-5xl text-green-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Techniciens Experts</h3>
              <p className="text-sm text-gray-600 text-center">Spécialistes certifiés et formés en continu</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-orange-500/10 to-orange-50 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-clock text-5xl text-orange-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Intervention en 24h</h3>
              <p className="text-sm text-gray-600 text-center">Service rapide et efficace partout sur Bruxelles</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-purple-500/10 to-purple-50 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-check-circle text-5xl text-purple-600"></i>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">Garantie Qualité</h3>
              <p className="text-sm text-gray-600 text-center">100% satisfaction client garantie</p>
            </div>
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
              Contactez-nous dès maintenant pour un devis gratuit et sans engagement. Notre équipe est prête à intervenir rapidement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <i className="fas fa-file-invoice"></i>
                Demander un Devis
              </a>
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

export default QuiSommesNous
