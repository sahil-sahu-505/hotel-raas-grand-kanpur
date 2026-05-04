import { useState } from 'react'
import { Calendar, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hotelData } from '../config/hotelData'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations/translations'

const Hero = () => {
  const { language } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://image.wedmegood.com/resized/1000X/uploads/member/782923/1572616274_01.jpg"
            alt="Hotel Raas Grand"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/40 animate-gradient"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse-slow" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.5) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.5) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(184, 134, 11, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>

        {/* Floating Particles Effect - Hidden on mobile */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              }}
              animate={{
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6"
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent animate-pulse" />
              <span className="text-xs md:text-sm font-medium">
                {language === 'en' ? 'Luxury Hospitality Since 1990' : 'लक्जरी आतिथ्य 1990 से'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              {hotelData.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-3 md:mb-4 font-light"
            >
              {t('heroSubtitle', language)}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl"
            >
              {language === 'en'
                ? 'Experience premium hospitality in the heart of Kanpur\'s Civil Lines. Luxury rooms, grand banquet halls, and exceptional service await you.'
                : 'कानपुर की सिविल लाइन्स के दिल में प्रीमियम आतिथ्य का अनुभव करें। लक्जरी कमरे, भव्य बैंक्वेट हॉल और असाधारण सेवा आपका इंतजार कर रही है।'
              }
            </motion.p>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-2 text-white mb-6 md:mb-8"
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent animate-bounce flex-shrink-0" />
              <span className="text-xs sm:text-sm">
                {language === 'en' 
                  ? 'Civil Lines, Kanpur | Behind Reserve Bank of India'
                  : 'सिविल लाइन्स, कानपुर | रिजर्व बैंक ऑफ इंडिया के पीछे'
                }
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all font-semibold text-base md:text-lg group"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>{language === 'en' ? 'Book Your Stay' : 'अपना प्रवास बुक करें'}</span>
              </Link>
              <Link
                to="/rooms"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-white hover:text-dark transition-all font-semibold text-base md:text-lg"
              >
                <span>{language === 'en' ? 'Explore Rooms' : 'कमरे देखें'}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden md:block absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-xs md:text-sm text-gray-300">
                {language === 'en' ? 'Years Experience' : 'वर्षों का अनुभव'}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-xs md:text-sm text-gray-300">
                {language === 'en' ? 'Luxury Rooms' : 'लक्जरी कमरे'}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-xs md:text-sm text-gray-300">
                {language === 'en' ? 'Grand Banquet Halls' : 'भव्य बैंक्वेट हॉल'}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">
                {language === 'en' ? 'Service Available' : 'सेवा उपलब्ध'}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
