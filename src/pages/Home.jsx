import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import ReviewsCarousel from '../components/ReviewsCarousel'
import VideoGallery from '../components/VideoGallery'
import InstagramFeed from '../components/InstagramFeed'
import Virtual360Viewer from '../components/Virtual360Viewer'
import { Wifi, Car, Coffee, Utensils, Users, Clock, Star, Award, Heart, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hotelData } from '../config/hotelData'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../translations/translations'

const Home = () => {
  const { language } = useLanguage()

  const features = [
    { icon: Wifi, title: t('freeWifi', language), desc: t('freeWifiDesc', language) },
    { icon: Car, title: t('freeParking', language), desc: t('freeParkingDesc', language) },
    { icon: Utensils, title: t('restaurant', language), desc: t('restaurantDesc', language) },
    { icon: Users, title: t('banquetHalls', language), desc: t('banquetHallsDesc', language) },
    { icon: Clock, title: t('service247', language), desc: t('service247Desc', language) },
    { icon: Coffee, title: t('roomService', language), desc: t('roomServiceDesc', language) }
  ]

  const highlights = [
    { icon: Star, title: t('premiumRooms', language), desc: t('premiumRoomsDesc', language) },
    { icon: Award, title: t('grandBanquets', language), desc: t('grandBanquetsDesc', language) },
    { icon: Heart, title: t('exceptionalService', language), desc: t('exceptionalServiceDesc', language) },
    { icon: Shield, title: t('safeSecurity', language), desc: t('safeSecurityDesc', language) }
  ]

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
                  {t('welcomeTitle', language)}
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  {language === 'en' 
                    ? "Nestled in the heart of Kanpur's prestigious Civil Lines, Hotel Raas Grand stands as a beacon of luxury and tradition. For over three decades, we have been the preferred choice for discerning travelers and event planners."
                    : "कानपुर की प्रतिष्ठित सिविल लाइन्स के दिल में स्थित, होटल रास ग्रैंड लक्जरी और परंपरा का प्रतीक है। तीन दशकों से अधिक समय से, हम समझदार यात्रियों और इवेंट प्लानर्स की पसंदीदा पसंद रहे हैं।"
                  }
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {language === 'en'
                    ? "Our commitment to excellence is reflected in every aspect of our service - from our elegantly appointed rooms to our grand banquet halls that have hosted countless memorable celebrations."
                    : "उत्कृष्टता के प्रति हमारी प्रतिबद्धता हमारी सेवा के हर पहलू में परिलक्षित होती है - हमारे सुरुचिपूर्ण ढंग से सुसज्जित कमरों से लेकर हमारे भव्य बैंक्वेट हॉल तक जिन्होंने अनगिनत यादगार समारोहों की मेजबानी की है।"
                  }
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                >
                  {t('discoverStory', language)}
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://htlimages.brevistay.com/4043/20260114/1.jpg"
                  alt="Hotel Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
                {t('luxuryRooms', language)}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('luxuryRoomsDesc', language)}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.roomTypes.map((room, index) => (
              <ScrollReveal key={room.id} delay={index * 0.15}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
                      {t('from', language)} {room.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-dark mb-2">{room.name}</h3>
                    <p className="text-gray-600 mb-4">{room.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{room.capacity}</span>
                      <span>{room.size}</span>
                    </div>
                    <Link
                      to="/rooms"
                      className="block text-center bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                    >
                      {t('viewDetails', language)}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
            >
              {t('viewAllRooms', language)}
            </Link>
          </div>
        </div>
      </section>

      {/* Banquet Preview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              {t('grandBanquet', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('grandBanquetDesc', language)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hotelData.banquetHalls.slice(0, 2).map((hall) => (
              <div key={hall.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-80">
                  <img
                    src={hall.images[0]}
                    alt={hall.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold text-dark mb-3">{hall.name}</h3>
                  <p className="text-gray-600 mb-4">{hall.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    <span className="font-semibold">{t('capacity', language)}: {hall.capacity}</span>
                    <span>{t('area', language)}: {hall.area}</span>
                  </div>
                  <Link
                    to="/banquet"
                    className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
                  >
                    {t('exploreVenue', language)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
                {t('whyChoose', language)}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center p-6 rounded-2xl hover:bg-cream transition-colors">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
                {t('guestReviews', language)}
              </h2>
              <p className="text-xl text-gray-600">
                {t('guestReviewsDesc', language)}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ReviewsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery />

      {/* Virtual 360 Tour */}
      <Virtual360Viewer />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_08.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('readyToExperience', language)}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('readyToExperienceDesc', language)}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg hover:shadow-2xl transition-all font-bold text-lg"
          >
            {t('bookNow', language)}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
