export const hotelData = {
  name: "Hotel Raas Grand",
  tagline: "Where Luxury Meets Tradition",
  description: "Experience premium hospitality in the heart of Kanpur's Civil Lines",
  
  locations: [
    {
      id: "civil-lines",
      name: "Hotel Rass - Civil Lines",
      address: "Building No. 16/80, Mall Road, Civil Lines",
      city: "Kanpur",
      state: "Uttar Pradesh",
      pincode: "208001",
      landmark: "Behind Reserve Bank of India & SBI New Branch",
      phone: "+91 74288 22220",
      email: "info@hotelraasgrand.com",
      coordinates: { lat: 26.4499, lng: 80.3319 },
      isPrimary: true
    },
    {
      id: "raas-plaza",
      name: "Hotel Raas Plaza",
      address: "Plot No. 7, Gautam Vihar, Kalyanpur",
      city: "Kanpur",
      state: "Uttar Pradesh",
      pincode: "208017",
      phone: "+91 74288 22220",
      coordinates: { lat: 26.4850, lng: 80.2707 }
    },
    {
      id: "raas-inn",
      name: "Hotel Raas Inn",
      address: "Naramau, Gumti No. 5",
      city: "Kanpur",
      state: "Uttar Pradesh",
      phone: "+91 74288 22220",
      coordinates: { lat: 26.4499, lng: 80.3319 }
    }
  ],

  checkIn: "12:00 PM",
  checkOut: "10:00 AM - 12:00 PM",

  roomTypes: [
    {
      id: "standard",
      name: "Standard Room",
      description: "Comfortable and well-appointed rooms perfect for business travelers",
      price: "₹1,500",
      pricePerNight: 1500,
      capacity: "2 Adults",
      size: "200 sq ft",
      amenities: ["AC", "Free Wi-Fi", "TV", "Attached Bathroom", "Hot Water"],
      images: [
        "https://htlimages.brevistay.com/11420/20260202/1.jpg",
        "https://htlimages.brevistay.com/11420/20260202/2.jpg"
      ]
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Spacious rooms with modern amenities and elegant decor",
      price: "₹2,500",
      pricePerNight: 2500,
      capacity: "2-3 Adults",
      size: "300 sq ft",
      amenities: ["AC", "Free Wi-Fi", "TV", "Mini Fridge", "Tea/Coffee Maker", "Premium Toiletries"],
      images: [
        "https://htlimages.brevistay.com/6358/20240701/1.jpg",
        "https://htlimages.brevistay.com/6358/20240701/2.jpg"
      ]
    },
    {
      id: "suite",
      name: "Executive Suite",
      description: "Luxurious suites with separate living area and premium facilities",
      price: "₹4,000",
      pricePerNight: 4000,
      capacity: "3-4 Adults",
      size: "450 sq ft",
      amenities: ["AC", "Free Wi-Fi", "LED TV", "Mini Fridge", "Work Desk", "Sofa", "Premium Amenities"],
      images: [
        "https://htlimages.brevistay.com/6358/20240701/3.jpg",
        "https://htlimages.brevistay.com/6358/20240701/4.jpg"
      ]
    }
  ],

  banquetHalls: [
    {
      id: "hall-1",
      name: "Grand Ballroom",
      capacity: "200 people",
      area: "3000 sq ft",
      description: "Elegant hall with wooden panel walls and beam ceilings, perfect for weddings and large gatherings",
      suitableFor: ["Weddings", "Receptions", "Conferences", "Corporate Events"],
      amenities: ["AC", "Sound System", "Projector", "Stage", "Catering Service"],
      images: [
        "https://image.wedmegood.com/resized/1000X/uploads/member/782923/1572616274_01.jpg",
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_02.jpg",
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_03.jpg"
      ]
    },
    {
      id: "hall-2",
      name: "Crystal Hall",
      capacity: "200 people",
      area: "2800 sq ft",
      description: "Beautiful chandeliers and light wooden floors create a stunning ambiance for your special day",
      suitableFor: ["Weddings", "Social Gatherings", "Engagement Ceremonies"],
      amenities: ["AC", "Chandeliers", "Sound System", "Catering Service", "Decoration Support"],
      images: [
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_04.jpg",
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_05.jpg",
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_06.jpg"
      ]
    },
    {
      id: "suit-hall",
      name: "Business Suite",
      capacity: "30 people",
      area: "800 sq ft",
      description: "Professional meeting room with calm business interior, ideal for corporate meetings and negotiations",
      suitableFor: ["Corporate Meetings", "Conferences", "Business Negotiations", "Training Sessions"],
      amenities: ["AC", "Projector", "Whiteboard", "High-speed Wi-Fi", "Conference Table"],
      images: [
        "https://image.wedmegood.com/resized/450X/uploads/member/782923/1572616274_07.jpg"
      ]
    }
  ],

  amenities: {
    general: [
      "24-Hour Front Desk",
      "Room Service",
      "Free Parking",
      "Airport Transportation",
      "Elevator / Lift",
      "English-speaking Staff",
      "Daily Housekeeping"
    ],
    dining: [
      "On-site Restaurant",
      "In-room Dining",
      "Breakfast Service",
      "Mocha Cafe & Bar"
    ],
    business: [
      "Business Center",
      "Meeting Facilities",
      "Conference Hall",
      "High-speed Wi-Fi"
    ],
    room: [
      "Air Conditioning",
      "Free Wi-Fi",
      "Television",
      "Telephone",
      "Attached Bathroom",
      "Hot Water Geyser",
      "Tea/Coffee Maker",
      "Refrigerator",
      "Free Toiletries"
    ]
  },

  nearbyAttractions: [
    { name: "Kanpur Central Railway Station", distance: "5 km" },
    { name: "Lucknow Airport", distance: "38.4 miles" },
    { name: "Nana Rao Park", distance: "1 km" },
    { name: "Phool Bagh", distance: "1.5 km" },
    { name: "Green Park Stadium", distance: "2 km" },
    { name: "ISKCON Temple", distance: "6 miles" },
    { name: "Z Square Mall", distance: "3 km" },
    { name: "JK Temple", distance: "4 km" }
  ],

  policies: {
    checkIn: "Valid ID proof required (Passport, Aadhaar, Driving License, Voter ID)",
    couples: "Couples (18+) welcome with valid ID",
    children: "Children of any age allowed",
    cancellation: "Free cancellation 24 hours before check-in",
    payment: "Cash, Card, UPI accepted"
  },

  bookingPlatforms: [
    { name: "OYO Rooms", url: "https://www.oyorooms.com" },
    { name: "MakeMyTrip", url: "https://www.makemytrip.com" },
    { name: "Goibibo", url: "https://www.goibibo.com" },
    { name: "Agoda", url: "https://www.agoda.com" }
  ],

  socialMedia: {
    facebook: "#",
    instagram: "#",
    twitter: "#"
  }
};
