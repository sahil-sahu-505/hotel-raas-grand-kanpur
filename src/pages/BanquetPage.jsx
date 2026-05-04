import { Link } from 'react-router-dom'
import { Users, Maximize, Music, Utensils } from 'lucide-react'
import { hotelData } from '../config/hotelData'

const BanquetPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://image.wedmegood.com/resized/1000X/uploads/member/782923/1572616274_01.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Grand Banquet Facilities</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Create unforgettable memories in our magnificent event venues
          </p>
        </div>
      </section>

      {/* Banquet Halls */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {hotelData.banquetHalls.map((hall, index) => (
              <div key={hall.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Images */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {hall.images.slice(0, 3).map((img, imgIndex) => (
                        <div key={imgIndex} className={`relative overflow-hidden rounded-2xl shadow-lg ${imgIndex === 0 ? 'col-span-2 h-80' : 'h-48'}`}>
                          <img
                            src={img}
                            alt={`${hall.name} ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h2 className="text-4xl font-serif font-bold text-dark mb-4">{hall.name}</h2>
                    <p className="text-lg text-gray-700 mb-6">{hall.description}</p>

                    {/* Hall Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{hall.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Maximize className="w-5 h-5 text-primary" />
                        <span>{hall.area}</span>
                      </div>
                    </div>

                    {/* Suitable For */}
                    <div className="mb-6">
                      <h3 className="font-serif font-bold text-dark mb-3">Perfect For</h3>
                      <div className="flex flex-wrap gap-2">
                        {hall.suitableFor.map((event, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="font-serif font-bold text-dark mb-3">Amenities</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {hall.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center space-x-2 text-gray-600">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                    >
                      Book This Venue
                    </Link>
                  </div>
                </div>

                {index < hotelData.banquetHalls.length - 1 && (
                  <div className="mt-20 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Event Services</h2>
            <p className="text-xl text-gray-600">Everything you need for a perfect event</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Utensils, label: "Catering Services" },
              { icon: Music, label: "Sound & Lighting" },
              { icon: Users, label: "Event Planning" },
              { icon: Maximize, label: "Decoration Support" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="font-medium text-dark">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Plan Your Dream Event
          </h2>
          <p className="text-lg mb-6">Contact us for customized packages and venue tours</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:shadow-xl transition-all font-bold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BanquetPage
