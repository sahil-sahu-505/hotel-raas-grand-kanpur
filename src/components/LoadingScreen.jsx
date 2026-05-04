import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-950"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(184, 134, 11, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Hotel Logo/Name */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#B8860B] mb-2">
            RAAS
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 tracking-[0.3em] mb-8">
            GRAND KANPUR
          </p>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 md:w-80 mx-auto">
          <div className="h-1 bg-amber-900/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#B8860B] to-amber-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-amber-300 text-sm mt-3 font-light tracking-wider">
            {progress}%
          </p>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-amber-200/70 text-sm mt-8 tracking-widest"
        >
          LUXURY • HOSPITALITY • ELEGANCE
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
