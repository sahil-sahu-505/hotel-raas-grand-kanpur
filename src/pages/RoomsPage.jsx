import { Link } from 'react-router-dom'
import { Wifi, Tv, Coffee, Wind, Users, Maximize } from 'lucide-react'
import { hotelData } from '../config/hotelData'

const RoomsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://htlimages.brevistay.com/6358/20240701/1.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Luxury Rooms & Suites</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience comfort and elegance in our thoughtfully designed accommodations
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {hotelData.roomTypes.map((room, index) => (
              <div key={room.id} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Images */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {room.images.map((img, imgIndex) => (
                      <div key={imgIndex} className={`relative overflow-hidden rounded-2xl shadow-lg ${imgIndex === 0 ? 'col-span-2 h-80' : 'h-48'}`}>
                        <img
                          src={img}
                          alt={`${room.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    From {room.price}/night
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-dark mb-4">{room.name}</h2>
                  <p className="text-lg text-gray-700 mb-6">{room.description}</p>

                  {/* Room Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Maximize className="w-5 h-5 text-primary" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="font-serif font-bold text-dark mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
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
                    Book This Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Amenities */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Standard Amenities</h2>
            <p className="text-xl text-gray-600">Available in all our rooms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wind, label: "Air Conditioning" },
              { icon: Wifi, label: "Free Wi-Fi" },
              { icon: Tv, label: "LED Television" },
              { icon: Coffee, label: "Tea/Coffee Maker" }
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg mb-6">Contact us for special rates and packages</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:shadow-xl transition-all font-bold"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default RoomsPage
