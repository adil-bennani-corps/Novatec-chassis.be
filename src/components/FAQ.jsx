import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Qu'est-ce que le châssis d'une fenêtre ?",
      answer: "Le châssis est le cadre qui soutient la vitre. Il se compose de deux parties : le châssis dormant (fixé au mur) et le châssis ouvrant (la partie mobile). Il peut être en PVC, aluminium ou bois."
    },
    {
      question: "À quoi sert le châssis d'une fenêtre ?",
      answer: "Le châssis a plusieurs rôles essentiels : il permet l'ouverture et la fermeture de la fenêtre, assure l'isolation thermique et acoustique, participe à la ventilation et renforce la sécurité contre les effractions."
    },
    {
      question: "Faut-il réparer le châssis ou changer complètement la fenêtre ?",
      answer: "Cela dépend de l'état du châssis. Dans certains cas, une simple réparation suffit. Dans d'autres, un remplacement complet est nécessaire. Nos experts réalisent un diagnostic gratuit pour vous conseiller la meilleure solution."
    },
    {
      question: "Quels sont vos délais d'intervention ?",
      answer: "Pour les dépannages urgents, nous intervenons en moins d'1 heure à Bruxelles. Pour les installations et rénovations, le délai dépend de la complexité du projet. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "Quelle est la durée de votre garantie ?",
      answer: "Nous offrons une garantie de 10 ans sur tous nos travaux et installations. Cette garantie couvre les défauts de fabrication et de pose, vous assurant tranquillité d'esprit et qualité durable."
    },
    {
      question: "Intervenez-vous partout à Bruxelles ?",
      answer: "Oui, nous couvrons toutes les 19 communes de Bruxelles-Capitale : Anderlecht, Auderghem, Berchem-Sainte-Agathe, Bruxelles-Ville, Etterbeek, Evere, Forest, Ganshoren, Ixelles, Jette, Koekelberg, Molenbeek-Saint-Jean, Saint-Gilles, Saint-Josse-ten-Noode, Schaerbeek, Uccle, Watermael-Boitsfort, Woluwe-Saint-Lambert et Woluwe-Saint-Pierre."
    },
    {
      question: "Comment obtenir un devis ?",
      answer: "Remplissez simplement notre formulaire de contact en ligne ou appelez-nous au +32 486 39 00 68. Nous vous répondons sous 30 minutes avec un devis détaillé, gratuit et sans engagement."
    },
    {
      question: "Quels matériaux proposez-vous ?",
      answer: "Nous travaillons avec tous les matériaux : PVC (économique et isolant), Aluminium (moderne et résistant), et Bois (authentique et écologique). Nous vous conseillons le matériau le plus adapté à vos besoins et votre budget."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Colonne gauche - Intro */}
          <div className="lg:sticky lg:top-32 animate-fade-in">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Questions Fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Tout Savoir Sur Les <span className="text-gradient">Châssis</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Vous avez des questions ? Nous avons les réponses ! 
              Découvrez tout ce que vous devez savoir sur les châssis, fenêtres et nos services.
            </p>

            {/* Encart contact */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg bg-gradient-to-br from-primary to-blue-600 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Une autre question ?
              </h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Notre équipe est disponible 24h/24 pour répondre à toutes vos questions.
              </p>
              <a 
                href="tel:+32486390068"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-yellow-300 hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
              >
                <i className="fas fa-phone-alt"></i>
                Appelez-nous
              </a>
            </div>
          </div>

          {/* Colonne droite - FAQ */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg cursor-pointer hover:shadow-xl transition-all animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question */}
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <button 
                    className={`flex-shrink-0 w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform text-sm sm:text-base ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>

                {/* Réponse (collapse) responsive */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 mt-3 sm:mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
