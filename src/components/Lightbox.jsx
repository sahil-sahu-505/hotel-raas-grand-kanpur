import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { useState } from 'react'

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate('prev')
      if (e.key === 'ArrowRight') onNavigate('next')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, onNavigate])

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 rounded-full text-white font-semibold">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Zoom Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setZoom(!zoom)
          }}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          {zoom ? <ZoomOut className="w-6 h-6 text-white" /> : <ZoomIn className="w-6 h-6 text-white" />}
        </button>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate('prev')
            }}
            className="absolute left-4 z-50 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate('next')
            }}
            className="absolute right-4 z-50 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: zoom ? 1.5 : 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className={`max-w-full max-h-[90vh] object-contain rounded-lg ${zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setZoom(!zoom)}
          />
          
          {/* Image Title */}
          {currentImage.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-serif font-bold mb-1">
                {currentImage.title}
              </h3>
              {currentImage.category && (
                <p className="text-white/70 text-sm">{currentImage.category}</p>
              )}
            </div>
          )}
        </motion.div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-white/10 rounded-full">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                onNavigate(idx)
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex ? 'border-primary scale-110' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Lightbox
