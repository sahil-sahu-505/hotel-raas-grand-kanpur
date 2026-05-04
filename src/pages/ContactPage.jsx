import { Phone, Mail, MapPin, Send, Calendar, Users } from 'lucide-react'
import { hotelData } from '../config/hotelData'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch for bookings, inquiries, or special requests
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-cream to-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">Send Us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="[email]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="booking-type" className="block text-sm font-semibold text-gray-700 mb-2">
                    Booking Type
                  </label>
                  <select
                    id="booking-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  >
                    <option value="">Select Type</option>
                    <option value="room">Room Booking</option>
                    <option value="banquet">Banquet/Event</option>
                    <option value="restaurant">Restaurant Reservation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="checkin" className="block text-sm font-semibold text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                {hotelData.locations.map((location) => (
                  <div key={location.id} className="bg-gradient-to-br from-cream to-white rounded-xl shadow-lg p-6">
                    <h3 className="font-serif font-bold text-dark mb-3 text-xl">{location.name}</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div className="text-gray-600">
                          <p>{location.address}</p>
                          <p>{location.city}, {location.state} {location.pincode}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <a href={`tel:${location.phone}`} className="text-primary hover:underline font-semibold">
                          {location.phone}
                        </a>
                      </div>

                      {location.email && (
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                          <a href={`mailto:${location.email}`} className="text-primary hover:underline">
                            {location.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6">
                <h3 className="font-serif font-bold mb-4 text-xl">Quick Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Check-in: {hotelData.checkIn}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Check-out: {hotelData.checkOut}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>24/7 Front Desk Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Platforms */}
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-dark mb-4">Book Through</h2>
            <p className="text-gray-600">Also available on popular booking platforms</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {hotelData.bookingPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow font-medium text-gray-700 hover:text-primary"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
