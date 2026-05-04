import { Award, Users, Heart, Star, Clock, Shield } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://htlimages.brevistay.com/4043/20260114/1.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">About Hotel Raas Grand</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A legacy of luxury and tradition in the heart of Kanpur
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Since 1990, Hotel Raas Grand has been synonymous with luxury hospitality in Kanpur. 
                Located in the prestigious Civil Lines area, we have been the preferred choice for 
                discerning travelers, business executives, and families celebrating life's special moments.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What began as a vision to create a world-class hospitality destination in Kanpur has 
                evolved into a legacy of excellence. Today, we operate three premium properties across 
                the city, each offering the perfect blend of modern luxury and traditional Indian hospitality.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to excellence is reflected in every aspect of our service - from our 
                elegantly appointed rooms to our grand banquet halls that have hosted countless 
                memorable celebrations.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_01.jpg" 
                alt="Hotel Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest as family, ensuring their comfort and satisfaction is our top priority.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in service, amenities, and guest experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark mb-4">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through reliability, transparency, and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_06.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif font-bold mb-2">30+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">3</div>
              <div className="text-lg">Premium Properties</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">50+</div>
              <div className="text-lg">Luxury Rooms</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Guests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "Trained professionals dedicated to your comfort" },
              { icon: Award, title: "Premium Quality", desc: "Luxury amenities and world-class facilities" },
              { icon: Star, title: "Prime Location", desc: "Strategic locations across Kanpur" },
              { icon: Clock, title: "24/7 Service", desc: "Round-the-clock assistance and support" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
