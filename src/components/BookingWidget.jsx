import { useState } from 'react'
import { Calendar, Users, Bed, Phone, Mail, User } from 'lucide-react'
import { motion } from 'framer-motion'

const BookingWidget = ({ roomTypes = [] }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    adults: 2,
    children: 0,
    specialRequests: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone (10 digits)'
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date required'
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date required'
    if (!formData.roomType) newErrors.roomType = 'Select room type'
    
    // Check if check-out is after check-in
    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      newErrors.checkOut = 'Check-out must be after check-in'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Calculate nights
      const checkIn = new Date(formData.checkIn)
      const checkOut = new Date(formData.checkOut)
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
      
      // Create WhatsApp message
      const message = `*New Booking Request*\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Check-in: ${formData.checkIn}\n` +
        `Check-out: ${formData.checkOut}\n` +
        `Nights: ${nights}\n` +
        `Room Type: ${formData.roomType}\n` +
        `Guests: ${formData.adults} Adults, ${formData.children} Children\n` +
        `Special Requests: ${formData.specialRequests || 'None'}`
      
      const whatsappUrl = `https://wa.me/917428822220?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const totalGuests = parseInt(formData.adults) + parseInt(formData.children)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-2xl p-8 border border-primary/20"
    >
      <h3 className="text-3xl font-serif font-bold text-dark mb-6 text-center">
        Book Your Stay
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-in Date *
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.checkIn ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Check-out Date *
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || new Date().toISOString().split('T')[0]}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                errors.checkOut ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
          </div>
        </div>

        {/* Room Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Bed className="w-4 h-4 inline mr-1" />
            Room Type *
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.roomType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select Room Type</option>
            {roomTypes.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name} - {room.price}
              </option>
            ))}
          </select>
          {errors.roomType && <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>}
        </div>

        {/* Guests */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Adults
            </label>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Children
            </label>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Any special requirements..."
          />
        </div>

        {/* Summary */}
        {formData.checkIn && formData.checkOut && (
          <div className="bg-cream p-4 rounded-lg">
            <h4 className="font-semibold text-dark mb-2">Booking Summary</h4>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Total Guests: <span className="font-semibold">{totalGuests}</span></p>
              <p>Nights: <span className="font-semibold">
                {Math.ceil((new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24))}
              </span></p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          {submitted ? '✓ Request Sent!' : 'Send Booking Request'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Required fields. You'll be redirected to WhatsApp to confirm your booking.
        </p>
      </form>
    </motion.div>
  )
}

export default BookingWidget
