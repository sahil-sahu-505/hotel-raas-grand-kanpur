import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink, Heart } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const InstagramFeed = () => {
  const { language } = useLanguage()
  
  // Mock Instagram posts - In production, use Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_08.jpg',
      likes: 245,
      caption: 'Grand Ballroom setup for a beautiful wedding celebration',
      link: 'https://instagram.com/hotelraasgrand'
    },
    {
      id: 2,
      image: 'https://htlimages.brevistay.com/4043/20260114/1.jpg',
      likes: 189,
      caption: 'Welcome to Hotel Raas Grand - Your home away from home',
      link: 'https://instagram.com/hotelraasgrand'
    },
    {
      id: 3,
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_01.jpg',
      likes: 312,
      caption: 'Luxury rooms with modern amenities',
      link: 'https://instagram.com/hotelraasgrand'
    },
    {
      id: 4,
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_02.jpg',
      likes: 156,
      caption: 'Perfect venue for your special day',
      link: 'https://instagram.com/hotelraasgrand'
    },
    {
      id: 5,
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_03.jpg',
      likes: 278,
      caption: 'Elegant interiors and exceptional service',
      link: 'https://instagram.com/hotelraasgrand'
    },
    {
      id: 6,
      image: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_04.jpg',
      likes: 203,
      caption: 'Creating memories that last forever',
      link: 'https://instagram.com/hotelraasgrand'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-4">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
            {language === 'en' ? 'Follow Us on Instagram' : 'इंस्टाग्राम पर फॉलो करें'}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {language === 'en' 
              ? 'Stay updated with our latest events, offers, and celebrations'
              : 'हमारे नवीनतम इवेंट्स, ऑफर्स और समारोहों के साथ अपडेट रहें'
            }
          </p>
          <a
            href="https://instagram.com/hotelraasgrand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-xl transition-all font-semibold"
          >
            <Instagram className="w-5 h-5" />
            <span>@hotelraasgrand</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                </div>
              </div>

              {/* Instagram Icon Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5 text-pink-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/hotelraasgrand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all font-semibold"
          >
            <span>{language === 'en' ? 'View More on Instagram' : 'इंस्टाग्राम पर और देखें'}</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramFeed
