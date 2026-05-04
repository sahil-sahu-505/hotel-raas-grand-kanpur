import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import RoomsPage from './pages/RoomsPage'
import BanquetPage from './pages/BanquetPage'
import RestaurantPage from './pages/RestaurantPage'
import GalleryPage from './pages/GalleryPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <div className="h-20"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/banquet" element={<BanquetPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  )
}

export default App
