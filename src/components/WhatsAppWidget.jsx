import { useState } from 'react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = "+32486390068"
  const message = "Bonjour, j'aimerais obtenir des informations sur vos services de châssis."

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Bulle de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm">
            {/* En-tête */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-2xl text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Novatec Châssis</div>
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    En ligne
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Message */}
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                👋 Bonjour ! Besoin d'aide pour vos châssis ?<br/>
                Contactez-nous sur WhatsApp !
              </p>
            </div>

            {/* Bouton */}
            <button 
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Démarrer la Discussion
            </button>
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
      >
        {isOpen ? (
          <i className="fas fa-times text-2xl"></i>
        ) : (
          <>
            <i className="fab fa-whatsapp text-3xl"></i>
            {/* Badge de notification */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-bounce">
              1
            </span>
          </>
        )}
      </button>

      {/* Badge "Chattez avec nous" */}
      {!isOpen && (
        <div className="fixed bottom-6 right-24 z-40 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg animate-fade-in hidden md:block">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Chattez avec nous</span>
            <span className="text-lg">👋</span>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppWidget
