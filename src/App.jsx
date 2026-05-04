import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import LoadingScreen from './components/LoadingScreen'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import RoomsPage from './pages/RoomsPage'
import BanquetPage from './pages/BanquetPage'
import RestaurantPage from './pages/RestaurantPage'
import GalleryPage from './pages/GalleryPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/rooms" element={<PageTransition><RoomsPage /></PageTransition>} />
        <Route path="/banquet" element={<PageTransition><BanquetPage /></PageTransition>} />
        <Route path="/restaurant" element={<PageTransition><RestaurantPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/location" element={<PageTransition><LocationPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="h-20"></div>
        <AnimatedRoutes />
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  )
}

export default App
