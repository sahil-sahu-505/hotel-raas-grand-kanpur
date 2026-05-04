import { Phone, Mail, MapPin, Calendar, Users } from 'lucide-react'
import { hotelData } from '../config/hotelData'
import BookingWidget from '../components/BookingWidget'
import ScrollReveal from '../components/ScrollReveal'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact & Booking</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Book your stay or get in touch for inquiries
          </p>
        </div>
      </section>

      {/* Booking & Contact Section */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Widget */}
            <ScrollReveal direction="left">
              <BookingWidget roomTypes={hotelData.roomTypes} />
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <h2 className="text-3xl font-serif font-bold text-dark mb-6">Our Locations</h2>
                
                <div className="space-y-6 mb-8">
                  {hotelData.locations.map((location) => (
                    <div key={location.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-dark mb-4">Also Book Through</h2>
              <p className="text-gray-600">Available on popular booking platforms</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {hotelData.bookingPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-cream to-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl transition-all font-semibold text-gray-700 hover:text-primary transform hover:scale-105"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
