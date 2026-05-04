import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X, RotateCw, ZoomIn, ZoomOut, Info } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Virtual360Viewer = () => {
  const { language } = useLanguage()
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)

  const rooms360 = [
    {
      id: 1,
      name: language === 'en' ? 'Deluxe Room' : 'डीलक्स रूम',
      image: 'https://image.wedmegood.com/resized/800X/uploads/member/782923/1572616274_02.jpg',
      description: language === 'en' 
        ? 'Spacious deluxe room with modern amenities and city view'
        : 'आधुनिक सुविधाओं और शहर के दृश्य के साथ विशाल डीलक्स रूम',
      features: [
        language === 'en' ? 'King Size Bed' : 'किंग साइज बेड',
        language === 'en' ? 'City View' : 'शहर का दृश्य',
        language === 'en' ? 'Free WiFi' : 'मुफ्त वाई-फाई',
        language === 'en' ? 'AC' : 'एसी'
      ]
    },
    {
      id: 2,
      name: language === 'en' ? 'Grand Ballroom' : 'ग्रैंड बॉलरूम',
      image: 'https://image.wedmegood.com/resized/800X/uploads/member/782923/1572616274_08.jpg',
      description: language === 'en'
        ? 'Magnificent ballroom perfect for weddings and events'
        : 'शादियों और इवेंट्स के लिए परफेक्ट शानदार बॉलरूम',
      features: [
        language === 'en' ? '200 Capacity' : '200 क्षमता',
        language === 'en' ? 'Stage Setup' : 'स्टेज सेटअप',
        language === 'en' ? 'Sound System' : 'साउंड सिस्टम',
        language === 'en' ? 'Catering' : 'कैटरिंग'
      ]
    },
    {
      id: 3,
      name: language === 'en' ? 'Suite Room' : 'सुइट रूम',
      image: 'https://image.wedmegood.com/resized/800X/uploads/member/782923/1572616274_03.jpg',
      description: language === 'en'
        ? 'Luxurious suite with separate living area'
        : 'अलग लिविंग एरिया के साथ लक्जरी सुइट',
      features: [
        language === 'en' ? 'Living Room' : 'लिविंग रूम',
        language === 'en' ? 'Jacuzzi' : 'जकूज़ी',
        language === 'en' ? 'Mini Bar' : 'मिनी बार',
        language === 'en' ? 'Balcony' : 'बालकनी'
      ]
    }
  ]

  const handleRotate = () => {
    setRotation(prev => prev + 90)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5))
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <Maximize2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              {language === 'en' ? 'Virtual 360° Tour' : 'वर्चुअल 360° टूर'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en'
                ? 'Explore our rooms and venues in immersive 360° view'
                : 'इमर्सिव 360° व्यू में हमारे कमरों और स्थलों का अन्वेषण करें'
              }
            </p>
          </motion.div>

          {/* Room Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {rooms360.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedRoom(room)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {room.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* 360 Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Maximize2 className="w-4 h-4" />
                    <span>360°</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    {language === 'en' ? 'View 360° Tour' : '360° टूर देखें'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 360 Viewer Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Controls */}
            <div className="absolute top-4 left-4 z-50 flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleRotate(); }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                title="Rotate"
              >
                <RotateCw className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* 360 Viewer */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                <motion.img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${zoom})`,
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">
                        {selectedRoom.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{selectedRoom.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoom.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Drag Hint */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/50 text-center pointer-events-none">
                  <RotateCw className="w-12 h-12 mx-auto mb-2 animate-spin-slow" />
                  <p className="text-sm">
                    {language === 'en' ? 'Use controls to explore' : 'एक्सप्लोर करने के लिए कंट्रोल का उपयोग करें'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Virtual360Viewer
