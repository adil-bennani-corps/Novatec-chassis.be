const EmergencyBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-2 sm:py-3 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container-custom px-4">
        {/* Version Mobile/Tablet */}
        <div className="flex lg:hidden items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-xs sm:text-sm font-bold">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <i className="fas fa-exclamation-triangle"></i>
            URGENCE 24/7
          </span>
          <a 
            href="tel:+32486390068" 
            className="bg-white text-green-600 px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-2"
          >
            <i className="fas fa-phone-alt"></i>
            <span className="hidden xs:inline">0486 39 00 68</span>
            <span className="xs:hidden">Appeler</span>
          </a>
        </div>

        {/* Version Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-4">
          {/* Point clignotant */}
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          
          {/* Message d'urgence */}
          <span className="font-bold text-sm xl:text-base flex items-center gap-2">
            <i className="fas fa-exclamation-triangle"></i>
            DÉPANNAGE URGENT 24H/24
          </span>
          
          {/* Séparateur */}
          <span className="text-white/70">|</span>
          
          {/* Délai d'intervention */}
          <span className="text-sm xl:text-base">
            Intervention en <strong className="text-yellow-300">1 heure</strong> à Bruxelles & alentours
          </span>
          
          {/* Bouton d'appel */}
          <a 
            href="tel:+32486390068" 
            className="bg-white text-green-600 px-4 xl:px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2 hover:scale-105 shadow-lg"
          >
            <i className="fas fa-phone-alt animate-pulse"></i>
            +32 486 39 00 68
          </a>
        </div>
      </div>
    </div>
  )
}

export default EmergencyBanner
