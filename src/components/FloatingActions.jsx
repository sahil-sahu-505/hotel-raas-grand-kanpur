import { useState, useEffect } from 'react'
import { Phone, MessageCircle, ChevronUp } from 'lucide-react'
import { hotelData } from '../config/hotelData'

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whatsappNumber = hotelData.locations[0].phone.replace(/[^0-9]/g, '')

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col space-y-3 z-40">
      {/* Call Button */}
      <a
        href={`tel:${hotelData.locations[0].phone}`}
        className="bg-gradient-to-r from-primary to-accent text-white w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-dark text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to book a room at Hotel Raas Grand`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-dark text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-secondary text-white w-14 h-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
          title="Scroll to Top"
        >
          <ChevronUp className="w-6 h-6" />
          <span className="absolute right-16 bg-dark text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Back to Top
          </span>
        </button>
      )}
    </div>
  )
}

export default FloatingActions
