import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hotelData } from '../config/hotelData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">{hotelData.name}</h3>
                <p className="text-sm text-accent">{hotelData.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience luxury and tradition at Kanpur's premier hotel. Offering world-class accommodation, 
              grand banquet facilities, and exceptional hospitality since 1990.
            </p>
            <div className="flex space-x-4">
              <a href={hotelData.socialMedia.facebook} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={hotelData.socialMedia.instagram} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={hotelData.socialMedia.twitter} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/rooms" className="text-gray-400 hover:text-white transition">Rooms & Suites</Link></li>
              <li><Link to="/banquet" className="text-gray-400 hover:text-white transition">Banquet & Events</Link></li>
              <li><Link to="/restaurant" className="text-gray-400 hover:text-white transition">Dining</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-accent">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>{hotelData.locations[0].address}</p>
                  <p>{hotelData.locations[0].city}, {hotelData.locations[0].state} {hotelData.locations[0].pincode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${hotelData.locations[0].phone}`} className="text-gray-400 hover:text-white transition">
                  {hotelData.locations[0].phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${hotelData.locations[0].email}`} className="text-gray-400 hover:text-white transition">
                  {hotelData.locations[0].email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} {hotelData.name}. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
