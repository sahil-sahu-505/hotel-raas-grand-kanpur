import { useState } from 'react'
import { motion } from 'framer-motion'
import { hotelData } from '../config/hotelData'
import Lightbox from '../components/Lightbox'
import ScrollReveal from '../components/ScrollReveal'
import { Image, Bed, Users, Utensils, Building } from 'lucide-react'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Organize images by category
  const galleryImages = [
    // Rooms
    ...hotelData.roomTypes.flatMap(room => 
      room.images.map(img => ({
        url: img,
        title: room.name,
        category: 'Rooms'
      }))
    ),
    // Banquet Halls
    ...hotelData.banquetHalls.flatMap(hall => 
      hall.images.map(img => ({
        url: img,
        title: hall.name,
        category: 'Banquet'
      }))
    ),
    // Restaurant (using some banquet images as placeholder)
    {
      url: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_08.jpg',
      title: 'Fine Dining',
      category: 'Restaurant'
    },
    {
      url: 'https://htlimages.brevistay.com/4043/20260114/1.jpg',
      title: 'Hotel Exterior',
      category: 'Exterior'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Photos', icon: Image },
    { id: 'Rooms', name: 'Rooms', icon: Bed },
    { id: 'Banquet', name: 'Banquet Halls', icon: Users },
    { id: 'Restaurant', name: 'Restaurant', icon: Utensils },
    { id: 'Exterior', name: 'Exterior', icon: Building }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNavigate = (direction) => {
    if (direction === 'prev' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    } else if (direction === 'next' && currentImageIndex < filteredImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    } else if (typeof direction === 'number') {
      setCurrentImageIndex(direction)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-accent to-primary text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Explore our luxurious spaces, elegant venues, and premium amenities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {category.name}
                  </button>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-br from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs text-primary font-semibold mb-1">{image.category}</p>
                      <h3 className="text-white text-xl font-serif font-bold">{image.title}</h3>
                    </div>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Image className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No images found in this category</p>
            </div>
          )}

          {/* Image Count */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-primary">{filteredImages.length}</span> photos
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  )
}

export default GalleryPage
