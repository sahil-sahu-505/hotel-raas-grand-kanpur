import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { hotelData } from '../config/hotelData'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations/translations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const navLinks = [
    { href: '/', label: t('home', language) },
    { href: '/about', label: t('about', language) },
    { href: '/rooms', label: t('rooms', language) },
    { href: '/banquet', label: t('banquet', language) },
    { href: '/restaurant', label: t('restaurant', language) },
    { href: '/gallery', label: t('gallery', language) },
    { href: '/contact', label: t('contact', language) }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-2xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-dark">Hotel Raas Grand</h1>
              <p className="text-xs text-primary font-medium">
                {language === 'en' ? 'Luxury & Tradition' : 'लक्जरी और परंपरा'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href={`tel:${hotelData.locations[0].phone}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{hotelData.locations[0].phone}</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium"
            >
              {t('bookNow', language)}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 text-gray-700 hover:text-primary font-medium ${
                  location.pathname === link.href ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-3">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <a
                href={`tel:${hotelData.locations[0].phone}`}
                className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>{hotelData.locations[0].phone}</span>
              </a>
              <Link
                to="/contact"
                className="block text-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg font-medium"
              >
                {t('bookNow', language)}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
