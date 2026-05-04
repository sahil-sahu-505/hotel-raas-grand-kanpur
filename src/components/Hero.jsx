import { Calendar, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hotelData } from '../config/hotelData'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://image.wedmegood.com/resized/1000X/uploads/member/782923/1572616274_01.jpg"
          alt="Hotel Raas Grand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium">Luxury Hospitality Since 1990</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {hotelData.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            {hotelData.tagline}
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Experience premium hospitality in the heart of Kanpur's Civil Lines. 
            Luxury rooms, grand banquet halls, and exceptional service await you.
          </p>

          {/* Location Badge */}
          <div className="flex items-center space-x-2 text-white mb-8">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm">Civil Lines, Kanpur | Behind Reserve Bank of India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all font-semibold text-lg group"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Book Your Stay</span>
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-dark transition-all font-semibold text-lg"
            >
              <span>Explore Rooms</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
