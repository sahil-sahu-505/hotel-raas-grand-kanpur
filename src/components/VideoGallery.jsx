import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Video } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const VideoGallery = () => {
  const { language } = useLanguage()
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: language === 'en' ? 'Hotel Tour' : 'होटल टूर',
      thumbnail: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_01.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:30',
      description: language === 'en' ? 'Complete walkthrough of our luxury hotel' : 'हमारे लक्जरी होटल का पूर्ण दौरा'
    },
    {
      id: 2,
      title: language === 'en' ? 'Grand Ballroom' : 'ग्रैंड बॉलरूम',
      thumbnail: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_08.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:45',
      description: language === 'en' ? 'Our magnificent banquet hall for weddings' : 'शादियों के लिए हमारा शानदार बैंक्वेट हॉल'
    },
    {
      id: 3,
      title: language === 'en' ? 'Luxury Rooms' : 'लक्जरी कमरे',
      thumbnail: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_02.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:15',
      description: language === 'en' ? 'Explore our premium room categories' : 'हमारे प्रीमियम रूम श्रेणियों का अन्वेषण करें'
    },
    {
      id: 4,
      title: language === 'en' ? 'Guest Testimonials' : 'अतिथि प्रशंसापत्र',
      thumbnail: 'https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_03.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:00',
      description: language === 'en' ? 'Hear from our satisfied guests' : 'हमारे संतुष्ट मेहमानों से सुनें'
    }
  ]

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              {language === 'en' ? 'Video Gallery' : 'वीडियो गैलरी'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'en' 
                ? 'Experience our hotel through immersive video tours'
                : 'इमर्सिव वीडियो टूर के माध्यम से हमारे होटल का अनुभव करें'
              }
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors">
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {video.duration}
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="mt-4">
                  <h3 className="text-2xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VideoGallery
