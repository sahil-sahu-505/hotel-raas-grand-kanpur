import { MapPin, Phone, Navigation, Train, Plane } from 'lucide-react'
import { hotelData } from '../config/hotelData'

const LocationPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Locations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Three premium properties across Kanpur
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {hotelData.locations.map((location) => (
              <div key={location.id} className="bg-gradient-to-br from-cream to-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Map */}
                  <div className="h-96 bg-gray-200">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${location.coordinates.lat},${location.coordinates.lng}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="grayscale hover:grayscale-0 transition-all"
                    ></iframe>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    {location.isPrimary && (
                      <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Main Property
                      </span>
                    )}
                    <h2 className="text-3xl font-serif font-bold text-dark mb-4">{location.name}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-dark">Address</p>
                          <p className="text-gray-600">{location.address}</p>
                          <p className="text-gray-600">{location.city}, {location.state} {location.pincode}</p>
                          {location.landmark && (
                            <p className="text-sm text-gray-500 mt-1">{location.landmark}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-dark">Phone</p>
                          <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                      >
                        <Navigation className="w-5 h-5" />
                        <span>Get Directions</span>
                      </a>
                      <a
                        href={`tel:${location.phone}`}
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Nearby Attractions</h2>
            <p className="text-xl text-gray-600">Explore the best of Kanpur</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelData.nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">{attraction.name}</h3>
                <p className="text-sm text-gray-600">{attraction.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">How to Reach</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <Train className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">By Train</h3>
              <p className="text-gray-700 mb-2">
                <strong>Kanpur Central Railway Station</strong>
              </p>
              <p className="text-gray-600">5 km from hotel (15 minutes drive)</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <Plane className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">By Air</h3>
              <p className="text-gray-700 mb-2">
                <strong>Lucknow Amausi Airport (LKO)</strong>
              </p>
              <p className="text-gray-600">38.4 miles (1 hour drive)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LocationPage
