import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      date: "March 2026",
      text: "Excellent hotel with great hospitality! The rooms were spacious and clean. The banquet hall was perfect for our wedding reception. Highly recommended!",
      image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=B8860B&color=fff"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      date: "February 2026",
      text: "Amazing experience! The staff was very courteous and helpful. The food quality was outstanding. Will definitely visit again.",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=B8860B&color=fff"
    },
    {
      id: 3,
      name: "Amit Verma",
      location: "Lucknow",
      rating: 4,
      date: "January 2026",
      text: "Great location in Civil Lines. Rooms are well-maintained and comfortable. The restaurant serves delicious food. Good value for money.",
      image: "https://ui-avatars.com/api/?name=Amit+Verma&background=B8860B&color=fff"
    },
    {
      id: 4,
      name: "Sneha Patel",
      location: "Ahmedabad",
      rating: 5,
      date: "December 2025",
      text: "Hosted our corporate event here. The conference facilities were excellent. Professional staff and great service. Highly satisfied!",
      image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=B8860B&color=fff"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      date: "November 2025",
      text: "Luxury at its best! The Grand Ballroom was spectacular for our wedding. Guests were impressed with the ambiance and service.",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=B8860B&color=fff"
    }
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, reviews.length])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const goToSlide = (index) => {
    setAutoPlay(false)
    setCurrentIndex(index)
  }

  const currentReview = reviews[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote Icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg z-10">
        <Quote className="w-8 h-8 text-white" />
      </div>

      {/* Review Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < currentReview.rating
                      ? 'fill-primary text-primary'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 font-light leading-relaxed italic">
              "{currentReview.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={currentReview.image}
                alt={currentReview.name}
                className="w-16 h-16 rounded-full border-4 border-primary/20"
              />
              <div className="text-left">
                <h4 className="font-bold text-dark text-lg">{currentReview.name}</h4>
                <p className="text-gray-600 text-sm">{currentReview.location}</p>
                <p className="text-gray-400 text-xs">{currentReview.date}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-8 h-3 bg-primary rounded-full'
                : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Review Count */}
      <p className="text-center mt-4 text-gray-600">
        <span className="font-bold text-primary">{reviews.length}</span> verified reviews
      </p>
    </div>
  )
}

export default ReviewsCarousel
