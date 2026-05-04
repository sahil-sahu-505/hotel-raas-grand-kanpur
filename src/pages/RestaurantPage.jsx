import { Utensils, Coffee, Clock } from 'lucide-react'

const RestaurantPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-primary text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Fine Dining Experience</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Savor exquisite flavors in an elegant ambiance
          </p>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark mb-6">Our Restaurant</h2>
              <p className="text-lg text-gray-700 mb-4">
                Experience culinary excellence at our on-site restaurant, where traditional Indian flavors 
                meet contemporary cuisine. Our expert chefs craft each dish with the finest ingredients, 
                ensuring an unforgettable dining experience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're enjoying a leisurely breakfast, business lunch, or romantic dinner, 
                our elegant dining space provides the perfect setting for every occasion.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Utensils className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">Multi-cuisine menu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">Mocha Cafe & Bar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-gray-700">In-room dining available</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800" 
                alt="Restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Dining Options</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">Restaurant</h3>
              <p className="text-gray-600 mb-4">
                Enjoy a wide selection of Indian and international cuisines in our elegant dining hall
              </p>
              <p className="text-sm text-gray-500">Open: 7:00 AM - 11:00 PM</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">Cafe & Bar</h3>
              <p className="text-gray-600 mb-4">
                Relax with premium coffee, refreshing beverages, and light snacks
              </p>
              <p className="text-sm text-gray-500">Open: 10:00 AM - 10:00 PM</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-3">Room Service</h3>
              <p className="text-gray-600 mb-4">
                Enjoy delicious meals in the comfort of your room, available 24/7
              </p>
              <p className="text-sm text-gray-500">Available: 24 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg mb-6">Experience fine dining at Hotel Raas Grand</p>
          <a
            href="tel:+917428822220"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:shadow-xl transition-all font-bold"
          >
            Call to Reserve
          </a>
        </div>
      </section>
    </div>
  )
}

export default RestaurantPage
