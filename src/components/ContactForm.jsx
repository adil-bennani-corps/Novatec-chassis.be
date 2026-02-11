import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Créer le message WhatsApp avec les informations du formulaire
    const whatsappMessage = `*Demande de Devis - Réparation Châssis*

📝 *Informations Client:*
👤 Nom: ${formData.name}
📧 Email: ${formData.email}
📞 Téléphone: ${formData.phone}
📍 Code Postal: ${formData.postalCode}

💬 *Message:*
${formData.message || 'Pas de message spécifique'}

---
Merci de me recontacter pour établir un devis.`

    // Numéro WhatsApp (format international sans espaces ni +)
    const phoneNumber = "32486390068"
    
    // Créer l'URL WhatsApp avec le message pré-rempli
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
    
    // Réinitialiser le formulaire après un court délai
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        postalCode: '',
        message: ''
      })
      
      // Réinitialiser le message après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 500)
  }

  return (
    <section id="contact" className="section-padding bg-white px-4 sm:px-6">
      <div className="container-custom">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 animate-fade-in px-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Demander Un <span className="text-gradient">Devis Gratuit</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Remplissez le formulaire ci-dessous et recevez votre devis personnalisé en moins de 30 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Colonne gauche - Image/Info responsive */}
          <div className="animate-fade-in">
            {/* Placeholder image du technicien */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white mb-6 sm:mb-8 shadow-2xl">
              <i className="fas fa-user-tie text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 opacity-50"></i>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Votre Expert Châssis</h3>
              <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
                Nos techniciens certifiés sont à votre écoute pour vous conseiller 
                et réaliser vos travaux avec professionnalisme.
              </p>
              
              {/* Points de contact */}
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="tel:+32486390068"
                  className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-base sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/70">Téléphone</div>
                    <div className="font-bold text-sm sm:text-base">+32 486 39 00 68</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@novatec-chassis.be"
                  className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-base sm:text-xl"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-white/70">Email</div>
                    <div className="font-bold text-xs sm:text-sm md:text-base break-all">info@novatec-chassis.be</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-base sm:text-xl"></i>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/70">Zone d'intervention</div>
                    <div className="font-bold text-sm sm:text-base">Bruxelles & alentours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges de réassurance responsive */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="text-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
                <i className="fas fa-shield-alt text-2xl sm:text-3xl text-green-500 mb-1 sm:mb-2"></i>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  <div>100%</div>
                  <div>Garantie Qualité</div>
                </div>
              </div>
              <div className="text-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
                <i className="fas fa-clock text-2xl sm:text-3xl text-blue-500 mb-1 sm:mb-2"></i>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Réponse &lt;30min</div>
              </div>
              <div className="text-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
                <i className="fas fa-euro-sign text-2xl sm:text-3xl text-purple-500 mb-1 sm:mb-2"></i>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Devis gratuit</div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire responsive */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Nom, Email, Téléphone responsive */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+32 ..."
                  />
                </div>
              </div>

              {/* Code postal */}
              <div>
                <label htmlFor="postalCode" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Code Postal *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="1000"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Décrivez votre projet ou votre besoin..."
                ></textarea>
              </div>

              {/* RGPD responsive */}
              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  required
                  className="mt-0.5 sm:mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary flex-shrink-0"
                />
                <label htmlFor="rgpd" className="text-xs sm:text-sm text-gray-600">
                  J'accepte que mes données soient utilisées pour me recontacter concernant ma demande. 
                  <a href="#" className="text-primary hover:underline ml-1">Politique de confidentialité</a>
                </label>
              </div>

              {/* Message de succès/erreur responsive */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base animate-fade-in">
                  <i className="fas fa-check-circle"></i>
                  <span>Merci ! Nous vous recontacterons sous 30 minutes.</span>
                </div>
              )}

              {/* Bouton submit responsive */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Envoyer Ma Demande
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
